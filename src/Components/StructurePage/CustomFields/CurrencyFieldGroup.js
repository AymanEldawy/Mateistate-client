import { useEffect, useMemo } from "react";
import { usePopupForm } from "Hooks/usePopupForm";
import { PlusIcon } from "Components/Icons";
import { useState } from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { DEFAULT_CURRENCY_CODE } from "Helpers/GENERATE_STARTING_DATA";
import { ErrorText } from "Components/Global/ErrorText";
import useGlobalOptions from "Hooks/useGlobalOptions";

const CurrencyFieldGroup = ({
  tab,
  list: defaultList,
  containerClassName,
  labelClassName,
  selectClassName,
  old,
  readOnly,
  ...field
}) => {
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
  const { currencies } = useGlobalOptions();
  const [currency, setCurrency] = useState(null);
  const currency_id = tab ? `${tab}.currency_id` : "currency_id";
  const currency_val = tab ? `${tab}.currency_val` : "currency_val";

  useEffect(() => {
    if (!watch(currency_id)) {
      let defaultCurrency = currencies?.find(c => c?.code === DEFAULT_CURRENCY_CODE)
      setCurrency(defaultCurrency)
      setValue(currency_id, defaultCurrency?.id)
      if(!field?.hideValue) {
        setValue(currency_val, defaultCurrency?.rate)
      }
    }
  }, [currencies, tab, watch])

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <div className={`flex-row flex rounded-md text-sm h-[31px] ${containerClassName}`}>
        <label
          title="connect with id"
          className={
            "w-[100px] lg:w-[125px] shrink-0 font-medium text-gray-600 overflow-hidden text-ellipsis text-xs whitespace max-h-[32px] capitalize flex items-center gap-2 " +
            labelClassName
          }
        >
          Currency
        </label>
        <div className={`flex flex-row w-full relative border rounded-md`}>
          <Controller
            name={currency_id}
            control={control}
            defaultValue={null}
            className="w-full"
            render={({
              field: { onChange, onBlur, ref, value },
              fieldState: { error },
            }) => {
              return (
                <Select
                  ref={ref}
                  menuPlacement="auto"
                  menuPortalTarget={document?.body}
                  styles={{
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                  }}
                  options={currencies}
                  readOnly={readOnly}
                  name={currency_id}
                  className={`border min-h-[30px] read-only:bg-[#2289fb1c] dark:read-only:bg-[#444] h-[30px] rounded-md w-full bg-none bg-transparent field-select-container ${selectClassName}`}
                  classNames={{
                    indicatorsContainer: () => "!hidden bg-black",
                    control: (state) => "bg-transparent !border-none !min-h-[30px] !h-[30px]",
                    container: (state) =>
                      `!bg-none  !bg-transparent !border-none`,
                    singleValue: () => "dark:text-gray-200 unique-valid",
                    menuList: () => "dark:bg-dark-bg",
                    input: () => "dark:text-gray-200 !h-[30px] !py-0 !-mt-[2px]",
                  }}

                  getOptionLabel={(option) => option?.code}
                  getOptionValue={(option) => option?.id}
                  value={currency}
                  defaultValue={currency}
                  // onChange={onChange}
                  onChange={(option) => {
                    onChange(option?.value)
                    setCurrency(option)
                  }}
                />
              );
            }}
          />

          {field?.hideValue ? null : (
            <input

              value={currency?.rate}
              className={`border min-h-[30px] h-[30px] absolute ltr:right-0 font-medium bg-gray-100 max-w-[50px] w-full read-only:bg-[#2289fb1c] flex items-center gap-2 dark:read-only:bg-[#444] rounded-sm px-4`}
              type="number"
              {...register(currency_val, {
                valueAsNumber: true,
              })}
            />
          )}
        </div>
        {error ? (
          <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
        ) : null}
      </div>
    </>
  );
};

export default CurrencyFieldGroup;
