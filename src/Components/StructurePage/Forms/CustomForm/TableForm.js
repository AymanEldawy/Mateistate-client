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
  fields,
  getCachedList,
  setValues,
  activeStage,
  values,
  errors,
}) => {
  const [increaseCount, setIncreaseCount] = useState(10);

  const handelChangeField = useCallback(
    (index, name, value) => {
      setValues((prev) => {
        return {
          ...prev,
          [activeStage]: {
            ...prev?.[activeStage],
            [index]: { ...prev?.[activeStage]?.[index], [name]: value },
          },
        };
      });
    },
    [values]
  );

  return (
    <>
      <Table
        className={`${
          fields?.length > 5 ? "" : "max-w-[900px]"
        } mx-auto table-fixed overflow-auto max-h-[420px] dark:border-dark-border`}
      >
        <TableHead classes="dark:bg-[##5490d3] !bg-[#5490d3] text-white dark:text-gray-200">
          <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3 !text-center">
            <div className="text-center w-full block">#</div>
          </TableHeadCol>
          {fields?.map((col) => {
            if (col.name === "id" || col.hide_in_form || col.hide_in_form_add)
              return;
            return (
              <TableHeadCol
                classes="border border-gray-300 dark:border-dark-border !py-3"
                key={col.name}
              >
                {col.name}
              </TableHeadCol>
            );
          })}
        </TableHead>
        <TableBody>
          {Array(increaseCount)
            .fill(0)
            .map((r, index) => (
              <TableRow key={`${r}-${index}-${activeStage}`}>
                <TableCol classes="max-w-fit !p-0 border dark:border-dark-border text-center">
                  {index + 1}
                </TableCol>
                {fields?.map((field) => {
                  if (
                    field.name === "id" ||
                    field.hide_in_form ||
                    field.hide_in_form_add
                  )
                    return;
                  return (
                    <TableCol
                      classes="!p-0 border  dark:border-dark-border text-center"
                      key={field?.name}
                    >
                      {field?.is_ref ? (
                        <UniqueField
                          {...field}
                          label={""}
                          table={field.ref_table}
                          // value={values?.[index + 1]?.[field?.name]}
                          // values={values?.[index + 1]}
                          className="min-w-[140px] !border-0 !rounded-none !h-full !bg-transparent"
                          tableForHashed={field?.ref_table}
                          key={`${field?.name}`}
                          getCachedList={getCachedList}
                          list={
                            !!getCachedList
                              ? getCachedList(field?.ref_table)
                              : []
                          }
                          error={errors[field?.name]?.message}
                        />
                      ) : (
                        <Input
                          {...field}
                          key={`${field?.name}`}
                          label={field?.name?.replace(/_/g, " ")}
                          error={errors[field?.name]?.message}
                        />
                        // <Input
                        //   {...field}
                        //   label={""}
                        //   key={field?.name}
                        //   value={values?.[index + 1]?.[field?.name]}
                        //   className={`!border-0 !rounded-none !bg-transparent !h-full`}
                        //   name={field?.name}
                        //   type={field?.type}
                        //   required={field?.required}
                        //   onChange={(e) => {
                        //     handelChangeField(
                        //       index + 1,
                        //       field?.name,
                        //       e.target.value
                        //     );
                        //   }}
                        // />
                      )}
                    </TableCol>
                  );
                })}
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
