import { memo, useState } from "react";

import { IncreaseTableBar } from "../IncreaseTableBar";
import TableHeadCol from "Components/StructurePage/CustomTable/TableHeadCol";
import Table from "Components/StructurePage/CustomTable/Table";
import TableHead from "Components/StructurePage/CustomTable/TableHead";
import { Input, UniqueField } from "Components/StructurePage/CustomFields";
import TableCol from "Components/StructurePage/CustomTable/TableCol";
import TableRow from "Components/StructurePage/CustomTable/TableRow";
import TableBody from "Components/StructurePage/CustomTable/TableBody";

let CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const VoucherBodyGrid = ({
  handelChangeEntriesField,
  handelChangeFieldBlur,
  entries,
  allowSelect,
  layout,
  handleInputChange,
  errors,
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
                    className="min-w-[170px] border-0 !rounded-none !h-full"
                    index={index}
                    table={"account"}
                    name="account_id"
                    getCachedList={getCachedList}
                    error={errors?.account_id ? "Field is required" : ""}
                    handleInputChange={handleInputChange}
                    // tableForHashed="account"
                    list={CACHE_LIST["account"]}
                    // label="CostGuid"
                    value={entries?.[index]?.["account_id"] || ""}
                  />
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <Input
                    type="number"
                    value={entries?.[index]?.["debit"] || ""}
                    inputClassName="border-0 !rounded-none !h-full"
                    name="debit"
                    error={errors?.debit ? "Field is required" : ""}
                    handleInputChange={handleInputChange}
                  />
                </TableCol>
                {layout ? null : (
                  <TableCol classes="!p-0 border dark:border-dark-border">
                    <Input
                      type="number"
                      value={entries?.[index]?.["credit"] || ""}
                      inputClassName="border-0 !rounded-none !h-full"
                      name="credit"
                      error={errors?.credit ? "Field is required" : ""}
                      handleInputChange={handleInputChange}
                    />
                  </TableCol>
                )}
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <UniqueField
                    className="min-w-[170px] border-0 !rounded-none !h-full"
                    index={index}
                    table={"currency"}
                    name="currency_id"
                    getCachedList={getCachedList}
                    error={errors?.currency_id ? "Field is required" : ""}
                    handleInputChange={handleInputChange}
                    // tableForHashed="cost"
                    list={CACHE_LIST["currency"]}
                    // label="CostGuid"
                    value={entries?.[index]?.["currency_id"] || ""}
                  />
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <Input
                    type="number"
                    value={entries?.[index]?.["currency_val"] || ""}
                    inputClassName="border-0 !rounded-none !h-full"
                    name="currency_val"
                    error={errors?.currency_val ? "Field is required" : ""}
                    handleInputChange={handleInputChange}
                  />
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <Input
                    type="text"
                    value={entries?.[index]?.["note"] || ""}
                    inputClassName="border-0 !rounded-none !h-full"
                    name="note"
                    error={errors?.note ? "Field is required" : ""}
                    handleInputChange={handleInputChange}
                  />
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <UniqueField
                    table={"cost_center"}
                    name="cost_center_id"
                    getCachedList={getCachedList}
                    error={errors?.cost_center_id ? "Field is required" : ""}
                    handleInputChange={handleInputChange}
                    // tableForHashed="cost"
                    className="min-w-[170px] border-0 !rounded-none !h-full"
                    list={CACHE_LIST["cost"]}
                    // label="CostGuid"
                    value={entries?.[index]?.["cost_center_id"] || ""}
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
