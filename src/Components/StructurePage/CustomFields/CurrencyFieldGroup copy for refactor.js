import { useEffect } from "react";
import { usePopupForm } from "Hooks/usePopupForm";
import { PlusIcon } from "Components/Icons";
import { useState } from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { DEFAULT_CURRENCY_CODE } from "Helpers/GENERATE_STARTING_DATA";
import { ErrorText } from "Components/Global/ErrorText";
import useCurd from "Hooks/useCurd";
import { QueryClient } from "@tanstack/react-query";
import AsyncSelect from "react-select/async";

const CurrencyFieldGroup = ({
  tab,
  list: defaultList,
  containerClassName,
  old,
  ...field
}) => {
  const { getOneBy, getSearch } = useCurd();
  const queryClient = new QueryClient();
  const { t } = useTranslation();
  const { dispatchForm } = usePopupForm();
  const {
    control,
    watch,
    setValue,
    register,
    formState: { errors },
  } = useFormContext();
  const error = tab ? errors?.[tab]?.[field?.name] : errors?.[field?.name];

  const currency_id = tab ? `${tab}.currency_id` : "currency_id";
  const currency_val = tab ? `${tab}.currency_val` : "currency_val";

  const [defaultOption, setDefaultOption] = useState(null);

  // Fetch default option from the server
  useEffect(() => {
    const fetchDefaultOption = async () => {
      try {
        const response = await await getSearch(
          "currency",
          DEFAULT_CURRENCY_CODE,
          "code"
        );
        setDefaultOption(response?.result?.at(0));
      } catch (error) {
      }
    };

    fetchDefaultOption();
  }, []);

  const loadOptions = async (value, callback) => {
    try {
      const res = await queryClient.fetchQuery({
        queryKey: ["list", "currency"],
        queryFn: async () => {
          const response = await getSearch("currency", value, "code");
          return response?.result;
        },
      });

      callback(res || []);
      return res;
    } catch (error) {
      return [];
    }
  };


  return (
    <>
      <div className={`min-w-[200px] rounded-md ${containerClassName}`}>
        <label
          title="connect with id"
          className={`${
            old && "w-[190px]"
          } overflow-hidden whitespace-nowrap text-ellipsis block text-sm font-normal mb-1 capitalize`}
        >
          Currency
        </label>
        <div className={`flex ${old && "w-full"}`}>
          <div
            className={`relative flex-1 flex items-center border dark:border-dark-border rounded-`}
          >
            <Controller
              name={currency_id}
              control={control}
              defaultValue={null}
              render={({
                field: { onChange, onBlur, ref, value },
                fieldState: { error },
              }) => {
                return (
                  <AsyncSelect
                    ref={ref}
                    menuPlacement="auto"
                    menuPortalTarget={document?.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    defaultOptions
                    defaultValue={defaultOption}
                    getOptionLabel={(option) => option?.code}
                    getOptionValue={(option) => option?.id}
                    loadOptions={(inputValue, callback) => {
                      loadOptions(inputValue, callback);
                    }}
                    name={currency_id}
                    className="w-full border-none"
                    classNames={{
                      indicatorsContainer: () => "!hidden bg-black",
                      control: (state) => "bg-transparent !border-none",
                      container: (state) =>
                        `!bg-none ${
                          old ? "bg-white dark:bg-[#2C2C2C]" : "!bg-transparent"
                        } !border-none`,
                      singleValue: () => "dark:text-gray-200 unique-valid",
                      menuList: () => "dark:bg-dark-bg",
                    }}
                    value={defaultList?.find(
                      (c) => c?.value === watch(currency_id)
                    )}
                    // onChange={onChange}
                    onChange={(option) => onChange(option?.value)}
                  />
                );
              }}
            />

            {field?.hideValue ? null : (
              <input
                // name={currency_val}
                // value={watch(currency_val)}
                defaultValue={1}
                // className="right-2 w-[20px] rtl:left-2 rtl:right-auto mx-2 rounded-full disabled:hover:bg-transparent disabled:text-gray-500 text-blue-500 hover:text-white hover:bg-blue-400"

                className={`border h-[39px] absolute ltr:right-0 font-medium bg-gray-100 max-w-[50px] w-full read-only:bg-blue-100 flex items-center gap-2 dark:read-only:bg-[#444] rounded-sm px-4`}
                type="number"
                {...register(currency_val, {
                  valueAsNumber: true,
                })}
              />
            )}
            {/* <button
              type="button"
              className="right-2 rtl:left-2 rtl:right-auto mx-2 rounded-full disabled:hover:bg-transparent disabled:text-gray-500 text-blue-500 hover:text-white hover:bg-blue-400"
              onClick={() => {
                dispatchForm({
                  open: true,
                  table: "currency",
                });
              }}
            >
              <PlusIcon circle />
            </button> */}
          </div>
          {/* {field?.hideValue ? null : (
            <input
              // name={currency_val}
              // value={watch(currency_val)}
              defaultValue={1}
              className={`border h-[39px] font-medium bg-gray-100 max-w-[50px] w-full read-only:bg-blue-100 flex items-center gap-2 dark:read-only:bg-[#444] rounded-sm px-4`}
              type="number"
              {...register(currency_val, {
                valueAsNumber: true,
              })}
            />
          )} */}
        </div>
        {error ? (
          <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
        ) : null}
      </div>
    </>
  );
};

export default CurrencyFieldGroup;
