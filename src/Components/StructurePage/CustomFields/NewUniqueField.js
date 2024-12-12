import AsyncSelect from "react-select/async";
import { useEffect } from "react";
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


const isOptionSelected = (option, values) => {
  return values.some(({ value }) => option.value === value);
};
const NewUniqueField = ({
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
  const { getSearch } = useCurd();
  const { dispatchForm } = usePopupForm();
  const [list, setList] = useState([]);
  const { control, watch, setValue } = useFormContext();
  const { t, i18n } = useTranslation();
  const queryClient = new QueryClient();

  const loadOptions = async (value, callback) => {
    console.log("🚀 ~ loadOptions ~ value:", value)
    try {
      const res = await queryClient.fetchQuery({
        queryKey: ["list", field?.ref_table],
        queryFn: async () => {
          const response = await getSearch(
            field?.ref_table,
            value,
            field?.ref_name || "name"
          );
          return response?.result;
        },
      });
      console.log(res, "called");

      callback(res || []);
      return res;
    } catch (error) {
      return [];
    }
  };

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
          <div className="flex flex-col gap-2">
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
                {/* <AsyncSelect
                  ref={ref}
                  isDisabled={field?.readOnly}
                  isClearable={true}
                  options={loadOptions}
                  menuPortalTarget={document?.body}
                  styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                  name={updatedName || field?.name}
                  menuPlacement="auto"
                  getOptionLabel={(option) =>
                    option?.[field?.ref_col || "name"]
                  }
                  getOptionValue={(option) => option?.[field?.ref_col || "id"]}
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
                                : `!bg-none ${
                                    old
                                      ? "!bg-white dark:!bg-[#2C2C2C] w-full"
                                      : "!bg-transparent"
                                  }`
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
                /> */}

                <AsyncSelect
                  placeholder={field?.name}
                  required
                  className="flex-1 min-w-[180px]"
                  // cacheOptions
                  isOptionSelected={isOptionSelected}
                  // defaultOptions
                  getOptionLabel={(option) => {
                    console.log("🚀 ~ option:", option);
                    return option?.[field?.ref_name || "name"];
                  }}
                  getOptionValue={(option) => option?.[field?.ref_col || "id"]}
                  loadOptions={(inputValue, callback) => {
                    loadOptions(inputValue, callback);
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

export default NewUniqueField;
