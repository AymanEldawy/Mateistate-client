import React, { useCallback, useEffect, useState } from "react";
import { memo } from "react";

import { getValueOfInputColor } from "Helpers/functions";
import { UniqueField, Input } from "Components/Forms/Fields";
import Table from "Components/CustomTable/Table";
import TableBody from "Components/CustomTable/TableBody";
import TableCol from "Components/CustomTable/TableCol";
import TableHead from "Components/CustomTable/TableHead";
import TableHeadCol from "Components/CustomTable/TableHeadCol";
import TableRow from "Components/CustomTable/TableRow";
import { Button } from "Components/Global/Button";

const TableForm = ({
  onOpen,
  rowLength,
  initialFields,
  setIndex,
  oldValues,
  onSubmit,
  goBack,
  goNext,
  steps,
  getCachedList,
  getValuesWithoutSubmit,
  setGetIndexOfRowUpdated,
  selectedColor,
  onSelectColor,
}) => {
  const [grid, setGrid] = useState([]);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    let names = initialFields?.map((_) => _.name);
    setColumns(names);
  }, [initialFields]);

  useEffect(() => {
    setGrid((prev) => {
      return {
        ...prev,
        ...oldValues,
      };
    });
  }, [oldValues]);

  useEffect(() => {
    if (getValuesWithoutSubmit) {
      getValuesWithoutSubmit(grid);
    }
  }, [grid]);

  const handelChangeField = useCallback(
    (index, name, value) => {
      setGrid((prev) => {
        return {
          ...prev,
          [index]: { ...prev?.[index], [name]: value },
        };
      });
      if (!!setGetIndexOfRowUpdated) {
        setGetIndexOfRowUpdated(index);
      }
    },
    [grid]
  );

  const submit = async () => {
    setLoading(true);
    await onSubmit(grid);
    setLoading(false);
  };

  return (
    <>
      <Table
        className={`${
          columns?.length > 5 ? "" : "max-w-[900px]"
        } mx-auto table-fixed pb-8 overflow-auto max-h-[420px] dark:border-dark-border`}
      >
        <TableHead classes="dark:bg-[##5490d3] !bg-[#5490d3] text-white dark:text-gray-200">
          <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3 !text-center">
            <div className="text-center w-full block">#</div>
          </TableHeadCol>
          {columns?.map((col) => (
            <TableHeadCol
              classes="border border-gray-300 dark:border-dark-border !py-3"
              key={col}
            >
              {col}
            </TableHeadCol>
          ))}
        </TableHead>
        <TableBody>
          {Array(rowLength)
            .fill(0)
            .map((r, index) => (
              <TableRow
                key={`${r}-${index}`}
                classes={
                  !!onSelectColor
                    ? selectedColor === index + 1
                      ? "bg-gray-200"
                      : ""
                    : ""
                }
              >
                <TableCol classes="max-w-fit !p-0 border dark:border-dark-border text-center">
                  {!!setIndex || onSelectColor ? (
                    <button
                      className="hover:bg-gray-200 hover:font-medium block w-full p-2"
                      onClick={() => {
                        if (onOpen) {
                          onOpen();
                          setIndex(index + 1);
                        }
                        if (!!onSelectColor && grid?.[index]?.Color) {
                          onSelectColor(index + 1);
                        }
                      }}
                    >
                      {index + 1}
                    </button>
                  ) : (
                    index + 1
                  )}
                </TableCol>
                {initialFields?.map((field) => (
                  <TableCol
                    classes="!p-0 border  dark:border-dark-border text-center"
                    key={field?.name}
                  >
                    {field?.key === "unique" ? (
                      <UniqueField
                        value={grid?.[index + 1]?.[field?.name]}
                        className="min-w-[140px] !border-0 !rounded-none !h-full !bg-transparent"
                        name={field?.name}
                        getSelectedValueWithIndex={handelChangeField}
                        tableForHashed={field?.table}
                        list={
                          !!getCachedList ? getCachedList(field?.table) : []
                        }
                      />
                    ) : (
                      <Input
                        value={
                          field?.type === "color"
                            ? getValueOfInputColor(
                                grid?.[index + 1]?.[field?.name]
                              )
                            : grid?.[index + 1]?.[field?.name]
                        }
                        className={`!border-0 !rounded-none !bg-transparent ${
                          field?.type === "color" ? "" : "!h-full"
                        }`}
                        name={field?.name}
                        type={field?.type}
                        required={field?.required}
                        onChange={(e) => {
                          handelChangeField(
                            index + 1,
                            field?.name,
                            e.target.value
                          );
                        }}
                      />
                    )}
                  </TableCol>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="flex justify-between gap-4 items-center mt-4">
        {steps?.length ? (
          <>
            <Button title="Back" onClick={goBack} type="button" />
            <Button
              title="Next"
              onClick={() => {
                goNext();
                submit();
              }}
              type="button"
            />
          </>
        ) : null}
        {!steps?.length && !!onSubmit ? (
          <Button
            title="Submit"
            onClick={submit}
            type="button"
            loading={loading}
          />
        ) : null}
      </div>
    </>
  );
};

export default memo(TableForm);
