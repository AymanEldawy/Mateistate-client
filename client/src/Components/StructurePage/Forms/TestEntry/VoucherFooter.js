import React from "react";
import { Input } from "../../CustomFields";
import { useTranslation } from "react-i18next";

export const VoucherFooter = ({ fields }) => {
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
            <Input readOnly {...fields["debit"]} labelClassName="hidden" />
          </div>
          <div className="w-1/3">
            <Input readOnly {...fields["credit"]} labelClassName="hidden" />
          </div>
          <div className="w-1/3 whitespace-nowrap">Total current amount</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-1/3">
            <Input readOnly {...fields["debit"]} labelClassName="hidden" />
          </div>
          <div className="w-1/3">
            <Input readOnly {...fields["credit"]} labelClassName="hidden" />
          </div>
          <div className="w-1/3">Final amount</div>
        </div>
      </div>
    </div>
  );
};
