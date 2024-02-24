import React, { useEffect, useMemo, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import AsyncSelect from "react-select/async";

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
  updatedName,
  hideLabel,
  values,
  selectClassNames,
  readOnly,
  ...field
}) => {
  const { name } = field;
  const { t } = useTranslation();
  const { register, control, watch, setValue } = useFormContext();
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(
      field?.list?.map((item) => ({
        value: isArray ? item : item?.[keyValue],
        label: isArray ? item : item?.[keyLabel],
      }))
    );
    if (field?.selectFirstAsDefault && !watch(updatedName || field?.name)) {
      setValue(updatedName || field?.name, field?.list?.at(0)?.id);
    }
  }, [field?.list?.length]);

  return (
    <div className={"flex flex-col " + containerClassName}>
      {label && !hideLabel ? (
        <label
          title={label}
          htmlFor={name}
          className={
            "overflow-hidden text-ellipsis text-sm font-normal whitespace-nowrap mb-1 capitalize " +
            labelClassName
          }
        >
          {t(label)?.replace(/_/g, " ")}
          {field?.required ? (
            <span className="text-red-500 mx-1">*</span>
          ) : null}
        </label>
      ) : null}
      <Controller
        name={updatedName || field?.name}
        control={control}
        render={({ field: { onChange }, value, ref }) => {
          return (
            <Select
              menuPlacement="auto"
              className={`border rounded-md bg-none bg-transparent ${selectClassName}`}
              classNames={{
                control: (state) => "bg-transparent !border-none",
                container: (state) =>
                  "!bg-none !bg-transparent dark:!border-dark-border",
                singleValue: () => "dark:text-gray-200 unique-valid",
                menuList: () => "dark:bg-dark-bg",
                ...selectClassNames,
              }}
              options={list}
              // defaultValue={field?.selectFirstAsDefault && list?.at(0)?.value}
              value={list?.find(
                (c) => c?.value === +watch(updatedName || field?.name)
              )}
              isDisabled={readOnly}
              noOptionsMessage={() =>
                field?.allowInsert ? (
                  <span className="text-sm">
                    <span className="text-red-400 font-medium">
                      No options{" "}
                    </span>{" "}
                    (Add new one){" "}
                  </span>
                ) : (
                  "No options"
                )
              }
              onKeyDown={(e) => {
                if (!field?.allowInsert) return;

                let code = e.key;
                let value = e.target.value;

                if (code === "Enter") {
                  setList((prev) => [...prev, { value, label: value }]);
                  onChange(value);
                }
              }}
              onChange={(option) => {
                onChange(option?.value);
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
