import { GET_UPDATE_DATE_BY_NUMBER } from "Helpers/Lib/global-read-update";
import useFormSteps from "Hooks/useFormSteps";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Fields } from "../CustomForm/Fields";
import { toast } from "react-toastify";
import INSERT_FUNCTION, {
  dynamicInsertIntoMultiStepsTable,
} from "Helpers/Lib/global-insert";
import { Input } from "Components/StructurePage/CustomFields";
import getFormByTableName from "Helpers/Forms/forms";
import { FLATS } from "Helpers/constants";
import useListView from "Hooks/useListView";
import { ApiActions } from "Helpers/Lib/api";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { getResetFields } from "Helpers/Lib/global-reset";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { v4 as uuidv4 } from "uuid";

const ServiceForm = ({ popupView }) => {
  const name = "service";
  const params = useParams();
  const code = params?.code;
  const viewList = useListView({
    name: "service",
    defaultNumber: params?.number,
  });
  const { listOfNumbers, number, setMaxLength, setNumber } = viewList;
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
  } = useFormSteps({ name: code === 1 ? "service_customer" : "service" });
  const { reset, watch } = methods;
  const { isLoading } = useQuery({
    queryKey: [name, code, listOfNumbers?.[number - 1]],
    queryFn: async () => {
      const data = await GET_UPDATE_DATE_BY_NUMBER.service(
        listOfNumbers?.[number - 1],
        code
      );
      if (data?.service?.id) {
        reset(data);
      }
    },
  });

  const onDelete = async () => {
    let data = watch("service");
    const response = await ApiActions.remove("service", {
      conditions: [{ type: "and", conditions: [["id", "=", data?.id]] }],
    });

    if (response?.success) {
      onDeleteItem(data?.number);
      setNumber((prev) => +prev - 1);
      setMaxLength((prev) => +prev - 1);
    }
  };
  const onSubmit = async (value) => {
    const response = await dynamicInsertIntoMultiStepsTable({
      tableName: "service",
      data: value,
    });
    if (watch("service.id")) {
      //   const response = await ApiActions.update("service", {
      //     conditions: [
      //       { type: "and", conditions: [["id", "=", value?.service?.id]] },
      //     ],
      //     updates: value?.service,
      //   });
      //   if (response?.success) {
      //     await ApiActions.update("service_customer_request", {
      //       conditions: [
      //         {
      //           type: "and",
      //           conditions: [["id", "=", value?.service_customer_request?.id]],
      //         },
      //       ],
      //       updates: value?.service_customer_request,
      //     });
      //   }
      // } else {
      //   const response = await ApiActions.insert("service", {
      //     data: { id: uuidv4(), created_at: new Date(), ...value?.service },
      //   });
      //   if (response?.success) {
      //     await ApiActions.insert("service_customer_request", {
      //       data: {
      //         id: uuidv4(),
      //         ...value?.service_customer_request,
      //         service_id: watch("service.id") || response?.record?.id,
      //       },
      //     });
      //   }
    }
  };

  return (
    <FormWrapperLayout
      name={name}
      viewList={viewList}
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
    >
      {formSettings?.formType === "grid" ? (
        <TableFields
          fields={fields}
          CACHE_LIST={CACHE_LIST}
          increasable={false}
          tab={tab}
        />
      ) : (
        <>
          <Fields
            tab={tab}
            fields={fields}
            values={watch()?.[tab]}
            CACHE_LIST={CACHE_LIST}
            customGrid={
              currentIndex === 3
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                : ""
            }
          />
        </>
      )}
    </FormWrapperLayout>
  );
};

export default ServiceForm;
