import { ApiActions } from "Helpers/Lib/api";
import { Fields } from "./Fields";
import INSERT_FUNCTION from "../../../../Helpers/Lib/global-insert";
import useRefTable from "Hooks/useRefTables";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useListView from "Hooks/useListView";
import { usePopupForm } from "Hooks/usePopupForm";
import { removeNullValues } from "Helpers/functions";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import getFormByTableName from "Helpers/Forms/forms";

const FormSingular = ({ name, onClose }) => {
  const params = useParams();
  const viewList = useListView({ name, defaultNumber: params?.number });
  const { setRecordResponse, appendNewRecord } = usePopupForm();
  const methods = useForm({
    defaultValues: {},
  });
  const { fields, CACHE_LIST } = useRefTable(name);
  const {
    isLayoutUpdate,
    listOfNumbers,
    number,
    setMaxLength,
    setOpenConfirmation,
    setListOfData,
    setListOfNumbers,
    onDeleteItem,
  } = viewList;

  const {
    reset,
    watch,
    errors,
    formState: { isDirty },
  } = methods;

  const { isLoading } = useQuery({
    queryKey: [name, listOfNumbers?.[number - 1]],
    queryFn: async () => {
      const data = await ApiActions.read(name, {
        conditions: [
          {
            type: "and",
            conditions: [["number", "=", listOfNumbers?.at(number - 1)]],
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

    if (isLayoutUpdate) {
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
        isLayoutUpdate
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );

      if (!isLayoutUpdate) {
        let record = res?.record;
        setListOfData((prev) => ({
          ...prev,
          [record?.number]: record,
        }));
        setListOfNumbers((prev) => [...prev, record?.number]);
      }

      if (!!setRecordResponse) {
        setRecordResponse({ table: name, response: res });
      }

      if (!isLayoutUpdate) {
        setMaxLength((prev) => +prev + 1);
        await appendNewRecord(res);
        reset();
      }
    } else {
      toast.error(res?.error?.detail);
    }
  };

  return (
    <FormWrapperLayout
      name={name}
      viewList={viewList}
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
