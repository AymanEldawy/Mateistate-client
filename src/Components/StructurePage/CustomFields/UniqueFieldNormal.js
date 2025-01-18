import { useEffect, useRef } from "react";
import { usePopupForm } from "Hooks/usePopupForm";
import { PlusIcon, SearchIcon } from "Components/Icons";
import { useState } from "react";
import Select from "react-select";
import { useFormContext, Controller, set } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { UNIQUE_REF_TABLES } from "Helpers/constants";
import {
  DEFAULT_CURRENCY_CODE,
  USER_CUSTOMER_CODE,
  USER_SUPERVISOR_CODE,
  USER_SUPPLIER_CODE,
  USER_WORKER_CODE,
} from "Helpers/GENERATE_STARTING_DATA";
import { ErrorText } from "Components/Global/ErrorText";
import { getUniqueFieldLabel } from "Helpers/functions";

const UniqueFieldNormal = ({
  list: defaultList,
  onChange,
  containerClassName,
  table,
  index,
  updatedName,
  selectContainerClassName,
  CACHE_LIST,
  inputClassName,
  selectClassName,
  labelClassName,
  ...field
}) => {
  const { label, name } = field || {};
  const { dispatchForm } = usePopupForm();
  const [list, setList] = useState([]);
  const { control, watch, setValue } = useFormContext();
  const { t, i18n } = useTranslation();
  const refCont = useRef();

  useEffect(() => {
    setList(
      defaultList?.map((item) => {
        return {
          value: item?.[field?.ref_col || "id"],
          label: getUniqueFieldLabel(
            item,
            field?.ref_table,
            field?.ref_name,
            i18n.language
          ),
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
    <Controller
      name={updatedName || field.name}
      control={control}
      defaultValue={null}
      render={({
        field: { onChange, onBlur, ref, value },
        fieldState: { error },
      }) => {

        return (
          <div className="flex flex-col gap-1">
            <div
              className={`flex flex-row gap-1 ` + containerClassName}
              key={name}
            >
              {label && (
                <label
                  title={label}
                  htmlFor={updatedName || name}
                  className={
                    "w-[100px] lg:w-[120px] shrink-0 font-medium text-gray-600 text-ellipsis text-xs whitespace max-h-[32px] capitalize flex items-center gap-2 " +
                    labelClassName
                  }
                >
                  {t(label)?.replace(/_/g, " ")}
                  {field?.required ? (
                    <span className="text-red-500 mx-1">*</span>
                  ) : null}
                </label>
              )}
              <div
                className={`relative flex h-[30px] text-sm items-center border dark:border-dark-border rounded-md w-full ${field?.disabledCondition && watch(field?.disabledCondition)
                  ? "pointer-events-none"
                  : ""
                  } ${selectContainerClassName}`}
              >
                <Select
                  ref={refCont}
                  isDisabled={field?.readOnly}
                  isClearable={true}
                  options={list}
                  menuPortalTarget={document?.body}
                  styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                  name={updatedName || field?.name}
                  menuPlacement="auto"
                  // classNamePrefix="ST"
                  className={`w-full border-none ${selectClassName}`}
                  classNames={{
                    indicatorsContainer: () => "!hidden bg-black",
                    control: (state) => `bg-transparent !border-none`,
                    container: (state) =>
                      `${field?.disabledCondition &&
                        watch(field?.disabledCondition)
                        ? "bg-gray-300"
                        : ``
                      }  !border-none`,
                    singleValue: () => "dark:text-gray-200 unique-valid",
                    multiValueLabel: () => "whitespace-nowrap",
                    menuList: () => "dark:bg-dark-bg ",
                    menu: () => "min-w-[190px]",
                  }}
                  menuShouldScrollIntoView={true}
                  value={list?.find(
                    (c) => c?.value == watch(updatedName || field?.name)
                  )}
                  // onChange={onChange}
                  onChange={(option) => onChange(option?.value)}
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
                      let refTable = field?.ref_table;
                      let oldValues = null;

                      if (
                        field?.ref_table === UNIQUE_REF_TABLES.clients ||
                        field?.ref_table === UNIQUE_REF_TABLES.user_customer
                      ) {
                        refTable = "user";
                        oldValues = { card_type: USER_CUSTOMER_CODE };
                      } else if (
                        field?.ref_table === UNIQUE_REF_TABLES.suppliers ||
                        field?.ref_table === UNIQUE_REF_TABLES.user_supplier
                      ) {
                        refTable = "user";
                        oldValues = { card_type: USER_SUPPLIER_CODE };
                      } else if (
                        field?.ref_table === UNIQUE_REF_TABLES.supervisor
                      ) {
                        refTable = "user";
                        oldValues = { card_type: USER_SUPERVISOR_CODE };
                      } else if (
                        field?.ref_table === UNIQUE_REF_TABLES.employee
                      ) {
                        refTable = "user";
                        oldValues = { card_type: USER_WORKER_CODE };
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

export default UniqueFieldNormal;
