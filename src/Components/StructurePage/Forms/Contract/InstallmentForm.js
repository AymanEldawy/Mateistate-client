import { useEffect, useMemo, useState } from "react";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { Fields } from "../CustomForm/Fields";
import TableFields from "../../CustomTable/TableFields";
import { Button } from "Components/Global/Button";
import Modal from "Components/Global/Modal/Modal";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { useFormContext } from "react-hook-form";
import {
  COUNTER_CHQ_NUMBER,
  dividePrice,
  mergeInstallmentAndFirstTabData,
} from "Helpers/Lib/operations/contract-helpers";
import { insertIntoContractInstallment } from "Helpers/Lib/operations/global-insert";
import { toast } from "react-toastify";
import { getInstallmentData } from "Helpers/Lib/operations/global-read-update";
import Loading from "Components/Global/Loading";
import { UNIQUE_REF_TABLES } from "Helpers/constants";

const installmentValidation = (watch) => {
  let grid = watch("installment_grid");

  let count = 0;
  for (const item of grid) {
    count += +item?.amount;
  }

  if (count > watch("installment.rest_amount")) {
    toast.error(
      `The Total Amount of cheques must be equal or less than Rest Amount`,
      { autoClose: false }
    );
    return;
  }

  if (+watch("installment.first_batch") > +watch("installment.total_amount")) {
    toast.error(
      `The First Cash Payment must be equal or less than Total Amount`,
      { autoClose: false }
    );
    return;
  }

  if (!watch("installment.currency_id")) {
    toast.error(`Currency is Required`, { autoClose: false });
    return;
  }

  let type = +watch("installment.gen_entries_type");
  if (type === 1 || type === 2) {
    if (!watch("installment.payment_date")) {
      toast.error(`The Payment Date is required`, { autoClose: false });
      return;
    }
    if (!watch("installment.first_batch")) {
      toast.error(`The First Cash Payment is required`, { autoClose: false });
      return;
    }
  }

  return true;
};

const generatePaymentBatches = (firstTab, watch, setValue, CACHE_LIST) => {
  const rest_amount = watch("installment.rest_amount");
  const each_duration = watch("installment.each_duration");
  const each_number = watch("installment.each_number");
  const first_installment_date = watch("installment.first_installment_date");
  const installments_numbers = watch("installment.installments_numbers");
  const begin_number = watch("installment.begin_number");
  const beneficiary_name = watch("installment.beneficiary_name");
  const account_id = watch(`${firstTab}.client_id`);
  const observe_account_id = watch(`${firstTab}.revenue_account_id`);
  const bank_id = watch("installment.bank_id");
  const client = CACHE_LIST?.[UNIQUE_REF_TABLES.clients]?.find(
    (c) => c.id === watch(`${firstTab}.client_id`)
  );
  const bank = CACHE_LIST?.bank?.find((c) => c.id === bank_id);

  const result = dividePrice(
    new Date(first_installment_date),
    rest_amount,
    installments_numbers,
    each_duration,
    each_number
  );

  let bills = [];

  for (let i = 0; i < result.length; i++) {
    let dueDate = new Date(result[i]?.month)?.toLocaleDateString("en-UK");
    let endDueDate = new Date(result[i]?.end)?.toLocaleDateString("en-UK");
    let internal_number = +(begin_number || 1) + i;
    const note2 = `${COUNTER_CHQ_NUMBER?.[i]} Payment (${i + 1})`;
    const note1 = `received chq number ${internal_number} from mr ${client?.name} ${result[i]?.price} due date ${dueDate} end date ${endDueDate} bank name ${bank?.name}`;

    bills.push({
      internal_number,
      due_date: result[i]?.month,
      amount: result[i]?.price,
      end_due_date: result[i]?.end,
      bank_id,
      account_id,
      observe_account_id: observe_account_id,
      beneficiary_name,
      cost_center_id: watch("cost_center_id"),
      note1,
      note2,
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
  openInstallmentForm,
  assetType,
}) => {
  const { watch, setValue } = useFormContext();
  const fields_form = useMemo(() => getFormByTableName("installment"), []);
  const fields_grid = useMemo(() => getFormByTableName("cheque_grid"), []);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (openInstallmentForm && !watch("installment.total_amount")) {
      mergeInstallmentAndFirstTabData(watch(firstTab), setValue);
    }
  }, [openInstallmentForm]);

  const onSubmitInstallment = async () => {
    if (!installmentValidation(watch)) {
      return;
    }
    setIsLoading(true);

    const installmentData = watch("installment");
    const installmentGridData = watch("installment_grid");
    const clientName = CACHE_LIST?.[UNIQUE_REF_TABLES.clients]?.find(
      (c) => c.id === watch(`${firstTab}.client_id`)
    )?.name;

    const bankName = CACHE_LIST?.bank?.find(
      (c) => c.id === watch(`installment.bank_id`)
    )?.name;

    const buildingNumber = CACHE_LIST?.building?.find(
      (c) => c.id === watch(`${firstTab}.building_id`)
    )?.number;

    const assetsNumber = CACHE_LIST?.[assetType]?.find(
      (c) => c.id === watch(`${firstTab}.${assetType}_id`)
    )?.[`${assetType}_no`];

    let note = `received first payment from mr ${clientName} due date ${new Date(
      watch("installment?.payment_date")
    )?.toLocaleDateString("en-UK")} bank ${bankName} ${
      buildingNumber ? `building number ${buildingNumber}` : ""
    }  ${assetsNumber ? `${assetType} number ${assetsNumber}` : ""} `;

    const success = await insertIntoContractInstallment({
      installment: installmentData,
      installment_grid: installmentGridData,
      contract_id,
      firstTabData: watch(firstTab),
      note,
    });

    if (success) {
      const { installment, installment_grid, voucher_grid } =
        await getInstallmentData(contract_id);
      if (installment?.success) {
        setValue("voucher_grid", voucher_grid?.result);
        setValue("installment_grid", installment_grid?.result);
      }
      toast.success("Successfully saved Installment");
    } else {
      toast.error("Failed to save Installment");
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? <Loading withBackdrop /> : null}
      <Modal onClose={onClose} outerClose open={true} containerClassName="z-20">
        <FormHeadingTitle title="Installment" onClose={onClose} />
        <Fields
          fields={fields_form}
          tab="installment"
          errors={errors}
          CACHE_LIST={CACHE_LIST}
        />

        {watch("installment_grid")?.length ? (
          <TableFields
            fields={fields_grid}
            tab="installment_grid"
            CACHE_LIST={CACHE_LIST}
            rowsCount={watch("installment_grid")?.length}
            tdClassName="first:min-w-[40px] min-w-[140px]"
            withPortal
          />
        ) : null}
        <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
          <Button
            disabled={
              !watch("installment.each_number") ||
              !watch("installment.installments_numbers") ||
              !watch("installment.each_duration") ||
              !watch("installment.rest_amount")
            }
            title={watch("installment.id") ? "ReGenerate" : "Generate"}
            classes={`bg-orange-500 ${
              watch("installment_grid")?.length < 1
                ? "ltr:ml-auto rtl:mr-auto"
                : ""
            }`}
            type="button"
            onClick={() => {
              generatePaymentBatches(firstTab, watch, setValue, CACHE_LIST);
            }}
          />
          {!watch("installment_grid") ||
          watch("installment_grid")?.length < 1 ? null : (
            <Button
              type="button"
              title={watch("installment.id") ? "Modify" : "Submit"}
              disabled={watch("installment_grid")?.length < 1}
              onClick={onSubmitInstallment}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default InstallmentForm;
