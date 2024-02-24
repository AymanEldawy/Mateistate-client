import { useState } from "react";

import Modal from "Components/Global/Modal/Modal";
import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import useFetch from "Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { ApiActions } from "Helpers/Lib/api";

const tables = [
  { name: "account", col: "building_account_id" },
  { name: "cost_center", col: "main_cost_center" },
];

const Buildings = () => {
  const { loading, data, error, refetchData } = useFetch("building");
  const navigate = useNavigate();

  const onClickDelete = async (list, ids) => {
    const res = await ApiActions.remove("building", {
      conditions: [
        {
          type: "and",
          conditions:
            ids.length > 1 ? [["id", "in", ids]] : [["id", "=", ids[0]]],
        },
      ],
    });
    for (const table of tables) {
      const res = await ApiActions.remove(table?.name, {
        conditions: [
          {
            type: "and",
            conditions:
              ids.length > 1
                ? [[table?.col, "in", ids]]
                : [[table?.col, "=", ids[0]]],
          },
        ],
      });
    }
    return res;
  };

  return (
    <DynamicTable
      tableName={"building"}
      refetchData={refetchData}
      data={data || []}
      loading={loading}
      onClickAdd={() => navigate("/buildings/add")}
      onClickDelete={onClickDelete}
    />
  );
};

export default Buildings;
