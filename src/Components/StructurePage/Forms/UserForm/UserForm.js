import { useEffect } from "react";
import { toast } from "react-toastify";
import useFormSteps from "Hooks/useFormSteps";

import { useForm } from "react-hook-form";
import { usePopupForm } from "Hooks/usePopupForm";
import { Fields } from "../CustomForm/Fields";
import useListView from "Hooks/useListView";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import { removeNullValues } from "Helpers/functions";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

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
  const viewList = useListView({ name, defaultNumber: params?.number });
  const { goTo, currentIndex, steps, fields, CACHE_LIST, setCurrentIndex } =
    useFormSteps({ name });
  const { listOfNumbers, number, setMaxLength, isLayoutUpdate } = viewList;

  const { appendNewRecord } = usePopupForm();
  const methods = useForm();
  const {
    watch,
    formState: { errors, isDirty },
    reset,
  } = methods;

  const { isLoading } = useQuery({
    queryKey: [name, listOfNumbers?.[number - 1]],
    queryFn: async () => {
      const res = await ApiActions.read(name, {
        conditions: [
          {
            type: "and",
            conditions: [["number", "=", listOfNumbers[number - 1]]],
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
        `Successfully ${isLayoutUpdate ? "updated" : "inserted"} item in  ` +
          name
      );
      if (!!refetchData) refetchData();
      if (!isLayoutUpdate) {
        setMaxLength((prev) => +prev + 1);
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
      viewList={viewList}
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
    </FormWrapperLayout>
  );
};

export default UserForm;
