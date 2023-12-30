import { memo, useState } from "react";
import Table from "Components/CustomTable/Table";
import TableCol from "Components/CustomTable/TableCol";
import TableHead from "Components/CustomTable/TableHead";
import TableBody from "Components/CustomTable/TableBody";
import TableRow from "Components/CustomTable/TableRow";
import { Input, UniqueField } from "Components/Forms/Fields/";
import TableHeadCol from "Components/CustomTable/TableHeadCol";
import MinusIcon from "Helpers/Icons/MinusIcon";
import { PlusIcon } from "Helpers/Icons";
import { IncreaseTableBar } from "../IncreaseTableBar";

const CACHE_LIST = {};

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
                    name="AcGuid"
                    getSelectedValueWithIndex={handelChangeEntriesField}
                    index={index}
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
