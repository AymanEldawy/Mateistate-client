import { CONTRACT_STATUS_NAMES } from "Helpers/Lib/contract-helpers";
import { useTranslation } from "react-i18next";

export const ContractStatus = ({ status, containerClassName }) => {
  const { t } = useTranslation();
  let state = CONTRACT_STATUS_NAMES?.[status];
  return (
    <p
      className={`text-xs capitalize w-fit gap-2 px-4 py-1 rounded-lg text-white font-medium ${state?.parentClass} ${containerClassName}`}
    >
      {state?.status}
      {/* {t("status")}:{ }
      <span
        className={`${state?.childClass} bg-[#ffffff26] text-white px-4 py-1 font-medium rounded-md`}
      >
      </span> */}
    </p>
  );
};
