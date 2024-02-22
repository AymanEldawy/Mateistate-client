import BlockPaper from "Components/Global/BlockPaper";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import InstallmentForm from "./InstallmentForm";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION, {
  getLastNumberByColumn,
} from "Helpers/Lib/operations/global-insert";
import { ACTIONS, CONTRACTS_ASSETS_TYPE } from "Helpers/constants";
import useFormSteps from "Hooks/useFormSteps";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams, useSearchParams } from "react-router-dom";
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
  onWatchChangesInTab1,
  onWatchChangesInstallmentTab,
} from "Helpers/Lib/operations/contract-helpers";
import { VoucherStepsButton } from "../Vouchers/VoucherStepsButton";
import { Button } from "Components/Global/Button";
import useFetch from "Hooks/useFetch";
import Loading from "Components/Global/Loading";

const CACHE_CONTRACTS_DATA = {};

const SHOULD_UPDATES = {};

const ContractForm = () => {
  const params = useParams();
  const [searchQuery] = useSearchParams();
  const name = params?.name;
  const type = params?.type;
  const code = searchQuery.get("code");
  const assetType = searchQuery.get("flat_type")?.toLowerCase();
  const contractName = `${assetType}_${type}_contract`;
  const [number, setNumber] = useState(+searchQuery.get("number"));
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [openInstallmentForm, setOpenInstallmentForm] = useState(false);
  const [contractId, setContractId] = useState(null);
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const [maxLength, setMaxLength] = useState(0);
  const [openFeesForm, setOpenFeesForm] = useState(false);
  const { dispatchVoucherEntries } = useVoucherEntriesView();
  const method = useForm();

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
    setFields,
    forms,
    setCurrentIndex
  } = useFormSteps({ name: contractName });

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
    }
    setFields(newFields);
    setRefresh((p) => !p);
  }, [PATTERN_SETTINGS, fields, currentIndex]);

  // watch in tab 1
  const buildingIdPathInData = `${tabNames?.[0]}.building_id`;
  const assetTypeIdPathInData = `${tabNames?.[0]}.${assetType}_id`;

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      let tab = name?.split(".")?.at(0);
      if (type) SHOULD_UPDATES[tab] = true;

      switch (name) {
        case assetTypeIdPathInData:
          fetchAndMergeAssetInfo(
            assetType,
            watch(name),
            setValue,
            tabNames?.[0]
          );
          break;
        case buildingIdPathInData:
          fetchAndMergeBuildingInfo(watch(name), setValue, tabNames?.[0]);
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
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (!number) return;
    const getLastNumber = async () => {
      const lastNumber = await getLastNumberByColumn(name, "code", +code);
      setMaxLength(lastNumber);
    };
    getLastNumber();
    setValue(`${tabNames?.[0]}.number`, number);
  }, [number]);

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
      reset({
        [name]: {
          number: +number,
          description: "",
          contract_value: 0,
          discount_rate: 0,
          discount_value: 0,
          final_price: 0,
          previous_securing: 0,
          current_securing_percentage: 0,
          current_securing_value: 0,
        },
      });
      autoMergePatternSettingsWithValues(
        PATTERN_SETTINGS,
        watch,
        setValue,
        tabNames
      );
      setRefresh((p) => !p);
    }
  }, [number, code, type, assetType, maxLength, number]);

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

  const goToNumber = (num) => {
    if (num > maxLength) {
      setRefresh((p) => !p);
    }
    setCurrentIndex(0)
    setNumber(num);
  };

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) {
      return;
    }

    if (SHOULD_UPDATES.installment) {
      SHOULD_UPDATES.installment_grid = true;
    }

    for (const key in value) {
      if (!SHOULD_UPDATES?.[key] && key !== "contract") {
        delete value?.[key];
      }
    }
    value[tabNames[0]].code = +code;

    const getTheFunInsert = INSERT_FUNCTION[contractName];
    const res = await getTheFunInsert({
      ...value,
      gov_number: watch("gov_number"),
      flat_type: CONTRACTS_ASSETS_TYPE?.[assetType],
      tabName: tabNames?.[1],
      layout: number <= maxLength,
      SHOULD_UPDATES,
    });

    if (res?.success) {
      if (res?.record?.id) {
        const data = await GET_UPDATE_DATE(name, res?.record?.id);
        reset(data);
        setContractId(res?.record?.id);
      }
      // getContractByNumber(code, type, assetType, number, reset);
      setMaxLength((p) => +p + 1);
      toast.success("Successfully added item in " + contractName);
    } else {
      toast.error("Failed to add new item in " + contractName);
    }
  };

  return (
    <>
      {isLoading ? <Loading withBackdrop /> : null}
      <div>
        <FormProvider {...method}>
          {openInstallmentForm ? (
            <InstallmentForm
              CACHE_LIST={CACHE_LIST}
              errors={errors}
              onClose={() => setOpenInstallmentForm(false)}
              firstTab={tabNames[0]}
              contract_id={watch(`contract.id`) || contractId}
            />
          ) : null}
          {openFeesForm ? (
            <TerminationFinesForm
              errors={errors}
              CACHE_LIST={CACHE_LIST}
              onClose={() => setOpenFeesForm(false)}
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
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                      contract_id={watch(`contract.id`) || contractId}
                      CACHE_LIST={CACHE_LIST}
                    />
                  ) : (
                    <>
                      {currentIndex === 0 && tab ? (
                        <ContractFormStageOne
                          fields={fields}
                          tab={tab}
                          values={watch()?.[tab]}
                          errors={errors}
                          CACHE_LIST={CACHE_LIST}
                          globalButtonsActions={globalButtonsActions}
                          contract_id={watch(`contract.id`) || contractId}
                          dispatchVoucherEntries={dispatchVoucherEntries}
                          layout={number <= maxLength}
                          assetType={assetType}
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

              <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
                <VoucherStepsButton
                  number={number}
                  goTo={goToNumber}
                  maxLength={maxLength}
                  isNewOne={number > maxLength}
                />
                <Button
                  title={"Submit"}
                  disabled={
                    (Object.keys(SHOULD_UPDATES).length === 0 ||
                      !watch("installment")) &&
                    number <= maxLength
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
