import UniqueFieldGroup from "Components/StructurePage/CustomFields/UniqueFieldGroup";
import {
  CheckboxField,
  CurrencyFieldGroup,
  Input,
  Switch,
  Textarea,
  UniqueField,
} from "../../../CustomFields";

export const VoucherHead = ({
  fields,
  errors,
  values,
  CACHE_LIST,
  PATTERN_SETTINGS,
}) => {
  return (
    <div>
      <div className={`grid gap-4 grid-cols-2 md:grid-cols-3`}>
        <div className="flex gap-2 items-end justify-between ltr:pr-4 rtl:pl-4">
          <Input
            {...fields["number"]}
            type="text"
            readOnly
            value={values?.number || ""}
            className="border-0 !rounded-none !h-full"
            name="number"
            // labelClassName="!w-[70px]"
            // inputClassName="w-[80px]"
            containerClassName="!flex-col !gap-1"
          />
          <CheckboxField
            {...fields["feedback"]}
            value={values?.feedback || ""}
            className="border-0 !rounded-none !h-full"
            name="feedback"
          />
        </div>
        <Input
          {...fields["created_at"]}
          type="date"
          value={values?.created_at || ""}
          className="border-0 !rounded-none !h-full"
          name="created_at"
          // labelClassName="!w-[70px]"
          containerClassName="!flex-col !gap-1"
        />
        <UniqueField
          {...fields["account_id"]}
          className="min-w-[170px] border-0 !rounded-none !h-full"
          table={"account"}
          name="account_id"
          CACHE_LIST={CACHE_LIST}
          list={CACHE_LIST?.account}
          value={values?.account_id || ""}
          containerClassName="!flex-col !gap-1"
        />
        {PATTERN_SETTINGS?.show_contract_field ? (
          <UniqueFieldGroup value={values?.connect_with} containerClassName="!flex-col !gap-1 !items-start" />
        ) : null}
        {PATTERN_SETTINGS?.show_currency ? (
          <CurrencyFieldGroup
            {...fields["currency_id"]}
            className="min-w-[170px] border-0 !rounded-none !h-full"
            table={"currency"}
            name="currency_id"
            CACHE_LIST={CACHE_LIST}
            list={CACHE_LIST?.currency}
            value={values?.currency_id || ""}
            containerClassName="!flex-col !gap-1"
          />
        ) : null}
      </div>
      <Textarea
        {...fields["note"]}
        containerClassName="col-span-full"
        value={values?.note || ""}
        labelClassName={"mb-2 h-6"}
        className="border rounded-md !h-full w-full"
        name="note"
      />
    </div>
  );
};
