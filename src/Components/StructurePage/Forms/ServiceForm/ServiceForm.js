import {
  getServiceUpdate
} from "Helpers/Lib/global-read-update";
import useFormSteps from "Hooks/useFormSteps";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Fields } from "../CustomForm/Fields";
import { dynamicInsertIntoMultiStepsTable } from "Helpers/Lib/global-insert";
import { ApiActions } from "Helpers/Lib/api";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { getResetFields } from "Helpers/Lib/global-reset";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import {
  SERVICE_CUSTOMER_CODE, SERVICE_PROPERTY_PREPARING_CODE
} from "Helpers/GENERATE_STARTING_DATA";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ServiceForm = ({ popupView }) => {
  const name = "service";
  const params = useParams();
  const id = params?.id;
  const code = +params?.code;

  const methods = useForm({
    defaultValues: getResetFields(name),
  });

  const {
    goTo,
    currentIndex,
    tab,
    steps,
    fields,
    CACHE_LIST,
    formSettings,
    onDeleteItem,
    setCACHE_LIST,
  } = useFormSteps({
    name:
      code === 1
        ? "service_customer"
        : code === 2
        ? "service"
        : "default_service",
  });
  const { reset, watch, setValue } = methods;
  const { isLoading } = useQuery({
    queryKey: [name, code, id],
    queryFn: async () => {
      const data = await getServiceUpdate(id);
      if (data?.service?.id) {
        reset(data);
      }
    },
  });

  const autoCompleteProblemInfo = (name, cache) => {
    let problemValue = watch(name);
    let serviceWorkerName = name?.split(".").slice(0, 2).join(".");

    let problem = cache?.find((c) => {
      return c?.id === problemValue;
    });
    // setValue(`${serviceWorkerName}.category_id`, problem?.category_id);
    setValue(`${serviceWorkerName}.total_minutes`, problem?.minutes);
    setValue(`${serviceWorkerName}.description`, problem?.description);
  };

  const fetchProblems = async (name, value) => {
    const res = await ApiActions.read("category_problem", {
      conditions: [{ type: "and", conditions: [["category_id", "=", value]] }],
    });
    setCACHE_LIST((prev) => ({
      ...prev,
      category_problem: res?.result,
    }));

    let serviceWorkerName = name?.split(".").slice(0, 2).join(".");
    setValue(
      `${serviceWorkerName}.category_problem_id`,
      res?.result?.at(0)?.id
    );
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name?.indexOf("category_problem_id") !== -1) {
        autoCompleteProblemInfo(name, CACHE_LIST?.category_problem);
      }
      if (name?.indexOf("category_id") !== -1) {
        fetchProblems(name, watch(name));
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onDelete = async () => {
    let data = watch("service");
    const response = await ApiActions.remove("service", {
      conditions: [{ type: "and", conditions: [["id", "=", data?.id]] }],
    });
  };

  const onSubmit = async (value) => {
    // setValue("service.code", +code);
    value.service.code = +code;
    const response = await dynamicInsertIntoMultiStepsTable({
      tableName: "service",
      data: value,
    });
    if (response?.success) {
      toast.success(
        `Successfully ${params?.id ? "updated" : "inserted"} item in service`
      );
    } else {
      if (response?.constraint?.indexOf('service_name_key"') !== -1) {
        toast.error(`Field to insert service, Name is already exist.`);
      } else {
        toast.error(response?.error?.detail);
      }
    }
  };

  return (
    <FormWrapperLayout
      name={name}
      isLoading={isLoading}
      popupView={popupView}
      methods={methods}
      itemId={watch("service.id")}
      itemNumber={watch("service.number")}
      steps={steps}
      goToStep={goTo}
      currentIndex={currentIndex}
      outerDelete={onDelete}
      onSubmit={onSubmit}
      defaultTitle={
        <>
          {code === SERVICE_CUSTOMER_CODE
            ? "Customer Complaint order"
            : code === SERVICE_PROPERTY_PREPARING_CODE
            ? "Property preparing order"
            : "Default service"}
        </>
      }
    >
      {formSettings?.formType === "grid" ? (
        <TableFields
          fields={fields}
          CACHE_LIST={CACHE_LIST}
          // increasable={false}
          tab={tab}
        />
      ) : (
        <>
          <Fields
            tab={tab}
            fields={fields}
            values={+code === 3 ? watch() : watch(tab)}
            CACHE_LIST={CACHE_LIST}
            customGrid={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}
          />
        </>
      )}
    </FormWrapperLayout>
  );
};

export default ServiceForm;
