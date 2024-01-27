import { memo, useEffect, useState } from "react";

import {
  Input,
  Select,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import { IncreaseTableBar } from "./IncreaseTableBar";

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
  onBlurNumbersField,
}) => {
  const [increaseCount, setIncreaseCount] = useState(10);

  useEffect(() => {
    if (rowsCount) {
      setIncreaseCount(rowsCount);
    }
  }, [rowsCount]);

  return (
    <>
      <div className={`relative overflow-x-auto mt-4 ${containerClassName}`}>
        <table
          className={`border-collapse w-full text-sm text-left text-gray-500 dark:text-gray-400 border rounded-md dark:border-[#333] ${tableClassName}`}
        >
          <thead
            className={`text-xs text-gray-700 uppercase dark:bg-dark-border dark:text-gray-300 bg-gray-200 ${theadClassName}`}
          >
            <tr>
              <th className={`${thClassName} border py-2`}>
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
                        <th key={col?.name} className={`px-4 py-2 border ${thClassName}`}>
                          <div className="flex gap-2 items-center justify-between">
                            {col?.label ||  col?.name}
                          </div>
                        </th>
                      );
                    }
                  })}
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
                      className={
                        typeof rowClassName === "function"
                          ? rowClassName(index)
                          : rowClassName
                      }
                      key={index}
                      style={
                        typeof rowStyles === "function"
                          ? rowStyles(index)
                          : rowStyles
                      }
                    >
                      <td className={`min-w-[40px] ${tdClassName} border`}>
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
                              className={`border ${tdClassName}`}
                              key={field?.name}
                            >
                              {field?.is_ref ? (
                                <UniqueField
                                  {...field}
                                  label={""}
                                  key={`${field?.name}`}
                                  updatedName={`${tab}.${index}.${field?.name}`}
                                  table={field.ref_table}
                                  containerClassName="!min-w-[190px] border-0 !rounded-none !h-full"
                                  className="!min-w-[190px] border-0 !rounded-none !h-full"
                                  selectContainerClassName="border-none"
                                  error={
                                    errors?.[tab]?.[field?.name]
                                      ? "Field is required"
                                      : ""
                                  }
                                  list={
                                    !!CACHE_LIST
                                      ? CACHE_LIST?.[field?.ref_table]
                                      : []
                                  }
                                />
                              ) : (
                                <>
                                  {field?.key === "select" ? (
                                    <Select
                                      {...field}
                                      key={`${field?.name}`}
                                      updatedName={`${tab}.${index}.${field?.name}`}
                                      label={""}
                                      selectClassName="!rounded-none !border-0 !border-transparent"
                                      selectClassNames={{
                                        control: (state) =>
                                          "dark:!bg-[#2c2c2c] !rounded-none",
                                      }}
                                      error={
                                        errors?.[tab]?.[field?.name]
                                          ? "Field is required"
                                          : ""
                                      }
                                    />
                                  ) : (
                                    <Input
                                      {...field}
                                      key={`${field?.name}`}
                                      updatedName={`${tab}.${index}.${field?.name}`}
                                      label={""}
                                      error={
                                        errors?.[tab]?.[field?.name]
                                          ? "Field is required"
                                          : ""
                                      }
                                      containerClassName="h-10 !h-full min-w-[55px]"
                                      inputClassName={"border-0 !rounded-none"}
                                      onBlur={onBlurNumbersField}
                                    />
                                  )}
                                </>
                              )}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      <IncreaseTableBar
        setIncreaseCount={setIncreaseCount}
        increaseCount={increaseCount}
      />
    </>
  );
};

export default TableFields;
