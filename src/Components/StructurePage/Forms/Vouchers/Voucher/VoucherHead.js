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
  PATTERN_SETTINGS,
}) => {
  return (
    <div>
      <div className={`grid gap-y-2 gap-x-8 grid-cols-2 md:grid-cols-3`}>
        <Input
          {...fields["internal_number"]}
          type="text"
          value={values?.internal_number || ""}
          name="internal_number"
        />
        <Input
          {...fields["created_at"]}
          type="date"
          value={values?.created_at || ""}
          name="created_at"
          withPortal
        />
        <UniqueField
          {...fields["account_id"]}
          table={"account"}
          name="account_id"
          value={values?.account_id || ""}
        />
        {PATTERN_SETTINGS?.show_contract_field ? (
          <UniqueFieldGroup value={values?.connect_with} />
        ) : null}
        {PATTERN_SETTINGS?.show_currency ? (
          <CurrencyFieldGroup
            {...fields["currency_id"]}
            table={"currency"}
            name="currency_id"
            value={values?.currency_id || ""}
          />
        ) : null}
      </div>
      <Textarea
        {...fields["note"]}
        containerClassName="col-span-full"
        value={values?.note || ""}
        // labelClassName={" h-6"}
        className="border rounded-md !h-full w-full"
        name="note"
      />
    </div>
  );
};
