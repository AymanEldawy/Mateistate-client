import { ErrorText } from "Components/Global/ErrorText";
import { useEffect, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Select from "react-select";

const ReportSelectField = ({
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
  selectContainerClassName,
  readOnly,
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
    <div className={"flex flex-row items-center !gap-2 " + containerClassName}>
      {label && !hideLabel ? (
        <label
          title={label}
          htmlFor={name}
          className={
            "overflow-hidden text-ellipsis text-sm !min-w-fit font-normal whitespace-nowrap mb-1 capitalize " +
            labelClassName
          }
        >
          {t(label)?.replace(/_/g, " ")}
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
              className={`border rounded-md bg-none bg-transparent w-full ${selectContainerClassName}`}
              classNames={{
                control: (state) => "bg-transparent !border-none",
                container: (state) =>
                  "!bg-none !bg-transparent dark:!border-dark-border",
                singleValue: () => "dark:text-gray-200 unique-valid",
                menuList: () => "dark:bg-dark-bg",
                ...selectClassNames,
              }}
            
              placeholder={field?.label}
              options={list}
              value={list?.find(
                (c) => c?.value === +watch(updatedName || field?.name)
              )}
              isDisabled={readOnly}
              onChange={(option) => {
                onChange(option?.value);
              }}
            />
          );
        }}
        rules={{ required: field?.required }}
      />
    </div>
  );
};

export default ReportSelectField;
