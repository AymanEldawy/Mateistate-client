import { useCallback } from "react";
import { usePopupForm } from "Hooks/usePopupForm";
import { PlusIcon } from "Helpers/Icons";
import { useState } from "react";
import { toast } from "react-toastify";

const UniqueField = ({
  tableForHashed,
  list: defaultList,
  getSelectedValue,
  getSelectedValueRef,
  getSelectedValueWithIndex,
  onPlusClick,
  onChange,
  onFocus,
  label,
  containerClassName,
  className,
  required,
  value: val,
  allowSelect,
  error,
  table,
  ...field
}) => {
  let name = defaultList?.[0].hasOwnProperty("name") ? "name" : "full_name";
  const [value, setValue] = useState("");
  const [listFilter, setListFilter] = useState([]);
  const [selected, setSelected] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const { dispatchForm } = usePopupForm();

  const handelFilter = useCallback(
    (val) => {
      setValue(val);
      if (val?.length > 0) setDropdown(true);
      else setDropdown(false);

      let newList = defaultList?.filter((item) => {
        return item?.[name]?.toLowerCase().startsWith(val?.toLowerCase());
      });
      setListFilter(newList);
    },
    [defaultList]
  );

  const handelSelected = useCallback(
    (item) => {
      if (!!allowSelect && allowSelect(item?.id)) {
        toast.error("Oops! Can't Select this Name again");
        return;
      }
      setValue(item?.[name]);
      setSelected(item);
      setDropdown(false);
      if (!!getSelectedValue)
        getSelectedValue(field?.[name], item?.id, required);
      if (!!getSelectedValueRef) getSelectedValueRef.current = item?.id;
      if (!!getSelectedValueWithIndex)
        getSelectedValueWithIndex(field?.index, field?.[name], item?.id);
    },
    [selected, allowSelect, field?.index]
  );

  const onCancelMenu = () => {
    if (!listFilter?.length) {
      setListFilter([]);
    }
    setValue("");
    setSelected("");
    setDropdown(false);
  };

  return (
    <div
      className={`relative z-20 ${containerClassName} ${
        dropdown ? "!z-40" : ""
      }`}
    >
      {dropdown ? (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-[#0007]"
          onClick={onCancelMenu}
        />
      ) : null}
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
      <div className="relative flex items-center ">
        <input
          className={`border rounded ${
            value ? "bg-blue-100" : ""
          } placeholder:text-gray-800 dark:placeholder:text-gray-500 dark:text-white p-1 w-full invalid:text-gray-800  ${className}`}
          id="myInput"
          value={value}
          autoComplete="on"
          placeholder="Search here"
          onBlur={(e) => {
            if (e.target.value === "") {
              if (!!getSelectedValue)
                getSelectedValue(field?.name, "", required);
              if (!!getSelectedValueRef) getSelectedValueRef.current = "";
              if (!!getSelectedValueWithIndex)
                getSelectedValueWithIndex(field?.index, field?.name, "");
            }
          }}
          onChange={(e) => {
            handelFilter(e.target.value);
            if (!!onChange) onChange();
          }}
          onFocus={() => {
            if (!!onFocus) {
              onFocus();
            }
          }}
          {...field}
        />
        <button
          type="button"
          className="absolute right-2 rtl:left-2 rtl:right-auto text-blue-500 hover:text-white rounded-full hover:bg-blue-400"
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
      {dropdown ? (
        <div className="absolute rounded-md mt-2 text-sm w-full z-10 bg-white bg_dark shadow-md p-2">
          {listFilter?.length && dropdown ? (
            <ul id="myUL" className="flex flex-col gap-1">
              {listFilter?.map((item) => (
                <li
                  key={item?.[name]}
                  onClick={(e) => {
                    e.stopPropagation();
                    handelSelected(item);
                  }}
                  className={`capitalize p-1 px-3 rounded-md hover:bg-gray-200 cursor-pointer ${
                    selected?.id === item?.id ? "bg-blue-400 text-white" : ""
                  }`}
                >
                  <span>{item?.[name]}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="bg-red-200 text-red-500 p-1 text-sm rounded-md px-3">
              There is no results.
            </p>
          )}
        </div>
      ) : null}
      {error ? (
        <p className="bg-red-200 mt-2 rounded text-sm text-red-500 px-2 py-1">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default UniqueField;
