import { useEffect, useMemo } from "react";

import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import useFlatColoring from "Hooks/useFlatColoring";
import { useFormContext } from "react-hook-form";
import TableFields from "Components/StructurePage/CustomTable/TableFields";

export const ToolsTabsTableForm = ({ errors }) => {
  const { watch, setValue } = useFormContext();
  const { onSelectColor, selectedColor, roomCounts } = useFlatColoring();

  const fields = useMemo(() => {
    return getFormByTableName("property_values");
  }, []);

  useEffect(() => {
    let grid = watch()?.grid;

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
      // deleteRowComponent={() => {
      //   return <button className="absolute -top-1 -left-1 bg-red-500 p-[2px] scale-[80%]"><CloseIcon className="w-4 h-4 text-white"/></button>;
      // }}
      rowsCount={watch("grid")?.length || 20}
      theadClassName="!bg-[#5490d3] text-white"
      onRowClick={(index) => {
        let hex = watch(`grid.${[index]}.hex`);
        if (!hex || hex === "#000000") return;
        onSelectColor(index, hex);
      }}
      rowClassName={(index) => (index === selectedColor ? "bg-gray-200" : "")}
    />
  );
};
