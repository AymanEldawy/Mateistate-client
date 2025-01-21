import Btn from "Components/Global/Btn";
import { CheckIcon } from "Components/Icons";
import React from "react";
import { useFormContext } from "react-hook-form";

export const ChequeStatus = ({ onOpenFormOperation, pattern, chqValues }) => {
  const { watch } = useFormContext();

  if(!chqValues?.id) return;
  return (
    <div className="flex flex-wrap gap-6 pt-4 mt-8 mb-4">
      <Btn
        type="button"
        kind="primary"
        disabled={watch("partial_collection_status")}
        classes={`disabled:bg-gray-200  flex gap-2 items-center disabled:text-gray-500 rounded-md px-4 py-2 capitalize hover:opacity-70 text-xs`}
        onClick={() =>
          onOpenFormOperation({
            table: 'op_collection',
            gen_entries: 'collection_gen_entries',
            auto_gen_entries: 'collection_auto_gen_entries',
            status_name: 'collection_status',
          })
        }
      >
        {watch('collection_status') ? (
          <span>
            <CheckIcon />
          </span>
        ) : null}
        collection
      </Btn>
      <Btn
        type="button"
        kind="info"
        classes={`disabled:bg-gray-200  flex gap-2 items-center disabled:text-gray-500 rounded-md px-4 py-2 capitalize hover:opacity-70 text-xs`}
        disabled={watch("collection_status")}
        onClick={() =>
          onOpenFormOperation({
            table: 'op_partial_collection',
            gen_entries: 'partial_gen_entries',
            auto_gen_entries: 'partial_auto_gen_entries',
            status_name: 'partial_collection_status',
          })
        }
      >
        {watch('partial_collection_status') ? (
          <span>
            <CheckIcon />
          </span>
        ) : null}
        partial collection
      </Btn>
      <Btn
        type="button"
        kind="error"
        classes={` bg-green-500 text-white disabled:bg-gray-200  flex gap-2 items-center disabled:text-gray-500 rounded-md px-4 py-2 capitalize hover:opacity-70 text-xs`}
        onClick={() =>
          onOpenFormOperation({
            table: 'op_return',
            gen_entries: 'returnable_gen_entries',
            auto_gen_entries: 'returnable_auto_gen_entries',
            status_name: 'return_status',
          })
        }
      >
        {watch('return_status') ? (
          <span>
            <CheckIcon />
          </span>
        ) : null}
        return
      </Btn>
    </div>
  );
};
