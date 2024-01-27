import { useEffect } from "react";
import { usePopupForm } from "Hooks/usePopupForm";
import { PlusIcon } from "Components/Icons";
import { useState } from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";

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
  selectContainerClassName,
  CACHE_LIST,
  ...field
}) => {
  const { dispatchForm } = usePopupForm();
  const [list, setList] = useState([]);
  const { control, watch } = useFormContext();

  useEffect(() => {
    setList(
      defaultList?.map((item) => ({
        value: item?.[field?.ref_col || "id"],
        label: item[field?.ref_name || "name"],
      }))
    );
  }, [defaultList?.length]);

  return (
    <div className={containerClassName}>
      {label ? (
        <label
          title={label}
          className="overflow-hidden whitespace-nowrap text-ellipsis block text-sm font-normal mb-1 capitalize"
        >
          {label}{" "}
          {field?.required ? (
            <span className="text-red-500 mx-1">*</span>
          ) : null}
        </label>
      ) : null}
      <div
        className={`relative flex items-center border dark:border-dark-border rounded-md ${selectContainerClassName}`}
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
                // required={field?.required}
                className="w-full border-none"
                classNames={{
                  indicatorsContainer: () => "!hidden bg-black",
                  control: (state) => "bg-transparent !border-none",
                  container: (state) => "!bg-none !bg-transparent !border-none",
                  singleValue: () => "dark:text-gray-200 unique-valid",
                  menuList: () => "dark:bg-dark-bg",
                }}
                value={list?.find(
                  (c) => c?.value === watch(updatedName || field?.name)
                )}
                defaultValue={list?.find(
                  (c) => c?.value === watch(updatedName || field?.name)
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

        <button
          type="button"
          className="right-2 rtl:left-2 rtl:right-auto mx-2 rounded-full text-blue-500 hover:text-white hover:bg-blue-400"
          onClick={() => {
            if (onPlusClick) onPlusClick();
            dispatchForm({
              open: true,
              table: table,
            });
          }}
        >
          <PlusIcon circle />
        </button>
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
