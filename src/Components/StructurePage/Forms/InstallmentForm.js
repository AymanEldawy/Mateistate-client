import { useMemo } from "react";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { Fields } from "./CustomForm/Fields";
import TableFields from "../CustomTable/TableFields";
import { Button } from "Components/Global/Button";
import Modal from "Components/Global/Modal/Modal";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { CloseIcon } from "Helpers/Icons";

const InstallmentForm = ({ errors, getCachedList, onClose }) => {
  const fields_form = useMemo(() => getFormByTableName("installment"), []);
  const fields_grid = useMemo(() => getFormByTableName("installment_data"), []);

  // if (!contractWrapper?.openInstallmentForm) return;

  return (
    <Modal onClose={onClose} open={true}>
      <FormHeadingTitle
        title="Installment"
        extraContext={
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full flex items-center justify-center bg-red-100 text-red-500"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        }
      />

      <Fields
        fields={fields_form}
        tab="installment"
        errors={errors}
        getCachedList={getCachedList}
      />
      <Button title="Generate" type="button" />
      <TableFields
        fields={fields_grid}
        tab="installment_grid"
        getCachedListgetCachedList={getCachedList}
        // rowsCount={oldGridData || 10}
      />
    </Modal>
  );
};

export default InstallmentForm;
