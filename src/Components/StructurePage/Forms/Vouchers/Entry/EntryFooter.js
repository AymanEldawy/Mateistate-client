import React from "react";
import { Input } from "../../../CustomFields";
import { useTranslation } from "react-i18next";
import { VoucherStepsButton } from "../VoucherStepsButton";
import { Button } from "Components/Global/Button";
import { Link } from "react-router-dom";
import { getCreatedFromUrl } from "Helpers/functions";

export const EntryFooter = ({
  fields,
  errors,
  values,
  isNewOne,
  number,
  goTo,
  maxLength,
  onlyView,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex gap-4 mt-4 items-end">
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
        {values?.created_from_id ? (
          <Link to={getCreatedFromUrl(values?.created_from, values?.created_from_id).href} className={`bg-teal-500 text-white ${getCreatedFromUrl(values?.created_from, values?.created_from_id).classes} py-1 px-2 text-sm ltr:ml-auto rtl:mr-auto rounded-md `}>Original</Link>
        ) : null}
      </div>
      {onlyView ? null : (
        <div className="flex items-center mt-4 border-t pt-2 justify-between">
          <VoucherStepsButton
            number={number}
            goTo={goTo}
            maxLength={maxLength}
            isNewOne={isNewOne}
          />
          <Button title="Submit" />
        </div>
      )}
    </div>
  );
};
