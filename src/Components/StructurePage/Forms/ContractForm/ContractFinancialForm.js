import { Button } from "Components/Global/Button";
import {
  Input,
  Select,
  Switch,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import { ACTIONS, UNIQUE_REF_TABLES } from "Helpers/constants";
import React, { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { ContractStatus } from "./ContractStatus";
import { EyeIcon } from "Components/Icons";
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
              error={
                errors?.contract?.contracts_number_prev
                  ? "Field is required"
                  : ""
              }
            />
          ) : null}
          <Input
            {...fieldsHash?.gov_number}
            updatedName={`contract.gov_number`}
            // values={values}
            tab={"contract"}
            error={errors?.contract?.gov_number ? "Field is required" : ""}
          />
        </div>
        <div className="flex items-end gap-4 justify-end">
          <Switch
            {...fieldsHash?.feedback}
            updatedName={`contract.feedback`}
            // values={values}
            error={errors?.contract?.feedback ? "Field is required" : ""}
          />
          <Switch
            {...fieldsHash?.lawsuit}
            updatedName={`contract.lawsuit`}
            // values={values}
            error={errors?.contract?.lawsuit ? "Field is required" : ""}
          />
          <Switch
            {...fieldsHash?.gen_entries}
            updatedName={`contract.gen_entries`}
            // values={values}
            error={errors?.contract?.gen_entries ? "Field is required" : ""}
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
                  error={errors?.contract?.[field] ? "Field is required" : ""}
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
            error={errors?.contract?.description ? "Field is required" : ""}
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
              // values={values}
              error={
                errors?.contract?.revenue_account_id ? "Field is required" : ""
              }
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
              // values={values}
              error={
                errors?.contract?.discount_account_id ? "Field is required" : ""
              }
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
              // values={values}
              error={
                errors?.contract?.insurance_account_id
                  ? "Field is required"
                  : ""
              }
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
            error={errors?.contract?.[field] ? "Field is required" : ""}
          />
        ))}
      </div>
      <div className={`grid grid-cols-4 gap-8 items-end mt-8`}>
        <Select
          {...fieldsHash?.status}
          updatedName={`contract.status`}
          // values={values}
          tab={"contract"}
          error={errors?.contract?.status ? "Field is required" : ""}
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
            error={errors?.contract?.[field] ? "Field is required" : ""}
          />
        ))}
      </div>
      <div
        className={`grid ${
          watch(`contract.paid_type`) === 4 ? "grid-cols-5" : "grid-cols-4"
        }  gap-4 items-end mt-8`}
      >
        <Select
          {...fieldsHash?.contract_duration}
          updatedName={`contract.contract_duration`}
          // values={values}
          tab={"contract"}
          error={errors?.contract?.contract_duration ? "Field is required" : ""}
          value={watch(`contract.contract_duration`)}
        />
        <Input
          {...fieldsHash?.start_duration_date}
          updatedName={`contract.start_duration_date`}
          // values={values}
          tab={"contract"}
          error={
            errors?.contract?.start_duration_date ? "Field is required" : ""
          }
        />
        <Input
          {...fieldsHash?.end_duration_date}
          updatedName={`contract.end_duration_date`}
          // values={values}
          tab={"contract"}
          error={errors?.contract?.end_duration_date ? "Field is required" : ""}
          readOnly={watch(`contract.contract_duration`) < 4}
        />

        <Select
          {...fieldsHash?.paid_type}
          updatedName={`contract.paid_type`}
          // values={values}
          tab={"contract"}
          error={errors?.contract?.paid_type ? "Field is required" : ""}
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
        error={errors?.contract?.note ? "Field is required" : ""}
        value={watch(`contract.note`)}
      />
      <ContractStatus contract_id={contract_id} tab={"contract"} />
    </div>
  );
};
