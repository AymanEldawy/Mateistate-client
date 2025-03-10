
import {
  Input,
  Select, Textarea
} from "Components/StructurePage/CustomFields";
import { UNIQUE_REF_TABLES } from "Helpers/constants";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { ContractStatus } from "./ContractStatus";
import UniqueFieldNormal from './../../CustomFields/UniqueFieldNormal';

const ContractFinancialForm = ({
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
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 w-full  items-start">
        <Input
          {...fieldsHash?.gov_number}
          updatedName={`contract.gov_number`}
          // values={values}
          tab={"contract"}
        />
        <Input
          {...{
            label: "prev_contracts_no",
            name: "contracts_number_prev",
            type: "number",
          }}
          updatedName={`contract.contracts_number_prev`}
          // values={values}
          readOnly={watch('contract.id')}
          tab={"contract"}
        />
        <Input
          {...fieldsHash?.issue_date}
          updatedName={`contract.issue_date`}
          required={false}
          tab={"contract"}
        />

      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-2 gap-x-6 mt-4 w-full  items-start">
        <div className="grid grid-cols-1 gap-y-2 gap-x-6 ">
          {["client_id", "building_id", `${assetType}_id`]?.map(
            (field, i) => {
              let name = field?.replace("_id", "");
              let table = name;
              if (field === "client_id") {
                name = UNIQUE_REF_TABLES.clients;
                table = "account";
              }
              return (
                <UniqueFieldNormal
                  key={i === 2 ? watch('contract.building_id') : `${field}-${i}-${number}`}
                  {...fieldsHash?.[field]}
                  updatedName={`contract.${field}`}
                  table={table}
                  CACHE_LIST={CACHE_LIST}
                  list={!!CACHE_LIST ? CACHE_LIST?.[name] : []}
                  readOnly={i === 2 && !watch('contract.building_id')}
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
        <div
          className={`grid grid-cols-1 gap-y-2 gap-x-6`}
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
                {...fieldsHash?.property_delivery_date}
                updatedName={`contract.property_delivery_date`}
                // values={values}
                tab={"contract"}
              />
            </>
          )}

          <UniqueFieldNormal
            key={'lessor'}
            {...fieldsHash?.lessor_id}
            updatedName={`contract.lessor_id`}
            table={'lessor'}
            CACHE_LIST={CACHE_LIST}
            list={CACHE_LIST?.lessor || []}
          // values={values}
          />

          {/* {watch(`contract.paid_type`) === 4 ? (
            <Button
              disabled={!contract_id}
              type="button"
              classes="w-full"
              title={"open installment panel"}
              onClick={() => globalButtonsActions(ACTIONS.OPEN_INSTALLMENT_FORM)}
            />
          ) : null} */}
        </div>

        <div className="flex flex-col gap-y-2 gap-x-6">
          <UniqueFieldNormal
            // containerClassName="w-[250px]"
            inputClassName={
              watch(`contract.revenue_account_id`) ? "bg-blue-100" : ""
            }
            {...fieldsHash?.revenue_account_id}
            key={`contract.revenue_account_id`}
            updatedName={`contract.revenue_account_id`}
            table={"account"}
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.account : []}
          />
          <UniqueFieldNormal
            // containerClassName="w-[250px]"
            inputClassName={
              watch(`contract.discount_account_id`) ? "bg-blue-100" : ""
            }
            {...fieldsHash?.discount_account_id}
            key={`contract.discount_account_id`}
            updatedName={`contract.discount_account_id`}
            table={"account"}
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.account : []}
          />
          <UniqueFieldNormal
            // containerClassName="w-[250px]"
            inputClassName={
              watch(`contract.insurance_account_id`) ? "bg-blue-100" : ""
            }
            {...fieldsHash?.insurance_account_id}
            key={`contract.insurance_account_id`}
            updatedName={`contract.insurance_account_id`}
            table={"account"}
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.account : []}
          />
          <UniqueFieldNormal
            // containerClassName="w-[250px]"
            inputClassName={
              watch(`contract.vat_account_id`) ? "bg-blue-100" : ""
            }
            {...fieldsHash?.vat_account_id}
            key={`contract.vat_account_id`}
            updatedName={`contract.vat_account_id`}
            table={"account"}
            CACHE_LIST={CACHE_LIST}
            list={!!CACHE_LIST ? CACHE_LIST?.account : []}
          />
        </div>
      </div>

      <div className={`grid grid-cols-2 md:grid-cols-3  gap-x-6 mb-2 mt-4`}>
        <div className="flex flex-col gap-y-2">
          {[
            "contract_value",
            "price_before_vat",
            "final_price",
          ]?.map((field, i) => (
            <Input
              key={`${field}-${i}-${number}`}
              {...fieldsHash?.[field]}
              updatedName={`contract.${field}`}
              // values={values}
              tab="contract"
              inputClassName={field === "final_price" ? "bg-blue-100" : ""}
              readOnly={field === "final_price" || field === 'price_before_vat'}
            />
          ))}
        </div>
        <div className="flex flex-col gap-y-2">
          {[
            "discount_rate",
            "vat_rate",
            "current_securing_value",
          ]?.map((field, i) => (
            <Input
              key={`${field}-${i}-${number}`}
              {...fieldsHash?.[field]}
              updatedName={`contract.${field}`}
              // values={values}
              tab="contract"
              inputClassName={field === "final_price" ? "bg-blue-100" : ""}
            />
          ))}
        </div>
        <div className="flex flex-col gap-y-2">
          {[
            "discount_value",
            "vat_value",
            "previous_securing",
          ]?.map((field, i) => (
            <Input
              key={`${field}-${i}-${number}`}
              {...fieldsHash?.[field]}
              updatedName={`contract.${field}`}
              // values={values}
              tab="contract"
              inputClassName={field === "final_price" ? "bg-blue-100" : ""}
              readOnly
            />
          ))}
        </div>
        <Select
          {...fieldsHash?.paid_type}
          updatedName={`contract.paid_type`}
          containerClassName="mt-1"
          // values={values}
          tab={"contract"}
          value={watch(`contract.paid_type`)}
        />
        <div />
        <ContractStatus status={watch('contract.status')} containerClassName="!mt-2 flex items-center justify-center !text-base w-full block text-center" />
      </div>
      <div className="flex gap-x-6 items-end">

        <Textarea
          {...fieldsHash?.note}
          mainContainerClassName="flex-1 w-full"
          updatedName={`contract.note`}
          tab={"contract"}
          value={watch(`contract.note`)}
        />
        {/* <ContractStatus status={watch('contract.status')} /> */}

      </div>

      {/* <Select
        {...fieldsHash?.status}
        updatedName={`contract.status`}
        // values={values}
        tab={"contract"}
        value={watch(`contract.status`)}
      /> */}
    </div>
  );
};


export default ContractFinancialForm