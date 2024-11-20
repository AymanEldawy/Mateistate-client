import { useEffect } from "react";
import { usePopupForm } from "Hooks/usePopupForm";
import { PlusIcon } from "Components/Icons";
import { useState } from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { DEFAULT_CURRENCY_CODE } from "Helpers/GENERATE_STARTING_DATA";
import { ErrorText } from "Components/Global/ErrorText";

const CurrencyFieldGroup = ({
  tab,
  list: defaultList,
  containerClassName,
  old,
  ...field
}) => {
  const { t } = useTranslation();
  const { dispatchForm } = usePopupForm();
  const { control, watch, setValue, register, formState: {errors} } = useFormContext();
  const [list, setList] = useState([]);
  const error = tab ? errors?.[tab]?.[field?.name] : errors?.[field?.name]  

  const currency_id = tab ? `${tab}.currency_id` : "currency_id";
  const currency_val = tab ? `${tab}.currency_val` : "currency_val";

  useEffect(() => {
    setList(
      defaultList?.map((item) => ({
        value: item?.id,
        label: item?.code,
      }))
    );

    if (defaultList?.length && !watch(currency_id)) {
      let val = defaultList?.find((c) => c?.code === DEFAULT_CURRENCY_CODE)?.id;
      setValue(currency_id, val);
      if (!field?.hideValue) {
        setValue(currency_val, 1);
      }
    }
  }, [defaultList?.length, watch(currency_id)]);

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
              render={({ field: { onChange, onBlur, ref, value } ,fieldState: { error }}) => {
                return (
                  <Select
                    ref={ref}
                    menuPlacement="auto"
                    menuPortalTarget={document?.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    options={list}
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
                    value={list?.find((c) => c?.value === watch(currency_id))}
                    defaultValue={list?.find(
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
