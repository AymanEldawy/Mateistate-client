import UniqueFieldGroup from "Components/StructurePage/CustomFields/UniqueFieldGroup";
import {
  CurrencyFieldGroup,
  Input,
  Select,
  Switch,
  Textarea,
  UniqueField,
} from "../../CustomFields";

export const VoucherHead = ({
  fields,
  isPaymentVoucher,
  errors,
  values,
  CACHE_LIST,
  PATTERN_SETTINGS,
}) => {
  return (
    <div className="flex gap-4 lg:gap-8 justify-between">
      <div className="w-2/3">
        <div
          className={`grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3`}
        >
          <Input
            {...fields["created_at"]}
            type="date"
            value={values?.created_at || ""}
            className="border-0 !rounded-none !h-full"
            name="created_at"
            error={errors?.created_at ? "Field is required" : ""}
          />
          <UniqueField
            {...fields["account_id"]}
            className="min-w-[170px] border-0 !rounded-none !h-full"
            table={"account"}
            name="account_id"
            CACHE_LIST={CACHE_LIST}
            error={errors?.account_id ? "Field is required" : ""}
            list={CACHE_LIST?.account}
            value={values?.account_id || ""}
          />
          {PATTERN_SETTINGS?.show_contract_field ? (
            <>
              <UniqueFieldGroup
                value={values?.connect_with}
                error={errors?.connect_with ? "Field is required" : ""}
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
                error={errors?.currency_id ? "Field is required" : ""}
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
            error={errors?.note ? "Field is required" : ""}
          />
        </div>
        <div></div>
      </div>
      <div className="w-1/3 flex flex-col gap-4">
        <div className="grid gap-4 grid-cols-2">
          <Input
            {...fields["number"]}
            type="text"
            readOnly
            value={values?.number || ""}
            className="border-0 !rounded-none !h-full"
            name="number"
            error={errors?.number ? "Field is required" : ""}
          />
          <Switch
            {...fields["feedback"]}
            // containerClassName="col-span-full"
            value={values?.feedback || ""}
            className="border-0 !rounded-none !h-full"
            name="feedback"
            error={errors?.feedback ? "Field is required" : ""}
          />
        </div>
        {/* <UniqueField
          {...fields["seller_id"]}
          containerClassName="mt-[10px]"
          className="min-w-[170px] border-0 !rounded-none !h-full"
          table={"seller"}
          name="seller_id"
          CACHE_LIST={CACHE_LIST}
          error={errors?.seller_id ? "Field is required" : ""}
          list={CACHE_LIST?.seller}
          value={values?.seller_id || ""}
        /> */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col gap-1">
            Debit:{" "}
            <input
              readOnly
              className="max-w-fit border read-only:bg-blue-100 dark:read-only:bg-[#444] rounded p-1"
            />
          </label>
          <label className="flex flex-col gap-1">
            Credit:{" "}
            <input
              readOnly
              className="max-w-fit border read-only:bg-blue-100 dark:read-only:bg-[#444] rounded p-1"
            />
          </label>
          {/* <Input
            readOnly
            // {...fields["debit"]}
            labelClassName="hidden"
            type="number"
            // value={values?.debit || ""}
            className="border-0 !rounded-none !h-full"
            // name="debit"
            // error={errors?.debit ? "Field is required" : ""}
          />
          <Input
            readOnly
            // {...fields["credit"]}
            labelClassName="hidden"
            type="number"
            // // value={values?.credit || ""}
            className="border-0 !rounded-none !h-full"
            // name="credit"
            // // error={errors?.credit ? "Field is required" : ""}
          /> */}
        </div>
      </div>
    </div>
  );
};
