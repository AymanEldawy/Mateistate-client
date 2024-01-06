import React, { useCallback, useEffect, useMemo, useState } from "react";
import { memo } from "react";

import { getValueOfInputColor } from "Helpers/functions";
import { Button } from "Components/Global/Button";
import Table from "Components/StructurePage/CustomTable/Table";
import TableHead from "Components/StructurePage/CustomTable/TableHead";
import TableHeadCol from "Components/StructurePage/CustomTable/TableHeadCol";
import TableBody from "Components/StructurePage/CustomTable/TableBody";
import TableRow from "Components/StructurePage/CustomTable/TableRow";
import TableCol from "Components/StructurePage/CustomTable/TableCol";
import { Input, UniqueField } from "Components/StructurePage/CustomFields";
import getFormByTableName from "Helpers/Forms/new-tables-forms";
import useFlatColoring from "Hooks/useFlatColoring";
import { IncreaseTableBar } from "Components/StructurePage/Forms/IncreaseTableBar";

export const ToolsTabsTableForm = ({
  onOpen,
  rowLength,
  setIndex,
  oldValues,
  onSubmit,
  getCachedList,
  getValuesWithoutSubmit,
  setGetIndexOfRowUpdated,
}) => {
  const { onSelectColor, selectedColor } = useFlatColoring();
  const [grid, setGrid] = useState([]);
  const [loading, setLoading] = useState(false);
  const [increaseCount, setIncreaseCount] = useState(10);
  const [columns, setColumns] = useState([]);

  const fields = useMemo(() => {
    return getFormByTableName("apartment_property_values");
  }, []);

  useEffect(() => {
    let names = fields?.map((_) => _.name);
    setColumns(names);
  }, [fields]);

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
          {Array(increaseCount)
            .fill(0)
            .map((r, index) => (
              <TableRow
                key={`${r}-${index}`}
                classes={selectedColor === index + 1 ? "bg-gray-200" : ""}
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

                        if (grid?.[index + 1]?.hex) {
                          onSelectColor(index + 1, grid?.[index + 1]?.hex);
                        }
                      }}
                    >
                      {index + 1}
                    </button>
                  ) : (
                    index + 1
                  )}
                </TableCol>
                {fields?.map((field) => (
                  <TableCol
                    classes="!p-0 border dark:border-dark-border text-center"
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
                        {...field}
                        label=""
                        value={
                          field?.type === "color"
                            ? getValueOfInputColor(
                                grid?.[index + 1]?.[field?.name]
                              )
                            : grid?.[index + 1]?.[field?.name]
                        }
                        inputClassName={`!border-0 !bg-transparent read-only:!bg-gray-100 read-only:px-4 read-only:font-medium !rounded-none   ${
                          field?.type === "color" ? "" : "!h-full"
                        }`}
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
      <IncreaseTableBar
        increaseCount={increaseCount}
        setIncreaseCount={setIncreaseCount}
      />
    </>
  );
};
