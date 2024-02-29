import { ApiActions } from "Helpers/Lib/api";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { Fields } from "./Fields";
import { useEffect, useState } from "react";
import { getLastNumberByColumn } from "./../../../../Helpers/Lib/operations/global-insert";
import withListBookView from "HOC/withListBookView";
import useRefTable from "Hooks/useRefTables";
import { useFormContext } from "react-hook-form";

const automaticChangesOnAccount = async (name, watch, setValue) => {
  if (name === "parent_id") {
    const response = await ApiActions.read("account", {
      conditions: [
        { type: "and", conditions: [["id", "=", watch("parent_id")]] },
      ],
    });
    if (response?.success) {
      const number = await getLastNumberByColumn(
        "account",
        "parent_id",
        watch("parent_id"),
        "internal_number"
      );
      let record = response?.result?.at(0);
      setValue("final_id", record?.final_id || record?.parent_id);
      setValue("internal_number", +number + 1);
    }
  }
};

const FormSingular = (props) => {
  const { name, onClose } = props;
  const {
    getValues,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();
  const { fields, CACHE_LIST, setCACHE_LIST } = useRefTable(name);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isAccount = name === "account";
    const subscription = watch((value, { name, type }) => {
      if (isAccount) {
        automaticChangesOnAccount(name, watch, setValue);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // // Handel Submit
  // const onSubmit = async (value) => {
  //   if (!isDirty) return;
  //   setLoading(true);

  //   let values = {};
  //   for (const key in value) {
  //     let val = value[key];
  //     if (val !== undefined && val !== null && val !== "") {
  //       values[key] = val;
  //     }
  //   }

  //   let res = null;

  //   if (layout === "update") {
  //     res = await ApiActions.update(name, {
  //       conditions: [{ type: "and", conditions: [["id", "=", params?.id]] }],
  //       updates: values,
  //     });
  //   } else {
  //     if (INSERT_FUNCTION?.[name]) {
  //       const getTheFunInsert = INSERT_FUNCTION[name];
  //       res = await getTheFunInsert(values);
  //     } else {
  //       res = await ApiActions.insert(name, {
  //         data: values,
  //       });
  //     }
  //   }

  //   if (res?.success) {
  //     toast.success(
  //       layout === "update"
  //         ? `Successfully update row: ${values?.name} in ${name}`
  //         : "Successfully added item in " + name
  //     );

  //     if (!!setRecordResponse) {
  //       setRecordResponse({ table: name, response: res });
  //     }

  //     if (layout !== "update") {
  //       if (openForm.table) {
  //         let record = res?.record;
  //         let { additional } = openForm;
  //         additional?.setList((prev) => {
  //           return [...prev, { label: record?.name, value: record?.id }];
  //         });
  //         additional?.setValue(additional?.name, record.id);
  //       }

  //       reset();
  //     }

  //     if (!!onClose) onClose();
  //     if (!!refetchData) refetchData();
  //     // reset form
  //   } else {
  //     toast.error("Failed to add new item in " + name);
  //   }
  //   setLoading(false);
  // };

  return (
    <>
      <FormHeadingTitle title={name} onClose={onClose} />
      <Fields
        values={watch()}
        errors={errors}
        CACHE_LIST={CACHE_LIST}
        fields={fields}
      />
    </>
  );
};

export default withListBookView(FormSingular);
