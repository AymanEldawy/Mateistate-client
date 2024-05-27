import { GET_UPDATE_DATE_BY_NUMBER } from "Helpers/Lib/global-read-update";
import useFormSteps from "Hooks/useFormSteps";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Fields } from "../CustomForm/Fields";
import { toast } from "react-toastify";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import { Input } from "Components/StructurePage/CustomFields";
import getFormByTableName from "Helpers/Forms/forms";
import { FLATS } from "Helpers/constants";
import useListView from "Hooks/useListView";
import { ApiActions } from "Helpers/Lib/api";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { getResetFields } from "Helpers/Lib/global-reset";
import TableFields from "Components/StructurePage/CustomTable/TableFields";

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
  } = useFormSteps({ name });
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
    >
      {formSettings?.formType === "grid" ? (
        <TableFields
          fields={fields}
          CACHE_LIST={CACHE_LIST}
          increasable={false}
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
