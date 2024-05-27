import { useEffect } from "react";
import { usePopupForm } from "Hooks/usePopupForm";
import { PlusIcon, SearchIcon } from "Components/Icons";
import { useState } from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  IGNORED_SHOW_NUMBER_TABLE,
  UNIQUE_REF_TABLES,
} from "Helpers/constants";
import { DEFAULT_CURRENCY_CODE } from "Helpers/GENERATE_STARTING_DATA";
import { ErrorText } from "Components/Global/ErrorText";

const UniqueField = ({
  list: defaultList,
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
  selectClassName,
  labelClassName,
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
              ? `${item?.internal_number || item?.number}-${
                  item?.[field?.ref_name || "name"]
                }${item?.parent_name ? `-(${item?.parent_name})` : ""}`
              : item[field?.ref_name || "name"],
        };
      })
    );

    let isCurrency = field?.ref_table === "currency";

    if ((field?.defaultValue || isCurrency) && defaultList?.length) {
      let searchKey = isCurrency ? "code" : field?.defaultValueSearchKey;
      let searchVal = isCurrency ? DEFAULT_CURRENCY_CODE : field?.defaultValue;
      let val = defaultList?.find((c) => c?.[searchKey] === searchVal)?.id;

      setValue(updatedName || field?.name, val);
    }
  }, [defaultList?.length]);

  return (
    <div className={containerClassName} key={field?.name}>
      {label && !hideLabel ? (
        <label
          title={label}
          className={`overflow-hidden whitespace-nowrap text-ellipsis block text-sm font-normal mb-1 capitalize ${labelClassName}`}
        >
          {t(label)?.replace(/_/g, " ")}
          {field?.required ? (
            <span className="text-red-500 mx-1">*</span>
          ) : null}
        </label>
      ) : null}
      <div
        className={`relative flex items-center border dark:border-dark-border rounded-md w-full ${
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
                isDisabled={field?.readOnly}
                isClearable={true}
                options={list}
                menuPortalTarget={document?.body}
                styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                name={updatedName || field?.name}
                menuPlacement="auto"
                // required={field?.required}
                // menuPlacement={
                //   field?.menuPlacement ? field?.menuPlacement : "top"
                // }
                className={`w-full border-none ${selectClassName}`}
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

        {field?.hideAdd ? (
          <button
            type="button"
            className="right-2 rtl:left-2 rtl:right-auto mx-2 rounded-full text-blue-500"
          >
            <SearchIcon className="text-inherit w-5 h-5" />
          </button>
        ) : (
          <button
            type="button"
            className="right-2 rtl:left-2 rtl:right-auto mx-2 rounded-full text-blue-500 hover:text-white hover:bg-blue-400"
            onClick={() => {
              let refTable = table;
              let oldValues = null;

              if (field?.ref_table === UNIQUE_REF_TABLES.clients) {
                refTable = "user";
                oldValues = { card_type: 1 };
              } else if (field?.ref_table === UNIQUE_REF_TABLES.suppliers) {
                refTable = "user";
                oldValues = { card_type: 2 };
              }

              dispatchForm({
                open: true,
                table: refTable,
                oldValues,
                additional: {
                  setValue,
                  name: updatedName || field?.name,
                  setList,
                  refTableName: refTable,
                },
              });
            }}
          >
            <PlusIcon circle />
          </button>
        )}
      </div>
      {error ? <ErrorText containerClassName="py-1">{error}</ErrorText> : null}
    </div>
  );
};

export default UniqueField;
