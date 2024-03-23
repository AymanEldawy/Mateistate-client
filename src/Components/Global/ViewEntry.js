import { EyeIcon } from "Components/Icons";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import React from "react";

export const ViewEntry = ({ id }) => {
  const { dispatchVoucherEntries } = useVoucherEntriesView();
  return (
    <button
      type="button"
      className="bg-blue-500 mt-4 text-white px-2 py-1 rounded-md flex items-center gap-2"
      onClick={() =>
        dispatchVoucherEntries({
          table: "entry_main_data",
          grid: "entry_grid_data",
          ref_name: "created_from_id",
          id,
        })
      }
    >
      View Entry
      <EyeIcon />
    </button>
  );
};
