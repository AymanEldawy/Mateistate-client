import React, { useCallback, useEffect, useState } from "react";
import { memo } from "react";

import { getValueOfInputColor } from "Helpers/functions";

import { Button } from "Components/Global/Button";
import { IncreaseTableBar } from "../IncreaseTableBar";
import TableHead from "Components/StructurePage/CustomTable/TableHead";
import TableHeadCol from "Components/StructurePage/CustomTable/TableHeadCol";
import Table from "Components/StructurePage/CustomTable/Table";
import TableRow from "Components/StructurePage/CustomTable/TableRow";
import TableCol from "Components/StructurePage/CustomTable/TableCol";
import TableBody from "Components/StructurePage/CustomTable/TableBody";
import { Input, UniqueField } from "Components/StructurePage/CustomFields";

const TableForm = ({
  initialFields,
  oldValues,
  onSubmit,
  goBack,
  goNext,
  steps,
  getCachedList,
  getValuesWithoutSubmit,
  activeStage,
}) => {
  const [grid, setGrid] = useState([]);
  const [increaseCount, setIncreaseCount] = useState(10);
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
    console.log("called", activeStage);
    if (getValuesWithoutSubmit) {
      getValuesWithoutSubmit(grid);
    }
    setGrid({});
  }, [activeStage]);

  console.log(grid, "gird");

  const handelChangeField = useCallback(
    (index, name, value) => {
      setGrid((prev) => {
        return {
          ...prev,
          [index]: { ...prev?.[index], [name]: value },
        };
      });
    },
    [grid]
  );

  return (
    <>
      <Table
        className={`${
          columns?.length > 5 ? "" : "max-w-[900px]"
        } mx-auto table-fixed overflow-auto max-h-[420px] dark:border-dark-border`}
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
              <TableRow key={`${r}-${index}-${activeStage}`}>
                <TableCol classes="max-w-fit !p-0 border dark:border-dark-border text-center">
                  {index + 1}
                </TableCol>
                {initialFields?.map((field) => (
                  <TableCol
                    classes="!p-0 border  dark:border-dark-border text-center"
                    key={field?.name}
                  >
                    {field?.is_ref ? (
                      <UniqueField
                        {...field}
                        label={""}
                        table={field.ref_table}
                        value={grid?.[index + 1]?.[field?.name]}
                        className="min-w-[140px] !border-0 !rounded-none !h-full !bg-transparent"
                        name={field?.name}
                        getSelectedValueWithIndex={handelChangeField}
                        tableForHashed={field?.ref_table}
                        list={
                          !!getCachedList ? getCachedList(field?.ref_table) : []
                        }
                      />
                    ) : (
                      <Input
                        {...field}
                        label={""}
                        key={field?.name}
                        value={grid?.[index + 1]?.[field?.name]}
                        className={`!border-0 !rounded-none !bg-transparent !h-full`}
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
      <IncreaseTableBar
        setIncreaseCount={setIncreaseCount}
        increaseCount={increaseCount}
      />
    </>
  );
};

export default memo(TableForm);
