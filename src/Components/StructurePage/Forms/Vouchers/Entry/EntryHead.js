import { useEffect } from "react";
import { CurrencyFieldGroup, Input, Textarea } from "../../../CustomFields";
import { useFormContext } from "react-hook-form";

export const EntryHead = ({
  fields,
  values,
  onlyView
}) => {

  return (
    <div className="">
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4`}>
        <Input
          {...fields["internal_number"]}
          className="border-0 !rounded-none !h-full"
          containerClassName="!flex-col !gap-1"
          required={false}
        />
        <Input
          {...fields["created_at"]}
          value={values?.created_at || ""}
          className="border-0 !rounded-none !h-full"
          containerClassName="!flex-col !gap-1"
          readOnly={onlyView}
        />
        <CurrencyFieldGroup
          {...fields["currency_id"]}
          className="min-w-[170px] border-0 !rounded-none !h-full"
          table={"currency"}
          name="currency_id"
          value={values?.currency_id || ""}
          containerClassName={`!flex-col !gap-1 ${onlyView && ' pointer-events-none'} `}
          readOnly={onlyView}

        />
      </div>
      <Textarea
        {...fields["note"]}
        containerClassName="col-span-full mt-1"
        value={values?.note || ""}
        labelClassName={"h-6"}
        className="border rounded-md !h-full"
        readOnly={onlyView}

      />
    </div>
  );
};
