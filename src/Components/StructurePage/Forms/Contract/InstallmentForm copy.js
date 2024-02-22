import { useMemo, useState } from "react";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { Fields } from "../CustomForm/Fields";
import TableFields from "../../CustomTable/TableFields";
import { Button } from "Components/Global/Button";
import Modal from "Components/Global/Modal/Modal";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { useFormContext } from "react-hook-form";
import { dividePrice } from "Helpers/Lib/operations/contract-helpers";

const generatePaymentBatches = (firstTab, watch, setValue, CACHE_LIST) => {
  const rest_amount = watch("installment.rest_amount");
  const each_duration = watch("installment.each_duration");
  const each_number = watch("installment.each_number");
  const first_installment_date = watch("installment.first_installment_date");
  const installments_numbers = watch("installment.installments_numbers");
  const begin_number = watch("installment.begin_number");
  const beneficiary_name = watch("installment.beneficiary_name");
  const payment_date = watch("installment.payment_date");
  const client_id = watch(`${firstTab}.client_id`);
  const observe_account_id = watch(`${firstTab}.revenue_account_id`);
  const bank_id = watch("installment.bank_id");
  const client = CACHE_LIST?.client?.find(c => c.id === client_id)
  const bank = CACHE_LIST?.bank?.find(c => c.id === bank_id)

  const note1 = `received chq from mr ${client?.name} due date ${new Date(
    payment_date
  )?.toLocaleDateString("ar-EG")} bank ${bank?.name}`;

  const note2 = `First Payment 1 seconds payment`;
  const installment_statement = watch("installment.installment_statement");
  const statement2 = watch("installment.statement2");

  const result = dividePrice(
    first_installment_date,
    rest_amount,
    installments_numbers,
    each_duration,
    each_number,
  );

  let bills = [];

  for (let i = 0; i < result.length; i++) {
    bills.push({
      number: (begin_number || 1) + i,
      due_date: result[i]?.month,
      amount: result[i]?.price,
      end_due_date: result[i]?.end,
      bank_id,
      client_id,
      observe_account_id: observe_account_id,
      statement: installment_statement,
      beneficiary_name,
      statement2,
      cost_center_id: watch("cost_center_id"),
      note1,
      note2
  
    });
  }
  setValue("installment_grid", bills);
};

const InstallmentForm = ({
  errors,
  CACHE_LIST,
  onClose,
  contract_id,
  firstTab,
}) => {
  const { watch, setValue } = useFormContext();
  const fields_form = useMemo(() => getFormByTableName("installment"), []);
  const fields_grid = useMemo(() => getFormByTableName("cheque_grid"), []);

  return (
    <Modal onClose={onClose} outerClose open={true}>
      <FormHeadingTitle title="Installment" onClose={onClose} />
      <Fields
        fields={fields_form}
        tab="installment"
        errors={errors}
        CACHE_LIST={CACHE_LIST}
      />
      <Button
        title={contract_id ? "ReGenerate" : "Generate"}
        type="button"
        onClick={() => {
          generatePaymentBatches(firstTab, watch, setValue, CACHE_LIST);
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
