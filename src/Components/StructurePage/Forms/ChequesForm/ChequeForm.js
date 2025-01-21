import Modal from "Components/Global/Modal/Modal";
import getFormByTableName from "Helpers/Forms/forms";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { OperationsForm } from "./OperationsForm";
import { METHODS, resetChequeFields } from "Helpers/constants";
import { ChequeStatus } from "./ChequeStatus";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import {
  CheckboxField,
  CurrencyFieldGroup,
  Input,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import UniqueFieldGroup from "Components/StructurePage/CustomFields/UniqueFieldGroup";
import Loading from "Components/Global/Loading";
import {
  deleteEntry,
  generateEntryFromCheque,
} from "Helpers/Lib/vouchers-insert";
import { CREATED_FROM_CHQ } from "Helpers/GENERATE_STARTING_DATA";
import { removeNullValues } from "Helpers/functions";
import { useQuery } from "@tanstack/react-query";
import { ViewEntry } from "Components/Global/ViewEntry";
import useCurd from "Hooks/useCurd";
import FormLayout from "../FormWrapperLayout/FormLayout";
import useFormPagination from "Hooks/useFormPagination";

const CACHE_CHEQUE_DATA = {};

const mergePatternWithChequeData = (pattern, watch, setValue) => {

  if (pattern?.auto_gen_entries) {
    setValue('gen_entries', true)
  }

  if (pattern?.code) {
    setValue('code', pattern?.code)
  }
  if (pattern?.default_account_id) {
    setValue('account_id', pattern?.default_account_id)
  }

};

const ChequeForm = ({
  layout,
  tableName,
  patternCode,
  popupView,
  outerClose,
  setRecordResponse,
  oldValues,
  action,
  number,
  onClose,
}) => {
  const name = "cheque";
  const params = useParams();
  const chqId = params?.id;
  const { set, insert, getOneBy } = useCurd();
  const { dispatchVoucherEntries } = useVoucherEntriesView();
  const code = params?.code || patternCode;
  const [selectedFormOperation, setSelectedFormOperation] = useState({});
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const formPagination = useFormPagination({ name, number, code });

  const methods = useForm({
    defaultValues: {
      created_at: new Date(),
      gen_entries: true
    }
  });

  let {
    watch,
    setValue,
    reset,
    formState: { errors, isDirty, dirtyFields, isSubmitting },
    handleSubmit,
  } = methods;

  useQuery({
    queryKey: ["cheque", "cheque_pattern"],
    queryFn: async () => {
      const response = await getOneBy("cheque_pattern", +code, "code");
      let pattern = response?.result?.at(0);
      mergePatternWithChequeData(pattern, watch, setValue);
      setPATTERN_SETTINGS(pattern);
    },
  });

  const { isLoading, refetch } = useQuery({
    queryKey: ["cheque", name, code, formPagination?.currentId],
    queryFn: async () => {
      const response = await getOneBy("cheque", formPagination?.currentId);
      reset(response?.result?.at(0));
    },
    enabled: !!formPagination?.currentId,
  });

  let fields = useMemo(() => {
    let hash = {};
    for (const field of getFormByTableName("cheque")) {
      hash[field?.name] = field;
    }
    return hash;
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "without_due_date" && watch(name)) {
        setValue("due_date", null);
        setValue("end_due_date", null);
      }

      if (name === 'customer_id') {
        fetchAccount(watch(name))
      }
      // if(name === 'account_id' && type === 'change') {
      //   fetchCustomer(watch(name))
      // }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const fetchAccount = async (customerId) => {
    const res = await getOneBy('user', customerId, 'id', ['account_id']);
    setValue('account_id', res?.result?.at(0)?.account_id);
  }
  const fetchCustomer = async (accountId) => {
    const res = await getOneBy('user', accountId, 'account_id', ['id']);
    setValue('customer_id', res?.result?.at(0)?.id || null);
  }

  useEffect(() => {
    if (oldValues && PATTERN_SETTINGS && !formPagination?.currentId) {
      reset(oldValues);
      mergePatternWithChequeData(PATTERN_SETTINGS, watch, setValue)
    } else if (formPagination?.currentNumber > formPagination?.lastNumber) {
      reset(mergePatternWithChequeData(PATTERN_SETTINGS, watch, setValue));
    }
  }, [oldValues, PATTERN_SETTINGS?.id]);

  const onOpenFormOperation = useCallback(
    ({ table, gen_entries, auto_gen_entries, status_name }) => {
      setSelectedFormOperation({
        table,
        status_name,
        pattern: {
          gen_entries,
          auto_gen_entries,
        },
      });
    },
    []
  );

  const onSelectContract = async (contract) => {
    setValue('account_id', contract?.client_id)
    setValue('cost_center_id', contract?.cost_center_id)
    setValue('observe_cost_center_id', contract?.cost_center_id)
    if (contract?.client_id) {
      const customer = await getOneBy('user', contract?.client_id, 'account_id', ['id']);
      setValue('customer_id', customer?.result?.at(0)?.id)
    }
  }

  const onClickAddNew = () => {
    reset({
      ...resetChequeFields(),
      ...mergePatternWithChequeData(PATTERN_SETTINGS, watch, setValue),
    });
  };

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;
    let values = {
      code: +PATTERN_SETTINGS?.code,
      cheque_pattern_id: PATTERN_SETTINGS?.id,
      ...removeNullValues(value),
    };

    let res = null;
    let chq_id = watch("id");

    if (layout === "update" || values?.id) {
      res = await set("cheque", values, values?.id);
    } else {
      res = await insert("cheque", values);
      reset(res?.record);
      chq_id = res?.record?.id;
    }

    if (!!setRecordResponse) {
      setRecordResponse({
        table: name,
        response: res,
        method: values?.id ? METHODS.UPDATE : METHODS.INSERT,
        id: values?.id,
      });
    }

    if (res?.success) {
      refetch();

      toast.success(
        chqId
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );

      if (values?.gen_entries || PATTERN_SETTINGS?.auto_gen_entries) {
        if (chq_id) {
          await generateEntryFromCheque({
            created_from_id: chq_id,
            created_from: CREATED_FROM_CHQ,
            created_from_code: +PATTERN_SETTINGS?.code,
            values,
          });
        } else deleteEntry(chq_id);
      }
    } else {
      toast.error(res?.error?.detail);
    }
  };

  return (
    <>
      {isLoading || isSubmitting ? <Loading /> : null}
      <Modal
        open={selectedFormOperation?.table}
        onClose={() => setSelectedFormOperation({})}
        containerClassName="z-[102] p-0"
        bodyClassName={"!p-0"}
        boxClassName={"!shadow-none !p-0"}
        layoutBodyClassName={"!my-0"}
      >
        <OperationsForm
          onClose={() => setSelectedFormOperation({})}
          selectedFormOperation={selectedFormOperation}
          PATTERN_SETTINGS={PATTERN_SETTINGS}
          name={selectedFormOperation?.table || ""}
          chqValues={watch()}
          refetch={refetch}
        />
      </Modal>
      <FormLayout
        key={formPagination?.currentNumber}
        name={PATTERN_SETTINGS?.name}
        onClose={() => {
          onClose();
          if (outerClose) outerClose();
        }}
        onSubmit={onSubmit}
        formPagination={formPagination}
        methods={methods}
        formClassName="w-full xl:min-w-[900px] 2xl:min-w-[1200px]"
        extraContentBar={
          <>
            <CheckboxField {...fields?.feedback} values={watch()} />
            <CheckboxField {...fields?.gen_entries} values={watch()} />
            {watch("id") && PATTERN_SETTINGS?.auto_gen_entries ? (
              <ViewEntry id={watch("id")} />
            ) : null}
          </>
        }

      >
        <div key={name} className="relative px-4">

          <div className="grid gap-y-2 gap-x-8 grid-cols-3">
            <div className="flex flex-col gap-2">
              <Input {...fields?.internal_number} />
              <Input {...fields?.amount} values={watch()} />
              <UniqueField
                {...fields?.customer_id}
                values={watch()}
              />
              <Input
                {...fields?.beneficiary_name}
                values={watch()}
              />
              <UniqueFieldGroup values={watch()} onSelectContract={onSelectContract} />
              {["parking_id", "shop_id", "apartment_id"]?.map((field) => {
                let name = field?.replace(/_id/g, "");
                if (watch(field)) {
                  return (
                    <UniqueField
                      key={field}
                      {...fields?.[field]}
                      table={field?.replace("_id", "")}
                      values={watch()}
                    />
                  );
                }
              })}

            </div>
            <div className="flex flex-col gap-2">

              {[
                "account_id",
                "cost_center_id",
                "observe_account_id",
                "observe_cost_center_id",
              ]?.map((field) => {
                let name = field?.replace(/observe_|_id/g, "");
                return (
                  <UniqueField
                    key={field}
                    {...fields?.[field]}
                    table={field?.replace("_id", "")}
                    values={watch()}
                  />
                );
              })}
              <UniqueField
                {...fields?.bank_id}
                values={watch()}
              />
            </div>
            <div className="flex flex-col gap-2">
              <CurrencyFieldGroup
                values={watch()}
              />
              <Input {...fields?.created_at} />
              <CheckboxField {...fields?.without_due_date} values={watch()} />
              {
                watch('without_due_date') ? null :
                  (
                    <>
                      <Input
                        {...fields?.due_date}
                        updatedName={`.due_date`}
                        values={watch()}
                        required={!watch('without_due_date')}
                      />
                      <Input
                        {...fields?.end_due_date}
                        updatedName={`.end_due_date`}
                        values={watch()}
                      />
                    </>
                  )
              }
              <CheckboxField {...fields?.deposit_status} values={watch()} />

            </div>


          </div>
          <div className=" grid gap-y-3 gap-x-8 grid-cols-2 mt-4">
            <Textarea
              {...fields?.note1}
              updatedName={`.note1`}
              values={watch()}
            />
            <Textarea
              {...fields?.note2}
              updatedName={`.note2`}
              values={watch()}
            />
          </div>

          <ChequeStatus
            pattern={PATTERN_SETTINGS}
            onOpenFormOperation={onOpenFormOperation}
            chqValues={watch()}
          />

        </div>
      </FormLayout>
    </>
  );
};

export default ChequeForm;
