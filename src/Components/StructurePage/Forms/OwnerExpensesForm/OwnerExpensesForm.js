import { ApiActions } from "Helpers/Lib/api";
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
import { Fields } from "../CustomForm/Fields";
import { insertIntoGrid } from "Helpers/Lib/vouchers-insert";

const OwnerExpensesForm = () => {
  const name = "owner_expenses";
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
        const ownerDetailsRes = await ApiActions.read(
          `owner_expenses_details`,
          {
            conditions: [
              {
                type: "and",
                conditions: [
                  ["owner_expenses_id", "=", data?.result?.at(0)?.id],
                ],
              },
            ],
          }
        );
        reset({
          owner_expenses: data?.result?.at(0),
          owner_expenses_details: ownerDetailsRes?.result
        });
      } else {
        const ownerTypesRes = await ApiActions.read(`owner_expenses_types`);
        if (ownerTypesRes?.success) {
          let owner_expenses_details = [];
          for (const item of ownerTypesRes?.result) {
            owner_expenses_details.push({
              owner_expenses_types_id: item?.id,
            });
          }
          reset({
            owner_expenses_details,
          });
        }
      }
    },
  });

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;

    let res = null;

    if (isLayoutUpdate) {
      res = await ApiActions.update(name, {
        conditions: [
          { type: "and", conditions: [["id", "=", watch(`${name}.id`)]] },
        ],
        updates: watch(name),
      });
    } else {
      res = await ApiActions.insert(name, {
        data: watch(name),
      });
    }

    if (res?.success) {
      toast.success(
        isLayoutUpdate
          ? `Successfully update row: ${name} in ${name}`
          : "Successfully added item in " + name
      );

      if (!isLayoutUpdate) {
        let record = res?.record;
        setListOfNumbers((prev) => [...prev, record?.number]);
      }
      insertIntoGrid({
        grid: watch("owner_expenses_details"),
        gridTableName: "owner_expenses_details",
        itemId: res?.record?.id || watch(`${name}.id`),
        itemSearchName: "owner_expenses_id",
      });
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
    >
      <Fields
        tab="owner_expenses"
        values={watch()}
        errors={errors}
        CACHE_LIST={CACHE_LIST}
        fields={fields}
        customGrid={
          name === "owner_expenses" ? "grid-cols-2 md:grid-cols-3" : ""
        }
      />
      <TableFields
        tab={"owner_expenses_details"}
        increasable={false}
        rowsCount={watch("owner_expenses_details")?.length}
        CACHE_LIST={CACHE_LIST}
        errors={errors}
        fields={getFormByTableName("owner_expenses_details")}
      />
    </FormWrapperLayout>
  );
};

export default OwnerExpensesForm;
