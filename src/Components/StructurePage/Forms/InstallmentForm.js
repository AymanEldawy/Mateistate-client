import { useMemo, useState } from "react";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { Fields } from "./CustomForm/Fields";
import TableFields from "../CustomTable/TableFields";
import { Button } from "Components/Global/Button";
import Modal from "Components/Global/Modal/Modal";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { CloseIcon } from "Components/Icons";
import { useFormContext } from "react-hook-form";
import { dividePrice } from "Helpers/functions";
import { ApiActions } from "Helpers/Lib/api";

const generatePaymentBatches = (watch, setValue) => {
  const rest_amount = watch("installment.rest_amount");
  const each_duration = watch("installment.each_duration");
  const each_number = watch("installment.each_number");
  const first_installment_date = watch("installment.first_installment_date");
  const installments_numbers = watch("installment.installments_numbers");
  const begin_number = watch("installment.begin_number");
  const bank_id = watch("installment.bank_id");
  const beneficiary_name = watch("installment.beneficiary_name");
  const client_id = watch("installment.client_id");
  const cost_center_id = watch("installment.cost_center_id");
  const observe_account_id = watch("installment.observe_account_id");
  const amount = watch("installment.amount");
  const gen_entries_type = watch("installment.gen_entries_type");
  const voucher_pattern_id = watch("installment.voucher_pattern_id");
  const installment_statement = watch("installment.installment_statement");
  const statement2 = watch("installment.statement2");

  const result = dividePrice(
    first_installment_date,
    rest_amount,
    installments_numbers,
    each_duration,
    each_number
  );

  let bills = [];

  for (let i = 0; i < result.length; i++) {
    bills.push({
      number: begin_number + i,
      due_date: result[i]?.month,
      amount: result[i]?.price,
      end_due_date: result[i]?.end,
      bank_id,
      client_id,
      observe_account_id: observe_account_id,
      statement: installment_statement,
      beneficiary_name,
      statement2,
    });
  }

  setValue("installment_grid", bills);

  // due_date
  // number
  // amount
  // bank_id
  // client_id
  // observe_account_id
  // statement
  // end_due_date
  // beneficiary_name
  // statement2
};

const InstallmentForm = ({ errors, CACHE_LIST, onClose, contract_id }) => {
  const { watch, setValue } = useFormContext();
  const [canGenerate, setCanGenerate] = useState(true);
  const fields_form = useMemo(() => getFormByTableName("installment"), []);
  const fields_grid = useMemo(() => getFormByTableName("installment_data"), []);

  const deleteAllRecords = async () => {
    if (contract_id) {
      const res = await ApiActions.remove("installment_data", {
        conditions: [
          {
            type: "and",
            conditions: [["installment?.id", "=", watch('installment.id')]],
          },
        ],
      });
      if (res?.status) {
        setCanGenerate(true);
      }
    }
  };

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
        CACHE_LIST={CACHE_LIST}
      />
      {contract_id ? (
        <p className="bg-red-100 text-red-500 text-xs my-2 py-1 rounded-md px-4">
          By take this actions you will delete all previous checks
        </p>
      ) : null}
      <Button
        title={contract_id ? "ReGenerate" : "Generate"}
        type="button"
        onClick={() => {
          generatePaymentBatches(watch, setValue);
          if (contract_id) {
            deleteAllRecords();
          }
        }}
      />

      {watch("installment_grid")?.length ? (
        <TableFields
          fields={fields_grid}
          tab="installment_grid"
          CACHE_LIST={CACHE_LIST}
          rowsCount={watch("installment_grid")?.length}
        />
      ) : null}
    </Modal>
  );
};

export default InstallmentForm;
