import { useEffect } from "react";
import { CurrencyFieldGroup, Input, Textarea } from "../../../CustomFields";
import { useFormContext } from "react-hook-form";

export const EntryHead = ({
  fields,
  errors,
  values,
  CACHE_LIST,
  number,
  isNewOne,
}) => {
  const { setValue } = useFormContext();
  
  useEffect(() => {
    if (!number) return;
    setValue("number", number);
  }, [isNewOne, number]);

  return (
    <div className="">
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4`}>
        <Input
          value={number}
          readOnly={!isNewOne}
          {...fields["number"]}
          className="border-0 !rounded-none !h-full"
          containerClassName="!flex-col !gap-1"
        />
        {/* <div className="flex gap-2">
          <p
            className={`border h-[39px] bg-blue-100 dark:bg-[#444] rounded p-1 `}
          >
            {number}
          </p>
        </div> */}
        <Input
          {...fields["created_at"]}
          value={values?.created_at || ""}
          className="border-0 !rounded-none !h-full"
          containerClassName="!flex-col !gap-1"
        />
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
      </div>
      <Textarea
        {...fields["note"]}
        containerClassName="col-span-full mt-4"
        value={values?.note || ""}
        labelClassName={"h-6"}
        className="border rounded-md !h-full"
      />
    </div>
  );
};
