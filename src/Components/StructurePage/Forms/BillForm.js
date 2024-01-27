import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { ApiActions } from "Helpers/Lib/api";
import { usePopupForm } from "Hooks/usePopupForm";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

let CACHE_LIST = {};

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
    label: "endorsement",
    table: "op_endorsement",
    classes: "bg-yellow-500 text-white",
    condition: "endorsable",
    gen_entries: "endorsement_gen_entries",
    auto_gen_entries: "endorsement_auto_gen_entries",
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

const BillForm = ({ layout }) => {
  const params = useParams();
  const { dispatchForm } = usePopupForm();
  const { name, type } = params;
  const [loading, setLoading] = useState(false);
  const method = useForm({});
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});

  const {
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    setValue,
  } = method;

  let fields = useMemo(
    () => getFormByTableName("bill"),

    [name]
  );

  useEffect(() => {
    getRefTables();
  }, [name]);

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
    const getVoucherPattern = async () => {
      const response = await ApiActions.read("bill_pattern", {
        conditions: [{ type: "and", conditions: [["code", "=", type]] }],
      });
      setPATTERN_SETTINGS(response?.result?.at(0));
    };
    getVoucherPattern();
  }, [type]);

  const onOpenFormOperation = ({ table, gen_entries, auto_gen_entries }) => {
    dispatchForm({
      open: true,
      table,
      additional: {
        PATTERN_SETTINGS,
        gen_entries,
        auto_gen_entries,
      },
    });
  };

  const getRefTables = async () => {
    if (!fields?.length) return;

    for (const field of fields) {
      if (field.is_ref) {
        const response = await ApiActions.read(field?.ref_table);
        CACHE_LIST[field?.ref_table] = response?.result;
        for (const item of response?.result) {
          CACHE_LIST[item.id] = item.name || item.number || item.id;
        }
      }
    }
  };

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;
    setLoading(true);

    let values = { type: PATTERN_SETTINGS?.code };
    for (const key in value) {
      let val = value[key];
      if (val !== undefined && val !== null && val !== "") {
        values[key] = val;
      }
    }

    let res = null;

    if (layout === "update") {
      res = await ApiActions.update("bill", {
        conditions: [{ type: "and", conditions: [["id", "=", params?.id]] }],
        updates: values,
      });
    } else {
      res = await ApiActions.insert("bill", {
        data: values,
      });
    }

    if (res?.success) {
      toast.success(
        layout === "update"
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );
    } else {
      toast.error("Failed to add new item in " + name);
    }
    setLoading(false);
  };
  return (
    <>
      <BlockPaper>
        <div key={name} className="relative">
          <FormProvider {...method}>
            <FormHeadingTitle title={"bill"} />
            <div className="h-5" />
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Fields
                fields={fields}
                // tab={tab}
                // values={watch()}
                errors={errors}
                CACHE_LIST={CACHE_LIST}
              />
              <div className="flex flex-wrap gap-4 border-t mb-4 pt-4 mt-4">
                <Button
                  loading={loading}
                  title="Submit"
                  classes="ltr:mr-auto rtl:ml-auto"
                />
                {layout !== "update"
                  ? PAPER_OPERATIONS_BUTTONS?.map((btn) => {
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
                    })
                  : null}
              </div>
            </form>
          </FormProvider>
        </div>
      </BlockPaper>
    </>
  );
};

export default BillForm;
