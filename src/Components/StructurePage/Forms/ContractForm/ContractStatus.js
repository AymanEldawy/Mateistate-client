import { CONTRACT_STATUS_NAMES } from "Helpers/Lib/contract-helpers";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const ContractStatus = ({ contract_id }) => {
  const { t } = useTranslation();
  const { watch } = useFormContext();
  if (!contract_id) return;
  let state = CONTRACT_STATUS_NAMES?.[watch("contract.status")];

  return (
    <div className="mt-8 pt-2 flex lg:px-12 pb-4">
      <h4
        className={`text-x capitalize flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium ${state?.parentClass}`}
      >
        {t("status")}:{}
        <span
          className={`${state?.childClass} bg-[#ffffff26] text-white px-4 py-1 font-medium rounded-md`}
        >
          {state?.status}
        </span>
      </h4>
    </div>
  );
};
