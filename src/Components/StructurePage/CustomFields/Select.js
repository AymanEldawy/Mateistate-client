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
  keyValue = "id",
  keyLabel = "name",
  isArray,
  updatedName,
  hideLabel,
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
    <Controller
      name={updatedName || field?.name}
      control={control}
      render={({
        field: { onChange, onBlur, ref, value },
        fieldState: { error },
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
              <div
                className={`relative flex h-[30px] text-sm items-start  w-full ${
                  field?.disabledCondition && watch(field?.disabledCondition)
                    ? "pointer-events-none"
                    : ""
                }`}
              >
                <Select
                  ref={ref}
                  id={updatedName || field?.name}
                  menuPlacement="auto"
                  menuPortalTarget={document?.body}
                  styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                  className={`border rounded-md bg-none w-full bg-transparent field-select-container ${selectClassName}`}
                  // classNamePrefix="field-select"
                  // classNames={{
                  //   control: (state) => "bg-transparent !border-none",
                  //   container: (state) =>
                  //     `!bg-none ${
                  //       old
                  //         ? "!bg-white dark:!bg-[#2C2C2C] w-full"
                  //         : "!bg-transparent"
                  //     } dark:!border-dark-border`,
                  //   singleValue: () => "dark:text-gray-200 unique-valid",
                  //   menuList: () => "dark:bg-dark-bg",
                  //   ...selectClassNames,
                  // }}
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
              </div>
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

export default CustomSelect;
