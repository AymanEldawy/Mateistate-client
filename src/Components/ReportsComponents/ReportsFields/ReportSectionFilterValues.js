import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ReportInputField from "./ReportInputField";
import { ReportFieldBetweenValues } from "./ReportFieldBetweenValues";
import ReportSelectField from "./ReportSelectField";

export const ReportSectionFilterValues = ({
  containerClassName,
  bodyClassName,
  field1Props,
  field2Props,
  sharedProps,
  hideText,
  readOnly,
  label,
  labelClassName,
  inputClassName,
}) => {
  const { t } = useTranslation();
  const { watch } = useFormContext();

  return (
    <div className={`flex flex-col gap-2 border p-2 rounded-md`}>
      <label
        className={
          "font-medium text-black text-base mb-1 overflow-hidden text-ellipsis min-w-fit whitespace-nowrap capitalize flex items-center gap-2 "
        }
      >
        {t("amount_terms")}
      </label>
      <ReportSelectField
        label="field"
        name="field"
        isArray
        list={["debit", "credit"]}
        labelClassName="w-[120px]"
      />
      <ReportSelectField
        label="transaction"
        name="transaction"
        isArray
        list={[
          "Without",
          "less than",
          "more than",
          "equal",
          "between",
          "less or equal",
          "largest or equal",
        ]}
        labelClassName="w-[120px]"
      />
      {watch("transaction") === "between" ? (
        <ReportFieldBetweenValues
          field1Props={{
            name: "amount_from",
          }}
          field2Props={{
            name: "amount_to",
          }}
        />
      ) : (
        <ReportInputField
          label="amount"
          name="amount"
          labelClassName="w-[120px]"
        />
      )}
    </div>
  );
};
