import React from "react";
import { Input } from "../../../CustomFields";
import { useTranslation } from "react-i18next";
import { VoucherStepsButton } from "../VoucherStepsButton";
import { Button } from "Components/Global/Button";

export const EntryFooter = ({
  fields,
  errors,
  values,
  isNewOne,
  number,
  goTo,
  maxLength
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex gap-4 mt-4">
        <Input
          readOnly
          {...fields["debit"]}
          value={values?.["debit"] || ""}
          className="border-0 !rounded-none !h-full"
          error={errors?.debit ? "Field is required" : ""}
        />
        <Input
          readOnly
          {...fields["credit"]}
          value={values?.["credit"] || ""}
          className="border-0 !rounded-none !h-full"
          error={errors?.credit ? "Field is required" : ""}
        />
        <Input
          readOnly
          {...fields["difference"]}
          value={values?.["debit"] || ""}
          className="border-0 !rounded-none !h-full"
          error={errors?.debit ? "Field is required" : ""}
        />
      </div>
      <div className="flex items-center mt-4 border-t pt-2 justify-between">
        <VoucherStepsButton number={number} goTo={goTo} maxLength={maxLength} isNewOne={isNewOne}/>
        <Button title="Submit" />
      </div>
    </div>
  );
};
