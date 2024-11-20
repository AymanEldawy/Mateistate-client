import { Button } from "Components/Global/Button";
import {
  Input,
  Select,
  Switch,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import { ACTIONS, UNIQUE_REF_TABLES } from "Helpers/constants";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { ContractStatus } from "./ContractStatus";
import { ViewEntry } from "Components/Global/ViewEntry";

export const ContractFinancialForm = ({
  fields,
  values,
  errors,
  CACHE_LIST,
  globalButtonsActions,
  contract_id,
  assetType,
  number,
  contractType,
}) => {
  const { watch } = useFormContext();

  const fieldsHash = useMemo(() => {
    let hash = {};
    for (const field of fields) {
      hash[field?.name] = field;
    }
    return hash;
  }, [fields]);

  return (
    <div className="">
      <div className="grid md:grid-cols-2 items-start justify-between">
        <div className="grid grid-cols-2 items-center gap-4">
          {watch("contract.contracts_number_prev") ? (
            <Input
              {...{
                label: "prev_contracts_number",
                name: "contracts_number_prev",
                type: "number",
              }}
              updatedName={`contract.contracts_number_prev`}
              // values={values}
              readOnly
              tab={"contract"}
            />
          ) : null}
          <Input
            {...fieldsHash?.gov_number}
            updatedName={`contract.gov_number`}
            // values={values}
            tab={"contract"}
          />
        </div>
        <div className="flex items-end gap-4 justify-end">
          <Switch
            {...fieldsHash?.feedback}
            updatedName={`contract.feedback`}
            // values={values}
          />
          <Switch
            {...fieldsHash?.lawsuit}
            updatedName={`contract.lawsuit`}
            // values={values}
          />
          <Switch
            {...fieldsHash?.gen_entries}
            updatedName={`contract.gen_entries`}
            // values={values}
          />
          {contract_id && watch(`contract.gen_entries`) ? (
            <ViewEntry id={contract_id} />
          ) : null}
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4  mt-8">
          {["client_id", "building_id", `${assetType}_id`, "lessor_id"]?.map(
            (field, i) => {
              let name = field?.replace("_id", "");
              let table = name;
              if (field === "client_id") {
                name = UNIQUE_REF_TABLES.clients;
                table = "account";
              }
              return (
                <UniqueField
                  key={`${field}-${i}-${number}`}
                  {...fieldsHash?.[field]}
                  updatedName={`contract.${field}`}
                  table={table}
                  CACHE_LIST={CACHE_LIST}
                  list={!!CACHE_LIST ? CACHE_LIST?.[name] : []}
                  // values={values}
                />
              );
            }
          )}
          <Input
            {...fieldsHash?.description}
            updatedName={`contract.description`}
            containerClassName=" col-span-full"
            // values={values}
            tab={"contract"}
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div />
          <div className="flex flex-col gap-4 mt-8">
            <UniqueField
              // containerClassName="w-[250px]"
              inputClassName={
                watch(`contract.revenue_account_id`) ? "bg-blue-100" : ""
              }
              {...fieldsHash?.revenue_account_id}
              updatedName={`contract.revenue_account_id`}
              table={"account"}
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.account : []}
            />
            <UniqueField
              // containerClassName="w-[250px]"
              inputClassName={
                watch(`contract.discount_account_id`) ? "bg-blue-100" : ""
              }
              {...fieldsHash?.discount_account_id}
              updatedName={`contract.discount_account_id`}
              table={"account"}
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.account : []}
            />
            <UniqueField
              // containerClassName="w-[250px]"
              inputClassName={
                watch(`contract.insurance_account_id`) ? "bg-blue-100" : ""
              }
              {...fieldsHash?.insurance_account_id}
              updatedName={`contract.insurance_account_id`}
              table={"account"}
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.account : []}
            />
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-4 gap-8 items-end mt-8`}>
        {[
          "contract_value",
          "discount_rate",
          "discount_value",
          "final_price",
        ]?.map((field, i) => (
          <Input
            key={`${field}-${i}-${number}`}
            {...fieldsHash?.[field]}
            updatedName={`contract.${field}`}
            // values={values}
            tab="contract"
            inputClassName={field === "final_price" ? "bg-blue-100" : ""}
            readOnly={field === "final_price"}
          />
        ))}
      </div>
      <div className={`grid grid-cols-4 gap-8 items-end mt-8`}>
        <Select
          {...fieldsHash?.status}
          updatedName={`contract.status`}
          // values={values}
          tab={"contract"}
          value={watch(`contract.status`)}
        />
        {[
          "previous_securing",
          "current_securing_percentage",
          "current_securing_value",
        ]?.map((field, i) => (
          <Input
            key={`${field}-${i}-${number}`}
            {...fieldsHash?.[field]}
            updatedName={`contract.${field}`}
            // values={values}
            tab="contract"
          />
        ))}
      </div>
      <div
        className={`grid ${
          watch(`contract.paid_type`) === 4 && contractType === "rent"
            ? "grid-cols-5"
            : "grid-cols-4"
        }  gap-4 items-end mt-8`}
      >
        {contractType === "rent" ? (
          <>
            <Select
              {...fieldsHash?.contract_duration}
              updatedName={`contract.contract_duration`}
              // values={values}
              tab={"contract"}
              value={watch(`contract.contract_duration`)}
            />
            <Input
              {...fieldsHash?.start_duration_date}
              updatedName={`contract.start_duration_date`}
              // values={values}
              tab={"contract"}
            />
            <Input
              {...fieldsHash?.end_duration_date}
              updatedName={`contract.end_duration_date`}
              // values={values}
              tab={"contract"}
              readOnly={watch(`contract.contract_duration`) < 4}
            />
          </>
        ) : (
          <>
            <Input
              {...fieldsHash?.issue_date}
              updatedName={`contract.issue_date`}
              // values={values}
              tab={"contract"}
            />
            <Input
              {...fieldsHash?.property_delivery_date}
              updatedName={`contract.property_delivery_date`}
              // values={values}
              tab={"contract"}
            />
          </>
        )}
        <Select
          {...fieldsHash?.paid_type}
          updatedName={`contract.paid_type`}
          // values={values}
          tab={"contract"}
          value={watch(`contract.paid_type`)}
        />
        {watch(`contract.paid_type`) === 4 ? (
          <Button
            disabled={!contract_id}
            type="button"
            classes="w-full"
            title={"open installment panel"}
            onClick={() => globalButtonsActions(ACTIONS.OPEN_INSTALLMENT_FORM)}
          />
        ) : null}
      </div>
      <Textarea
        {...fieldsHash?.note}
        containerClassName="mt-4"
        updatedName={`contract.note`}
        tab={"contract"}
        value={watch(`contract.note`)}
      />
      <ContractStatus contract_id={contract_id} tab={"contract"} />
    </div>
  );
};
