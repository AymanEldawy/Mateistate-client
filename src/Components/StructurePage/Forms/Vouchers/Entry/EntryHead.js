import {
  CurrencyFieldGroup,
  Input,
  Select,
  Switch,
  Textarea,
  UniqueField,
} from "../../../CustomFields";

export const EntryHead = ({ fields, errors, values, CACHE_LIST }) => {
  return (
    <div className="">
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4`}>
        <Input
          readOnly
          {...fields["number"]}
          className="border-0 !rounded-none !h-full"
          error={errors?.number ? "Field is required" : ""}
        />
        <Input
          {...fields["created_at"]}
          value={values?.created_at || ""}
          className="border-0 !rounded-none !h-full"
          error={errors?.created_at ? "Field is required" : ""}
        />
        <CurrencyFieldGroup
          {...fields["currency_id"]}
          className="min-w-[170px] border-0 !rounded-none !h-full"
          table={"currency"}
          name="currency_id"
          CACHE_LIST={CACHE_LIST}
          error={errors?.currency_id ? "Field is required" : ""}
          list={CACHE_LIST?.currency}
          value={values?.currency_id || ""}
        />
      </div>
      <Textarea
        {...fields["note"]}
        containerClassName="col-span-full mt-4"
        value={values?.note || ""}
        labelClassName={"h-6"}
        className="border rounded-md !h-full"
        error={errors?.note ? "Field is required" : ""}
      />
    </div>
  );
};
