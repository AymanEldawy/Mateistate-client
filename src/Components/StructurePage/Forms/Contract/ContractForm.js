import BlockPaper from "Components/Global/BlockPaper";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import InstallmentForm from "./InstallmentForm";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION, {
  getLastNumberByColumn,
} from "Helpers/Lib/operations/global-insert";
import {
  ACTIONS,
  CONSTANT_COLUMNS_NAME,
  CONTRACTS_ASSETS_TYPE,
  SELECT_LISTS,
} from "Helpers/constants";
import useFormSteps from "Hooks/useFormSteps";
import { useEffect, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import {
  useParams,
  useSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";
import GET_UPDATE_DATE, {
  getContractByNumber,
} from "Helpers/Lib/operations/global-read-update";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import TerminationFinesForm from "./TerminationFinesForm";
import { ContractPayments } from "Pages/Reports/Contracts/ContractPayments";
import { ContractFormStageOne } from "./ContractFormStageOne";
import {
  autoMergePatternSettingsWithValues,
  fetchAndMergeAssetInfo,
  fetchAndMergeBuildingInfo,
  // filterAssetsByBuilding,
  getOldContracts,
  mergeInstallmentAndFirstTabData,
  onWatchChangesInTab1,
  onWatchChangesInstallmentGridTab,
  onWatchChangesInstallmentTab,
} from "Helpers/Lib/operations/contract-helpers";
import { VoucherStepsButton } from "../Vouchers/VoucherStepsButton";
import { Button } from "Components/Global/Button";
import Loading from "Components/Global/Loading";
import { generateEntryFromContract } from "Helpers/Lib/operations/vouchers-insert";
import { Locked } from "Components/Global/Locked";
import { changeRowStatus } from "Helpers/functions";
import useFetch from "Hooks/useFetch";
import { resetContractFields } from "./../../../../Helpers/Lib/operations/contract-helpers";

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
  console.log(assetsHash, "---");

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
  const [number, setNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [openInstallmentForm, setOpenInstallmentForm] = useState(false);
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const [maxLength, setMaxLength] = useState(0);
  const [openFeesForm, setOpenFeesForm] = useState(false);
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
  } = useFormSteps({ name: contractName });

  console.log(watch());
  useEffect(() => {
    getOldContracts(setOldContracts, contractName);
  }, []);

  useEffect(() => {
    if (!tabNames?.length && !code) return;

    const getContractPattern = async () => {
      const response = await ApiActions.read("contract_pattern", {
        conditions: [{ type: "and", conditions: [["code", "=", +code]] }],
      });
      let pattern = response?.result?.at(0);
      setPATTERN_SETTINGS(pattern);
      autoMergePatternSettingsWithValues(pattern, watch, setValue, tabNames);
    };
    getContractPattern();
  }, [code]);

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
    setNumber(+searchQuery.get("number"));
  }, [location?.search]);

  // watch in tab 1
  const buildingIdPathInData = `${tabNames?.[0]}.building_id`;
  const assetTypeIdPathInData = `${tabNames?.[0]}.${assetType}_id`;

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(name, type);
      watch(name);
      if (
        name?.indexOf(`installment_grid.`) - 1 &&
        name?.indexOf("note1") !== -1
      )
        return;

      let tab = name?.split(".")?.at(0);
      if (type) SHOULD_UPDATES[tab] = true;

      switch (name) {
        case assetTypeIdPathInData:
          if (watch(name)) {
            fetchAndMergeAssetInfo(
              assetType,
              watch(name),
              setValue,
              tabNames?.[0]
            );
          }
          break;
        case buildingIdPathInData:
          if (watch(name)) {
            fetchAndMergeBuildingInfo(watch(name), setValue, tabNames?.[0]);

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
      if (name?.indexOf(`installment_grid`) !== -1) {
        SHOULD_UPDATES.installment = true;
        onWatchChangesInstallmentGridTab(
          name,
          watch(name),
          setValue,
          watch,
          CACHE_LIST,
          tabNames?.[0]
        );
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, oldContracts?.length, CACHE_LIST]);

  useEffect(() => {
    if (!number) return;
    const getLastNumber = async () => {
      const lastNumber = await getLastNumberByColumn(
        contractName,
        "code",
        +code
      );
      setMaxLength(lastNumber);
    };
    getLastNumber();
    setValue(`${tabNames?.[0]}.number`, number);
  }, [number, location?.search]);

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
      CACHE_CONTRACTS_DATA[number] = data;
      reset(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!number || !code) return;
    if (+number <= maxLength) fetchData();
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

  const onClickAddNewContract = () => {
    let contractType = SELECT_LISTS("contact_pattern_contract_type")?.find(
      (c) => c.id === PATTERN_SETTINGS.contract_type
    );

    navigate(
      `/contracts/add/${contractType?.name?.toLowerCase()}/${
        PATTERN_SETTINGS?.name
      }?flat_type=${assetType}&code=${code}&number=${+maxLength + 1}`
    );
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
      case ACTIONS.OPEN_TERMINATION_FINES_FORM:
        setOpenFeesForm(true);
        return;
      default:
        return;
    }
  };

  console.log(SELECT_LISTS('contact_pattern_contract_type')?.find(c => c?.name?.toLowerCase() === type?.toLocaleLowerCase()),' type');

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
      flat_type: CONTRACTS_ASSETS_TYPE?.[assetType],
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
      toast.error("Failed to add new item in " + contractName);
    }
    setIsLoading(false);
  };

  const genEntry = async (contract_id) => {
    let values = watch(tabNames?.[0]);

    const cost_center = await ApiActions.read(assetType, {
      conditions: [
        { type: "and", conditions: [["id", "=", values?.[`${assetType}_id`]]] },
      ],
    });

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
      values: {
        ...values,
        cost_center_id: cost_center?.result?.at(0)?.cost_center_id,
      },
      should_update: SHOULD_UPDATES?.[tabNames?.[0]],
    });
  };

  console.log(fields, '----');
  return (
    <>
      {isLoading ? (
        <Loading withBackdrop logo={isSubmitting ? false : true} />
      ) : null}
      <div>
        <FormProvider {...method}>
          {openFeesForm ? (
            <TerminationFinesForm
              errors={errors}
              CACHE_LIST={CACHE_LIST}
              onClose={() => setOpenFeesForm(false)}
            />
          ) : null}

          {openInstallmentForm && watch(`${tabNames?.[0]}.contract_value`) ? (
            <InstallmentForm
              assetType={assetType}
              CACHE_LIST={CACHE_LIST}
              onClose={() => setOpenInstallmentForm(false)}
              firstTab={tabNames[0]}
              contract_id={watch(`contract.id`)}
              openInstallmentForm={openInstallmentForm}
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
                  {name?.replace(/_/g, " ")} {number}
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
                      />
                    ) : (
                      <>
                        {currentIndex === 0 && tab ? (
                          <div key={number}>
                            <ContractFormStageOne
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
                <VoucherStepsButton
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
                  disabled={Object.keys(SHOULD_UPDATES).length === 0}
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
