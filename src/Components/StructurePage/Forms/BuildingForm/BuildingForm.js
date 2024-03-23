import { GET_UPDATE_DATE_BY_NUMBER } from "Helpers/Lib/global-read-update";
import useFormSteps from "Hooks/useFormSteps";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Fields } from "../CustomForm/Fields";
import { toast } from "react-toastify";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import { BuildingSubSteps } from "./BuildingSubSteps";
import { Input } from "Components/StructurePage/CustomFields";
import getFormByTableName from "Helpers/Forms/forms";
import { FLATS } from "Helpers/constants";
import useListView from "Hooks/useListView";
import { ApiActions } from "Helpers/Lib/api";
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { getResetFields } from "Helpers/Lib/global-reset";
import { PaletteIcon } from "Components/Icons";

const SUB_STEPS = [
  "building_real_estate_management",
  "building_buying",
  "building_editorial_entry",
  "building_investment",
  "building_real_estate_development",
];

const calculateFlats = (name, watch) => {
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
    case "store_count":
      FLATS.store_count = watch("building.store_count");
      return;

    case "shop_count":
      FLATS.shop_count = watch("building.shop_count");

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

const reCalculateFlats = (watch) => {
  for (const flat of Object.keys(FLATS)) {
    calculateFlats(flat, watch);
  }
};

const BuildingForm = ({ popupView }) => {
  const name = "building";
  const params = useParams();
  const navigate = useNavigate();
  const viewList = useListView({
    name: "building",
    defaultNumber: params?.number,
  });
  const { listOfNumbers, number, setMaxLength, setNumber } = viewList;
  const methods = useForm({
    defaultValues: getResetFields(name),
  });
  const [currentSubIndex, setCurrentSubIndex] = useState(0);

  const {
    goTo,
    currentIndex,
    tab,
    steps,
    fields,
    CACHE_LIST,
    setCurrentIndex,
    formSettings,
    onDeleteItem,
  } = useFormSteps({ name: "building_group_short" });
  const {
    reset,
    watch,
    formState: { isDirty, errors },
    setValue,
  } = methods;

  const { isLoading } = useQuery({
    queryKey: [name, listOfNumbers?.[number - 1]],
    queryFn: async () => {
      const data = await GET_UPDATE_DATE_BY_NUMBER.building(
        listOfNumbers?.[number - 1]
      );
      if (data?.building?.id) {
        reset(data);
        reCalculateFlats(watch);
      }
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name?.indexOf("building.") !== -1) {
        calculateFlats(name, watch, setValue);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const buildingFormValid = useCallback(() => {
    let valid = false;
    for (const flat in FLATS) {
      if (FLATS?.[flat]) valid = true;
    }
    return valid;
  }, []);

  const onDelete = async () => {
    let data = watch("building");
    const response = await ApiActions.remove("building", {
      conditions: [{ type: "and", conditions: [["id", "=", data?.id]] }],
    });

    if (response?.success) {
      await ApiActions.remove("cost_center", {
        conditions: [
          { type: "and", conditions: [["id", "=", data?.main_cost_center_id]] },
        ],
      });
      await ApiActions.remove("account", {
        conditions: [
          { type: "and", conditions: [["id", "=", data?.building_account_id]] },
        ],
      });

      onDeleteItem(data?.number);
      setNumber((prev) => +prev - 1);
      setMaxLength((prev) => +prev - 1);
    }
  };

  const onSubmit = async (value) => {
    if (!isDirty) return;

    if (!buildingFormValid()) {
      toast.error("You must to fill out some Units");
      setCurrentIndex(1);
      return;
    }

    const getTheFunInsert = INSERT_FUNCTION?.building;
    const res = await getTheFunInsert(value);

    if (res?.success) {
      if (res?.record?.id) navigate(`/tools/${res?.record?.id}`);
      toast.success("Successfully added item in Building");
      reset();
    } else {
      if (res?.constraint?.indexOf('building_name_key"') !== -1) {
        toast.error(`Field to insert Building, Name is already exist.`);
      } else {
        toast.error(res?.error?.detail);
      }
    }
  };

  console.log(errors, "errors");

  return (
    <FormWrapperLayout
      name={name}
      viewList={viewList}
      isLoading={isLoading}
      onSubmit={onSubmit}
      popupView={popupView}
      methods={methods}
      itemId={watch("building.id")}
      itemNumber={watch("building.number")}
      steps={steps}
      goToStep={goTo}
      currentIndex={currentIndex}
      outerDelete={onDelete}
      setCurrentIndex={setCurrentIndex}
      additionalButtons={
        <Link
          to={`/tools/${watch("building.id")}`}
          className="bg-gray-200 dark:bg-dark-border dark:text-white rounded-md p-2 flex items-center gap-2 font-medium text-gray-700"
        >
          <PaletteIcon />
          Units description
        </Link>
      }
    >
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
                fields={getFormByTableName("building_real_estate_management")}
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
                fields={getFormByTableName("building_real_estate_development")}
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {Object.entries(FLATS)?.map(([key, val]) => {
                return (
                  <span className="bg-blue-50 rounded-md py-1 px-2 whitespace-nowrap text-blue-500 border text-center capitalize">
                    {key?.replace("_", " ")} : {val}
                  </span>
                );
              })}
            </div>
          ) : null}
        </>
      )}
    </FormWrapperLayout>
  );
};

export default BuildingForm;
