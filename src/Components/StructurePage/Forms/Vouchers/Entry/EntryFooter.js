import React from "react";
import { Input } from "../../../CustomFields";
import { useTranslation } from "react-i18next";
import { FormStepPagination } from "../../../../Global/FormStepPagination";
import { Button } from "Components/Global/Button";
import { Link } from "react-router-dom";
import { getCreatedFromUrl } from "Helpers/functions";
import { useFormContext } from "react-hook-form";

export const EntryFooter = ({ fields, errors, values }) => {
  const { t } = useTranslation();
  const { watch } = useFormContext();

  return (
    <div>
      <div className="flex gap-4 mt-4 items-end">
        <Input
          readOnly
          {...fields["debit"]}
          value={values?.["debit"] || ""}
          className="border-0 !rounded-none !h-full"
          containerClassName="!flex-col !gap-1"
        />
        <Input
          readOnly
          {...fields["credit"]}
          value={values?.["credit"] || ""}
          className="border-0 !rounded-none !h-full"
          containerClassName="!flex-col !gap-1"
        />
        <Input
          readOnly
          {...fields["difference"]}
          value={values?.["debit"] || ""}
          className="border-0 !rounded-none !h-full"
          containerClassName="!flex-col !gap-1"
        />
        {values?.created_from_id ? (
          <Link
            to={
              getCreatedFromUrl(values?.created_from, values?.created_from_id)
                ?.href
            }
            className={`bg-teal-500 text-white ${
              getCreatedFromUrl(values?.created_from, values?.created_from_id)
                ?.classes
            } py-1 px-2 text-sm ltr:ml-auto rtl:mr-auto rounded-md `}
          >
            Original
          </Link>
        ) : null}
      </div>
    </div>
  );
};
