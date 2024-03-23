import { useFormContext, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { CalenderIcon } from "Components/Icons";

const ReportInputField = ({
  labelClassName,
  label,
  containerClassName,
  inputClassName,
  error,
  readOnly,
  index,
  updatedName,
  hideLabel,
  tab,
  value,
  ...field
}) => {
  const { t } = useTranslation();
  const { control } = useFormContext();

  return (
    <div
      className={"flex flex-row gap-2 " + containerClassName}
      key={field?.name}
    >
      {label ? (
        <label
          title={label}
          htmlFor={updatedName || field?.name}
          className={
            "overflow-hidden text-ellipsis min-w-fit text-sm font-normal whitespace-nowrap mb-1 capitalize flex items-center gap-2 " +
            labelClassName
          }
        >
          {t(label)?.replace(/_/g, " ")}{" "}
        </label>
      ) : null}
      <Controller
        name={updatedName || field?.name}
        control={control}
        render={({ field: { onChange, onBlur, ref, value } }) => {
          if (field?.type === "date") {
            return (
              <DatePicker
                ref={ref}
                wrapperClassName="w-full"
                className={`border h-[39px] w-full read-only:bg-blue-100 flex items-center gap-2 dark:read-only:bg-[#444] rounded ltr:!pl-7 rtl:!pr-7 p-1 ${inputClassName}`}
                calendarIconClassname="!pt-[10px] -ml-1 pointer-events-none cursor-"
                showIcon
                selected={value ? new Date(value) : ""}
                icon={
                  <span>
                    <CalenderIcon className="h-5 w-5" />
                  </span>
                }
                todayHighlight={true}
                locale="en"
                isClearable
                readOnly={readOnly}
                placeholderText="Select date..."
                onChange={(date) => {
                  onChange(date);
                }}
                dateFormat="MMMM d, yyyy"
              />
            );
          } else {
            return (
              <input
                ref={ref}
                name={updatedName || field?.name}
                className={`border w-full h-[39px] read-only:bg-blue-100 dark:read-only:bg-[#444] rounded p-1 ${inputClassName}`}
                type={field?.type}
                readOnly={readOnly}
                placeholder={field?.type === "number" ? "0" : ""}
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                onBlur={onBlur}
              />
            );
          }
        }}
        rules={{ required: field?.required }}
      />
    </div>
  );
};

export default ReportInputField;
