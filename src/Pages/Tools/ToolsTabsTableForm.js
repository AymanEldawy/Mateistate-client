import { useEffect, useMemo, useState } from "react";

import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import useFlatColoring from "Hooks/useFlatColoring";
import { useFormContext } from "react-hook-form";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { SELECT_LISTS } from "Helpers/constants";
import { ApiActions } from "Helpers/Lib/api";

export const ToolsTabsTableForm = ({ errors, row }) => {
  const { watch, setValue } = useFormContext();
  const { onSelectColor, selectedColor, roomCounts, availableColors } = useFlatColoring();
  const [fields, setFields] = useState([]);

  const getBuildingOwning = async () => {
    const res = await ApiActions.read("building_real_estate_management", {
      conditions: [
        { type: "and", conditions: [["building_id", "=", row?.id]] },
      ],
    });
    if (res?.result?.length) {
      let list = [];
      for (const field of getFormByTableName("property_values")) {
        if (
          field?.name === "property_type" &&
          res?.result?.at(0)?.owner_account_id
        )
          field.list = SELECT_LISTS("flat_property_type")?.reverse();
        field.selectFirstAsDefault = true;

        list.push(field);
      }

      setFields(list);
    } else {
      setFields(getFormByTableName("property_values"));
    }
  };

  useEffect(() => {
    if (!row?.id) return;
    getBuildingOwning();
  }, [row?.id]);

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
      rowsCount={watch("grid")?.length > 10 ? watch("grid")?.length : 10}
      theadClassName="!bg-[#5490d3] text-white"
      availableColors={availableColors}
      onRowClick={(index) => {
        let hex = watch(`grid.${[index]}.hex`);
        if (!hex || hex === "#000000") return;
        onSelectColor(index, hex);
      }}
      rowClassName={(index) => (index === selectedColor ? "bg-gray-200" : "")}
    />
  );
};
