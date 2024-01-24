import React from "react";
import { Input, Switch, UploadFile } from "../../CustomFields";
import { useTranslation } from "react-i18next";

export const VoucherFooter = ({ fields, errors, values, isNewOne }) => {
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
              label=""
              type="number"
              value={values?.debit_amount || ""}
              className="border-0 !rounded-none !h-full"
              name="debit_amount"
              error={errors?.debit_amount ? "Field is required" : ""}
            />
          </div>
          <div className="w-1/3">
            <Input
              readOnly
              {...fields?.credit_amount}
              label=""
              type="number"
              value={values?.credit_amount || ""}
              className="border-0 !rounded-none !h-full"
              name="credit_amount"
              error={errors?.credit_amount ? "Field is required" : ""}
            />
          </div>
          <div className="w-1/3 whitespace-nowrap">Total current amount</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-1/3">
            <Input
              readOnly
              {...fields?.debit_total}
              label=""
              type="number"
              value={values?.debit_total || ""}
              className="border-0 !rounded-none !h-full"
              name="debit_total"
              error={errors?.debit_total ? "Field is required" : ""}
            />
          </div>
          <div className="w-1/3">
            <Input
              readOnly
              {...fields?.credit_total}
              label=""
              type="number"
              value={values?.credit_total || ""}
              className="border-0 !rounded-none !h-full"
              name="credit_total"
              error={errors?.credit_total ? "Field is required" : ""}
            />
          </div>
          <div className="w-1/3">Final amount</div>
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
            error={errors?.picture?.type}
          />
        )}
        <Switch
          {...fields?.gen_entires}
          containerClassName="!flex-row gap-2"
          defaultChecked={values?.gen_entires}
          values={values}
          value={values?.gen_entires || ""}
          name="gen_entries"
          label="Generate a constraint"
          error={errors?.gen_entries ? "Field is required" : ""}
        />
      </div>
    </div>
  );
};
