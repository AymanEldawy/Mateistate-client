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
import {
  USER_SUPERVISOR_CODE,
  USER_WORKER_CODE,
} from "Helpers/GENERATE_STARTING_DATA";
import { insertIntoUserConnect } from "Helpers/Lib/vouchers-insert";

async function getUserConnect(user_id, setIds, name, searchKey) {
  if (!user_id) return;
  const res = await ApiActions.read(name, {
    conditions: [{ type: "and", conditions: [["user_id", "=", user_id]] }],
  });
  if (res?.result) {
    let hash = {};
    for (const item of res?.result) {
      hash[item?.[searchKey]] = true;
    }
    setIds(hash);
  }
}

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
      let data = res?.result?.at(0);
      reset(data);

      if (data?.card_type >= USER_SUPERVISOR_CODE) {
        await getUserConnect(data?.id, setBuildingsIds, "worker_building", 'building_id');
      }

      if (data?.card_type === USER_WORKER_CODE) {
        await getUserConnect(data?.id, setCategoriesIds, "worker_category", 'category_id');
      }
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

      if (watch("card_type") >= USER_SUPERVISOR_CODE) {
        await insertIntoUserConnect({
          ids: Object.keys(buildingsIds),
          name: "worker_building",
          searchKey: "building_id",
          userId: id || res?.record?.id,
        });
      }
      if (watch("card_type") > USER_SUPERVISOR_CODE) {
        await insertIntoUserConnect({
          ids: Object.keys(categoriesIds),
          name: "worker_category",
          searchKey: "category_id",
          userId: id || res?.record?.id,
        });
      }

      if (!id) {
        await appendNewRecord(res);
      }
      reset();
    } else {
      toast.error(res?.error?.detail);
    }
    if (!!onClose) onClose();
  };

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
        <ReportFilterBuildings
          bodyClassName={"grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6"}
          buildingsIds={buildingsIds}
          setBuildingsIds={setBuildingsIds}
        />
      ) : null}
      {watch("card_type") > 3 ? (
        <ReportFilterCategories
          containerClassName="mt-4"
          bodyClassName={"grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6"}
          categoriesIds={categoriesIds}
          setCategoriesIds={setCategoriesIds}
        />
      ) : null}
    </FormWrapperLayout>
  );
};

export default UserForm;
