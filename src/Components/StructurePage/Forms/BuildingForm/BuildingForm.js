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
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { getResetFields } from "Helpers/Lib/global-reset";
import { PaletteIcon } from "Components/Icons";
import { SubStepsList } from "./../CustomForm/SubStepsList";
import useCurd from "Hooks/useCurd";
import FormLayout from "../FormWrapperLayout/FormLayout";
import useFormPagination from "Hooks/useFormPagination";

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
        watch("apartment_count") * watch("apartment_floor");
      return;
    case "penthouse_count":
    case "penthouse_floor":
      FLATS.penthouse_count =
        watch("penthouse_count") * watch("penthouse_floor");

      return;
    case "parking_count":
    case "parking_floor":
      FLATS.parking_count = watch("parking_count") * watch("parking_floor");

      return;
    case "mezzanine_count":
    case "mezzanine_floor":
      FLATS.mezzanine_count =
        watch("mezzanine_count") * watch("mezzanine_floor");

      return;
    case "office_count":
    case "office_floor":
      FLATS.office_count = watch("office_count") * watch("office_floor");

      return;
    case "store_count":
      FLATS.store_count = watch("store_count");
      return;

    case "shop_count":
      FLATS.shop_count = watch("shop_count");

      return;
    case "warehouse_count":
      FLATS.warehouse_count = watch("warehouse_count");

      return;
    case "service_apartments":
      FLATS.service_apartments = watch("service_apartments");

      return;
    case "drivers_apartments":
      FLATS.drivers_apartments = watch("drivers_apartments");

      return;
    case "underground_parking":
      let underground_parking = watch("underground_parking");
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

const BuildingForm = ({ onClose }) => {
  const name = "building";
  const params = useParams();
  const number = params?.number;
  const { remove, getOneBy } = useCurd();
  const navigate = useNavigate();
  const formPagination = useFormPagination({ name, number });
  const methods = useForm({
    defaultValues: getResetFields(name),
  });
  const buildingId = formPagination?.currentId;
  const [currentSubIndex, setCurrentSubIndex] = useState(0);

  const {
    goTo,
    currentIndex,
    tab,
    steps,
    fields,
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
    queryKey: [name, buildingId],
    queryFn: async () => {
      const res = await getOneBy("building", buildingId);
      if (res?.success) {
        reset(res?.result?.at(0));
        reCalculateFlats(watch);
      }
    },
    enabled: !!buildingId
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      calculateFlats(name, watch, setValue);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if(formPagination?.currentNumber > formPagination?.lastNumber) {
      reCalculateFlats(watch)
    }
  }, [formPagination?.currentNumber])

  const buildingFormValid = useCallback(() => {
    let valid = false;
    for (const flat in FLATS) {
      if (FLATS?.[flat]) valid = true;
    }
    return valid;
  }, []);

  const onDelete = async () => {
    let data = watch("building");
    const response = await remove("building", buildingId);

    if (response?.success) {
      await remove("cost_center", data?.main_cost_center_id);
      await remove("account", data?.building_account_id);
    }
    navigate(-1);
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
      toast.success(
        `Successfully ${params?.id ? "updated" : "inserted"} item in Building`
      );
    } else {
      if (res?.constraint?.indexOf('building_name_key"') !== -1) {
        toast.error(`Field to insert Building, Name is already exist.`);
      } else {
        toast.error(res?.error?.detail);
      }
    }
  };

  return (
    <FormLayout
      name={name}
      isLoading={isLoading}
      onSubmit={onSubmit}
      methods={methods}
      steps={steps}
      activeStage={currentIndex}
      goTo={goTo}
      onClose={onClose}
      formClassName="w-full xl:w-[900px] 2xl:w-[1200px]"
      formPagination={formPagination}
      additionalButtons={
        <Link
          to={`/tools/${watch("id")}`}
          className="border capitalize border-light-green text-light-green dark:bg-dark-border dark:text-white rounded-md px-2 py-[2px] text-sm flex items-center gap-1 font-medium "
        >
          <PaletteIcon />
          Units description
        </Link>
      }
    >
      {formSettings?.formType === "nested" ? (
        <div className="flex gap-8 items-start">
          <SubStepsList
            steps={SUB_STEPS}
            goTo={setCurrentSubIndex}
            activeStage={currentSubIndex}
          />
          <>
            {currentSubIndex === 0 ? (
              <Fields
                tab={""}
                fields={getFormByTableName("building_real_estate_management")}
                values={watch()}
                errors={errors}
                customGrid="grid grid-cols-1"
              />
            ) : null}
            {currentSubIndex === 1 ? (
              <Fields
                tab={""}
                fields={getFormByTableName("building_buying")}
                values={watch()}
                errors={errors}
                customGrid="grid grid-cols-1"
              />
            ) : null}
            {currentSubIndex === 2 ? (
              <Input
                containerClassName="max-w-[300px]"
                name="building_cost"
                type="number"
                updatedName={`building_cost`}
                label={`building cost`}
                values={watch()}
              />
            ) : null}
            {currentSubIndex === 3 ? (
              <Fields
                tab={""}
                fields={getFormByTableName("building_investment")}
                values={watch()}
                errors={errors}
                customGrid="grid grid-cols-1"
              />
            ) : null}
            {currentSubIndex === 4 ? (
              <Fields
                tab={""}
                fields={getFormByTableName("building_real_estate_development")}
                values={watch()}
                errors={errors}
                customGrid="grid grid-cols-1"
              />
            ) : null}
          </>
        </div>
      ) : (
        <>
          <Fields
            tab={""}
            fields={fields}
            values={watch()?.[tab]}
            errors={errors}
            customGrid={
              currentIndex === 3
                ? "grid grid-cols-1 md:grid-cols-2"
                : ""
            }
          />
          {currentIndex === 1 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {Object.entries(FLATS)?.map(([key, val]) => {
                return (
                  <span
                    key={key}
                    className="bg-blue-50 rounded-md py-1 px-2 whitespace-nowrap text-blue-500 border text-center capitalize"
                  >
                    {key?.replace("_", " ")} : {val}
                  </span>
                );
              })}
            </div>
          ) : null}
        </>
      )}
    </FormLayout>
  );
};

export default BuildingForm;
