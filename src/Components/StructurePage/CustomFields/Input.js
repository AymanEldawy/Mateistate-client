import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { CalenderIcon } from "Components/Icons";

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
      // console.log('called read only');
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
    <div className={"flex flex-col " + containerClassName} key={field?.name}>
      {label && !hideLabel ? (
        <label
          title={label}
          htmlFor={updatedName || field?.name}
          className={
            "overflow-hidden text-ellipsis text-sm font-normal whitespace-nowrap mb-1 capitalize flex items-center gap-2" +
            labelClassName
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
        render={({ field: { onChange, onBlur, ref, value } }) => {
          if (field?.type === "date") {
            // console.log("🚀 ~ value: date", value, new ate())
            return (
              <DatePicker
                className={`border h-[39px] w-full read-only:bg-blue-100 flex items-center gap-2 dark:read-only:bg-[#444] rounded ltr:!pl-7 rtl:!pr-7  p-1 ${inputClassName} ${
                  error ? "border-red-200 text-red-500" : ""
                }`}
                calendarIconClassname="!pt-2 -ml-1 pointer-events-none cursor-"
                showIcon
                selected={value ? new Date(value) : ""}
                icon={
                  <span>
                    <CalenderIcon className="h-5 w-5" />
                  </span>
                }
                readOnly={
                  readOnly ||
                  (watchField && watch(watchFieldName) === watchFieldCondition)||
                  (field?.disabledCondition && watch(field?.disabledCondition))
                }
                // placeholderText="Select date... YYYY/MM/DD"
                placeholderText="Select date..."
                onChange={(date) => {
                  onChange(date);
                }}
                // dateFormat="dd-mm-yyyy"
                dateFormat="MMMM d, yyyy"
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
                  (watchField && watch(watchFieldName) === watchFieldCondition)||
                  (field?.disabledCondition && watch(field?.disabledCondition))
                }
                placeholder={field?.type === 'number' ? '0' : ''}
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

      {error ? (
        <p className="bg-red-200 mt-2 rounded text-sm text-red-500 px-2 py-1">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default Input;
