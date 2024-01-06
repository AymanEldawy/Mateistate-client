import { useCallback, useEffect, useMemo } from "react";
import { usePopupForm } from "Hooks/usePopupForm";
import { PlusIcon } from "Helpers/Icons";
import { useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";

const UniqueField = ({
  list: defaultList,
  onPlusClick,
  onChange,
  label,
  containerClassName,
  error,
  table,
  values,
  ...field
}) => {
  console.log(
    "🚀 ~ file: UniqueField.js:19 ~ defaultList:",
    defaultList,
    values,
    field?.name,
    values?.[field?.name]
  );
  const { dispatchForm } = usePopupForm();
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(
      defaultList?.map((item) => ({
        value: item?.[field?.ref_col || "id"],
        label: item[field?.ref_name || "name"],
      }))
    );
  }, [defaultList?.length]);

  return (
    <div>
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
      <div className="relative flex items-center border rounded-md">
        <Select
          options={list}
          value={list?.filter((option) => option?.value === values?.[field?.name])}
          className="w-full border-none"
          // defaultInputValue={values?.[field?.name]}
          // defaultInputValue={{ value: values?.[field?.name] }}
          components={{}}
          classNames={{
            indicatorsContainer: () => "!hidden bg-black",
          }}
          onChange={onChange}
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
