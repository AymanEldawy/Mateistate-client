import {
  CurrencyFieldGroup,
  Input,
  Select,
  Switch,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { ViewEntry } from "Components/Global/ViewEntry";

export const ReservationPropertyFields = ({
  fields,
  CACHE_LIST,
  errors,
  selectedProperty,
}) => {
  const { watch } = useFormContext();

  const fieldsHash = useMemo(() => {
    let hash = {};
    for (const field of fields) {
      hash[field?.name] = field;
    }
    return hash;
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        {/* {["account_id", "building_id"]?.map((field) => {
          let name = field?.replace(/_id/, "");
          return (
            <UniqueField
              {...fieldsHash?.[field]}
              CACHE_LIST={CACHE_LIST}
              list={!!CACHE_LIST ? CACHE_LIST?.[name] : []}
            />
          );
        })} */}
        <UniqueField
          {...{
            ...fieldsHash?.account_id,
          }}
          CACHE_LIST={CACHE_LIST}
          list={CACHE_LIST?.account}
        />
        <UniqueField
          {...{
            ...fieldsHash?.building_id,
          }}
          CACHE_LIST={CACHE_LIST}
          list={CACHE_LIST.building}
        />
        <Select
          {...fieldsHash?.property_type}
        />
        <UniqueField
          {...{
            ...fieldsHash?.property_id,
            ref_name: selectedProperty?.name,
          }}
          CACHE_LIST={CACHE_LIST}
          list={selectedProperty?.list}
        />
        {["created_at", "book_date", "end_book_date"]?.map((field) => (
          <Input
            key={field}
            {...fieldsHash?.[field]}
          />
        ))}

        <div className="flex gap-2 items-end">
          <Switch
            {...fieldsHash?.has_payment}
          />
          {watch("id") && watch("has_payment") ? (
            <ViewEntry id={watch("id")} />
          ) : null}
        </div>
        <Switch
          {...fieldsHash?.reservation_expired}
        />
      </div>
      {watch("has_payment") ? (
        <div className="border dark:border-dark-border bg-gray-50 dark:bg-dark-bg p-4 rounded-xl mt-8 relative">
          <div className="absolute -top-5 ltr:left-6 rtl:right-6 flex items-center gap-4">
            <h3 className="text-lg font-semibold border dark:border-dark-border rounded-xl min-w-[140px] text-center bg-gray-100 dark:bg-dark-bg px-4 py-2 text-blue-500">
              Payment
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Input
              {...fieldsHash?.payment_amount}
            />

            <CurrencyFieldGroup
              {...fieldsHash?.currency_id}
              list={!!CACHE_LIST ? CACHE_LIST?.currency : []}
            />
            {[
              "debit_account_id",
              "credit_account_id",
              "debit_cost_center_id",
              "credit_cost_center_id",
            ]?.map((field) => {
              let name =
                field?.indexOf("account") !== -1 ? "account" : "cost_center";
              return (
                <UniqueField
                  key={field}
                  {...fieldsHash?.[field]}
                  CACHE_LIST={CACHE_LIST}
                  list={!!CACHE_LIST ? CACHE_LIST?.[name] : []}
                />
              );
            })}
            <Textarea
              {...fieldsHash?.note}
              updatedName={`note`}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
