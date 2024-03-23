import { useEffect } from "react";
import { toast } from "react-toastify";
import useFormSteps from "Hooks/useFormSteps";

import { Fields } from "./Fields";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import { useForm } from "react-hook-form";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import GET_UPDATE_DATE from "Helpers/Lib/global-read-update";
import { useParams } from "react-router-dom";
import { usePopupForm } from "Hooks/usePopupForm";
import useListView from "Hooks/useListView";
import { SHOULD_DELETE_COST_CENTER } from "Helpers/constants";
import { ApiActions } from "Helpers/Lib/api";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";

const FormSteps = ({
  name,
  onClose,
  layout,
  setRecordResponse,
  oldValues = null,
}) => {
  const params = useParams();
  const viewList = useListView({ name, defaultNumber: params?.number });
  const { appendNewRecord } = usePopupForm();
  const methods = useForm({
    defaultValues: {},
  });

  const {
    goTo,
    currentIndex,
    tab,
    formSettings,
    steps,
    fields,
    CACHE_LIST,
    tabNames,
    setCurrentIndex,
  } = useFormSteps({ name });

  const {
    isLayoutUpdate,
    listOfNumbers,
    number,
    setMaxLength,
    listOfData,
    onDeleteItem,
    setOpenConfirmation,
  } = viewList;

  const {
    watch,
    formState: { errors, isDirty },
    reset,
  } = methods;

  const { isLoading } = useQuery({
    queryKey: [name, listOfNumbers?.[number - 1]],
    queryFn: async () => {
      let id = listOfData?.[listOfNumbers?.at(number - 1)]?.id;
      const data = await GET_UPDATE_DATE(name, id);
      if (data) {
        reset(data);
      }
    },
  });

  useEffect(() => {
    if (layout !== "update" && oldValues) {
      reset({ ...watch(), ...oldValues });
    }
  }, [oldValues]);

  const onDelete = async () => {
    let data = watch(tabNames?.[0]);

    let res = await ApiActions.remove(name, {
      conditions: [
        {
          type: "and",
          conditions: [["id", "=", data?.id]],
        },
      ],
    });
    if (res?.success) {
      onDeleteItem(data?.number);
      if (SHOULD_DELETE_COST_CENTER?.[tabNames[0]]) {
        await ApiActions.remove("cost_center", {
          conditions: [
            { type: "and", conditions: [["id", "=", data?.cost_center_id]] },
          ],
        });
      }
    }
    setOpenConfirmation(false);
  };

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;

    const getTheFunInsert = INSERT_FUNCTION[name];
    const res = await getTheFunInsert({ data: value });

    if (!!setRecordResponse) {
      setRecordResponse({ table: name, response: res });
    }

    if (res?.success) {
      toast.success(
        `Successfully ${isLayoutUpdate ? "Updated" : "Insert"} item in ` + name
      );

      if (!isLayoutUpdate) {
        await appendNewRecord(res);
        setMaxLength((prev) => +prev + 1);
      }
    } else {
      toast.error(res?.error?.detail);
    }
    if (!!onClose) onClose();
  };

  return (
    <FormWrapperLayout
      name={name}
      viewList={viewList}
      isLoading={isLoading}
      onSubmit={onSubmit}
      methods={methods}
      itemId={watch("building.id")}
      itemNumber={watch("building.number")}
      steps={steps}
      goToStep={goTo}
      currentIndex={currentIndex}
      outerDelete={onDelete}
      setCurrentIndex={setCurrentIndex}
    >
      {fields?.length ? (
        <>
          {formSettings?.formType === "grid" ? (
            <div key={steps?.[currentIndex]}>
              <TableFields
                tab={tab}
                values={watch()?.[tab]}
                fields={fields}
                CACHE_LIST={!!CACHE_LIST ? CACHE_LIST : undefined}
              />
            </div>
          ) : (
            <Fields
              tab={name === "user" ? null : tab}
              fields={fields}
              values={watch()?.[tab]}
              errors={errors}
              CACHE_LIST={CACHE_LIST}
            />
          )}
        </>
      ) : null}
    </FormWrapperLayout>
  );
};

export default FormSteps;
