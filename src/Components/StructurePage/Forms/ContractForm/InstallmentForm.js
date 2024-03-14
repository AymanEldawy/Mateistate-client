import { useEffect, useMemo, useState } from "react";
import getFormByTableName from "Helpers/Forms/forms";
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
} from "Helpers/Lib/contract-helpers";
import { insertIntoContractInstallment } from "Helpers/Lib/global-insert";
import { toast } from "react-toastify";
import { getInstallmentData } from "Helpers/Lib/global-read-update";
import Loading from "Components/Global/Loading";
import { UNIQUE_REF_TABLES } from "Helpers/constants";
import { ErrorText } from "Components/Global/ErrorText";
import { getAccountReceivable } from "Helpers/Lib/global-read";

const calculateChqAmount = (
  watch,
  setError,
  setTotalChqAmount,
  clearErrors
) => {
  let grid = watch("installment_grid");

  let count = 0;
  for (const item of grid) {
    count += +item?.amount;
  }
  setTotalChqAmount(count);
  if (count > watch("installment.rest_amount")) {
    setError("installment_grid_amount", {
      message:
        "The Total Amount of cheques must be equal or less than Rest Amount",
    });
    return;
  } else clearErrors("installment_grid_amount");
};

const installmentValidation = (watch, setError) => {
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
      // toast.error(`The Payment Date is required`, { autoClose: false });
      setError("installment.payment_date", {
        type: "required",
        message: "The Payment Date is required",
      });
      return;
    }

    if (!watch("installment.first_batch")) {
      setError("installment.first_batch", {
        type: "required",
        message: "The First Cash payment is required",
      });
      return;
    }
  }

  return true;
};

const generatePaymentBatches = async (
  firstTab,
  watch,
  setValue,
  CACHE_LIST,
  assetType
) => {
  const rest_amount = watch("installment.rest_amount");
  const each_duration = watch("installment.each_duration");
  const each_number = watch("installment.each_number");
  const first_installment_date = watch("installment.first_installment_date");
  const installments_numbers = watch("installment.installments_numbers");
  const begin_number = watch("installment.begin_number");
  const beneficiary_name = watch("installment.beneficiary_name");
  const account_id = watch(`${firstTab}.client_id`);
  const observe_account_id =
    (await getAccountReceivable(watch(`${firstTab}.building_id`))) ||
    watch(`${firstTab}.revenue_account_id`);
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
      [`${assetType}_id`]: watch(`${firstTab}.${assetType}_id`),
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
  const { watch, setValue, setError, clearErrors } = useFormContext();
  const [totalCheAmount, setTotalChqAmount] = useState(0);
  const fields_form = useMemo(() => getFormByTableName("installment"), []);
  const fields_grid = useMemo(() => getFormByTableName("cheque_grid"), []);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (openInstallmentForm && !watch("installment.total_amount")) {
      mergeInstallmentAndFirstTabData(watch(firstTab), setValue);
    }
  }, [openInstallmentForm]);

  useEffect(() => {
    if (watch("installment_grid"))
      calculateChqAmount(watch, setError, setTotalChqAmount, clearErrors);
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name?.indexOf("installment.") !== -1) clearErrors(name);
      if (name?.indexOf(".amount") !== -1) {
        calculateChqAmount(watch, setError, setTotalChqAmount, clearErrors);
      }

      if(name === 'installment.first_batch') {
        setTotalChqAmount(watch('installment.rest_amount') - watch('installment.first_batch'))
      }
      
    });
    return () => subscription.unsubscribe();
  }, [watch("")]);

  const onSubmitInstallment = async () => {
    if (!installmentValidation(watch, setError)) {
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
      watch("installment.payment_date")
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
          <div
            className={
              errors?.installment_grid_amount
                ? "border border-red-500 p-2 rounded-md my-2"
                : ""
            }
          >
            <div className=" mt-4 text-lg font-medium flex items-center gap-2">
              <span className="text-blue-600 p-1 rounded-md">
                Used: {totalCheAmount || 0}
              </span>
              <span className="bg-gray-300 h-6 w-[2px]" />
              <span className="text-green-600 p-1 rounded-md">
                Rest:{" "}
                {watch("installment.rest_amount") - totalCheAmount ||
                  watch("installment.rest_amount")}
              </span>
            </div>
            {errors?.installment_grid_amount ? (
              <ErrorText>
                {errors?.installment_grid_amount?.message}{" "}
                {watch("installment.rest_amount")}
              </ErrorText>
            ) : null}
            <TableFields
              errors={errors}
              fields={fields_grid}
              tab="installment_grid"
              CACHE_LIST={CACHE_LIST}
              rowsCount={watch("installment_grid")?.length}
              tdClassName="first:min-w-[40px] min-w-[140px]"
              withPortal
            />
          </div>
        ) : null}
        <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
          <Button
            disabled={
              !watch("installment.each_number") ||
              !watch("installment.installments_numbers") ||
              !watch("installment.each_duration") ||
              !watch("installment.rest_amount")
            }
            title={
              watch("installment_grid")?.length
                ? "ReGenerate cheques"
                : "Generate"
            }
            classes={`bg-orange-500 whitespace-nowrap px-2 w-full max-w-[160px] ${
              watch("installment_grid")?.length < 1
                ? "ltr:ml-auto rtl:mr-auto"
                : ""
            }`}
            type="button"
            onClick={() => {
              generatePaymentBatches(firstTab, watch, setValue, CACHE_LIST, assetType);
              setTotalChqAmount(watch("installment.rest_amount"));
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
