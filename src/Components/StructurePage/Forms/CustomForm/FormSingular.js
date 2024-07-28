import { ApiActions } from "Helpers/Lib/api";
import { Fields } from "./Fields";
import INSERT_FUNCTION from "../../../../Helpers/Lib/global-insert";
import useRefTable from "Hooks/useRefTables";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { usePopupForm } from "Hooks/usePopupForm";
import { removeNullValues } from "Helpers/functions";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import getFormByTableName from "Helpers/Forms/forms";

const FormSingular = ({ name, onClose, popupView }) => {
  const params = useParams();
  const id = params?.id;
  const { setRecordResponse, appendNewRecord } = usePopupForm();
  const methods = useForm({
    defaultValues: {},
  });
  const { fields, CACHE_LIST } = useRefTable(name);

  const {
    reset,
    watch,
    errors,
    formState: { isDirty },
  } = methods;

  const { isLoading } = useQuery({
    queryKey: [name, id],
    queryFn: async () => {
      const data = await ApiActions.read(name, {
        conditions: [
          {
            type: "and",
            conditions: [["id", "=", id]],
          },
        ],
      });
      if (data?.success) {
        reset(data?.result?.at(0));
      }
    },
  });

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;

    let values = removeNullValues(value);

    let res = null;

    if (id) {
      res = await ApiActions.update(name, {
        conditions: [{ type: "and", conditions: [["id", "=", watch("id")]] }],
        updates: values,
      });
    } else {
      if (INSERT_FUNCTION?.[name]) {
        const getTheFunInsert = INSERT_FUNCTION[name];
        res = await getTheFunInsert(values);
      } else {
        res = await ApiActions.insert(name, {
          data: values,
        });
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
    <FormWrapperLayout
      popupView={popupView}
      name={name}
      onSubmit={onSubmit}
      methods={methods}
      itemId={watch("id")}
      itemNumber={watch("number")}
      isLoading={isLoading}
      onClose={onClose}
    >
      <Fields
        values={watch()}
        errors={errors}
        CACHE_LIST={CACHE_LIST}
        fields={fields}
        customGrid={
          name === "owner_expenses" ? "grid-cols-2 md:grid-cols-3" : ""
        }
      />
      {name === "owner_expenses" ? (
        <TableFields
          increasable={false}
          rowsCount={1}
          CACHE_LIST={CACHE_LIST}
          errors={errors}
          fields={getFormByTableName("owner_expenses_details")}
        />
      ) : null}
    </FormWrapperLayout>
  );
};

export default FormSingular;
