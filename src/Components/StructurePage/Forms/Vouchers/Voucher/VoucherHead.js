import UniqueFieldGroup from "Components/StructurePage/CustomFields/UniqueFieldGroup";
import {
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
    <div className={`grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3`}>
      <div className="flex gap-4 items-center">
        <Switch
          {...fields["feedback"]}
          value={values?.feedback || ""}
          className="border-0 !rounded-none !h-full"
          name="feedback"
        />
        {/* <Input
            {...fields["number"]}
            type="text"
            readOnly
            value={values?.number || ""}
            className="border-0 !rounded-none !h-full"
            containerClassName="flex-1"
            name="number"
          /> */}
      </div>
      <Input
        {...fields["created_at"]}
        type="date"
        value={values?.created_at || ""}
        className="border-0 !rounded-none !h-full"
        name="created_at"
      />
      <UniqueField
        {...fields["account_id"]}
        className="min-w-[170px] border-0 !rounded-none !h-full"
        table={"account"}
        name="account_id"
        CACHE_LIST={CACHE_LIST}
        list={CACHE_LIST?.account}
        value={values?.account_id || ""}
      />
      {PATTERN_SETTINGS?.show_contract_field ? (
        <>
          <UniqueFieldGroup
            value={values?.connect_with}
          />
          {/* <UniqueField {...fields["connect_with_id"]} /> */}
        </>
      ) : null}
      {PATTERN_SETTINGS?.show_currency ? (
        <>
          <CurrencyFieldGroup
            {...fields["currency_id"]}
            className="min-w-[170px] border-0 !rounded-none !h-full"
            table={"currency"}
            name="currency_id"
            CACHE_LIST={CACHE_LIST}
            list={CACHE_LIST?.currency}
            value={values?.currency_id || ""}
          />
        </>
      ) : null}
      <Textarea
        {...fields["note"]}
        containerClassName="col-span-full"
        value={values?.note || ""}
        labelClassName={"mb-2 h-6"}
        className="border rounded-md !h-full"
        name="note"
      />
    </div>
  );
};
