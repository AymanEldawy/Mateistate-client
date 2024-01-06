import { Input, Select, Switch, Textarea, UniqueField } from "../../CustomFields";

export const VoucherHead = ({ fields, isAccounting }) => {
  return (
    <div className="flex gap-4 lg:gap-8 justify-between">
      <div className="w-2/3">
        <div
          className={`grid gap-4  ${
            isAccounting ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          <Input {...fields["created_at"]} />
          {isAccounting ? null : (
            <>
              <Select {...fields["connect_with"]} />
              <UniqueField {...fields["connect_with_id"]} />
            </>
          )}
          <UniqueField {...fields["account_id"]} />
          <UniqueField {...fields["currency_id"]} />
          <Input {...fields["currency_val"]} />
          <Textarea {...fields["note"]} containerClassName="col-span-full" />
        </div>
        <div></div>
      </div>
      <div className="w-1/3 flex flex-col gap-4">
        <Switch {...fields["feedback"]} containerClassName="ltr:ml-auto rtl:mr-auto"/>
        {isAccounting ? null : <UniqueField {...fields["seller_id"]} containerClassName="mt-[10px]" />}
        <div className="grid grid-cols-2 gap-4">
          <Input readOnly {...fields["debit"]} />
          <Input readOnly {...fields["credit"]} />
        </div>
      </div>
    </div>
  );
};
