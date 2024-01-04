import React from "react";
import { memo } from "react";

import { useEffect } from "react";
import { useGuidList } from "Hooks/useGuidList";
import axios from "axios";
import { SERVER_URL } from "Helpers/functions";
import TableHeadCol from "Components/StructurePage/CustomTable/TableHeadCol";
import TableBody from "Components/StructurePage/CustomTable/TableBody";
import TableRow from "Components/StructurePage/CustomTable/TableRow";
import TableCol from "Components/StructurePage/CustomTable/TableCol";
import { Input, UniqueField } from "Components/StructurePage/CustomFields";
import Table from "Components/StructurePage/CustomTable/Table";
import TableHead from "Components/StructurePage/CustomTable/TableHead";

const CACHE_LIST = {};

const TestEntryFormTable = ({
  handelChangeEntriesField,
  handelChangeFieldBlur,
  entries,
  allowSelect,
}) => {
  const { addTableList, lists, getGuidName } = useGuidList();

  useEffect(() => {
    async function fetch(table) {
      if (lists[table]) return;
      return await axios
        .post(`${SERVER_URL}/list`, {
          table: table,
        })
        .then((res) => {
          let data = res.data.recordset;
          CACHE_LIST[table] = data;
          addTableList(table || "unknown", data || []);
        });
    }
    fetch("account");
    fetch("Currency");
    fetch("cost");
  }, []);

  return (
    <Table className="pb-8 overflow-auto max-h-[420px] dark:border-dark-border">
      <TableHead classes="dark:bg-[#555] dark:text-gray-200">
        <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
          #
        </TableHeadCol>
        <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
          AcGuid
        </TableHeadCol>
        <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
          Debit
        </TableHeadCol>
        <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
          Credit
        </TableHeadCol>
        <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
          CurrencyGuid
        </TableHeadCol>
        <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
          CurrencyVal
        </TableHeadCol>
        <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
          Note
        </TableHeadCol>
        <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
          CostGuid
        </TableHeadCol>
        <TableHeadCol classes="border border-gray-300 dark:border-dark-border !py-3">
          ObverseAcGuid
        </TableHeadCol>
      </TableHead>
      <TableBody>
        {Array(20)
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
              <TableCol classes="!p-0 border dark:border-dark-border">
                <Input
                  type="number"
                  // label="credit"
                  value={entries?.[index]?.["Credit"] || ""}
                  name="Credit"
                  className="border-0 !rounded-none !h-full"
                  onChange={(e) =>
                    handelChangeEntriesField(index, "Credit", +e.target.value)
                  }
                  onBlur={(e) =>
                    handelChangeFieldBlur(index, "Credit", e.target.value)
                  }
                />
              </TableCol>
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
              <TableCol classes="!p-0 border dark:border-dark-border">
                <UniqueField
                  tableForHashed="account"
                  className="min-w-[170px] border-0 !rounded-none !h-full"
                  list={CACHE_LIST["account"]}
                  value={entries?.[index]?.["ObverseAcGuid"] || ""}
                  name="ObverseAcGuid"
                  getSelectedValueWithIndex={handelChangeEntriesField}
                  index={index}
                />
              </TableCol>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default memo(TestEntryFormTable);
