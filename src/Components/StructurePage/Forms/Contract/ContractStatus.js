import { CONTRACT_STATUS_NAMES } from "Helpers/Lib/operations/contract-helpers";
import { CONSTANT_COLUMNS_NAME } from "Helpers/constants";
import React, { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const ContractStatus = ({ contract_id, tab }) => {
  const { t } = useTranslation();
  const { watch } = useFormContext();

  const isDeleted = watch(`contract.${CONSTANT_COLUMNS_NAME.is_deleted}`);
  const isArchived = watch(`contract.${CONSTANT_COLUMNS_NAME.is_archived}`);
  if (!contract_id) return;

  const displayContractStatus = () => {
    if (isDeleted)
      return (
        <h4 className="text-x capitalize flex items-center gap-2  bg-red-600 px-4 py-2 rounded-lg text-white">
          Contract was :
          <span className="bg-red-400 l text-white px-4 py-1 font-medium rounded-md">
            {"Delete"}
          </span>
        </h4>
      );
    if (isArchived)
      return (
        <h4 className="text-x capitalize flex items-center gap-2  bg-green-600 px-4 py-2 rounded-lg text-white">
          Contract was :
          <span className="bg-green-400 l text-white px-4 py-1 font-medium rounded-md">
            {"Archived"}
          </span>
        </h4>
      );
    return;
  };
  
  return (
    <div className="mt-8 pt-2 flex lg:px-12 pb-4">
      {isDeleted || isArchived ? (
        displayContractStatus()
      ) : (
        <h4 className="text-x capitalize flex items-center gap-2  bg-orange-500 px-4 py-2 rounded-lg text-white">
          {t("status")}:
          <span className="bg-orange-400 l text-white px-4 py-1 font-medium rounded-md">
            {CONTRACT_STATUS_NAMES?.["1"]}
          </span>
        </h4>
      )}
    </div>
  );
};
