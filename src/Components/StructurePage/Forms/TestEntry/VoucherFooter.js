import React from "react";
import { Input } from "../../CustomFields";
import { useTranslation } from "react-i18next";

export const VoucherFooter = ({
  fields,
  errors,
  values,
  handleInputChange,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="w-1/3 flex flex-col mt-4 capitalize">
        <div className="flex">
          <div className="w-1/3 text-center">{t("debit")}</div>
          <div className="w-1/3 text-center">{t("credit")}</div>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-1/3">
            <Input
              readOnly
              {...fields["debit"]}
              label=""
              type="number"
              value={values?.["debit"] || ""}
              className="border-0 !rounded-none !h-full"
              name="debit"
              error={errors?.debit ? "Field is required" : ""}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-1/3">
            <Input
              readOnly
              {...fields["credit"]}
              label=""
              type="number"
              value={values?.["credit"] || ""}
              className="border-0 !rounded-none !h-full"
              name="credit"
              error={errors?.credit ? "Field is required" : ""}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-1/3 whitespace-nowrap">Total current amount</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-1/3">
            <Input
              readOnly
              {...fields["debit"]}
              label=""
              type="number"
              value={values?.["debit"] || ""}
              className="border-0 !rounded-none !h-full"
              name="debit"
              error={errors?.debit ? "Field is required" : ""}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-1/3">
            <Input
              readOnly
              {...fields["credit"]}
              label=""
              type="number"
              value={values?.["credit"] || ""}
              className="border-0 !rounded-none !h-full"
              name="credit"
              error={errors?.credit ? "Field is required" : ""}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="w-1/3">Final amount</div>
        </div>
      </div>
    </div>
  );
};
