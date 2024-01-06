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
                    allowSelect={allowSelect}
                    tableForHashed="account"
                    className="min-w-[170px] border-0 !rounded-none !h-full"
                    list={CACHE_LIST["account"]}
                    value={entries?.[index]?.["AcGuid"] || ""}
                    // label="AcGuid"
                    getSelectedValueWithIndex={handelChangeEntriesField}
                    index={index}
                    values={entries?.[index]}
                    getCachedList={getCachedList}
                    field={{
                      name: "AcGuid",
                    }}
                  />
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <Input
                    type="number"
                    className="border-0 !rounded-none !h-full"
                    // label="Debit"
                    value={entries?.[index]?.["Debit"] || ""}
                    name="Debit"
                    onChange={(e) =>
                      handelChangeEntriesField(index, "Debit", +e.target.value)
                    }
                    onBlur={(e) =>
                      handelChangeFieldBlur(index, "Debit", e.target.value)
                    }
                  />
                </TableCol>
                {layout ? null : (
                  <TableCol classes="!p-0 border dark:border-dark-border">
                    <Input
                      type="number"
                      // label="credit"
                      value={entries?.[index]?.["Credit"] || ""}
                      name="Credit"
                      className="border-0 !rounded-none !h-full"
                      onChange={(e) =>
                        handelChangeEntriesField(
                          index,
                          "Credit",
                          +e.target.value
                        )
                      }
                      onBlur={(e) =>
                        handelChangeFieldBlur(index, "Credit", e.target.value)
                      }
                    />
                  </TableCol>
                )}
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <UniqueField
                    tableForHashed="Currency"
                    className="min-w-[170px] border-0 !rounded-none !h-full"
                    list={CACHE_LIST["Currency"]}
                    value={entries?.[index]?.["CurrencyGuid"] || ""}
                    // label="CurrencyGuid"
                    name="CurrencyGuid"
                    getSelectedValueWithIndex={handelChangeEntriesField}
                    index={index}
                    values={entries?.[index]}
                    getCachedList={getCachedList}
                    field={{
                      name: "CurrencyGuid",
                    }}
                  />
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <Input
                    type="number"
                    // label="CurrencyVal"
                    value={entries?.[index]?.["CurrencyVal"] || ""}
                    className="border-0 !rounded-none !h-full"
                    name="CurrencyVal"
                    onChange={(e) =>
                      handelChangeEntriesField(
                        index,
                        "CurrencyVal",
                        +e.target.value
                      )
                    }
                  />
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <Input
                    type="text"
                    // label="Note"
                    value={entries?.[index]?.["Note"] || ""}
                    className="border-0 !rounded-none !h-full"
                    name="Note"
                    onChange={(e) =>
                      handelChangeEntriesField(index, "Note", e.target.value)
                    }
                  />
                </TableCol>
                <TableCol classes="!p-0 border dark:border-dark-border">
                  <UniqueField
                    tableForHashed="cost"
                    className="min-w-[170px] border-0 !rounded-none !h-full"
                    list={CACHE_LIST["cost"]}
                    // label="CostGuid"
                    value={entries?.[index]?.["CostGuid"] || ""}
                    name="CostGuid"
                    getSelectedValueWithIndex={handelChangeEntriesField}
                    index={index}
                    values={entries?.[index]}
                    getCachedList={getCachedList}
                    field={{
                      name: "CostGuid",
                    }}
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

export default memo(VoucherBodyGrid);
