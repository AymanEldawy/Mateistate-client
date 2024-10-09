import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalenderIcon } from "Components/Icons";

export const InputRow = ({
  inputClassName,
  name,
  type,
  readOnly,
  required,
}) => {
  const { register, watch, setValue, control, errors } = useFormContext();
  const error = errors?.[name];

  return (
    <div className="flex gap-1 items-center">
      <label className="text-xs capitalize font-medium">text</label>
      <input type="" placeholder="test" className="border text-xs p-1" />
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, ref, value },
          fieldState,
          formState,
        }) => {
          if (type === "date") {
            return (
              <DatePicker
                ref={ref}
                wrapperClassName="w-full"
                className={`border h-[39px] w-full read-only:bg-blue-100 flex items-center gap-2 dark:read-only:bg-[#444] rounded ltr:!pl-7 rtl:!pr-7 p-1 ${inputClassName} ${
                  error ? "border-red-200 text-red-500" : ""
                }`}
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
                withPortal={true}
                readOnly={readOnly}
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
                name={name}
                className={`border h-[39px] read-only:bg-blue-100 dark:read-only:bg-[#444] rounded p-1 ${inputClassName} ${
                  error ? "border-red-200 text-red-500" : ""
                } 
              `}
                type={type}
                readOnly={readOnly}
                placeholder={type === "number" ? "0" : ""}
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
        rules={{ required }}
      />
    </div>
  );
};
