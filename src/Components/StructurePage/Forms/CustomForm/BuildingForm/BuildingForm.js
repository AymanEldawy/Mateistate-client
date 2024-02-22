import GET_UPDATE_DATE from "Helpers/Lib/operations/global-read-update";
import useFormSteps from "Hooks/useFormSteps";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { Fields } from "../Fields";
import { ButtonsStepsGroup } from "Components/Global/ButtonsStepsGroup";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import { toast } from "react-toastify";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import BlockPaper from "Components/Global/BlockPaper";
import { BuildingSubSteps } from "./BuildingSubSteps";
import { Input } from "Components/StructurePage/CustomFields";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";

const SUB_STEPS = [
  "building_real_estate_management",
  "building_buying",
  "building_editorial_entry",
  "building_investment",
  "building_real_estate_development",
];

const FLATS = {
  apartment_count: 0,
  penthouse_count: 0,
  parking_count: 0,
  mezzanine_count: 0,
  office_count: 0,
  stores_count: 0,
  warehouse_count: 0,
  service_apartments: 0,
  drivers_apartments: 0,
  underground_parking: 0,
};

const calculateFlats = (name, watch, setValue) => {
  let flat = name?.split(".").at(-1);
  switch (flat) {
    case "apartment_count":
    case "apartment_floor":
      FLATS.apartment_count =
        watch("building.apartment_count") * watch("building.apartment_floor");
      return;
    case "penthouse_count":
    case "penthouse_floor":
      FLATS.penthouse_count =
        watch("building.penthouse_count") * watch("building.penthouse_floor");

      return;
    case "parking_count":
    case "parking_floor":
      FLATS.parking_count =
        watch("building.parking_count") * watch("building.parking_floor");

      return;
    case "mezzanine_count":
    case "mezzanine_floor":
      FLATS.mezzanine_count =
        watch("building.mezzanine_count") * watch("building.mezzanine_floor");

      return;
    case "office_count":
    case "office_floor":
      FLATS.office_count =
        watch("building.office_count") * watch("building.office_floor");

      return;
    case "stores_count":
      FLATS.stores_count = watch("building.stores_count");

      return;
    case "warehouse_count":
      FLATS.warehouse_count = watch("building.warehouse_count");

      return;
    case "service_apartments":
      FLATS.service_apartments = watch("building.service_apartments");

      return;
    case "drivers_apartments":
      FLATS.drivers_apartments = watch("building.drivers_apartments");

      return;
    case "underground_parking":
      let underground_parking = watch("building.underground_parking");
      FLATS.underground_parking = underground_parking;

      return;
    default:
      return;
  }
};

const BuildingForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {
    next,
    back,
    goTo,
    isLast,
    isFirst,
    currentIndex,
    tab,
    steps,
    fields,
    CACHE_LIST,
    formSettings,
  } = useFormSteps({ name: "building_group_short" });
  const methods = useForm({
    defaultValues: params?.id
      ? async () => await GET_UPDATE_DATE("building", params?.id)
      : {},
  });
  const [loading, setLoading] = useState(false);
  const [currentSubIndex, setCurrentSubIndex] = useState(0);
  const {
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    reset,
    setValue,
  } = methods;

  useEffect(() => {
    if (!params?.id) {
      setValue("building.create_into_account", true);
      setValue("building.create_into_cost_center", true);
    }
  }, []);
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name?.indexOf("building.") !== -1) {
        calculateFlats(name, watch, setValue);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (value) => {
    if (!isDirty) return;

    setLoading(true);
    const getTheFunInsert = INSERT_FUNCTION?.building;
    const res = await getTheFunInsert({ data: value });

    if (res?.success) {
      if (!params?.id) navigate(`/tools/${res?.record?.id}`);
      toast.success("Successfully added item in Building");
      reset();
    } else {
      toast.error("Failed to add new item in Building");
    }
    setLoading(false);
  };

  return (
    <BlockPaper>
      <FormProvider {...methods}>
        <FormHeadingTitleSteps
          name={"building"}
          steps={steps}
          activeStage={currentIndex}
          goTo={goTo}
        />
        <div className="h-5" />
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {formSettings?.formType === "nested" ? (
            <div className="flex gap-8 items-start">
              <BuildingSubSteps
                steps={SUB_STEPS}
                goTo={setCurrentSubIndex}
                activeStage={currentSubIndex}
              />
              <>
                {currentSubIndex === 0 ? (
                  <Fields
                    tab={"building_real_estate_management"}
                    fields={getFormByTableName(
                      "building_real_estate_management"
                    )}
                    values={watch("building_real_estate_management")}
                    errors={errors}
                    CACHE_LIST={CACHE_LIST}
                    customGrid="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  />
                ) : null}
                {currentSubIndex === 1 ? (
                  <Fields
                    tab={"building_buying"}
                    fields={getFormByTableName("building_buying")}
                    values={watch("building_buying")}
                    errors={errors}
                    CACHE_LIST={CACHE_LIST}
                    customGrid="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  />
                ) : null}
                {currentSubIndex === 2 ? (
                  <Input
                    containerClassName="max-w-[300px]"
                    name="building_editorial_entry.building_cost"
                    type="number"
                    updatedName={`building_editorial_entry.building_cost`}
                    label={`building cost`}
                    values={watch("building_editorial_entry")}
                  />
                ) : null}
                {currentSubIndex === 3 ? (
                  <Fields
                    tab={"building_investment"}
                    fields={getFormByTableName("building_investment")}
                    values={watch("building_investment")}
                    errors={errors}
                    CACHE_LIST={CACHE_LIST}
                    customGrid="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  />
                ) : null}
                {currentSubIndex === 4 ? (
                  <Fields
                    tab={"building_real_estate_development"}
                    fields={getFormByTableName(
                      "building_real_estate_development"
                    )}
                    values={watch("building_real_estate_development")}
                    errors={errors}
                    CACHE_LIST={CACHE_LIST}
                    customGrid="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  />
                ) : null}
              </>
            </div>
          ) : (
            <>
              <Fields
                tab={tab}
                fields={fields}
                values={watch()?.[tab]}
                errors={errors}
                CACHE_LIST={CACHE_LIST}
                customGrid={
                  currentIndex === 3
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                    : ""
                }
              />
              {currentIndex === 1 ? (
                <div className="grid grid-cols-5 gap-4">
                  {Object.entries(FLATS)?.map(([key, val]) => (
                    <span className="bg-blue-50 rounded-md py-1 px-2 text-blue-500 border text-center capitalize">
                      {key?.replace("_", " ")} : {val}
                    </span>
                  ))}
                </div>
              ) : null}
            </>
          )}

          <ButtonsStepsGroup
            isLast={isLast}
            isFirst={isFirst}
            loading={loading}
            steps={steps}
            next={next}
            back={back}
          />
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default BuildingForm;
