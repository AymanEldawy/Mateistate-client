import { Fields } from "./Fields";
import INSERT_FUNCTION from "../../../../Helpers/Lib/global-insert";
import useRefTable from "Hooks/useRefTables";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { usePopupForm } from "Hooks/usePopupForm";
import { removeNullValues } from "Helpers/functions";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import TableFields from "Components/TableComponents/TableFields";
import getFormByTableName from "Helpers/Forms/forms";
import useCurd from "Hooks/useCurd";
import { useEffect, useMemo } from "react";
import FormLayout from "../FormWrapperLayout/FormLayout";
import useFormPagination from "Hooks/useFormPagination";

const FormSingular = ({ name, onClose, popupView, oldValues, number }) => {
  const params = useParams();
  const { set, insert, getOneBy, remove } = useCurd();
  const { setRecordResponse, appendNewRecord } = usePopupForm();
  const methods = useForm({
    defaultValues: {},
  });
  const fields = useMemo(
    () => getFormByTableName(name),
    [name]
  );

  const {
    reset,
    watch,
    errors,
    formState: { isDirty },
  } = methods;
  const formPagination = useFormPagination({ name, number: number, reset });
  const id = formPagination?.currentId;

  console.log(watch(), formPagination?.currentId, '-sdsdsd');
  
  const { isLoading } = useQuery({
    queryKey: [name, formPagination?.currentId, formPagination?.currentNumber],
    queryFn: async () => {
      // const data = await getOneBy(name, id);
      console.log(watch(), formPagination?.currentId, '-sdsdsdaaaa');
      const data = await getOneBy(name, formPagination?.currentId);

      let result = data?.result?.at(0);
      if (result?.id) {
        reset(result);
      }
    },
    enabled: !!formPagination?.currentId,
  });

  useEffect(() => {
    if (!id && oldValues) {
      reset(oldValues);
    }
  }, [oldValues]);

  console.log(oldValues,'-vols');
  
  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;

    let values = removeNullValues(value);

    let res = null;

    if (id) {
      res = await set(name, values, watch("id"));
    } else {
      if (INSERT_FUNCTION?.[name]) {
        const getTheFunInsert = INSERT_FUNCTION[name];
        res = await getTheFunInsert(values);
      } else {
        res = await insert(name, values);
      }
    }

    if (res?.success) {
      toast.success(
        id
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );

      if (!!setRecordResponse) {
        setRecordResponse({ table: name, response: res });
      }

      if (!id) {
        await appendNewRecord(res);
        reset();
      }
    } else {
      toast.error(res?.error?.detail);
    }
  };

  return (
    <FormLayout
      name={name}
      onSubmit={onSubmit}
      onClose={onClose}
      methods={methods}
      isLoading={isLoading}
      formPagination={formPagination}
      key={formPagination?.currentNumber}
    >
      <Fields
        values={watch()}
        errors={errors}
        fields={fields}
        customGrid={
          name === "owner_expenses" ? "grid-cols-2 md:grid-cols-3" : ""
        }
      />
      {name === "owner_expenses" ? (
        <TableFields
          increasable={false}
          rowsCount={1}
          errors={errors}
          fields={getFormByTableName("owner_expenses_details")}
        />
      ) : null}
    </FormLayout>
  );
};

export default FormSingular;
