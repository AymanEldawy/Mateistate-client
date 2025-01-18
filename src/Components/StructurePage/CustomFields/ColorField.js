import Backdrop from "Components/Global/Backdrop";
import { ErrorText } from "Components/Global/ErrorText";
import Modal from "Components/Global/Modal/Modal";
import { PlusIcon } from "Components/Icons";
import { DEFAULT_COLORS } from "Helpers/constants";
import useFlatColoring from "Hooks/useFlatColoring";
import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

const ColorField = ({
  labelClassName,
  label,
  containerClassName,
  inputClassName,
  error,
  readOnly,
  index,
  tab,
  onBlur,
  availableColors,
  updatedName,
  hideLabel,
  ...field
}) => {
  const coloring = useFlatColoring();
  // const changeAvailableColors =
  const { t } = useTranslation();
  const { register, setValue, watch } = useFormContext();
  const [openColorList, setOpenColorList] = useState();
  const [color, setColor] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (color) {
      setValue(updatedName || field?.name, color);
    }
  }, [color]);

  useEffect(() => {
    if (openColorList) return;
    if (coloring?.changeAvailableColors) {
      coloring?.changeAvailableColors(watch(updatedName || field?.name));
    }
  }, [openColorList]);

  return (
    <div className="relative">
      <div className={"flex flex-row " + containerClassName} key={field?.name}>
        {label && !hideLabel ? (
          <label
            title={label}
            htmlFor={updatedName || field?.name}
            className={
              "w-[100px] lg:w-[130px] shrink-0 font-medium text-gray-600 overflow-hidden text-ellipsis text-xs whitespace max-h-[32px] capitalize flex items-center gap-2 " +
              labelClassName
            }
          >
            {t(label)?.replace(/_/g, " ")}
            {field?.required ? (
              <span className="text-red-600 mx-1">*</span>
            ) : null}
          </label>
        ) : null}
        <button
          type="button"
          // className="relative border-2 border-gray-100 w-10 h-10 rounded-full overflow-hidden"
          className={`border read-only:bg-[#2289fb1c] w-full h-8 dark:read-only:bg-[#444] rounded p-1 ${inputClassName} ${error ? "border-red-200 text-red-600" : ""
            } 
         `}
          style={{ backgroundColor: watch(updatedName || field?.name) }}
          onClick={() => setOpenColorList(true)}
        />
        {error ? (
          <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
        ) : null}
      </div>
      <>
        {openColorList ? (
          <div>
            <Backdrop
              open={openColorList}
              onClose={() => setOpenColorList(false)}
              classes="bg-transparent !z-10"
            />
            <div className="absolute z-20 min-w-[200px] p-4 top-0 ltr:left-full rtl:right-full bg-white shadow-md rounded-md">
              <div
                className={`relative h-6 mb-4 w-6 rounded-full border flex items-center justify-center text-white text-lg overflow-hidden ${color === inputRef?.current?.value ? "shadow-md" : ""
                  }`}
                style={{ backgroundColor: inputRef?.current?.value }}
              >
                <input
                  ref={inputRef}
                  id="color"
                  type="color"
                  name="color"
                  value={watch(updatedName || field.name)}
                  defaultValue={watch(updatedName || field.name)}
                  onChange={(e) => setColor(e.target.value)}
                  {...register(updatedName || field.name, {
                    required: field?.required && `${field?.name} is required`,
                  })}
                  className={`border-none outline-none bg-transparent absolute top-0 left-0 w-full h-full flex items-center justify-center`}
                />
              </div>
              <div className="grid grid-cols-5 gap-1">
                {(availableColors || DEFAULT_COLORS)?.map((currentColor) => (
                  <button
                    key={currentColor}
                    type="button"
                    className={`h-6 w-6 rounded-full border relative flex items-center justify-center ${color === currentColor ? "shadow-md" : ""
                      }`}
                    style={{ backgroundColor: currentColor }}
                    onClick={() => setColor(currentColor)}
                  >
                    {color === currentColor ? (
                      <span className="h-4 w-4 rounded-full border-[3px] border-white block" />
                    ) : null}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </>
    </div>
  );
};

export default ColorField;
