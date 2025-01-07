import { useMemo } from "react";
import getFormByTableName from "Helpers/Forms/forms";
import TableFields from "../../../TableComponents/TableFields";
import Modal from "Components/Global/Modal/Modal";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { CloseIcon } from "Components/Icons";
import { useFormContext } from "react-hook-form";

const TerminationFinesForm = ({ errors, CACHE_LIST, onClose }) => {
  const { watch, setValue } = useFormContext();
  const fields_grid = useMemo(
    () => getFormByTableName("termination_fines_grid"),
    []
  );

  return (
    <Modal onClose={onClose} open={true}>
      <FormHeadingTitle
        title="Termination Fines"
        extraContext={
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full flex items-center justify-center bg-red-100 text-red-500"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        }
      />
      <TableFields
        fields={fields_grid}
        tab="termination_fines_grid"
        CACHE_LIST={CACHE_LIST}
        rowsCount={watch("termination_fines_grid")?.length}
      />
    </Modal>
  );
};

export default TerminationFinesForm;
