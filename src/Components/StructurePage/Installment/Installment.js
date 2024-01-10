import { useEffect, useMemo, useState } from "react";
import BlockPaper from "Components/BlockPaper/BlockPaper";
import getFormByTableName from "Helpers/Forms/new-tables-forms";
import { useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { Fields } from "../Forms/CustomForm/Fields";
import TableFields from "../CustomTable/TableFields";
import { Button } from "Components/Global/Button";
import Modal from "Components/Modal/Modal";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { useContractWrapper } from "Pages/Contracts/ContractWrapper";
import { CloseIcon } from "Helpers/Icons";

const CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const Installment = ({ onClose, oldData, oldGridData }) => {
  const params = useParams();
  const { name, type } = params;
  const { openInstallmentForm, setOpenInstallmentForm } = useContractWrapper();
  console.log("🚀 ~ Installment ~ openInstallmentForm:", openInstallmentForm);

  const methods = useForm({ defaultValues: {} });
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = methods;

  useEffect(() => {
    setValue("installment", oldData);
    setValue("grid", oldGridData);
  }, []);

  const fields_form = useMemo(() => getFormByTableName("installment"), []);
  const fields_grid = useMemo(() => getFormByTableName("installment_data"), []);

  const onSubmit = (value) => {
    console.log(value);
  };
  console.log("called", watch());
  if (!openInstallmentForm) return;

  return (
    <Modal onClose={onClose} open={true}>
      <FormHeadingTitle
        title="Installment"
        extraContext={
          <button onClick={() => setOpenInstallmentForm(false)} className="h-9 w-9 rounded-full flex items-center justify-center bg-red-100 text-red-500">
            <CloseIcon className="w-6 h-6" />
          </button>
        }
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Fields
            fields={fields_form}
            name={name}
            tab="installment"
            // handleInputChange={handleInputChange}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
          />
          <Button title="Save" />
          <TableFields
            fields={fields_grid}
            tab="grid"
            rowsCount={oldGridData || 10}
          />
          <Button title="Save" />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default Installment;
