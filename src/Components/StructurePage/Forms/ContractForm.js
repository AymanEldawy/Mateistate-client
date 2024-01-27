import BlockPaper from "Components/Global/BlockPaper";
import { ButtonsStepsGroup } from "Components/Global/ButtonsStepsGroup";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import InstallmentForm from "Components/StructurePage/Forms/InstallmentForm";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import {
  ACTIONS,
  CONTRACTS_ASSETS_TYPE,
  getAssetType,
} from "Helpers/constants";
import { dividePrice, getMonthsDiff } from "Helpers/functions";
import useFormSteps from "Hooks/useFormSteps";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { insertIntoEntry } from "Helpers/Lib/operations/vouchers-insert";
import GET_UPDATE_DATE from "Helpers/Lib/operations/global-read-update";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import TerminationFinesForm from "./TerminationFinesForm";

async function fetchAndMergeBuildingInfo(buildingId, setValue, firstTab) {
  const response = await ApiActions.read("building", {
    conditions: [{ type: "and", conditions: [["id", "=", buildingId]] }],
  });

  if (response?.success) {
    let data = response?.result?.at(0);
    setValue(`${firstTab}.lessor_id`, data?.lessor_id);
  }
}

async function fetchAndMergeAssetInfo(asset, assetId, setValue, tabNames) {
  let flatType = getAssetType(asset);
  const response = await ApiActions.read(flatType, {
    conditions: [{ type: "and", conditions: [["id", "=", assetId]] }],
  });

  if (response?.success) {
    let data = response?.result?.at(0);
    setValue(`${tabNames[0]}.description`, data?.description);
    setValue(`${tabNames[0]}.property_area`, data?.property_type);
    setValue(`${tabNames[0]}.lawsuit`, data?.has_lawsuit);
    setValue(`${tabNames[1]}.cost_center_id`, data?.cost_center_id);
    // setValue(`${tabNames[1]}.contract_value`, data?.has_lawsuit);
  }
}

async function fetchAndMergeClientInfo(accountId, setValue, firstTab) {
  const response = await ApiActions.read("user", {
    conditions: [{ type: "and", conditions: [["account_id", "=", accountId]] }],
  });

  if (response?.success) {
    let data = response?.result?.at(0);
    setValue(`${firstTab}.nationality`, data?.nationality);
    setValue(`${firstTab}.work_phone`, data?.work_phone);
    setValue(`${firstTab}.phono`, data?.personal_phone);
  }
}

function onWatchChangesInTab1(name, value, setValue, tabNames, watch) {
  switch (name) {
    case "issue_date":
      setValue(
        `installment.installment_date`,
        new Date(value).toISOString()?.substring(0, 10)
      );
      setValue(
        `installment.payment_date`,
        new Date(value).toISOString()?.substring(0, 10)
      );
      return;
    default:
      return;
  }
}

function onWatchChangesInTab2(name, value, setValue, tabNames, watch) {
  switch (name) {
    case "discount_rate":
    case "contract_value": {
      let discount = watch(`${tabNames}.discount_rate`) || 0;
      let price = watch(`${tabNames}.contract_value`);
      let finalPrice = price - (discount / 100) * price;
      let discountValue = price - finalPrice;

      setValue(`${tabNames}.discount_value`, discountValue);
      setValue(`${tabNames}.final_price`, finalPrice);
      return;
    }

    case "start_duration_date":
    case "contract_duration": {
      let duration = watch(`${tabNames}.contract_duration`);
      let start = watch(`${tabNames}.start_duration_date`);
      let date = new Date(start);

      // change first installment date value
      setValue(
        `installment.first_installment_date`,
        new Date(start).toISOString()?.substring(0, 10)
      );

      switch (duration) {
        case 1:
          setValue(
            `${tabNames}.end_duration_date`,
            new Date(date.setDate(date.getMonth() + 3))
              .toISOString()
              ?.substring(0, 10)
          );
          return;
        case 2:
          setValue(
            `${tabNames}.end_duration_date`,
            new Date(date.setDate(date.getMonth() + 6))
              .toISOString()
              ?.substring(0, 10)
          );
          return;
        case 3:
          setValue(
            `${tabNames}.end_duration_date`,
            new Date(date.setDate(date.getMonth() + 12))
              .toISOString()
              ?.substring(0, 10)
          );
          return;
        default:
          return;
      }
    }
    case "end_duration_date":
      {
        let start = watch(`${tabNames}.start_duration_date`);
        let end = watch(`${tabNames}.end_duration_date`);
        let price = watch(`${tabNames}.contract_value`);
        let monthValue = getMonthsDiff(start, end, price);
        let date = new Date(start);

        setValue(`installment.total_amount`, price);

        if (
          Date.parse(end) >
          Date.parse(new Date(date.setDate(date.getMonth() + 12)))
        ) {
          setValue(`${tabNames}.contract_duration`, 4);
        }
        setValue(`${tabNames}.monthly_value`, monthValue?.monthlyPrice);
      }
      return;

    case "currency_id":
      setValue(`installment.currency_id`, value);
      return;
    case "currency_val":
      setValue(`installment.currency_val`, value);
      return;
    case "cost_center_id":
      setValue(`installment.cost_center_id`, value);
      return;
    case "customer_account_id":
      setValue(`installment.client_id`, value);
      return;
    case "gen_entries": {
      //   let currency_id = watch(`${tabNames}.currency_id`);
      //   let currency_val = watch(`${tabNames}.currency_val`);
      //   let contract_value = watch(`${tabNames}.contract_value`);
      //   let current_securing_value = watch(`${tabNames}.current_securing_value`);
      //   let cost_center_id = watch(`${tabNames}.cost_center_id`);
      //   let customer_account_id = watch(`${tabNames}.customer_account_id`);
      //   let revenue_account_id = watch(`${tabNames}.revenue_account_id`);
      //   let insurance_account_id = watch(`${tabNames}.insurance_account_id`);
      //   let created_at = watch(`${tabNames}.start_duration_date`);
      //   let note = ``;
      //   let debit = 0;
      //   let credit = 0;
      //   let difference = credit - debit;

      //   insertIntoEntry({
      //     created_at,
      //     currency_id,
      //     currency_val,
      //     note,
      //     debit,
      //     credit,
      //     difference,
      //     created_from: 2, // contract
      //     created_from_id: "", // contract id
      //     number: "",
      //   });
      // }
      return;
    }

    default:
      return;
  }
}

function onWatchChangesInstallmentTab(name, value, setValue, tabNames, watch) {
  switch (name) {
    case "total_amount":
      let first_batch = watch(`installment.first_batch`) || 0;
      setValue(`installment.rest_amount`, value - +first_batch);
      break;
    case "first_batch":
      let totalAmount = watch(`installment.total_amount`);
      setValue(`installment.rest_amount`, totalAmount - (value || 0));

      return;
    // case "rest_amount":
    // case "each_duration":
    // case "each_number":
    // case "begin_number":
    // case "installments_numbers":
    case "first_installment_date":
      const rest_amount = watch("installment.rest_amount");
      const each_duration = watch("installment.each_duration");
      const each_number = watch("installment.each_number");
      const first_installment_date = watch(
        "installment.first_installment_date"
      );
      const installments_numbers = watch("installment.installments_numbers");

      if (rest_amount) {
        const result = dividePrice(
          first_installment_date,
          rest_amount,
          installments_numbers,
          each_duration,
          each_number
        );
        // getMonthsDiff();
        setValue(`installment.installment_price`, result?.at(0)?.price);
        setValue(`installment.final_payment`, result?.at(-1)?.price);
      }

      return;

    default:
      return;
  }
}

function onOpenInstallmentForm(values, tabNames) {}

const SHOULD_UPDATES = {};

const ContractForm = ({ layout }) => {
  const params = useParams();
  const [searchQuery] = useSearchParams();
  const name = params?.name;
  const type = params?.type;
  const assetType = searchQuery.get("flat_type")?.toLowerCase();
  const contract_id = searchQuery.get("contract_id")?.toLowerCase();
  const contractName = `${assetType}_${type}_contract`;
  const [loading, setLoading] = useState(false);
  const [openInstallmentForm, setOpenInstallmentForm] = useState(false);
  const [openTerminationFinesForm, setOpenTerminationFinesForm] =
    useState(false);
  const { dispatchVoucherEntries } = useVoucherEntriesView();
  const method = useForm({
    defaultValues:
      layout === "update"
        ? async () => await GET_UPDATE_DATE(name, contract_id)
        : {},
  });
  const {
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = method;
  const {
    next,
    back,
    isLast,
    isFirst,
    currentIndex,
    tab,
    formSettings,
    steps,
    fields,
    tabNames,
    CACHE_LIST,
  } = useFormSteps({ name: contractName });

  // watch in tab 1
  const clientIdPathInData = `${tabNames?.[0]}.client_id`;
  const buildingIdPathInData = `${tabNames?.[0]}.building_id`;
  const assetTypeIdPathInData = `${tabNames?.[0]}.${assetType}_id`;
  const issueDatePathInData = `${tabNames?.[0]}.issue_date`;

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
        case clientIdPathInData:
          fetchAndMergeClientInfo(watch(name), setValue, tabNames?.[0]);
          break;
        case issueDatePathInData:
          onWatchChangesInTab1(
            name?.split(".")?.at(-1),
            watch(name),
            setValue,
            tabNames[0],
            watch
          );
          break;
        default:
      }
      if (name?.indexOf(`${tabNames?.[1]}.`) !== -1) {
        onWatchChangesInTab2(
          name?.split(".")?.at(-1),
          watch(name),
          setValue,
          tabNames[1],
          watch
        );
      }

      if (name?.indexOf(`installment.`) !== -1) {
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

  const globalButtonsActions = (action) => {
    switch (action) {
      case ACTIONS.OPEN_INSTALLMENT_FORM:
        setOpenInstallmentForm(true);
        onOpenInstallmentForm(watch(), tabNames);
        return;
      case ACTIONS.OPEN_TERMINATION_FINES_FORM:
        setOpenTerminationFinesForm(true);
        return;
      default:
        return;
    }
  };
  // Handel Submit
  const onSubmit = async (value) => {
    next();
    if (!isLast()) return;
    setLoading(true);

    if (watch(`${tabNames[1]}.paid_type`) !== 4) {
      delete value.installment;
      delete value.installment_grid;
    }

    const getTheFunInsert = INSERT_FUNCTION[contractName];
    let finalValue = value;
    if (layout === "update") {
      for (const key in value) {
        if (!SHOULD_UPDATES?.[key] && key !== "contract") {
          delete value?.[key];
        }
      }
    }

    // return;

    const res = await getTheFunInsert({
      ...value,
      flat_type: CONTRACTS_ASSETS_TYPE?.[assetType],
      tabName: tabNames?.[1],
      layout,
      SHOULD_UPDATES,
    });

    if (res?.success) {
      toast.success("Successfully added item in " + contractName);
    } else {
      toast.error("Failed to add new item in " + contractName);
    }
    setLoading(false);
  };

  console.log(watch(), SHOULD_UPDATES);

  return (
    <>
      <div key={name}>
        <FormProvider {...method}>
          {openInstallmentForm ? (
            <InstallmentForm
              CACHE_LIST={CACHE_LIST}
              errors={errors}
              onClose={() => setOpenInstallmentForm(false)}
              contract_id={contract_id}
            />
          ) : null}
          {openTerminationFinesForm ? (
            <TerminationFinesForm
              errors={errors}
              contract_id={contract_id}
              CACHE_LIST={CACHE_LIST}
              onClose={() => setOpenTerminationFinesForm(false)}
            />
          ) : null}
          <BlockPaper>
            <FormHeadingTitleSteps
              name={name}
              steps={steps}
              // changeTab={goTo}
              activeStage={currentIndex}
            />
            <div className="h-5" />
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {formSettings?.formType === "grid" ? (
                <div key={steps?.[currentIndex]}>
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
                <Fields
                  fields={fields}
                  tab={tab}
                  values={watch()?.[tab]}
                  errors={errors}
                  CACHE_LIST={CACHE_LIST}
                  globalButtonsActions={globalButtonsActions}
                />
              )}

              {layout === "update" ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      dispatchVoucherEntries({
                        table: "entry_main_data",
                        grid: "entry_grid_data",
                        ref_name: "created_from_id",
                        id: contract_id,
                      })
                    }
                  >
                    Show Entries
                  </button>
                </>
              ) : null}
              <ButtonsStepsGroup
                isLast={isLast}
                isFirst={isFirst}
                loading={loading}
                steps={steps}
                back={back}
                disabled={
                  layout === "update" &&
                  Object.keys(SHOULD_UPDATES).length === 0 &&
                  isLast()
                }
              />
            </form>
            <div className="flex justify-center gap-2 items-center py-4 border-t mt-4">
              <button
                className="bg-gray-400 text-gray-700 p-3 rounded-md capitalize"
                onClick={back}
              >
                prev for test
              </button>
              <button
                className="bg-gray-400 text-gray-700 p-3 rounded-md capitalize"
                onClick={next}
              >
                next for test
              </button>
            </div>
          </BlockPaper>
        </FormProvider>
      </div>
    </>
  );
};

export default ContractForm;
