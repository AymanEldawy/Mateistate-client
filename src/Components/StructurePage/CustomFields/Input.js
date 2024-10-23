import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { CalenderIcon } from "Components/Icons";
import { ErrorText } from "Components/Global/ErrorText";
import OldCalenderIcon from "Components/Icons/OldCalenderIcon";

const Input = ({
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
  onBlur,
  value,
  withPortal,
  old,
  ...field
}) => {
  const { t } = useTranslation();
  const { register, watch, setValue, control } = useFormContext();
  const { name } = field;
  const watchField = field?.watch;
  const watchFieldName = tab ? `${tab}.${watchField}` : watchField;
  const watchFieldCondition = field?.condition;

  useEffect(() => {
    if (watchField && watch(watchFieldName) === watchFieldCondition) {
    } else {
    }
  }, [watch(watchFieldName)]);

  useEffect(() => {
    if (!field?.name) return;

    if (field?.defaultValue) {
      setValue(updatedName || field?.name, field?.defaultValue);
    }

    if (field?.name === "currency_val") {
      setValue(updatedName || field?.name, 1);
    }
  }, [field?.defaultValue]);

  return (
    <div
      className={`${old ? "flex-row" : "flex-col"} flex ` + containerClassName}
      key={field?.name}
    >
      {label && !hideLabel ? (
        <label
          title={label}
          htmlFor={updatedName || field?.name}
          className={
            "overflow-hidden text-ellipsis min-w-fit text-sm font-normal whitespace-nowrap mb-1 capitalize flex items-center gap-2 " +
              old && " w-[120px] !whitespace-normal " + labelClassName
          }
        >
          {t(label)?.replace(/_/g, " ")}{" "}
          {field?.required ? (
            <span className="text-red-500 mx-1">*</span>
          ) : null}
        </label>
      ) : null}
      <Controller
        name={updatedName || field?.name}
        control={control}
        render={({
          field: { onChange, onBlur, ref, value },
          fieldState,
          formState,
        }) => {
          if (field?.type === "date") {
            return (
              <DatePicker
                ref={ref}
                wrapperClassName="w-full"
                className={`border h-[39px] w-full cursor-pointer read-only:bg-blue-100 flex items-center gap-2 dark:read-only:bg-[#444] rounded ltr:!pl-7 rtl:!pr-7 p-1 ${inputClassName} ${
                  error ? "border-red-200 text-red-500" : ""
                }`}
                calendarIconClassname={`${
                  old ? "!pt-1" : "!pt-[10px]"
                } -ml-1 pointer-events-none !cursor-pointer`}
                showIcon
                selected={value ? new Date(value) : ""}
                icon={
                  <span>
                    {old ? (
                      <OldCalenderIcon className="h-5 w-5" />
                    ) : (
                      <CalenderIcon className="h-5 w-5" />
                    )}
                  </span>
                }
                todayHighlight={true}
                locale="en"
                isClearable
                withPortal={withPortal}
                readOnly={
                  readOnly ||
                  (watchField &&
                    watch(watchFieldName) === watchFieldCondition) ||
                  (field?.disabledCondition && watch(field?.disabledCondition))
                }
                // placeholderText="Select date... YYYY/MM/DD"
                placeholderText={`${
                  old ? " Select date..." : "Select date..."
                }`}
                onChange={(date) => {
                  onChange(date);
                }}
                // dateFormat="dd-mm-yyyy"
                dateFormat={`${old ? " dd/MM/yyyy" : "MMMM d, yyyy"}`}
              />
            );
          } else {
            return (
              <input
                ref={ref}
                name={updatedName || field?.name}
                className={`border h-[39px] read-only:bg-blue-100 dark:read-only:bg-[#444] rounded p-1 ${inputClassName} ${
                  error ? "border-red-200 text-red-500" : ""
                } 
              `}
                type={field?.type}
                readOnly={
                  readOnly ||
                  (watchField &&
                    watch(watchFieldName) === watchFieldCondition) ||
                  (field?.disabledCondition && watch(field?.disabledCondition))
                }
                placeholder={field?.type === "number" ? "0" : ""}
                // defaultValue={field?.defaultValue}
                value={value}
                // value={watch(updatedName || field?.name)}
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

      {error ? <ErrorText containerClassName="py-1">{error}</ErrorText> : null}
    </div>
  );
};

export default Input;
