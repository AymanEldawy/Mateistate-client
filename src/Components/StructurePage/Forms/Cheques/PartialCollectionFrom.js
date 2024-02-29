import {
  CurrencyFieldGroup,
  Input,
  Switch,
} from "Components/StructurePage/CustomFields";
import withListBookView from "HOC/withListBookView";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import React, { useMemo } from "react";
import { useFormContext } from "react-hook-form";

//  feedback
//  created_at
//  amount_obtained
//  debit_account_id
//  credit_account_id
//  cost_center_id
//  note

//  currency_id

//  commission_value
//  commission_percentage
//  commission_debit_id
//  commission_credit_id
//  commission_cost_center_id
//  commission_note

//  accounting_voucher_main_data_id

//  total_value
//  total_sum
//  total_sum_prev
//  rest

export const PartialCollectionFrom = withListBookView(() => {
  const { errors } = useFormContext();
  const fields = useMemo(() => {
    let list = getFormByTableName("op_partial_collection");
    let hash = {};
    for (const field of list) {
      console.log("🚀 ~ fields ~ list:", field?.name);
      hash[field?.name] = field;
    }
    return hash;
  }, []);

  return (
    <div>
      <div className="flex gap-4 items-center">
        <Switch
          {...fields?.feedback}
          updatedName={`feedback`}
          error={errors?.feedback ? "Field is required" : ""}
        />
        <Switch
          {...fields?.gen_entries}
          updatedName={`gen_entries`}
          error={errors?.gen_entries ? "Field is required" : ""}
        />
        <Input
          {...fields?.created_at}
          updatedName={`feedback`}
          error={errors?.created_at ? "Field is required" : ""}
        />
        <CurrencyFieldGroup
          {...fields?.currency_id}
          updatedName={`currency_id`}
          error={errors?.currency_id ? "Field is required" : ""}
        />
      </div>
      <div className="grid grid-cols-2 gap-8 xl:gap-14">
        <div>
          <div className="flex items-end gap-4"></div>
          {/* fields */}
        </div>
        <div></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});
