import { Button } from "Components/Global/Button";
import { useContractWrapper } from "Pages/Contracts/ContractWrapper";
import React from "react";
import { useFormContext } from "react-hook-form";

export const ButtonField = ({ watch: fieldWatch, ...field }) => {
  const { setOpenInstallmentForm } = useContractWrapper();
  const { watch } = useFormContext();
  console.log(field, watch(fieldWatch));
  if (watch(fieldWatch) !== 4) return;
  return (
    <div className="flex items-end">
      <Button
        type="button"
        onClick={() => setOpenInstallmentForm(true)}
        // onClick={field.onClick}
        title={field?.label}
        classes="w-fit h-fit"
      />
    </div>
  );
};
