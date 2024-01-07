import React, { useEffect, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

const CustomSelect = ({
  labelClassName,
  containerClassName,
  selectClassName,
  label,
  error,
  keyValue = "id",
  keyLabel = "name",
  isArray,
  value,
  handleInputChange,

  ...field
}) => {
  const { name } = field;
  const [list, setList] = useState([]);
  const { register, control } = useFormContext();

  useEffect(() => {
    setList(
      field?.list?.map((item) => ({
        value: isArray ? item : item?.[keyValue],
        label: isArray ? item : item?.[keyLabel],
      }))
    );
  }, [field?.list?.length]);

  return (
    <div className={"flex flex-col " + containerClassName}>
      {label ? (
        <label
          title={label}
          htmlFor={name}
          className={
            "overflow-hidden text-ellipsis text-sm font-normal whitespace-nowrap mb-1 capitalize " +
            labelClassName
          }
        >
          {label}{" "}
          {field?.required ? (
            <span className="text-red-500 mx-1">*</span>
          ) : null}
        </label>
      ) : null}
      <Controller
        name={field.name}
        control={control}
        render={({ field: { onChange }, value, ref }) => {
          return (
            <Select
              className="border rounded-md bg-none bg-transparent"
              classNames={{
                control: (state) => "dark:!bg-[#2c2c2c]",
                container: (state) =>
                  "!bg-none !bg-transparent dark:!border-dark-border",
                singleValue: () => "dark:text-gray-200",
                menuList: () => "dark:bg-dark-bg",
              }}
              options={list}
              value={list.find((c) => c.value === value)}
              onChange={(option) => {
                console.log("----", option);
                handleInputChange(field?.name, option?.value);
              }}
            />
          );
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

export default CustomSelect;
