import { CheckIcon } from "Components/Icons";
import React from "react";
import { useFormContext } from "react-hook-form";

const PAPER_OPERATIONS_SETTINGS = {
  op_collection: {
    label: "collection",
    table: "op_collection",
    classes: "bg-green-500 text-white",
    condition: "collection",
    gen_entries: "collection_gen_entries",
    auto_gen_entries: "collection_auto_gen_entries",
    status_name: "collection_status",
    note: ``,
  },
  op_partial_collection: {
    label: "partial collection",
    table: "op_partial_collection",
    classes: "bg-purple-500 text-white",
    condition: "partial_collection",
    gen_entries: "partial_gen_entries",
    auto_gen_entries: "partial_auto_gen_entries",
    status_name: "partial_collection_status",
    note: ``,
  },
  op_deportation: {
    label: "deportation",
    table: "op_deportation",
    classes: "bg-orange-500 text-white",
    condition: "deportable",
    gen_entries: "deportable_gen_entries",
    auto_gen_entries: "deportable_auto_gen_entries",
    status_name: "deport_status",
    note: ``,
  },
  op_return: {
    label: "return",
    table: "op_return",
    classes: "bg-red-500 text-white",
    condition: "returnable",
    gen_entries: "returnable_gen_entries",
    auto_gen_entries: "returnable_auto_gen_entries",
    status_name: "return_status",
    note: ``,
  },
};

export const ChequeStatus = ({ onOpenFormOperation, pattern, chqValues }) => {
  const { watch } = useFormContext();

  return (
    <div className="flex flex-wrap gap-6 pt-4 mt-8 mb-4">
      {watch("id")
        ? Object.values(PAPER_OPERATIONS_SETTINGS)?.map((btn) => {
            // if (PATTERN_SETTINGS?.[btn.condition])
            let preventOperation =
              btn?.label !== "return" &&
              pattern?.returnable_active_operations &&
              chqValues?.return_status;
            return (
              <button
                // disabled={!watch("id") || preventOperation || watch()}
                type="button"
                className={`${btn.classes} disabled:bg-gray-200  flex gap-2 items-center disabled:text-gray-500 rounded-md px-4 py-2 capitalize hover:opacity-70 text-xs`}
                onClick={() =>
                  onOpenFormOperation({
                    table: btn.table,
                    gen_entries: btn.gen_entries,
                    auto_gen_entries: btn.gen_entries,
                    status_name: btn.status_name,
                  })
                }
              >
                {watch(btn?.status_name) ? (
                  <span>
                    <CheckIcon />
                  </span>
                ) : null}
                {btn.label}
              </button>
            );
          })
        : null}
    </div>
  );
};
