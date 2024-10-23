import { ErrorText } from "Components/Global/ErrorText";
import { useEffect, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
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
  updatedName,
  hideLabel,
  values,
  selectClassNames,
  readOnly,
  tab,
  old,
  ...field
}) => {
  const { name } = field;
  const { t } = useTranslation();
  const { control, watch, setValue } = useFormContext();
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
              id={updatedName || field?.name}
              menuPlacement="auto"
              menuPortalTarget={document?.body}
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
              className={`border rounded-md bg-none bg-transparent field-select-container ${selectClassName}`}
              classNamePrefix="field-select"
              classNames={{
                control: (state) => "bg-transparent !border-none",
                container: (state) =>
                  `!bg-none ${
                    old ? "!bg-white dark:!bg-[#2C2C2C] w-full" : "!bg-transparent"
                  } dark:!border-dark-border`,
                singleValue: () => "dark:text-gray-200 unique-valid",
                menuList: () => "dark:bg-dark-bg",
                ...selectClassNames,
              }}
              options={list}
              // defaultValue={field?.selectFirstAsDefault && list?.at(0)?.value}
              value={list?.find(
                (c) => c?.value === +watch(updatedName || field?.name)
              )}
              isDisabled={
                (field?.disabledWhenKeyValid &&
                  watch(field?.disabledWhenKeyValid)) ||
                readOnly
              }
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
      {error ? <ErrorText containerClassName="py-1">{error}</ErrorText> : null}
    </div>
  );
};

export default CustomSelect;
