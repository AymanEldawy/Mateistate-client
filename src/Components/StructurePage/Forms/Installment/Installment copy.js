import { useEffect, useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { Fields } from "../CustomForm/Fields";
import TableFields from "../../CustomTable/TableFields";
import { Button } from "Components/Global/Button";
import Modal from "Components/Global/Modal/Modal";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { useContractWrapper } from "Pages/Contracts/ContractWrapper";
import { CloseIcon } from "Helpers/Icons";

const CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const Installment = ({ onClose, oldData, oldGridData, errors }) => {
  const params = useParams();
  const { name, type } = params;
  const contractWrapper = useContractWrapper();

  const fields_form = useMemo(() => getFormByTableName("installment"), []);
  const fields_grid = useMemo(() => getFormByTableName("installment_data"), []);

  const onSubmit = (value) => {};

  if (!contractWrapper?.openInstallmentForm) return;

  return (
    <Modal onClose={onClose} open={true}>
      <FormHeadingTitle
        title="Installment"
        extraContext={
          <button
            onClick={() => contractWrapper?.setOpenInstallmentForm(false)}
            className="h-9 w-9 rounded-full flex items-center justify-center bg-red-100 text-red-500"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        }
      />

      <Fields
        fields={fields_form}
        name={name}
        tab="installment"
        errors={errors}
        CACHE_LIST={CACHE_LIST}
      />
      <Button title="Generate" type="button" />
      <TableFields
        fields={fields_grid}
        tab="grid"
        rowsCount={oldGridData || 10}
      />
    </Modal>
  );
};

export default Installment;
