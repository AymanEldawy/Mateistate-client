import React from "react";
import { CheckboxField, Input, Switch, UploadFile } from "../../../CustomFields";
import { useTranslation } from "react-i18next";

export const VoucherFooter = ({
  fields,
  errors,
  values,
  isNewOne,
  PATTERN_SETTINGS,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-end">
      <div className="w-1/3 flex flex-col mt-4 capitalize">
        <div className="flex">
          <div className="w-1/3 text-center">{t("debit")}</div>
          <div className="w-1/3 text-center">{t("credit")}</div>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-1/3">
            <Input
              readOnly
              {...fields?.debit_amount}
              labelClassName="hidden"
              type="number"
              value={values?.debit_amount || ""}
              name="debit_amount"
            />
          </div>
          <div className="w-1/3">
            <Input
              readOnly
              {...fields?.credit_amount}
              labelClassName="hidden"
              type="number"
              value={values?.credit_amount || ""}
              name="credit_amount"
            />
          </div>
          <div className="w-1/3 whitespace-nowrap">Total current amount</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-1/3">
            <Input
              readOnly
              {...fields?.debit_total}
              labelClassName="hidden"
              type="number"
              value={values?.debit_total || ""}
              name="debit_total"
            />
          </div>
          <div className="w-1/3">
            <Input
              readOnly
              {...fields?.credit_total}
              labelClassName="hidden"
              type="number"
              value={values?.credit_total || ""}
              name="credit_total"
            />
          </div>
          <div className="w-1/3 whitespace-nowrap">Final amount</div>
        </div>
      </div>
      <div className="flex gap-4 items-end">
        {isNewOne ? null : (
          <UploadFile
            name="picture"
            containerClassName="w-[160px]"
            values={values}
            label="Pictures"
            multiple
          />
        )}
        {PATTERN_SETTINGS?.gen_entires ? (
          <CheckboxField
            {...fields?.gen_entires}
            containerClassName="!flex-row gap-2"
            defaultChecked={values?.gen_entires}
            values={values}
            value={values?.gen_entires || ""}
            name="gen_entries"
            label="Generate a constraint"
          />
        ) : null}
      </div>
    </div>
  );
};
