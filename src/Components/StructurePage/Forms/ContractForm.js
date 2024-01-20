import BlockPaper from "Components/Global/BlockPaper";
import { ButtonsStepsGroup } from "Components/Global/ButtonsStepsGroup";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import Installment from "Components/StructurePage/Forms/InstallmentForm";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import {
  ACTIONS,
  BUILDING_STEPS,
  PARKING_STEPS_CONTRACT,
  SELECT_LISTS,
  getAssetType,
} from "Helpers/constants";
import useFetch from "Hooks/useFetch";
import useFormSteps from "Hooks/useFormSteps";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

async function filterFlats(CACHE, buildingId, name) {
  let flatType = getAssetType(name);
  const response = await ApiActions.read(flatType, {
    conditions: [
      { type: "and", conditions: [["building_id", "=", buildingId]] },
    ],
  });

  if (response?.success) {
    CACHE[flatType] = response?.result;
  }
}

async function fetchAndMergeBuildingInfo(buildingId, setValue, firstTab) {
  const response = await ApiActions.read("building", {
    conditions: [{ type: "and", conditions: [["id", "=", buildingId]] }],
  });

  if (response?.success) {
    let data = response?.result?.at(0);
    setValue(`${firstTab}.lessor_id`, data?.lessor_id);
  }
}

async function fetchAndMergeAssetInfo(asset, assetId, setValue, firstTab) {
  let flatType = getAssetType(asset);
  const response = await ApiActions.read(flatType, {
    conditions: [{ type: "and", conditions: [["id", "=", assetId]] }],
  });

  if (response?.success) {
    let data = response?.result?.at(0);
    setValue(`${firstTab}.description`, data?.description);
    setValue(`${firstTab}.property_area`, data?.property_type)
    setValue(`${firstTab}.lawsuit`, data?.has_lawsuit)
  }
}

const ContractForm = () => {
  const params = useParams();
  const name = params?.name;
  const type = params?.type;
  const method = useForm();
  const [loading, setLoading] = useState(false);
  const contractAssetsType = name?.split("_").at(0);
  const [openInstallmentForm, setOpenInstallmentForm] = useState(false);
  const {
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = method;
  const {
    next,
    back,
    isLast,
    isFirst,
    currentIndex,
    tab,
    formSettings,
    steps,
    fields,
    firstTab,
    getCachedList,
    CACHE_LIST,
  } = useFormSteps({ name });
  console.log("🚀 ~ ContractForm ~ steps:", steps, tab);

  const buildingIdPathInData = `${firstTab}.building_id`;
  const assetType = name?.split("_")?.at(0);
  const assetTypeIdPathInData = `${firstTab}.${assetType}_id`;

  const globalButtonsActions = (action) => {
    switch (action) {
      case ACTIONS.OPEN_INSTALLMENT_FORM:
        setOpenInstallmentForm(true);
        return;

      default:
        return;
    }
  };

  // Change building id ?
  // 1. filter flats or assets
  // 2. fetch building information and merge it with the data

  useEffect(() => {
    let buildingId = watch(buildingIdPathInData);
    if (!buildingId) return;
    filterFlats(CACHE_LIST, buildingId, assetType);
    fetchAndMergeBuildingInfo(buildingId, setValue, firstTab);
  }, [watch(buildingIdPathInData)]);

  // Change asset type id ?
  // 2. fetch asset information and merge it with the data
  useEffect(() => {
    if (watch(assetTypeIdPathInData)) {
      fetchAndMergeAssetInfo(
        assetType,
        watch(assetTypeIdPathInData),
        setValue,
        firstTab
      );
    }
  }, [watch(assetTypeIdPathInData)]);

  // Handel Submit
  const onSubmit = async (value) => {
    next();
    if (!isLast()) return;
    setLoading(true);

    const getTheFunInsert = INSERT_FUNCTION[name];
    const res = await getTheFunInsert({ data: { value } });

    if (res?.success) {
      toast.success("Successfully added item in " + name);

      //@installment ->  Generate installment
      //@entries ->  Generate installment
      //@entries ->  Generate installment
    } else {
      toast.error("Failed to add new item in " + name);
    }
    setLoading(false);
  };

  console.log(watch(), "contracts");

  return (
    <>
      <div key={name}>
        <FormProvider {...method}>
          {openInstallmentForm ? (
            <Installment
              getCachedList={getCachedList}
              errors={errors}
              onClose={() => setOpenInstallmentForm(false)}
            />
          ) : null}
          <BlockPaper>
            <FormHeadingTitleSteps
              name={name}
              steps={steps}
              // changeTab={goTo}
              activeStage={currentIndex}
            />
            <div className="h-5" />
            <form onSubmit={handleSubmit(onSubmit)}>
              {formSettings?.formType === "grid" ? (
                <div key={steps?.[currentIndex]}>
                  <TableFields
                    tab={tab}
                    errors={errors}
                    formSettings={formSettings}
                    getCachedList={!!getCachedList ? getCachedList : undefined}
                    fields={fields}
                    values={watch()?.[tab]}
                  />
                </div>
              ) : (
                <Fields
                  fields={fields}
                  tab={tab}
                  values={watch()?.[tab]}
                  errors={errors}
                  getCachedList={getCachedList}
                  globalButtonsActions={globalButtonsActions}
                />
              )}
              <ButtonsStepsGroup
                isLast={isLast}
                isFirst={isFirst}
                loading={loading}
                steps={steps}
                back={back}
              />
            </form>
          </BlockPaper>
        </FormProvider>
      </div>
    </>
  );
};

export default ContractForm;
