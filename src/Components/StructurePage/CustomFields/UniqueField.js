import { useEffect } from "react";
import { usePopupForm } from "Hooks/usePopupForm";
import { PlusIcon } from "Components/Icons";
import { useState } from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IGNORED_SHOW_NUMBER_TABLE, UNIQUE_REF_TABLES } from "Helpers/constants";

const UniqueField = ({
  list: defaultList,
  onPlusClick,
  onChange,
  label,
  containerClassName,
  error,
  table,
  index,
  updatedName,
  hideLabel,
  selectContainerClassName,
  CACHE_LIST,
  inputClassName,
  ...field
}) => {
  const { dispatchForm } = usePopupForm();
  const [list, setList] = useState([]);
  const { control, watch, setValue } = useFormContext();
  const { t } = useTranslation();

  useEffect(() => {
    setList(
      defaultList?.map((item) => {
        return {
          value: item?.[field?.ref_col || "id"],
          label:
            item?.number && !IGNORED_SHOW_NUMBER_TABLE[field?.ref_table]
              ? `${item?.number}-${item?.[field?.ref_name || "name"]}`
              : item[field?.ref_name || "name"],
        };
      })
    );

    let isCurrency = field?.ref_table === "currency";

    if ((field?.defaultValue || isCurrency) && defaultList?.length) {
      let searchKey = isCurrency ? "code" : field?.defaultValueSearchKey;
      let searchVal = isCurrency ? "AED" : field?.defaultValue;
      let val = defaultList?.find((c) => c?.[searchKey] === searchVal)?.id;

      setValue(updatedName || field?.name, val);
    }
  }, [defaultList?.length]);

  return (
    <div className={containerClassName} key={field?.name}>
      {label && !hideLabel ? (
        <label
          title={label}
          className="overflow-hidden whitespace-nowrap text-ellipsis block text-sm font-normal mb-1 capitalize"
        >
          {t(label)?.replace(/_/g, " ")}
          {field?.required ? (
            <span className="text-red-500 mx-1">*</span>
          ) : null}
        </label>
      ) : null}
      <div
        className={`relative flex items-center border dark:border-dark-border rounded-md ${
          field?.disabledCondition && watch(field?.disabledCondition)
            ? "pointer-events-none"
            : ""
        } ${selectContainerClassName}`}
      >
        <Controller
          name={updatedName || field.name}
          control={control}
          defaultValue={null}
          render={({ field: { onChange }, fieldState, formState }) => {
            return (
              <Select
                options={list}
                // value={watch(field?.name)}
                name={updatedName || field?.name}
                menuPlacement="auto"
                // required={field?.required}
                // menuPlacement={
                //   field?.menuPlacement ? field?.menuPlacement : "top"
                // }
                className="w-full border-none"
                classNames={{
                  indicatorsContainer: () => "!hidden bg-black",
                  control: (state) => `bg-transparent !border-none`,
                  container: (state) =>
                    `${
                      field?.disabledCondition &&
                      watch(field?.disabledCondition)
                        ? "bg-gray-300"
                        : `${
                            inputClassName
                              ? inputClassName
                              : "!bg-none !bg-transparent"
                          } `
                    }  !border-none`,
                  singleValue: () => "dark:text-gray-200 unique-valid",
                  menuList: () => "dark:bg-dark-bg",
                }}
                menuShouldScrollIntoView={true}
                value={list?.find(
                  (c) => c?.value == watch(updatedName || field?.name)
                )}
                // onChange={onChange}
                onChange={(option) => onChange(option?.value)}
              />
            );
          }}
          rules={{
            required: field?.required,
          }}
        />

        {field?.hideAdd ? null : (
          <button
            type="button"
            className="right-2 rtl:left-2 rtl:right-auto mx-2 rounded-full text-blue-500 hover:text-white hover:bg-blue-400"
            onClick={() => {

              if (onPlusClick) onPlusClick();
              dispatchForm({
                open: true,
                table: field?.ref_table === UNIQUE_REF_TABLES.clients ? "user" : table,
                additional: {
                  setValue,
                  name: updatedName || field?.name,
                  setList,
                  refTableName: field?.ref_table === UNIQUE_REF_TABLES.clients ? "user" : table,
                },
              });
            }}
          >
            <PlusIcon circle />
          </button>
        )}
      </div>
      {error ? (
        <p className="bg-red-200 mt-2 rounded text-sm text-red-500 px-2 py-1">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default UniqueField;
