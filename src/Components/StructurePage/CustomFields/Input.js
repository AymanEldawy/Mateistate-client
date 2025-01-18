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
  mainContainerClassName,
  ...field
}) => {
  const { t } = useTranslation();
  const { label, name, readOnly } = field || {};
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
  const isNumber = field?.type === 'number' && watch(updatedName || name)?.toString()?.length >= 4

  return (
    <Controller
      name={updatedName || field?.name}
      control={control}
      className="w-full"
      required={field?.required}
      render={({
        field: { onChange, onBlur, ref, value, onFocus },
        fieldState: { error },
        formState: { },
      }) => {
        return (
          <div className={`flex flex-col gap-1 ${mainContainerClassName}`}>
            <div
              className={`flex flex-row gap-1 ` + containerClassName}
              key={name}
            >
              {label && (
                <label
                  title={label}
                  htmlFor={updatedName || name}
                  className={
                    "w-[100px] lg:w-[120px] shrink-0 font-medium text-gray-600 text-ellipsis text-xs whitespace max-h-[32px] capitalize flex items-center gap-1 " +
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
                <div className="w-full">

                  <DatePicker
                    {...field}
                    // ref={ref}
                    wrapperClassName="w-full"
                    className={`border text-xs font-medium h-[30px] flex-1 !w-full cursor-pointer read-only:bg-[#2289fb1c] flex items-center gap-1 dark:read-only:bg-[#444] rounded ltr:!pl-7 rtl:!pr-7 p-1 ${inputClassName} ${error ? "border-red-200 text-red-500" : ""
                      }`}
                    calendarIconClassname={`-ml-1 pointer-events-none !cursor-pointer`}
                    showIcon
                    selected={value ? new Date(value) : ""}
                    icon={
                      <span>
                        <CalenderIcon className="h-4 w-4" />
                      </span>
                    }
                    minDate={new Date()}
                    value={value}
                    defaultValue={new Date()}
                    todayHighlight={true}
                    locale="en"
                    isClearable
                    // withPortal
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
                    dateFormat="dd-mm-yyyy"
                  // portalId="root-portal"
                  // dateFormat="dd/MM/yyyy"
                  //  "MMMM d, yyyy"
                  />
                </div>
              ) : (
                <div className="relative w-full h-[30px]">

                  <input
                    ref={ref}
                    name={updatedName || field?.name}
                    className={`border h-[30px] text-xs font-medium read-only:bg-[#2289fb1c] w-full dark:read-only:bg-[#444] rounded p-1 ${isNumber && 'absolute top-0 left-0 w-full h-full opacity-0 z-10'} ${inputClassName} ${error ? "border-red-200 text-red-500" : ""
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
                    placeholder={isNumber ? "0" : ""}
                    // defaultValue={field?.defaultValue}
                    value={value}
                    // value={watch(updatedName || field?.name)}
                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                    onBlur={onBlur}
                  />
                  {isNumber &&
                    <span className="absolute w-full h-full top-0 left-0 border text-xs font-medium rounded p-1">{isNumber ? Number(value || 0)?.toLocaleString() : value}</span>
                  }
                </div>

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
