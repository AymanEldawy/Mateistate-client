import { useEffect } from "react";
import { toast } from "react-toastify";
import useFormSteps from "Hooks/useFormSteps";

import { Fields } from "./Fields";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import { useForm } from "react-hook-form";
import TableFields from "Components/TableComponents/TableFields";
import GET_UPDATE_DATE from "Helpers/Lib/global-read-update";
import { useNavigate, useParams } from "react-router-dom";
import { usePopupForm } from "Hooks/usePopupForm";
import { SHOULD_DELETE_COST_CENTER } from "Helpers/constants";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import useCurd from "Hooks/useCurd";
import FormLayout from "../FormWrapperLayout/FormLayout";
import useFormPagination from "Hooks/useFormPagination";

const FormSteps = ({
  name,
  onClose,
  layout,
  setRecordResponse,
  popupView,
  oldValues = null,
  number,
  code
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params?.id;
  const { remove } = useCurd();
  const { appendNewRecord } = usePopupForm();
  const methods = useForm({
    defaultValues: {},
  });
  const formPagination = useFormPagination({ name, number: number, code });

  const {
    goTo,
    currentIndex,
    tab,
    formSettings,
    steps,
    fields,
    tabNames,
    setCurrentIndex,
  } = useFormSteps({ name });

  const {
    watch,
    formState: { errors, isDirty },
    reset,
  } = methods;

  const { isLoading } = useQuery({
    queryKey: [name, id],
    queryFn: async () => {
      if (!id) return;
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

    let res = await remove(name, data?.id);
    if (res?.success) {
      if (SHOULD_DELETE_COST_CENTER?.[tabNames[0]]) {
        await remove("cost_center", data?.cost_center_id);
      }
      navigate(-1);
    }
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
        `Successfully ${id ? "Updated" : "Insert"} item in ` + name
      );

      if (!id) {
        await appendNewRecord(res);
      }
    } else {
      toast.error(res?.error?.detail);
    }
    if (!!onClose) onClose();
  };

  return (
    <FormLayout
      name={name}
      isLoading={isLoading}
      onSubmit={onSubmit}
      methods={methods}
      onClose={onClose}
      steps={steps}
      goTo={goTo}
      activeStage={currentIndex}
      formPagination={formPagination}
      formClassName="w-full xl:w-[900px] 2xl:w-[1200px]"
    
    >
      {fields?.length ? (
        <>
          {formSettings?.formType === "grid" ? (
            <div key={steps?.[currentIndex]}>
              <TableFields
                tab={tab}
                values={watch()?.[tab]}
                fields={fields}
              />
            </div>
          ) : (
            <Fields
              tab={name === "user" ? null : tab}
              fields={fields}
              values={watch()?.[tab]}
              errors={errors}
            />
          )}
        </>
      ) : null}
    </FormLayout>
  );
};

export default FormSteps;
