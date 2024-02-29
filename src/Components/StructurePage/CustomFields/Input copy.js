import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { CalenderIcon } from "Components/Icons";
import moment from "moment";

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
        render={({
          field: { onChange, onBlur, ref, value },
          fieldState,
          formState,
        }) => {
          if (field?.type === "date") {
            return (
              <div className="relative">
                <span
                  className={`border h-[39px] flex items-center justify-between dark:read-only:bg-[#444] rounded p-1 ${inputClassName} ${
                    error ? "border-red-200 text-red-500" : ""
                  } 
                `}
                >
                  {value ? moment(new Date(value)).format("DD/MM/YYYY") : 'MM/DD/YYYY'}
                  <span className="pointer-events-none h-5 w-5 mx-2">
                    <CalenderIcon />
                  </span>
                </span>
                <input
                  ref={ref}
                  name={updatedName || field?.name}
                  className="absolute w-full h-full z-10 top-0 left-0 opacity-0"
                  //   className={`border h-[39px] read-only:bg-blue-100 dark:read-only:bg-[#444] rounded p-1 ${inputClassName} ${
                  //     error ? "border-red-200 text-red-500" : ""
                  //   }
                  // `}
                  type={field?.type}
                  readOnly={
                    readOnly ||
                    (watchField &&
                      watch(watchFieldName) === watchFieldCondition) ||
                    (field?.disabledCondition &&
                      watch(field?.disabledCondition))
                  }
                  placeholder={field?.type === "number" ? "0" : ""}
                  // defaultValue={field?.defaultValue}
                  // value={
                  //   field?.type === "date" && value
                  //     ? new Date(value)?.toJSON()?.substring(0, 10)
                  //     : value
                  // }
                  value={value ? moment(value).format("mm/dd/yyyy") : null}
                  // value={watch(updatedName || field?.name)}
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                  onBlur={onBlur}
                />
              </div>
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
                value={
                  field?.type === "date" && value
                    ? new Date(value)?.toJSON()?.substring(0, 10)
                    : value
                }
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
