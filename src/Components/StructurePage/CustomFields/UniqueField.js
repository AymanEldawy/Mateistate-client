import AsyncSelect from "react-select/async";
import { useEffect, useRef } from "react";
import { usePopupForm } from "Hooks/usePopupForm";
import { PlusIcon, SearchIcon } from "Components/Icons";
import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { UNIQUE_REF_TABLES } from "Helpers/constants";
import {
  USER_CUSTOMER_CODE,
  USER_SUPERVISOR_CODE,
  USER_SUPPLIER_CODE,
  USER_WORKER_CODE,
} from "Helpers/GENERATE_STARTING_DATA";
import { ErrorText } from "Components/Global/ErrorText";
import { getUniqueFieldLabel } from "Helpers/functions";
import { ApiActions } from "Helpers/Lib/api";
import { QueryClient } from "@tanstack/react-query";
import { fetchSearch } from "Helpers/Lib/global-read";
import useCurd from "Hooks/useCurd";

const UniqueField = ({
  list: defaultList,
  onChange,
  label,
  containerClassName,
  table,
  index,
  updatedName,
  hideLabel,
  selectContainerClassName,
  inputClassName,
  selectClassName,
  labelClassName,
  old,
  ...field
}) => {
  const { getDynamicSearch, getOneBy } = useCurd();
  const { dispatchForm } = usePopupForm();
  const { control, watch, setValue } = useFormContext();
  const { t, i18n } = useTranslation();
  const refCont = useRef();
  const [tableName, setTableName] = useState()
  const [defaultOption, setDefaultOption] = useState(null);
  const queryClient = new QueryClient();
  const { ref_col, ref_name, name } = field
  const ref_table = field?.ref_table?.indexOf('user_') !== -1 ? 'user' : field?.ref_table

  useEffect(() => {
    switch (ref_table) {
      case UNIQUE_REF_TABLES.employee:
      case UNIQUE_REF_TABLES.suppliers:
      case UNIQUE_REF_TABLES.user_customer:
      case UNIQUE_REF_TABLES.user_supplier:
        setTableName('user')
        break;
      case UNIQUE_REF_TABLES.clients:
      case UNIQUE_REF_TABLES.supervisor:
        setTableName('account')
        break;
      default:
        setTableName(ref_table)
        break;
    }
  }, [ref_table])


  const loadOptions = async (value, callback, id) => {
    try {
      const res = await queryClient.fetchQuery({
        queryKey: ["list", tableName, 'search', id, value],
        queryFn: async () => {
          if (!value && !id) return;
          if (!tableName) return;

          let response = null;
          if (id) {
            response = await getOneBy(tableName, value, "id");
          } else {
            response = await getDynamicSearch(
              tableName,
              value,
              field?.ref_name || "name"
            );
          }
          return response?.result;
        },
        enable: !!value || !!id || !!tableName
      });
      if (id) {
        setDefaultOption(res?.[0]);
      } else {
        setDefaultOption(null);
      }
      callback(res || []);
      return res;
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    // console.log(name, watch('account_id'), defaultOption?.id);
    // console.log(name, watch('customer_id'), defaultOption?.id);
    if (!watch(updatedName || name)) return;
    if (defaultOption && defaultOption?.[ref_col || 'id'] === watch(updatedName || name)) return;

    loadOptions(watch(updatedName || field?.name), '', true)


  }, [watch(updatedName || name), defaultOption])

  return (
    <Controller
      key={updatedName || name}
      name={updatedName || name}
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
                <AsyncSelect
                  ref={refCont}
                  // placeholder={field?.name}
                  required
                  className={`w-full min-h-[30px] h-[30px] border-none ${selectClassName}`}
                  classNames={{
                    indicatorsContainer: () => "!hidden bg-black",
                    control: (state) => `bg-transparent !border-none   !min-h-[30px] !h-[30px]`,
                    container: (state) =>
                      `${field?.disabledCondition &&
                        watch(field?.disabledCondition)
                        ? "bg-gray-300"
                        : ``
                      }  !border-none`,
                    singleValue: () => "dark:text-gray-200 unique-valid !-mt-[5px]",
                    multiValueLabel: () => "whitespace-nowrap ",
                    menuList: () => "dark:bg-dark-bg ",
                    menu: () => "min-w-[190px]",
                    input: () => "!h-[30px] !py-0 !-mt-[2px]",
                  }}
                  // isOptionSelected={isOptionSelected}
                  getOptionLabel={(option) => {
                    return getUniqueFieldLabel(
                      option,
                      tableName,
                      field?.ref_name,
                      i18n.language
                    );
                  }}
                  // defaultOptions
                  // cacheOptions
                  // defaultInputValue={value}
                  value={defaultOption}
                  defaultValue={defaultOption}
                  // defaultValue={defaultOption}
                  getOptionValue={(option) => option?.[field?.ref_col || "id"]}
                  loadOptions={(inputValue, callback) => {
                    loadOptions(inputValue, callback);
                  }}
                  onChange={(option) => {
                    setDefaultOption(option);
                    setValue(updatedName || name, option[ref_col || 'id'])
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
                      let refTable = ref_table;
                      let oldValues = null;

                      if (
                        ref_table === UNIQUE_REF_TABLES.clients ||
                        ref_table === UNIQUE_REF_TABLES.user_customer
                      ) {
                        oldValues = { card_type: USER_CUSTOMER_CODE };
                      } else if (
                        ref_table === UNIQUE_REF_TABLES.suppliers ||
                        ref_table === UNIQUE_REF_TABLES.user_supplier
                      ) {
                        oldValues = { card_type: USER_SUPPLIER_CODE };
                      } else if (
                        ref_table === UNIQUE_REF_TABLES.supervisor
                      ) {
                        oldValues = { card_type: USER_SUPERVISOR_CODE };
                      } else if (
                        ref_table === UNIQUE_REF_TABLES.employee
                      ) {
                        oldValues = { card_type: USER_WORKER_CODE };
                      }

                      dispatchForm({
                        open: true,
                        table: refTable,
                        oldValues,
                        additional: {
                          setValue,
                          name: updatedName || field?.name,
                          // setList,
                          refTableName: tableName,
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

export default UniqueField;
