import { useEffect, useState } from "react";

import {
  ColorField,
  Input,
  Select,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import { IncreaseTableBar } from "./IncreaseTableBar";
import AreaField from "../CustomFields/AreaField";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { EyeIcon, PrintIcon, SearchIcon } from "Components/Icons";
import { usePopupForm } from "Hooks/usePopupForm";

const TableFields = ({
  fields,
  CACHE_LIST,
  tab,
  deleteRowComponent,
  errors,
  renderColumns,
  renderData,
  containerClassName,
  tableClassName,
  theadClassName,
  tbodyClassName,
  thClassName,
  tdClassName,
  rowClassName,
  rowStyles,
  onRowClick,
  rowsCount,
  allowPrint,
  onClickPrint,
  onlyView,
  selectedRows,
  allowViewEntry,
  showNumberAsLink,
  onClickOnNumber,
  withPortal,
  availableColors,
  numberClassName,
  increaseContainerClassName,
  increasable = true,
  tableError,
}) => {
  const { t } = useTranslation();
  const { dispatchForm } = usePopupForm();
  const { watch, setValue } = useFormContext();
  const [increaseCount, setIncreaseCount] = useState(1);

  useEffect(() => {
    if (rowsCount) {
      setIncreaseCount(rowsCount);
    }
  }, [rowsCount]);

  const onDecrement = () => {
    let index = increaseCount - 2;
    let grid = watch(tab || "grid");
    let newGrid = grid?.filter((c, i) => i !== index);
    setValue(tab || "grid", newGrid);
    setIncreaseCount((prev) => prev - 1);
  };

  return (
    <>
      <div className={`relative mt-4 overflow-x-auto ${containerClassName}`}>
        <table
          className={`border-collapse w-full text-sm text-left text-gray-500 dark:text-gray-400 border dark:border-dark-border rounded-md  ${tableClassName} ${
            tableError ? "!border-red-500" : ""
          }`}
        >
          <thead
            className={`sticky top-0 z-20 text-xs text-gray-700 uppercase dark:bg-dark-border dark:text-gray-300 bg-gray-200 ${theadClassName}`}
          >
            <tr>
              <th
                className={`${thClassName} border py-2 dark:border-dark-border`}
              >
                {" "}
                <div className="text-center w-full block">#</div>
              </th>
              {renderColumns ? (
                renderColumns()
              ) : (
                <>
                  {fields?.map((col) => {
                    if (
                      col.name === "id" ||
                      col.name === "row_index" ||
                      col.hide_in_form ||
                      col.hide_in_form_add
                    )
                      return;
                    else {
                      return (
                        <th
                          key={col?.name}
                          className={`px-4 py-2 border dark:border-dark-border ${thClassName}`}
                        >
                          <div className="flex gap-2 items-center justify-between">
                            {col?.label || col?.name}
                          </div>
                        </th>
                      );
                    }
                  })}
                  {allowPrint ? (
                    <th
                      className={`px-4 py-2 border dark:border-dark-border ${thClassName}`}
                    >
                      {t("print")}
                    </th>
                  ) : null}
                  {allowViewEntry ? (
                    <th
                      className={`px-4 py-2 border dark:border-dark-border ${thClassName}`}
                    >
                      {t("view_entry")}
                    </th>
                  ) : null}
                </>
              )}
            </tr>
          </thead>
          <tbody className={tbodyClassName}>
            {renderData ? (
              renderData
            ) : (
              <>
                {Array(increaseCount)
                  .fill(0)
                  .map((r, index) => (
                    <tr
                      className={`${
                        typeof rowClassName === "function"
                          ? rowClassName(index)
                          : rowClassName
                      } ${
                        selectedRows?.[index]
                          ? "bg-gray-100 dark:bg-dark-border"
                          : ""
                      }`}
                      key={`r-${index}`}
                      style={
                        typeof rowStyles === "function"
                          ? rowStyles(index)
                          : rowStyles
                      }
                      
                    >
                      <td
                        className={`min-w-[40px] ${tdClassName} border dark:border-dark-border relative ${numberClassName}`}
                      >
                        {!!onRowClick ? (
                          <div className="flex items-center relative">
                            {deleteRowComponent
                              ? deleteRowComponent(index)
                              : null}
                            <button
                              type="button"
                              onClick={() => onRowClick(index)}
                              className="text-center w-full block min-w-[20px]"
                            >
                              {index + 1}
                            </button>
                          </div>
                        ) : (
                          <div
                            className="text-center w-full block"
                            role="button"
                          >
                            {index + 1}
                          </div>
                        )}
                      </td>
                      {fields?.map((field) => {
                        if (
                          field.name == "id" ||
                          field.name == "row_index" ||
                          field.hide_in_form ||
                          field.hide_in_form_add
                        )
                          return;
                        else {
                          return (
                            <td
                              className={`border dark:border-dark-border ${tdClassName} relative ${
                                field?.type === "date" ? "min-w-[190px]" : ""
                              }`}
                              key={`${field?.name}-${index}`}
                            >
                              {field?.is_ref ? (
                                <UniqueField
                                  {...field}
                                  hideLabel
                                  key={`${field?.name}-${index}`}
                                  updatedName={`${tab}.${index}.${field?.name}`}
                                  table={field.ref_table}
                                  containerClassName="!min-w-[190px] border-0 !rounded-none !h-full"
                                  className="!min-w-[190px] border-0 !rounded-none !h-full"
                                  selectContainerClassName="border-none"
                                  list={
                                    !!CACHE_LIST
                                      ? CACHE_LIST?.[field?.ref_table]
                                      : []
                                  }
                                  readOnly={onlyView || field?.readOnly}
                                />
                              ) : (
                                <>
                                  {field?.key === "select" ? (
                                    <Select
                                      {...field}
                                      key={`${field?.name}-${index}`}
                                      menuPortalTarget={document?.body}
                                      styles={{
                                        menuPortal: (base) => ({
                                          ...base,
                                          zIndex: 9999,
                                        }),
                                      }}
                                      updatedName={`${tab}.${index}.${field?.name}`}
                                      hideLabel
                                      selectClassName="!rounded-none !border-0 !border-transparent"
                                      selectClassNames={{
                                        control: (state) =>
                                          "dark:!bg-[#2c2c2c] !rounded-none",
                                      }}
                                      readOnly={onlyView || field?.readOnly}
                                    />
                                  ) : (
                                    <>
                                      {field?.type === "color" ? (
                                        <ColorField
                                          {...field}
                                          availableColors={availableColors}
                                          key={`${field?.name}-${index}`}
                                          updatedName={`${tab}.${index}.${field?.name}`}
                                          hideLabel
                                          inputClassName={
                                            "border-0 !rounded-none"
                                          }
                                        />
                                      ) : field?.key === "area" ? (
                                        <AreaField
                                          {...field}
                                          key={`${field?.name}-${index}`}
                                          updatedName={`${tab}.${index}.${field?.name}`}
                                          hideLabel
                                          containerClassName="h-10 !h-full min-w-[55px]"
                                          inputClassName={
                                            "border-0 !rounded-none"
                                          }
                                        />
                                      ) : (
                                        <>
                                          {showNumberAsLink &&
                                          (field?.name === "number" ||
                                            field?.name ===
                                              "internal_number") &&
                                          watch(`${tab}.${index}.id`) ? (
                                            // <ViewRowFrom />
                                            <button
                                              onClick={() => {
                                                onClickOnNumber(
                                                  watch(`${tab}.${index}`)
                                                );
                                              }}
                                              className="absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2 text-blue-500"
                                            >
                                              <SearchIcon className="text-inherit w-5 h-5" />{" "}
                                            </button>
                                          ) : null}
                                          <Input
                                            {...field}
                                            key={`${field?.name}-${index}`}
                                            updatedName={`${tab}.${index}.${field?.name}`}
                                            hideLabel
                                            containerClassName="h-10 !h-full min-w-[55px]"
                                            inputClassName={`
                                              border-0 !rounded-none 
                                            `}
                                            readOnly={
                                              onlyView || field?.readOnly
                                            }
                                            withPortal={withPortal}
                                          />
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </td>
                          );
                        }
                      })}
                      {allowPrint ? (
                        <td className={`border ${tdClassName} relative `}>
                          <button
                            className="flex justify-center items-center mx-auto hover:text-blue-500 hover:scale-110 duration-150"
                            onClick={() =>
                              onClickPrint(watch(`${tab}.${index}`))
                            }
                          >
                            <PrintIcon className="w-5 h-5 text-inherit" />
                          </button>
                        </td>
                      ) : null}
                      {allowViewEntry ? (
                        <td className={`border ${tdClassName} relative `}>
                          <button
                            type="button"
                            className="bg-blue-500 my-2 text-white mx-auto px-2 py-1 rounded-md flex items-center gap-2"
                            onClick={() =>
                              allowViewEntry(watch(`${tab}.${index}`))
                            }
                          >
                            <EyeIcon className="h-5 w-5" />
                          </button>
                        </td>
                      ) : null}
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      {increasable ? (
        <IncreaseTableBar
          onDecrement={onDecrement}
          setIncreaseCount={setIncreaseCount}
          increaseCount={increaseCount}
          increaseContainerClassName={increaseContainerClassName}
        />
      ) : null}
    </>
  );
};

export default TableFields;
