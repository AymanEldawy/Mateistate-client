import { useEffect, useMemo, useState } from "react";

import Table from "Components/StructurePage/CustomTable/Table";
import TableHead from "Components/StructurePage/CustomTable/TableHead";
import TableHeadCol from "Components/StructurePage/CustomTable/TableHeadCol";
import TableBody from "Components/StructurePage/CustomTable/TableBody";
import TableRow from "Components/StructurePage/CustomTable/TableRow";
import TableCol from "Components/StructurePage/CustomTable/TableCol";
import { UniqueField } from "Components/StructurePage/CustomFields";
import getFormByTableName from "Helpers/Forms/new-tables-forms";
import useFlatColoring from "Hooks/useFlatColoring";
import { IncreaseTableBar } from "Components/StructurePage/Forms/IncreaseTableBar";
import { useFormContext } from "react-hook-form";
import TableFields from "Components/StructurePage/CustomTable/TableFields";

export const ToolsTabsTableForm = ({ errors }) => {
  const { watch, setValue } = useFormContext();
  const { onSelectColor, selectedColor, roomCounts } = useFlatColoring();

  const fields = useMemo(() => {
    return getFormByTableName("apartment_property_values");
  }, []);

  useEffect(() => {
    let grid = watch()?.grid;
    console.log(
      "🚀 ~ file: ToolsTabsTableForm.js:26 ~ useEffect ~ grid:",
      grid
    );
    for (let i = 0; i < grid?.length; i++) {
      if (roomCounts?.[grid[i].hex]) {
        setValue(`grid.${i}.room_count`, roomCounts?.[grid[i].hex]);
      }
    }
  }, [JSON.stringify(roomCounts)]);

  return (
    <TableFields
      tab="grid"
      errors={errors}
      fields={fields}
      rowsCount={20}
      theadClassName="bg-[#5490d3] text-white"
      onRowClick={(index) => {
        let hex = watch(`grid.${[index]}.hex`);
        if (!hex || hex === "#000000") return;
        onSelectColor(index, hex);
      }}
      rowClassName={(index) => (index === selectedColor ? "bg-gray-200" : "")}
      // handleInputChange={handleInputChange}
    />
  );
};
