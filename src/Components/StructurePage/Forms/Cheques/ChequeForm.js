import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import Modal from "Components/Global/Modal/Modal";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useMemo, useState } from "react";
import { FormProvider } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { OperationsForm } from "./OperationsForm";
import { withFormSingular } from "HOC/withFormSingular";
import { generateVoucherFromBill } from "Helpers/Lib/operations/vouchers-insert";
import { VoucherStepsButton } from "../Vouchers/VoucherStepsButton";
import { getLastNumberByColumn } from "Helpers/Lib/operations/global-insert";
import { UNIQUE_REF_TABLES, resetChequeFields } from "Helpers/constants";
import { ChequeStatus } from "./ChequeStatus";
import { EyeIcon } from "Components/Icons";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import {
  CurrencyFieldGroup,
  Input,
  Switch,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import UniqueFieldGroup from "Components/StructurePage/CustomFields/UniqueFieldGroup";

const CACHE_CHEQUE_DATA = {};
const PAPER_OPERATIONS_BUTTONS = [
  {
    label: "collection",
    table: "op_collection",
    classes: "bg-green-500 text-white",
    condition: "collection",
    gen_entries: "collection_gen_entries",
    auto_gen_entries: "collection_auto_gen_entries",
  },
  {
    label: "partial collection",
    table: "op_partial_collection",
    classes: "bg-purple-500 text-white",
    condition: "partial_collection",
    gen_entries: "partial_gen_entries",
    auto_gen_entries: "partial_auto_gen_entries",
  },
  {
    label: "deportation",
    table: "op_deportation",
    classes: "bg-orange-500 text-white",
    condition: "deportable",
    gen_entries: "deportable_gen_entries",
    auto_gen_entries: "deportable_auto_gen_entries",
  },
  {
    label: "return",
    table: "op_return",
    classes: "bg-red-500 text-white",
    condition: "returnable",
    gen_entries: "returnable_gen_entries",
    auto_gen_entries: "returnable_auto_gen_entries",
  },
];

const mergePatternWithChequeData = (pattern) => {
  let data = {};
  if (pattern?.auto_gen_entries) {
    data.gen_entries = true;
  }
  return data;
};

const ChequeForm = withFormSingular(
  (props) => {
    let { CACHE_LIST, onClose, refetchData, layout, methods } = props;

    let {
      watch,
      setValue,
      reset,
      formState: { errors, isDirty, dirtyFields, isSubmitting },
      handleSubmit,
    } = methods;
    const { dispatchVoucherEntries } = useVoucherEntriesView();
    const params = useParams();
    const { name, code } = params;
    const [selectedFormOperation, setSelectedFormOperation] = useState({});
    const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [number, setNumber] = useState();
    const [maxLength, setMaxLength] = useState(0);

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
          setValue("due_end_date", null);
        }
      });
      return () => subscription.unsubscribe();
    }, [watch]);

    useEffect(() => {
      setNumber(+params?.number);
    }, [params?.number, params?.name]);

    useEffect(() => {
      const getVoucherPattern = async () => {
        const response = await ApiActions.read("bill_pattern", {
          conditions: [{ type: "and", conditions: [["code", "=", +code]] }],
        });
        let pattern = response?.result?.at(0);
        setPATTERN_SETTINGS(pattern);
        mergePatternWithChequeData(pattern, watch, setValue);
      };
      getVoucherPattern();
    }, [code]);

    const onOpenFormOperation = ({ table, gen_entries, auto_gen_entries }) => {
      setSelectedFormOperation({
        table,
        pattern: {
          gen_entries,
          auto_gen_entries,
        },
      });
    };

    useEffect(() => {
      if (!number || !code) return;
      const getLastNumber = async () => {
        const lastNumber = await getLastNumberByColumn("bill", "type", +code);
        setMaxLength(lastNumber);
      };
      getLastNumber();
      setValue(`number`, number);
    }, [number, code]);

    const fetchData = async () => {
      if (CACHE_CHEQUE_DATA?.[number] && +number <= maxLength) {
        reset(CACHE_CHEQUE_DATA?.[number]);
      } else {
        setIsLoading(true);
        const response = await ApiActions.read("bill", {
          conditions: [
            { type: "and", conditions: [["number", "=", +number]] },
            { type: "and", conditions: [["type", "=", +code]] },
          ],
        });
        let data = response?.result?.at(0);
        CACHE_CHEQUE_DATA[number] = data;
        reset(data);
        setIsLoading(false);
      }
    };

    useEffect(() => {
      if (!number || !code) return;
      if (+number <= maxLength) {
        fetchData();
      } else
        reset({
          ...resetChequeFields(),
          number,
          ...mergePatternWithChequeData(PATTERN_SETTINGS),
        });
    }, [number, maxLength, number, code]);

    // Handel Submit
    const onSubmit = async (value) => {
      if (!isDirty) return;
      let values = { type: +PATTERN_SETTINGS?.code };
      for (const key in value) {
        let val = value[key];
        if (val !== undefined && val !== null && val !== "") {
          values[key] = val;
        }
      }

      let res = null;

      if (layout === "update" || values?.id) {
        res = await ApiActions.update("bill", {
          conditions: [{ type: "and", conditions: [["id", "=", params?.id]] }],
          updates: values,
        });
      } else {
        res = await ApiActions.insert("bill", {
          data: values,
        });
        reset(res?.record);
      }

      if (res?.success) {
        if (res?.record?.id && number >= maxLength) setMaxLength((p) => +p + 1);

        toast.success(
          layout === "update"
            ? `Successfully update row: ${values?.name} in ${name}`
            : "Successfully added item in " + name
        );
        // generate voucher
        if (PATTERN_SETTINGS?.auto_gen_entries) {
          generateVoucherFromBill(value, PATTERN_SETTINGS);
        }
      } else {
        toast.error("Failed to add new item in " + name);
      }
    };

    return (
      <>
        <Modal
          open={selectedFormOperation?.table}
          onClose={() => setSelectedFormOperation({})}
        >
          <OperationsForm
            selectedFormOperation={selectedFormOperation}
            PATTERN_SETTINGS={PATTERN_SETTINGS}
            name={selectedFormOperation?.table}
          />
        </Modal>
        <BlockPaper>
          <div key={name} className="relative">
            <FormProvider {...methods}>
              <FormHeadingTitle title={name} />
              <div className="h-5" />
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Fields */}
                <div className="flex justify-between items-center">
                  <div className="flex items-end gap-6">
                    <Switch
                      {...fields?.feedback}
                      values={watch()}
                      error={errors?.feedback ? "Field is required" : ""}
                    />
                    <Switch
                      {...fields?.gen_entries}
                      values={watch()}
                      error={errors?.gen_entries ? "Field is required" : ""}
                    />
                    {watch("id") && PATTERN_SETTINGS?.auto_gen_entries ? (
                      <button
                        type="button"
                        className="bg-blue-500 mt-4 text-white px-2 py-1 rounded-md flex items-center gap-2"
                        onClick={() =>
                          dispatchVoucherEntries({
                            table: "entry_main_data",
                            grid: "entry_grid_data",
                            ref_name: "created_from_id",
                            id: watch("id"),
                          })
                        }
                      >
                        <EyeIcon />
                      </button>
                    ) : null}
                  </div>
                  <div className="flex gap-2">
                    <UniqueFieldGroup values={watch()} />
                  </div>
                </div>
                <div className="my-4 grid gap-6 grid-cols-2 md:grid-cols-4">
                  <Input
                    {...fields?.amount}
                    inputClassName="bg-gray-100"
                    values={watch()}
                    error={errors?.amount ? "Field is required" : ""}
                  />
                  <CurrencyFieldGroup
                    CACHE_LIST={CACHE_LIST}
                    list={!!CACHE_LIST ? CACHE_LIST?.currency : []}
                    values={watch()}
                    error={errors?.currency_id ? "Field is required" : ""}
                  />
                  <Input
                    {...fields?.beneficiary_name}
                    inputClassName="bg-gray-100"
                    values={watch()}
                    error={errors?.beneficiary_name ? "Field is required" : ""}
                  />
                </div>
                <div className="my-4 grid gap-6 grid-cols-2 md:grid-cols-4">
                  {[
                    "client_id",
                    "cost_center_id",
                    "observe_account_id",
                    "observe_cost_center_id",
                  ]?.map((field) => {
                    let name = field?.replace(/observe_|_id/g, "");
                    if (field === "client_id") {
                      name = UNIQUE_REF_TABLES.clients;
                    }
                    return (
                      <UniqueField
                        key={field}
                        {...fields?.[field]}
                        table={field?.replace("_id", "")}
                        CACHE_LIST={CACHE_LIST}
                        list={!!CACHE_LIST ? CACHE_LIST?.[name] : []}
                        values={watch()}
                        error={errors?.[field] ? "Field is required" : ""}
                      />
                    );
                  })}
                </div>
                <div className="my-4 grid gap-6 grid-cols-2 md:grid-cols-4">
                  <Switch
                    {...fields?.without_due_date}
                    values={watch()}
                    error={errors?.without_due_date ? "Field is required" : ""}
                  />
                  <Input
                    {...fields?.due_date}
                    updatedName={`.due_date`}
                    values={watch()}
                    error={errors?.due_date ? "Field is required" : ""}
                  />
                  <Input
                    {...fields?.end_due_date}
                    updatedName={`.end_due_date`}
                    values={watch()}
                    error={errors?.end_due_date ? "Field is required" : ""}
                  />
                  <UniqueField
                    {...fields?.bank_id}
                    CACHE_LIST={CACHE_LIST}
                    list={!!CACHE_LIST ? CACHE_LIST?.bank : []}
                    values={watch()}
                    error={errors?.bank_id ? "Field is required" : ""}
                  />
                </div>
                <div className="my-4 grid gap-6 grid-cols-2">
                  <Textarea
                    {...fields?.note1}
                    updatedName={`.note1`}
                    values={watch()}
                    error={errors?.note1 ? "Field is required" : ""}
                  />
                  <Textarea
                    {...fields?.note2}
                    updatedName={`.note2`}
                    values={watch()}
                    error={errors?.note2 ? "Field is required" : ""}
                  />
                </div>
                {/* Fields */}

                <ChequeStatus />
                <div className="flex flex-wrap gap-6 pt-4 mt-8 mb-4">
                  {PAPER_OPERATIONS_BUTTONS?.map((btn) => {
                    if (PATTERN_SETTINGS?.[btn.condition])
                      return (
                        <button
                          type="button"
                          className={`${btn.classes} rounded-md px-4 py-2 capitalize hover:opacity-70 text-xs`}
                          onClick={() =>
                            onOpenFormOperation({
                              table: btn.table,
                              gen_entries: btn.gen_entries,
                              auto_gen_entries: btn.gen_entries,
                            })
                          }
                        >
                          {btn.label}
                        </button>
                      );
                  })}
                </div>
                <div className="flex justify-between gap-6 items-center mt-4 border-t pt-4">
                  <VoucherStepsButton
                    number={number}
                    goTo={setNumber}
                    maxLength={maxLength}
                    isNewOne={number > maxLength}
                    allowActions={watch("id")}
                    setNumber={setNumber}
                  />
                  <Button title={"Submit"} />
                </div>
              </form>
            </FormProvider>
          </div>
        </BlockPaper>
      </>
    );
  },
  { name: "cheque" }
);

export default ChequeForm;
