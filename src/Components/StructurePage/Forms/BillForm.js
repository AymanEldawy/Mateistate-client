import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import { usePopupForm } from "Hooks/usePopupForm";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

let CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const buttons = [
  {
    label: "collection",
    table: "op_collection",
    classes: "bg-green-500 text-white",
  },
  { label: "deportation", table: "op_deportation", classes: "bg-yellow-500" },
  { label: "endorsement", table: "op_endorsement", classes: "bg-yellow-500" },
  { label: "return", table: "op_return", classes: "bg-red-500 text-white" },
];

const BillForm = () => {
  const params = useParams();
  const { dispatchForm } = usePopupForm();
  const name = params?.name;
  const type = params?.type;
  const contractAssetsType = name?.split("_").at(0);
  const [openInstallmentForm, setOpenInstallmentForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const method = useForm({
    // mode: "onBlur",
  });
  const {
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = method;

  let fields = useMemo(
    () => getFormByTableName(name),

    [name]
  );

  useEffect(() => {
    getRefTables();
    // if(oldValues) {
    //   setValue(...oldValues)
    // }
  }, [name]);

  const onOpenFormOperation = (table) => {
    dispatchForm({
      open: true,
      table: table,
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
    setLoading(true);
    let values = {};
    // for (const key in value) {
    //   let val = value[key];
    //   if (val !== undefined && val !== null) {
    //     values[key] = val;
    //   }
    // }

    const getTheFunInsert = INSERT_FUNCTION[name];
    const res = await ApiActions.insert(name, { data: { values } });

    if (res?.success) {
      toast.success("Successfully added item in " + name);
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
            <FormHeadingTitle title={name} />
            <div className="h-5" />
            <form onSubmit={handleSubmit(onSubmit)}>
              <Fields
                fields={fields}
                // tab={tab}
                // values={watch()}
                errors={errors}
                getCachedList={getCachedList}
              />
              <div className="flex flex-wrap gap-4 border-t mb-4 pt-4 mt-4">
                <Button
                  loading={loading}
                  title="Submit"
                  classes="ltr:mr-auto rtl:ml-auto"
                />
                {buttons?.map((btn) => (
                  <button
                    type="button"
                    className={`${btn.classes} rounded-md px-4 py-2 capitalize hover:opacity-70 text-xs`}
                    onClick={() => onOpenFormOperation(btn.table)}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </form>
          </FormProvider>
        </div>
      </BlockPaper>
    </>
  );
};

export default BillForm;
