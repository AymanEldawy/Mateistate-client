import { useEffect, useMemo, useState } from "react";
import getFormByTableName from "Helpers/Forms/forms";
import { useFormContext } from "react-hook-form";
import {
  Input,
  Select,
  Switch,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import { ACTIONS } from "Helpers/constants";
import TerminationFinesForm from "./TerminationFinesForm";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import { EyeIcon } from "Components/Icons";
import { CONTRACT_STATUS } from "Helpers/Lib/contract-helpers";

const ContractTerminationForm = ({
  CACHE_LIST,
  tab,
  onClickRenew,
  SHOULD_UPDATES,
}) => {
  const {
    watch,
    setValue,
    errors,
    formState: { isSubmitSuccessful },
  } = useFormContext();
  const { dispatchVoucherEntries } = useVoucherEntriesView();
  const [openFeesForm, setOpenFeesForm] = useState(false);

  const fields = useMemo(() => {
    let form = getFormByTableName("contract_termination");
    let hash = {};
    for (const field of form) {
      hash[field?.name] = field;
    }
    return hash;
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      let key = name?.split(".")?.at(-1);
      switch (key) {
        case "terminated":
          if (watch(name)) {
            SHOULD_UPDATES[tab] = true;
            setValue("contract.status", CONTRACT_STATUS.TERMINATED);
          } else {
            delete SHOULD_UPDATES[tab];
            setValue("contract.status", CONTRACT_STATUS.ON);
          }
          break;

        default:
          return;
      }
    });
    return () => subscription.unsubscribe();

    // TERMINATED
  }, [watch]);

  return (
    <>
      {openFeesForm ? (
        <TerminationFinesForm
          errors={errors}
          CACHE_LIST={CACHE_LIST}
          onClose={() => setOpenFeesForm(false)}
        />
      ) : null}
      <div>
        <div className="flex items-end gap-4">
          <Switch
            {...fields?.terminated}
            updatedName={`${tab}.terminated`}
            error={errors?.[tab]?.terminated ? "Field is required" : ""}
          />
          <Switch
            {...fields?.gen_entries}
            updatedName={`${tab}.gen_entries`}
            error={errors?.[tab]?.gen_entries ? "Field is required" : ""}
          />
          {watch(`${tab}.id`) ? (
            <button
              type="button"
              className="bg-blue-500 mt-4 text-white px-2 py-1 rounded-md flex items-center gap-2"
              onClick={() =>
                dispatchVoucherEntries({
                  table: "entry_main_data",
                  grid: "entry_grid_data",
                  ref_name: "created_from_id",
                  id: watch(`${tab}.id`),
                })
              }
            >
              View Entry
              <EyeIcon />
            </button>
          ) : null}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-8 lg:gap-12 my-4">
          <div className="flex flex-col gap-4">
            <Input
              {...fields?.termination_date}
              updatedName={`${tab}.termination_date`}
              // values={values}
              tab={tab}
              error={errors?.[tab]?.termination_date ? "Field is required" : ""}
            />
            <Input
              {...fields?.owner_total_amount}
              updatedName={`${tab}.owner_total_amount`}
              // values={values}
              tab={tab}
              error={
                errors?.[tab]?.owner_total_amount ? "Field is required" : ""
              }
            />
            <div className="flex items-center gap-2">
              <Input
                {...fields?.owner_rest_amount}
                containerClassName="flex-1"
                updatedName={`${tab}.owner_rest_amount`}
                // values={values}
                tab={tab}
                error={
                  errors?.[tab]?.owner_rest_amount ? "Field is required" : ""
                }
              />
              <Select
                {...fields?.round_to}
                updatedName={`${tab}.round_to`}
                containerClassName="min-w-[120px] w-1/3"
                // values={values}
                tab={tab}
                error={errors?.[tab]?.round_to ? "Field is required" : ""}
                value={watch(`${tab}.round_to`)}
              />
            </div>
            <UniqueField
              {...fields?.revenue_account_id}
              updatedName={`${tab}.revenue_account_id`}
              table={"account"}
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.account : []}
              error={
                errors?.[tab]?.revenue_account_id ? "Field is required" : ""
              }
            />
            <Textarea
              {...fields?.revenue_note}
              containerClassName="flex-1"
              updatedName={`${tab}.revenue_note`}
              // values={values}
              tab={tab}
              error={errors?.[tab]?.revenue_note ? "Field is required" : ""}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Switch
                {...fields?.evacuation_request}
                updatedName={`${tab}.evacuation_request`}
                error={
                  errors?.[tab]?.evacuation_request ? "Field is required" : ""
                }
              />
              <Input
                {...fields?.evacuation_date}
                containerClassName="flex-1"
                updatedName={`${tab}.evacuation_date`}
                // values={values}
                readOnly={!watch(`${tab}.evacuation_request`)}
                tab={tab}
                error={
                  errors?.[tab]?.evacuation_date ? "Field is required" : ""
                }
              />
            </div>
            <Input
              {...fields?.fines}
              updatedName={`${tab}.fines`}
              // values={values}
              tab={tab}
              error={errors?.[tab]?.fines ? "Field is required" : ""}
            />
            <UniqueField
              {...fields?.fines_revenue_account_id}
              updatedName={`${tab}.fines_revenue_account_id`}
              table={"account"}
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.account : []}
              error={
                errors?.[tab]?.fines_revenue_account_id
                  ? "Field is required"
                  : ""
              }
            />
            <Textarea
              {...fields?.fine_note}
              updatedName={`${tab}.fine_note`}
              // values={values}
              tab={tab}
              error={errors?.[tab]?.fine_note ? "Field is required" : ""}
            />
          </div>
        </div>
        {/* clearance_printed */}
        {/* clearance_printed_date */}
        <div className="flex gap-4 justify-between items-end mt-6">
          <div className="flex gap-4 items-end">
            <Switch
              {...fields?.clearance_printed}
              updatedName={`${tab}.clearance_printed`}
              error={
                errors?.[tab]?.clearance_printed ? "Field is required" : ""
              }
              readOnly
            />
            {watch(`${tab}.clearance_printed_date`) ? (
              <Input
                {...fields?.clearance_printed_date}
                updatedName={`${tab}.clearance_printed_date`}
                // values={values}
                tab={tab}
                error={
                  errors?.[tab]?.clearance_printed_date
                    ? "Field is required"
                    : ""
                }
              />
            ) : null}
            <button className="text-sm py-2 rounded-md px-4 flex items-center gap-2 bg-green-500 text-white">
              Print Clearance
            </button>
          </div>
          <div className="flex gap-4 items-end">
            <button
              className="text-sm py-2 rounded-md px-4 flex items-center gap-2 bg-blue-500 text-white"
              onClick={() => setOpenFeesForm(true)}
            >
              Open Termination fees
            </button>
            <button
              disabled={!watch(`${tab}.terminated`) || !watch(`${tab}.id`)}
              className="text-sm py-2 rounded-md px-4 flex items-center gap-2 disabled:bg-gray-400 disabled:opacity-60 bg-orange-500 text-white"
              onClick={onClickRenew}
            >
              Renew Contract
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractTerminationForm;
