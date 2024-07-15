import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useFormSteps from "Hooks/useFormSteps";

import { useForm } from "react-hook-form";
import { usePopupForm } from "Hooks/usePopupForm";
import { Fields } from "../CustomForm/Fields";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import { removeNullValues } from "Helpers/functions";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ReportFilterBuildings } from "Components/ReportsComponents/ReportFilterBuildings";
import { ReportFilterCategories } from "Components/ReportsComponents/ReportFilterCategories";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import getTableColumns from "Helpers/columns-structure";

const UserForm = ({
  onClose,
  refetchData,
  layout,
  allowTabs,
  setRecordResponse,
  popupView,
  oldValues = null,
}) => {
  const name = "user";
  const params = useParams();
  const id = params?.id;
  const { goTo, currentIndex, steps, fields, CACHE_LIST, setCurrentIndex } =
    useFormSteps({ name });

  const { appendNewRecord } = usePopupForm();
  const methods = useForm();
  const {
    watch,
    formState: { errors, isDirty },
    reset,
  } = methods;
  const [buildingsIds, setBuildingsIds] = useState({});
  const [categoriesIds, setCategoriesIds] = useState({});

  const { isLoading } = useQuery({
    queryKey: [name, id],
    queryFn: async () => {
      const res = await ApiActions.read(name, {
        conditions: [
          {
            type: "and",
            conditions: [["id", "=", id]],
          },
        ],
      });
      reset(res?.result?.at(0));
    },
  });

  useEffect(() => {
    if (layout !== "update" && oldValues) {
      reset({ ...watch(), ...oldValues });
    }
  }, [oldValues]);

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;

    const res = await INSERT_FUNCTION.user(removeNullValues(value));

    if (!!setRecordResponse) {
      setRecordResponse({ table: name, response: res });
    }

    if (res?.success) {
      toast.success(
        `Successfully ${id ? "updated" : "inserted"} item in  ` + name
      );
      if (!!refetchData) refetchData();
      if (!id) {
        await appendNewRecord(res);
      }
      reset();
    } else {
      toast.error(res?.error?.detail);
    }
    if (!!onClose) onClose();
  };

  console.log(CACHE_LIST,'s');

  return (
    <FormWrapperLayout
      name={"user"}
      steps={steps}
      isLoading={isLoading}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      goToStep={goTo}
      onClose={onClose}
      onSubmit={onSubmit}
      popupView={popupView}
      methods={methods}
      itemId={watch("id")}
      itemNumber={watch("number")}
    >
      <Fields
        fields={fields}
        values={watch()}
        errors={errors}
        CACHE_LIST={CACHE_LIST}
      />

      {watch("card_type") > 2 ? (
        <TableFields
          tab="worker_building"
          CACHE_LIST={CACHE_LIST}
          fields={getTableColumns("worker_building")}
        />
      ) : null}
      {watch("card_type") > 3 ? (
        <TableFields
          tab="worker_category"
          CACHE_LIST={CACHE_LIST}
          fields={getTableColumns("worker_category")}
        />
      ) : null}
    </FormWrapperLayout>
  );
};

export default UserForm;
