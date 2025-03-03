import TableFields from "Components/TableComponents/TableFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import {
  ACTIONS,
  CONSTANT_COLUMNS_NAME,
  CONTRACTS_ASSETS_TYPE,
} from "Helpers/constants";
import useFormSteps from "Hooks/useFormSteps";
import { lazy, Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import GET_UPDATE_DATE, {
  getContractUpdate,
} from "Helpers/Lib/global-read-update";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";

import {
  CONTRACT_STATUS,
  autoMergePatternSettingsWithValues, contractValidation,
  fetchAndMergeAssetInfo,
  fetchAndMergeBuildingInfo,
  fetchContractRestData,
  // filterAssetsByBuilding,
  getOldContracts,
  mergeInstallmentAndFirstTabData,
  onChangeContractStatus,
  onWatchChangesInTab1,
  onWatchChangesInstallmentGridTab,
  onWatchChangesInstallmentTab,
  onWatchChangesTerminationTab
} from "Helpers/Lib/contract-helpers";

import {
  deleteEntry,
  generateEntryFromContract,
} from "Helpers/Lib/vouchers-insert";

import { useQuery } from "@tanstack/react-query";
import useCurd from "Hooks/useCurd";
import useFormPagination from "Hooks/useFormPagination";
import Btn from "Components/Global/Btn";
import { CheckboxField, NormalSelect } from "Components/StructurePage/CustomFields";
import { ViewEntry } from "Components/Global/ViewEntry";
import FormLayout from "../FormWrapperLayout/FormLayout";
import { SearchContract } from "./SearchContract";
import { CREATED_FROM_CONTRACT, CREATED_FROM_CONTRACT_FEES } from "Helpers/GENERATE_STARTING_DATA";
import CONTRACT_CURD_FUNCTIONS from "Helpers/Lib/contract.api";

const InstallmentForm = lazy(() => import("./InstallmentForm"));
const ContractTerminationForm = lazy(() => import("./ContractTerminationForm"));
const ContractPayments = lazy(() => import("Components/StructurePage/Forms/ContractForm/ContractPayments"));
const ContractFinancialForm = lazy(() => import("./ContractFinancialForm"));

const CACHE_BUILDING_ASSETS = {};

export async function filterAssetsByBuilding(
  buildingId,
  tableName,
  CACHE_LIST,
  setCACHE_LIST,
  contracts
) {
  let assetsHash = contracts.map((c) => c?.[`${tableName}_id`]);

  let copy = CACHE_LIST?.[`${tableName}_2`]
    ? [...CACHE_LIST?.[`${tableName}_2`]]
    : [...CACHE_LIST?.[tableName]];

  let assets = [];
  let hashKey = `${buildingId}-${contracts?.length}`;

  if (CACHE_BUILDING_ASSETS[hashKey]) assets = CACHE_BUILDING_ASSETS[hashKey];
  else {
    assets = copy?.filter(
      (c) => c?.building_id === buildingId && !assetsHash?.includes(c?.id)
    );
    CACHE_BUILDING_ASSETS[hashKey] = assets;
  }

  setCACHE_LIST((prev) => ({
    ...prev,
    [tableName]: assets,
    [`${tableName}_2`]: copy,
  }));
}

const ContractForm = ({ number, onClose }) => {
  const name = 'contract';
  const params = useParams();
  const [searchQuery] = useSearchParams();
  const type = params?.type;
  const code = searchQuery.get("code");
  const assetType = searchQuery.get("flat_type")?.toLowerCase();
  const contractName = `${assetType}_${type}_contract`;
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [openInstallmentForm, setOpenInstallmentForm] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const { dispatchVoucherEntries } = useVoucherEntriesView();
  const [oldContracts, setOldContracts] = useState([]);
  const { getOneBy, remove } = useCurd();
  let date = new Date();

  const methods = useForm({
    defaultValues: {
      contract: {
        paid_type: 1,
        start_duration_date: new Date(),
        issue_date: new Date(),
        // should update
        end_duration_date: new Date(date.setFullYear(date.getFullYear() + 1)),
        contract_duration: 3,
      },
    }
  });
  const {
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    setValue,
    reset,
  } = methods;
  const formPagination = useFormPagination({ name: "contract", number, code, reset });
  const contractId = formPagination?.currentId;

  const {
    currentIndex,
    tab,
    goTo,
    formSettings,
    steps,
    fields,
    tabNames,
    CACHE_LIST,
    setCACHE_LIST,
    setFields,
    forms,
    setCurrentIndex,
    fieldsHash
  } = useFormSteps({ name: contractName });


  // Fetch and merge pattern
  useQuery({
    queryKey: ["contract_pattern", code],
    queryFn: async () => {
      const response = await getOneBy("contract_pattern", +code, "code");
      let pattern = response?.result?.at(0);
      setPATTERN_SETTINGS(pattern);
      autoMergePatternSettingsWithValues(pattern, watch, setValue, tabNames);
    },
  });

  // fetch Old Contract
  useQuery({
    queryKey: ["old_contracts"],
    queryFn: () => getOldContracts(setOldContracts),
  });

  // Fetch Last contract number
  // useQuery({
  //   queryKey: ["contract", code],
  //   queryFn: async () => {
  //     const lastNumber = await getLastNumberByColumn("contract", "code", +code);

  //     if (!watch("contract.number")) {
  //       setValue(`contract.number`, +lastNumber + 1);
  //     }
  //   },
  // });

  const contractQueryClient = useQuery({
    queryKey: ["contract", code, contractId],
    queryFn: async () => {
      const response = await getOneBy("contract", contractId);

      if (response?.result?.length) {
        const res = await getContractUpdate(contractId);
        let data = { ...res, contract: response?.result?.at(0) };

        reset(data);
        return data;
      }
    },
  });

  // Fetch Rest contract data
  useQuery({
    queryKey: ["contract", currentIndex, tab, contractId],
    queryFn: () => {
      if (currentIndex > 2 && watch("contract.id")) {
        fetchContractRestData(currentIndex, tabNames, watch, setValue);
      }
      return;
    },
  });

  useEffect(() => {
    if (currentIndex !== 0 || !PATTERN_SETTINGS?.id) return;
    let newFields = [];
    for (const field of forms?.[steps?.[0]]?.fields) {
      if (
        field?.name === "current_securing_value" &&
        PATTERN_SETTINGS?.insurance_required
      ) {

        field.required = true;
      }
      if (
        field?.name === "insurance_account_id" &&
        PATTERN_SETTINGS?.insurance_required
      ) {
        field.required = true;
      }
      if (
        (field?.name === "vat_account_id" || field?.name === 'vat_value' || field?.name === 'vat_rate') &&
        PATTERN_SETTINGS?.vat_required
      ) {
        field.required = true;
      }
      newFields.push(field);
    }

    setFields(newFields);
    setShouldRefresh((p) => !p);
  }, [PATTERN_SETTINGS, currentIndex]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      switch (name) {

        case 'contract.end_duration_date':

          if (type === 'change' && watch('contract.start_duration_date') && watch('contract.end_duration_date') && Date.parse(watch('contract.end_duration_date')) < Date.parse(watch('contract.start_duration_date'))) {
            toast.error('End date should be grater than start date')
            // setValue('contract.end_duration_date', new Date(watch('contract.start_duration_date')))
          }
          break


        case `contract.${assetType}_id`:
          if (watch(name)) {
            fetchAndMergeAssetInfo(assetType, watch(name), setValue);
          }
          break;
        case `contract.building_id`:
          if (watch(name)) {
            fetchAndMergeBuildingInfo(watch(name), setValue);
            filterAssetsByBuilding(
              watch(name),
              assetType,
              CACHE_LIST,
              setCACHE_LIST,
              oldContracts
            );
            setValue(`contract.${assetType}_id`, null);
          }
          break;
        default:
      }

      if (name?.indexOf("contract.") !== -1) {
        onWatchChangesInTab1(
          name?.split(".")?.at(-1),
          setValue,
          watch,
        );
      }
      if (name?.indexOf(`installment.`) !== -1) {
        onWatchChangesInstallmentTab(
          name?.split(".")?.at(-1),
          watch(name),
          setValue,
          watch
        );
      }

      if (name?.indexOf(`contract_termination`) !== -1) {
        onWatchChangesTerminationTab(
          name?.split(".")?.at(-1),
          watch(name),
          watch,
          setValue
        );
      }

      if (name?.indexOf(`installment_grid`) !== -1) {
        let subName = name?.split(".")?.at(-1);
        switch (subName) {
          case "due_date":
          case "number":
          case "amount":
          case "bank_id":
          case "end_due_date": {
            onWatchChangesInstallmentGridTab(name, setValue, watch, CACHE_LIST);
            break;
          }
          default:
            return;
        }
      }
      if (name === 'contract_termination.termination_date' && type === 'change') {
        if (Date.parse(watch(name)) < Date.parse(watch('contract.start_duration_date'))) {
          toast.error(`Failed to set Date, termination date must be grater than start date`)
          setValue('contract_termination.termination_date', new Date())
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, oldContracts?.length, CACHE_LIST]);

  useEffect(() => {
    if (contractId) return;

    setValue("contract.number", +formPagination?.currentNumber || 1);
    autoMergePatternSettingsWithValues(
      PATTERN_SETTINGS,
      watch,
      setValue,
      tabNames
    );
    // setShouldRefresh((p) => !p);
  }, [code, type, assetType, PATTERN_SETTINGS?.id, contractId, formPagination?.currentNumber]);


  const globalButtonsActions = (action) => {
    switch (action) {
      case ACTIONS.OPEN_INSTALLMENT_FORM:
        setOpenInstallmentForm(true);
        return;
      default:
        return;
    }
  };

  const onClickRenew = async () => {

    setValue('contract_termination.terminated', true)
    setValue('contract_termination.termination_date', new Date())

    if (watch('contract_termination.terminated')) {
      console.log('called', 'sa', watch());

      await onSubmit(watch());
    }

    let contract = watch("contract");
    const startDate = new Date(contract?.start_duration_date);
    const endDate = new Date(contract?.end_duration_date);
    const differenceMs = endDate.getTime() - startDate.getTime();
    const newStartDate = new Date(endDate.getTime() + (24 * 60 * 60 * 1000));
    const newEndDate = new Date(newStartDate.getTime() + differenceMs);
    const newContract = {
      ...contract
    };
    delete newContract.id;
    let contractNumbers = +contract.contracts_number_prev + 1;
    newContract.start_duration_date = newStartDate;
    newContract.end_duration_date = newEndDate;
    newContract.contracts_number_prev = contractNumbers || 1;
    newContract.contracts_number_current = contractNumbers || 2;
    newContract.status = CONTRACT_STATUS.RENEWdD;
    newContract.previous_securing = contract?.current_securing_value;
    newContract.number = +formPagination?.currentNumber + 1;
    newContract.current_securing_value = 0;

    // const res = await renewContract(watch(), newContract);

    setCurrentIndex(0);
    reset({
      contract: newContract
    });
    console.log(watch(), '-ddsds');

    formPagination.setCurrentNumber(+formPagination.lastNumber + 1)
    await onSubmit(watch())
  };

  // Handel Submit
  const onSubmit = async (value) => {
    console.log('called,');

    if (!isDirty && !watch('contract.id')) {
      return;
    }

    console.log('process save');


    if (watch('contract.end_duration_date') && watch('contract.start_duration_date') && Date.parse(watch('contract.end_duration_date')) < Date.parse(watch('contract.start_duration_date'))) {
      toast.error('End date should be grater than start date')
      return;
    }

    if (!watch('contract.status') && Date.parse(watch('contract.end_duration_date')) <= Date.parse(new Date())) {
      setValue('contract.status', CONTRACT_STATUS.Expired_and_not_renewed);
    }

    if (!contractValidation(watch("contract"))) return;
    setIsLoading(true);

    setValue("contract.code", +code);
    setValue("contract.contract_pattern_id", PATTERN_SETTINGS?.id);
    setValue(
      "contract.flat_type",
      CONTRACTS_ASSETS_TYPE?.[searchQuery.get("flat_type")]
    );

    let contract = watch('contract');

    const getTheFunInsert = CONTRACT_CURD_FUNCTIONS?.[contractName];
    const res = await getTheFunInsert({
      ...value,
      contract: watch("contract"),
      tabName: contractName,
      layout: contractId,
      // note,
    });

    console.log(res, '-resf');


    if (res?.success) {
      let firstTabData = watch("contract");
      let contract_id = watch('contract.id') || res?.record?.id;
      const isNew = res?.record?.id
      await generateEntry(contract_id)
      setOldContracts((prev) => [...prev, firstTabData]);
      if (isNew) {
        await mergeInstallmentAndFirstTabData(watch("contract"), setValue, watch);
        if (watch("contract.paid_type") === 4) {
          setOpenInstallmentForm(true);
        }
      }
      if (contract_id) {
        const data = await GET_UPDATE_DATE(contractName, contract_id);
        reset(data);
      }

      toast.success("Successfully Saved contract ");
    } else {
      toast.error(res?.error?.detail);
    }
    setIsLoading(false);
  };


  const generateEntry = async (contract_id) => {
    const contract = watch('contract')
    const contract_commission = watch('contract_commission')

    const assetsTypeNumber = CACHE_LIST?.[assetType]?.find(
      (c) => c?.id === contract?.[`${assetType}_id`]
    )?.[`${assetType}_no`];
    const buildingNumber = CACHE_LIST?.building?.find(
      (c) => c?.id === contract?.building_id
    )?.name;

    let note = `Contract rent number ${formPagination?.currentNumber} ${assetType} name ${assetsTypeNumber} building name ${buildingNumber}`;
    if (contract_id && contract?.gen_entries) {
      await generateEntryFromContract({
        contractId: contract_id,
        pattern: PATTERN_SETTINGS,
        contract,
        commission: contract_commission,
        note
      });
    } else {
      deleteEntry(contract_id);
    }
  }


  return (
    <FormLayout
      tableName="contract"
      name={contractName}
      isLoading={isLoading || contractQueryClient?.isLoading}
      onSubmit={onSubmit}
      methods={methods}
      steps={steps}
      goTo={goTo}
      activeStage={currentIndex}
      onClose={onClose}
      formPagination={formPagination}
      formClassName="w-full xl:min-w-[900px] 2xl:min-w-[1200px]"
      extraMenuContent={
        <div className="mt-auto">
          {watch('contract.id') && (
            <Btn kind="warn" type="button" onClick={onClickRenew} containerClassName="!text-xs mx-auto">Renew Contract</Btn>
          )}
        </div>
      }
      extraContentBar={
        <>
          <NormalSelect
            selectedItem={selectedBuilding}
            list={CACHE_LIST?.building}
            labelClassName="!w-fit"
            selectClassNames="!bg-red-100"
            onChange={option => {
              setSelectedBuilding(option?.id)
            }}
            label="Buildings"
          />
          <SearchContract
            formPagination={formPagination}
            selectedBuilding={selectedBuilding}
          />
          <div className="flex gap-4 items-center justify-end">
            <CheckboxField
              updatedName={`contract.feedback`}
              name="feedback"
              label="feedback"
            // values={values}
            />
            <CheckboxField
              name="lawsuit"
              label="lawsuit"
              updatedName={`contract.lawsuit`}
            // values={values}
            />
            <CheckboxField
              name="gen_entries"
              label="gen_entries"
              updatedName={`contract.gen_entries`}
              labelClassName="whitespace-nowrap"
            // values={values}
            />
            {watch('contract.id') && watch(`contract.gen_entries`) ? (
              <ViewEntry id={watch('contract.id')} created_from={CREATED_FROM_CONTRACT} />
            ) : null}
          </div>
        </>
      }
      additionalButtons={
        <>

          {watch(`contract.paid_type`) === 1 ? (
            <Btn
              kind="info"
              type="button"
              disabled={!watch(`contract.id`)}
              onClick={() => setOpenInstallmentForm(true)}
            >
              installments
            </Btn>

          ) : null}
        </>
      }

      outerDelete={() =>
        onChangeContractStatus(
          CONSTANT_COLUMNS_NAME.is_deleted,
          watch,
          setValue
        )
      }
    >
      {/* <button type="button" onClick={testReset} > test reset</button> */}
      {openInstallmentForm && watch(`contract.final_price`) ? (
        <Suspense>
          <InstallmentForm
            assetType={assetType}
            CACHE_LIST={CACHE_LIST}
            onClose={() => setOpenInstallmentForm(false)}
            contract_id={watch(`contract.id`)}
            openInstallmentForm={openInstallmentForm}
            errors={errors}
          />
        </Suspense>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
        <div
          className={`relative ${watch("contract.is_archived") || watch("contract.is_deleted")
            ? "bg-gray-200 pointer-events-none"
            : ""
            }`}
        >
          {formSettings?.formType === "grid" ? (
            <div>
              <TableFields
                tab={tab}
                errors={errors}
                formSettings={formSettings}
                CACHE_LIST={!!CACHE_LIST ? CACHE_LIST : undefined}
                fields={fields}
                values={watch()?.[tab]}
                rowsCount={watch()?.[tab]?.length}
                rowStyles={(index) => ({
                  background:
                    index % 2
                      ? PATTERN_SETTINGS?.table_color1
                      : PATTERN_SETTINGS?.table_color2,
                })}
              />
              {tab === 'contract_other_fees' && watch('contract_other_fees.0.id') && (
                <ViewEntry id={watch('contract.id')} created_from={CREATED_FROM_CONTRACT_FEES} />
              )}
            </div>
          ) : (
            <>
              {formSettings?.formType === "view" ? (
                <Suspense>
                  <ContractPayments
                    contract_id={watch(`contract.id`)}
                    CACHE_LIST={CACHE_LIST}
                    assetType={assetType}
                  />
                </Suspense>
              ) : (
                <>
                  {currentIndex === 0 && tab ? (
                    <div>
                      <Suspense>
                        <ContractFinancialForm
                          number={formPagination?.currentNumber}
                          fields={fields}
                          tab={tab}
                          values={watch()?.[tab]}
                          errors={errors}
                          CACHE_LIST={CACHE_LIST}
                          globalButtonsActions={globalButtonsActions}
                          contract_id={watch(`contract.id`)}
                          dispatchVoucherEntries={dispatchVoucherEntries}
                          layout={contractId}
                          assetType={assetType}
                          contractType={type}
                        />
                      </Suspense>
                    </div>
                  ) : tab === "contract_termination" ? (
                    <Suspense>
                      <ContractTerminationForm
                        CACHE_LIST={CACHE_LIST}
                        tab={tab}
                        onClickRenew={onClickRenew}
                      />
                    </Suspense>
                  ) : (
                    <Fields
                      fields={fields}
                      tab={tab}
                      values={watch()?.[tab]}
                      errors={errors}
                      CACHE_LIST={CACHE_LIST}
                      globalButtonsActions={globalButtonsActions}
                    />
                  )}
                </>
              )}
            </>
          )}
        </div>
      </form>
    </FormLayout >
  );
};

export default ContractForm;
