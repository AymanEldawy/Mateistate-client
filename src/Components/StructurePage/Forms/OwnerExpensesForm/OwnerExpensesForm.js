import useRefTable from "Hooks/useRefTables";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { usePopupForm } from "Hooks/usePopupForm";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import getFormByTableName from "Helpers/Forms/forms";
import { Fields } from "../CustomForm/Fields";
import { insertIntoGrid } from "Helpers/Lib/vouchers-insert";
import useCurd from "Hooks/useCurd";

const OwnerExpensesForm = () => {
  const name = "owner_expenses";
  const params = useParams();
  const id = params?.id;
  const { set, insert, get, getOneBy } = useCurd();
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
      const data = await getOneBy(name, id);
      if (data?.success) {
        const ownerDetailsRes = await getOneBy(
          `owner_expenses_details`,
          data?.result?.at(0)?.id,
          "owner_expenses_id"
        );
        reset({
          owner_expenses: data?.result?.at(0),
          owner_expenses_details: ownerDetailsRes?.result,
        });
      } else {
        const ownerTypesRes = await get(`owner_expenses_types`);
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

    if (id) {
      res = await set(name, watch(name), watch(`${name}.id`));
    } else {
      res = await insert(name, watch(name));
    }

    if (res?.success) {
      toast.success(
        id
          ? `Successfully update row: ${name} in ${name}`
          : "Successfully added item in " + name
      );

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
