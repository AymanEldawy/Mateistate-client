import { useEffect, useState } from "react";

import {
  ColorField,
  Input,
  Select,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import { IncreaseTableBar } from "./IncreaseTableBar";
import AreaField from "../StructurePage/CustomFields/AreaField";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { EyeIcon, PrintIcon, SearchIcon } from "Components/Icons";
import { usePopupForm } from "Hooks/usePopupForm";
import Btn from "Components/Global/Btn";

const TableFields = ({
  fields,
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
      <div className={`relative mt-4  max-h-[220px] overflow-x-auto ${containerClassName}`}>
        <table
          className={`border-collapse w-full text-xs text-left text-gray-500 dark:text-gray-400 border-[1px]  border-light-green rounded-md  ${tableClassName} ${
            tableError ? "!border-red-500" : ""
          }`}
        >
          <thead
            className={`sticky top-0 z-20 text-xs uppercase bg-light-green text-white ${theadClassName}`}
          >
            <tr>
              <th
                className={`${thClassName} border dark:border-dark-border whitespace-nowrap `}
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
                          className={`px-2 py-2 border min-w-[120px] dark:border-dark-border whitespace-nowrap  ${thClassName}`}
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
                      className={`px-2 py-2 border whitespace-nowrap  dark:border-dark-border ${thClassName}`}
                    >
                      {t("print")}
                    </th>
                  ) : null}
                  {allowViewEntry ? (
                    <th
                      className={`px-2 py-2 border whitespace-nowrap  dark:border-dark-border ${thClassName}`}
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
                        className={`min-w-[40px] whitespace-nowrap ${tdClassName} h-4 border dark:border-dark-border relative ${numberClassName}`}
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
                              className={`border whitespace-nowrap  dark:border-dark-border relative ${tdClassName}`}
                              key={`${field?.name}-${index}`}
                            >
                              {field?.is_ref ? (
                                <UniqueField
                                  {...field}
                                  labelClassName="hidden"
                                  key={`${field?.name}-${index}`}
                                  updatedName={`${tab}.${index}.${field?.name}`}
                                  table={field.ref_table}
                                  selectContainerClassName="border-none"
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
                                      labelClassName="hidden"
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
                                          labelClassName="hidden"
                                          inputClassName={
                                            "border-0 !rounded-none"
                                          }
                                        />
                                      ) : field?.key === "area" ? (
                                        <AreaField
                                          {...field}
                                          key={`${field?.name}-${index}`}
                                          updatedName={`${tab}.${index}.${field?.name}`}
                                          labelClassName="hidden"
                                          containerClassName="h-10 !h-full min-w-[55px]"
                                          inputClassName={
                                            "border-0 !rounded-none"
                                          }
                                        />
                                      ) : (
                                        <>
                                          {showNumberAsLink &&
                                          (field?.name === "internal_number" ||
                                            field?.name === "code") &&
                                          watch(`${tab}.${index}.id`) ? (
                                            // <ViewRowFrom />
                                            <button
                                              type="button"
                                              onClick={() => {
                                                onClickOnNumber(
                                                  watch(`${tab}.${index}`)
                                                );
                                              }}
                                              className="absolute z-10 top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2 text-blue-500"
                                            >
                                              <SearchIcon className="text-inherit w-5 h-5" />{" "}
                                            </button>
                                          ) : null}
                                          <Input
                                            {...field}
                                            key={`${field?.name}-${index}`}
                                            updatedName={`${tab}.${index}.${field?.name}`}
                                            labelClassName="hidden"
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
                        <td
                          className={`border whitespace-nowrap  ${tdClassName} relative `}
                        >
                          <button
                            type="button"
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
                        <td
                          className={`border whitespace-nowrap  ${tdClassName} relative `}
                        >
                          <Btn
                            kind="primary"
                            type="button"
                            containerClassName="!p-1 w-[50px] flex items-center justify-center m-[2px] mx-auto "
                            onClick={() =>
                              allowViewEntry(watch(`${tab}.${index}`))
                            }
                          >
                            <EyeIcon className="h-4 w-4" />
                          </Btn>
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
