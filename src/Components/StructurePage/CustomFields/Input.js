import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { CalenderIcon } from "Components/Icons";
import { ErrorText } from "Components/Global/ErrorText";

const Input = ({
  labelClassName,
  containerClassName,
  inputClassName,
  updatedName,
  tab,
  index,
  withPortal,
  ...field
}) => {
  const { t } = useTranslation();
  const { label, name, readOnly } = field || {};
  console.log("🚀 ~ readOnly:", readOnly)
  const {
    register,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useFormContext();

  const watchField = field?.watch;
  const watchFieldName = tab ? `${tab}.${watchField}` : watchField;
  const watchFieldCondition = field?.condition;

  return (
    <Controller
      name={updatedName || field?.name}
      control={control}
      className="w-full"
      required={field?.required}
      render={({
        field: { onChange, onBlur, ref, value, onFocus },
        fieldState: { error },
        formState: {},
      }) => {
        return (
          <div className="flex flex-col gap-2">
            <div
              className={`flex flex-row gap-2 ` + containerClassName}
              key={name}
            >
              {label && (
                <label
                  title={label}
                  htmlFor={updatedName || name}
                  className={
                    "w-[100px] lg:w-[120px] shrink-0 font-medium text-gray-600 overflow-hidden text-ellipsis text-xs whitespace max-h-[32px] mb-1 capitalize flex items-center gap-2 " +
                    labelClassName
                  }
                >
                  {t(label)?.replace(/_/g, " ")}{" "}
                  {field?.required ? (
                    <span className="text-red-500 mx-1">*</span>
                  ) : null}
                </label>
              )}
              {field?.type === "date" ? (
                <DatePicker
                  {...field}
                  ref={ref}
                  wrapperClassName="w-full"
                  className={`border h-[30px] w-full cursor-pointer read-only:bg-[#006d5f1f] flex items-center gap-2 dark:read-only:bg-[#444] rounded ltr:!pl-7 rtl:!pr-7 p-1 ${inputClassName} ${
                    error ? "border-red-200 text-red-500" : ""
                  }`}
                  calendarIconClassname={`-ml-1 pointer-events-none !cursor-pointer`}
                  showIcon
                  selected={value ? new Date(value) : ""}
                  icon={
                    <span>
                      <CalenderIcon className="h-4 w-4" />
                    </span>
                  }
                  defaultValue={new Date()}
                  todayHighlight={true}
                  locale="en"
                  isClearable
                  withPortal={withPortal}
                  readOnly={
                    readOnly ||
                    (watchField &&
                      watch(watchFieldName) === watchFieldCondition) ||
                    (field?.disabledCondition &&
                      watch(field?.disabledCondition))
                  }
                  // placeholderText="Select date... YYYY/MM/DD"
                  placeholderText="Select date..."
                  onChange={(date) => {
                    onChange(date);
                  }}
                  required={field?.required}
                  // dateFormat="dd-mm-yyyy"
                  dateFormat="dd/MM/yyyy"
                  //  "MMMM d, yyyy"
                />
              ) : (
                <input
                  ref={ref}
                  name={updatedName || field?.name}
                  className={`border h-[30px] read-only:bg-[#006d5f1f] w-full dark:read-only:bg-[#444] rounded p-1 ${inputClassName} ${
                    error ? "border-red-200 text-red-500" : ""
                  } 
              `}
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
                  value={value}
                  // value={watch(updatedName || field?.name)}
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                  onBlur={onBlur}
                />
              )}
            </div>
            {error ? (
              <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
            ) : null}
          </div>
        );
      }}
      rules={{
        required: field?.required && `${field?.name} is required`,
      }}
    />
  );
};

export default Input;
