import { memo, useState } from "react";

import { IncreaseTableBar } from "../IncreaseTableBar";
import TableHeadCol from "Components/StructurePage/CustomTable/TableHeadCol";
import Table from "Components/StructurePage/CustomTable/Table";
import TableHead from "Components/StructurePage/CustomTable/TableHead";
import { Input, UniqueField } from "Components/StructurePage/CustomFields";
import TableCol from "Components/StructurePage/CustomTable/TableCol";
import TableRow from "Components/StructurePage/CustomTable/TableRow";
import TableBody from "Components/StructurePage/CustomTable/TableBody";

const VoucherBodyGrid = ({
  grid,
  layout,
  handleInputChange,
  errors,
  CACHE_LIST,
}) => {
  const [increaseCount, setIncreaseCount] = useState(20);
  return (
    <div className="my-4">
      {/* <IncreaseTableBar
        increaseCount={increaseCount}
        setIncreaseCount={setIncreaseCount}
      /> */}
      <Table className="overflow-auto !mt-0 max-h-[420px] dark:border-dark-border">
        <TableHead classes="dark:bg-[#555] dark:text-gray-200">
          <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
            #
          </TableHeadCol>
          <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
            Account
          </TableHeadCol>
          <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
            {layout && layout !== "debit" ? "Credit" : "Debit"}
          </TableHeadCol>
          {layout ? null : (
            <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
              Credit
            </TableHeadCol>
          )}
          <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
            Currency id
          </TableHeadCol>
          <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
            Currency Val
          </TableHeadCol>
          <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
            Note
          </TableHeadCol>
          <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
            Cost center
          </TableHeadCol>
        </TableHead>
        <TableBody>
          {Array(increaseCount)
            .fill(0)
            .map((r, index) => (
              <TableRow key={`${r}-${index}`}>
                <TableCol classes="!p-0 border dark:border-dark-border text-center">
                  {index + 1}
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <UniqueField
                    index={index}
                    updatedName={`grid.${index}.account_id`}
                    className="min-w-[170px] border-0 !rounded-none !h-full"
                    table={"account"}
                    error={errors?.account_id ? "Field is required" : ""}
                    handleInputChange={handleInputChange}
                    list={CACHE_LIST["account"]}
                  />
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <Input
                    index={index}
                    updatedName={`grid.${index}.debit`}
                    type="number"
                    inputClassName="border-0 !rounded-none !h-full"
                    error={errors?.debit ? "Field is required" : ""}
                    handleInputChange={handleInputChange}
                  />
                </TableCol>
                {layout ? null : (
                  <TableCol classes="!p-0 border dark:border-dark-border">
                    <Input
                      index={index}
                      updatedName={`grid.${index}.credit`}
                      type="number"
                      // value={grid?.[index]?.["credit"] || ""}
                      inputClassName="border-0 !rounded-none !h-full"
                      name="grid.credit"
                      error={errors?.credit ? "Field is required" : ""}
                      handleInputChange={handleInputChange}
                    />
                  </TableCol>
                )}
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <UniqueField
                    index={index}
                    updatedName={`grid.${index}.currency_id`}
                    className="min-w-[170px] border-0 !rounded-none !h-full"
                    table={"currency"}
                    name="grid.currency_id"
                    // // getCachedList={getCachedList}
                    error={errors?.currency_id ? "Field is required" : ""}
                    handleInputChange={handleInputChange}
                    // tableForHashed="cost"
                    list={CACHE_LIST["currency"]}
                    // label="CostGuid"
                    // value={grid?.[index]?.["currency_id"] || ""}
                  />
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <Input
                    index={index}
                    updatedName={`grid.${index}.currency_val`}
                    type="number"
                    // value={grid?.[index]?.["currency_val"] || ""}
                    inputClassName="border-0 !rounded-none !h-full"
                    name="grid.currency_val"
                    error={errors?.currency_val ? "Field is required" : ""}
                    handleInputChange={handleInputChange}
                  />
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <Input
                    index={index}
                    updatedName={`grid.${index}.note`}
                    type="text"
                    // value={grid?.[index]?.["note"] || ""}
                    inputClassName="border-0 !rounded-none !h-full"
                    name="grid.note"
                    error={errors?.note ? "Field is required" : ""}
                    handleInputChange={handleInputChange}
                  />
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <UniqueField
                    index={index}
                    updatedName={`grid.${index}.cost_center_id`}
                    table={"cost_center"}
                    name="grid.cost_center_id"
                    // // getCachedList={getCachedList}
                    error={errors?.cost_center_id ? "Field is required" : ""}
                    handleInputChange={handleInputChange}
                    // tableForHashed="cost"
                    className="min-w-[170px] border-0 !rounded-none !h-full"
                    list={CACHE_LIST["cost"]}
                    // label="CostGuid"
                    // value={grid?.[index]?.["cost_center_id"] || ""}
                  />
                </TableCol>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <IncreaseTableBar
        increaseCount={increaseCount}
        setIncreaseCount={setIncreaseCount}
      />
    </div>
  );
};

export default VoucherBodyGrid;
