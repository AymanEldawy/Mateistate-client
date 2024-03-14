import BlockPaper from "Components/Global/BlockPaper";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import InstallmentForm from "./InstallmentForm";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION, {
  getLastNumberByColumn,
} from "Helpers/Lib/global-insert";
import {
  ACTIONS,
  CONSTANT_COLUMNS_NAME,
  CONTRACTS_ASSETS_TYPE,
} from "Helpers/constants";
import useFormSteps from "Hooks/useFormSteps";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  useParams,
  useSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";
import GET_UPDATE_DATE, {
  getContractByNumber,
} from "Helpers/Lib/global-read-update";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import { ContractPayments } from "Components/StructurePage/Forms/ContractForm/ContractPayments";
import { ContractFinancialForm } from "./ContractFinancialForm";
import {
  autoMergePatternSettingsWithValues,
  calculateContractDuration,
  fetchAndMergeAssetInfo,
  fetchAndMergeBuildingInfo,
  fetchContractRestData,
  // filterAssetsByBuilding,
  getOldContracts,
  mergeInstallmentAndFirstTabData,
  onWatchChangesInTab1,
  onWatchChangesInstallmentGridTab,
  onWatchChangesInstallmentTab,
  onWatchChangesTerminationTab,
} from "Helpers/Lib/contract-helpers";
import { FormStepPagination } from "../../../Global/FormStepPagination";
import { Button } from "Components/Global/Button";
import Loading from "Components/Global/Loading";
import { generateEntryFromContract } from "Helpers/Lib/vouchers-insert";
import { Locked } from "Components/Global/Locked";
import { changeRowStatus } from "Helpers/functions";
import { resetContractFields } from "../../../../Helpers/Lib/contract-helpers";
import ContractTerminationForm from "./ContractTerminationForm";
import { useQuery } from "@tanstack/react-query";

const CACHE_CONTRACTS_DATA = {};
const SHOULD_UPDATES = {};
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

  // check if the assets is rented by another contract

  if (CACHE_BUILDING_ASSETS[buildingId])
    assets = CACHE_BUILDING_ASSETS[buildingId];
  else {
    assets = copy?.filter(
      (c) => c?.building_id === buildingId && !assetsHash?.includes(c?.id)
    );
    CACHE_BUILDING_ASSETS[buildingId] = assets;
  }

  setCACHE_LIST((prev) => ({
    ...prev,
    [tableName]: assets,
    [`${tableName}_2`]: copy,
  }));
}

const ContractForm = () => {
  const params = useParams();
  const [searchQuery] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const name = params?.name;
  const type = params?.type;
  const code = searchQuery.get("code");
  const assetType = searchQuery.get("flat_type")?.toLowerCase();
  const contractName = `${assetType}_${type}_contract`;
  const [number, setNumber] = useState(+searchQuery.get("number") || 1);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [openInstallmentForm, setOpenInstallmentForm] = useState(false);
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const [maxLength, setMaxLength] = useState(0);
  const { dispatchVoucherEntries } = useVoucherEntriesView();
  const [oldContracts, setOldContracts] = useState([]);
  const method = useForm({
    defaultValues: resetContractFields(),
  });

  const {
    handleSubmit,
    watch,
    formState: { errors, isDirty, isSubmitting, isSubmitSuccessful },
    setValue,
    reset,
    unregister,
  } = method;

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
  } = useFormSteps({ name: contractName });

  // Fetch and merge pattern
  useQuery({
    queryKey: ["contract_pattern", code],
    queryFn: async () => {
      const response = await ApiActions.read("contract_pattern", {
        conditions: [{ type: "and", conditions: [["code", "=", +code]] }],
      });
      let pattern = response?.result?.at(0);
      setPATTERN_SETTINGS(pattern);
      autoMergePatternSettingsWithValues(pattern, watch, setValue, tabNames);
    },
  });

  // fetch Old Contract
  useQuery({
    queryKey: ["old_contracts"],
    queryFn: () => getOldContracts(setOldContracts, contractName),
  });

  // Fetch Last contract number
  useQuery({
    queryKey: [],
    queryFn: async () => {
      const lastNumber = await getLastNumberByColumn("contract", "code", +code);
      setMaxLength(+lastNumber);
      setNumber(+lastNumber + 1);

      if (!watch("contract.number")) {
        setValue(`${tabNames?.[0]}.number`, number);
      }
    },
  });
  const contractQueryClient = useQuery();

  useEffect(() => {
    if (currentIndex !== 1 || !fields?.length || !PATTERN_SETTINGS?.id) return;
    let newFields = forms?.[steps?.[1]]?.fields;
    for (const field of newFields) {
      if (
        field?.name === "current_securing_value" &&
        PATTERN_SETTINGS?.insurance_required
      ) {
        field.required = true;
      }
      if (
        field?.name === "current_securing_percentage" &&
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
    }
    setFields(newFields);
    setRefresh((p) => !p);
  }, [PATTERN_SETTINGS, fields, currentIndex, number]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      let tab = name?.split(".")?.at(0);
      if (type) SHOULD_UPDATES[tab] = true;

      switch (name) {
        case `${tabNames?.[0]}.${assetType}_id`:
          if (watch(name)) {
            fetchAndMergeAssetInfo(
              assetType,
              watch(name),
              setValue,
              tabNames?.[0]
            );
          }
          break;
        case `${tabNames?.[0]}.building_id`:
          if (watch(name)) {
            fetchAndMergeBuildingInfo(
              watch(name),
              setValue,
              tabNames?.[0],
              SHOULD_UPDATES
            );

            filterAssetsByBuilding(
              watch(name),
              assetType,
              CACHE_LIST,
              setCACHE_LIST,
              oldContracts
            );
            setValue(`${tabNames[0]}.${assetType}_id`, null);
          }
          break;
        default:
      }

      if (name?.indexOf(tabNames?.[0]) !== -1) {
        onWatchChangesInTab1(
          name?.split(".")?.at(-1),
          watch(name),
          setValue,
          tabNames[0],
          watch,
          SHOULD_UPDATES
        );
      }
      if (name?.indexOf(`installment.`) !== -1) {
        SHOULD_UPDATES.installment = true;
        onWatchChangesInstallmentTab(
          name?.split(".")?.at(-1),
          watch(name),
          setValue,
          tabNames[1],
          watch
        );
      }

      if (name?.indexOf(`contract_termination`) !== -1) {
        onWatchChangesTerminationTab(
          name?.split(".")?.at(-1),
          watch(name),
          watch,
          setValue,
          tabNames[0]
        );
      }

      if (name?.indexOf(`installment_grid`) !== -1) {
        let subName = name?.split(".")?.at(-1);
        switch (subName) {
          case "due_date":
          case "internal_number":
          case "amount":
          case "bank_id":
          case "end_due_date": {
            SHOULD_UPDATES.installment = true;
            onWatchChangesInstallmentGridTab(
              name,
              setValue,
              watch,
              CACHE_LIST,
              tabNames?.[0]
            );
            break;
          }
          default:
            return;
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, oldContracts?.length, CACHE_LIST]);

  const fetchData = async () => {
    if (CACHE_CONTRACTS_DATA?.[number] && +number <= maxLength) {
      reset(CACHE_CONTRACTS_DATA?.[number]);
    } else {
      setIsLoading(true);
      const data = await getContractByNumber(
        code,
        type,
        assetType,
        number,
        reset
      );
      reset(data);
      CACHE_CONTRACTS_DATA[number] = data;
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!number || !code) return;
    if (+number <= maxLength) refresh();
    else {
      autoMergePatternSettingsWithValues(
        PATTERN_SETTINGS,
        watch,
        setValue,
        tabNames
      );
      setRefresh((p) => !p);
    }
  }, [number, code, type, assetType, maxLength, PATTERN_SETTINGS?.id]);

  useEffect(() => {
    if (currentIndex > 1 && watch("contract.id"))
      fetchContractRestData(currentIndex, tabNames, watch, setValue);
  }, [currentIndex, isSubmitSuccessful]);

  const onClickRenew = async () => {
    setValue(`${contractName}.start_duration_date`, new Date());
    const { first_installment_date, end_duration_date } =
      await calculateContractDuration(
        contractName,
        watch,
        setValue,
        SHOULD_UPDATES
      );
    let contract = watch("contract");
    let installment = watch("installment");
    let firstTabData = watch(contractName);

    delete installment.id;
    delete firstTabData.id;
    delete firstTabData.number;
    delete contract.id;
    delete contract.status;
    delete contract.number;

    firstTabData.previous_securing = firstTabData?.current_securing_value;
    firstTabData.current_securing_percentage = 0;
    firstTabData.current_securing_value = 0;

    firstTabData.end_duration_date = end_duration_date;
    installment.first_installment_date = first_installment_date;
    reset(
      { contract, installment, [contractName]: firstTabData },
      { keepValues: false, keepDefaultValues: false }
    );
    setNumber(+maxLength + 1);
    setCurrentIndex(0);
  };

  const onClickAddNewContract = () => {
    setNumber(+maxLength + 1);
    reset({
      defaultValues: resetContractFields(),
    });
  };

  const onChangeContractStatus = async (col) => {
    let id = watch("contract.id");
    if (!id) return;
    let value = watch(`contract.${col}`);

    const response = await changeRowStatus("contract", id, col, !value);
    if (response?.success) setValue(`contract.${col}`, !value);
  };

  const globalButtonsActions = (action) => {
    switch (action) {
      case ACTIONS.OPEN_INSTALLMENT_FORM:
        setOpenInstallmentForm(true);
        return;
      default:
        return;
    }
  };

  const goToNumber = (num) => {
    if (num > maxLength) {
      setRefresh((p) => !p);
    }
    setNumber(num);
  };

  const contractValidation = () => {
    const values = watch(tabNames?.[0]);
    let isValid = true;
    if (values?.current_securing_value && !values?.insurance_account_id) {
      isValid = false;
      toast.error(`Insurance account is Required`);
    }
    if (values?.discount_value && !values?.discount_account_id) {
      isValid = false;
      toast.error(`Discount account is Required`);
    }
    if (!values?.contract_value) {
      isValid = false;
      toast.error(`Contract value is required`);
    }

    return isValid;
  };

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) {
      return;
    }

    if (!contractValidation()) return;
    setIsLoading(true);

    if (SHOULD_UPDATES.installment) {
      SHOULD_UPDATES.installment_grid = true;
    }

    for (const key in value) {
      if (!SHOULD_UPDATES?.[key] && key !== "contract") {
        delete value?.[key];
      }
    }
    value[tabNames[0]].code = +code;

    let contract = {
      code: +code,
      status: watch(`${tabNames?.[0]}.status`),
      flat_type: CONTRACTS_ASSETS_TYPE?.[searchQuery.get("flat_type")],
      ...watch("contract"),
    };

    const getTheFunInsert = INSERT_FUNCTION[contractName];
    const res = await getTheFunInsert({
      ...value,
      contract,
      tabName: tabNames?.[0],
      layout: number <= maxLength,
      SHOULD_UPDATES,
    });

    if (res?.success) {
      let firstTabData = watch(tabNames?.[0]);
      let contract_id = res?.record?.id;

      if (firstTabData?.gen_entries && SHOULD_UPDATES?.[tabNames?.[0]]) {
        await genEntry(contract_id || watch("contract.id"));
      }

      if (contract_id) {
        const data = await GET_UPDATE_DATE(contractName, res?.record?.id);
        if (data) CACHE_CONTRACTS_DATA[number] = data;
        reset(data);
        await mergeInstallmentAndFirstTabData(firstTabData, setValue);

        if (firstTabData?.paid_type === 4) {
          setOpenInstallmentForm(true);
        }

        setMaxLength((p) => +p + 1);
      }

      toast.success("Successfully Saved contract " + number);
    } else {
      toast.error(res?.error?.detail);
    }
    setIsLoading(false);
  };

  const genEntry = async (contract_id) => {
    let values = watch(tabNames?.[0]);

    const assetsTypeNumber = CACHE_LIST?.[assetType]?.find(
      (c) => c?.id === values?.[`${assetType}_id`]
    )?.[`${assetType}_no`];
    const buildingNumber = CACHE_LIST?.building?.find(
      (c) => c?.id === values?.building_id
    )?.name;

    if (!contract_id) return;

    generateEntryFromContract({
      contractId: contract_id,
      assetsType: assetType,
      assetsTypeNumber,
      buildingNumber,
      contractNumber: number,
      values: values,
      should_update: SHOULD_UPDATES?.[tabNames?.[0]],
      commission: watch("contract_commission"),
    });
  };

  return (
    <>
      {isLoading ? (
        <Loading withBackdrop logo={isSubmitting ? false : true} />
      ) : null}
      <div>
        <FormProvider {...method}>
          {openInstallmentForm && watch(`${tabNames?.[0]}.contract_value`) ? (
            <InstallmentForm
              assetType={assetType}
              CACHE_LIST={CACHE_LIST}
              onClose={() => setOpenInstallmentForm(false)}
              firstTab={tabNames[0]}
              contract_id={watch(`contract.id`)}
              openInstallmentForm={openInstallmentForm}
              errors={errors}
            />
          ) : null}

          <BlockPaper>
            <FormHeadingTitleSteps
              customName={
                <span className="capitalize">
                  {maxLength < number ? (
                    <span className="text-red-500 ltr:mr-2 rtl:ml-2 bg-red-100 px-2 py-1 rounded-md">
                      New
                    </span>
                  ) : null}
                  {name?.replace(/_/g, " ")} number {number}
                </span>
              }
              steps={steps}
              goTo={goTo}
              activeStage={currentIndex}
            />
            <div className="h-5" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="relative"
            >
              <div
                className={`relative ${
                  watch("contract.is_archived") || watch("contract.is_deleted")
                    ? "bg-gray-200 pointer-events-none"
                    : ""
                }`}
              >
                {watch("contract.is_archived") ||
                watch("contract.is_deleted") ? (
                  <Locked
                    isArchived={watch("contract.is_archived")}
                    isDeleted={watch("contract.is_deleted")}
                  />
                ) : null}
                {formSettings?.formType === "grid" ? (
                  <div>
                    <TableFields
                      tab={tab}
                      errors={errors}
                      formSettings={formSettings}
                      CACHE_LIST={!!CACHE_LIST ? CACHE_LIST : undefined}
                      fields={fields}
                      values={watch()?.[tab]}
                    />
                  </div>
                ) : (
                  <>
                    {formSettings?.formType === "view" ? (
                      <ContractPayments
                        contract_id={watch(`contract.id`)}
                        CACHE_LIST={CACHE_LIST}
                        firstTabData={watch(tabNames?.[0])}
                        assetType={assetType}
                      />
                    ) : (
                      <>
                        {currentIndex === 0 && tab ? (
                          <div key={number}>
                            <ContractFinancialForm
                              number={number}
                              fields={fields}
                              tab={tab}
                              values={watch()?.[tab]}
                              errors={errors}
                              CACHE_LIST={CACHE_LIST}
                              globalButtonsActions={globalButtonsActions}
                              contract_id={watch(`contract.id`)}
                              dispatchVoucherEntries={dispatchVoucherEntries}
                              layout={number <= maxLength}
                              assetType={assetType}
                            />
                          </div>
                        ) : tab === "contract_termination" ? (
                          <ContractTerminationForm
                            CACHE_LIST={CACHE_LIST}
                            tab={tab}
                            onClickRenew={onClickRenew}
                          />
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

              <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
                <FormStepPagination
                  number={number}
                  goTo={goToNumber}
                  maxLength={maxLength}
                  isNewOne={number > maxLength}
                  setNumber={setNumber}
                  onClickArchive={() =>
                    onChangeContractStatus(CONSTANT_COLUMNS_NAME.is_archived)
                  }
                  onClickDelete={() =>
                    onChangeContractStatus(CONSTANT_COLUMNS_NAME.is_deleted)
                  }
                  isArchived={watch(
                    `contract.${CONSTANT_COLUMNS_NAME.is_archived}`
                  )}
                  isDeleted={watch(
                    `contract.${CONSTANT_COLUMNS_NAME.is_deleted}`
                  )}
                  allowActions={watch("contract.id")}
                  onClickAddNew={onClickAddNewContract}
                />

                <Button
                  title={maxLength >= number ? "Modify" : "Submit"}
                  classes="ltr:ml-auto rtl:mr-auto"
                  disabled={
                    Object.keys(SHOULD_UPDATES).length === 0 || !isDirty
                  }
                />
              </div>
            </form>
          </BlockPaper>
        </FormProvider>
      </div>
    </>
  );
};

export default ContractForm;
