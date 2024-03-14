import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import useFormSteps from "Hooks/useFormSteps";

import { Fields } from "./Fields";
import INSERT_FUNCTION from "Helpers/Lib/global-insert";
import { FormProvider, useForm } from "react-hook-form";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import GET_UPDATE_DATE from "Helpers/Lib/global-read-update";
import { useParams } from "react-router-dom";
import { usePopupForm } from "Hooks/usePopupForm";
import BlockPaper from "Components/Global/BlockPaper";
import { FormStepPagination } from "../../../Global/FormStepPagination";
import useListView from "Hooks/useListView";
import {
  CONSTANT_COLUMNS_NAME,
  SHOULD_DELETE_COST_CENTER,
} from "Helpers/constants";
import { Button } from "Components/Global/Button";
import { getResetFields } from "Helpers/Lib/global-reset";
import { ApiActions } from "Helpers/Lib/api";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import Loading from "Components/Global/Loading";

const CACHE_DATA = {};

const FormSteps = ({
  name,
  onClose,
  refetchData,
  layout,
  allowTabs,
  setRecordResponse,
  oldValues = null,
}) => {
  const params = useParams();
  const {
    goTo,
    currentIndex,
    tab,
    formSettings,
    steps,
    fields,
    CACHE_LIST,
    tabNames,
    setCurrentIndex,
  } = useFormSteps({ name });
  const {
    goToNumber,
    isLayoutUpdate,
    listOfNumbers,
    number,
    setNumber,
    maxLength,
    setMaxLength,
    openConfirmation,
    setOpenConfirmation,
    listOfData,
    setListOfData,
    setListOfNumbers,
    onDeleteItem,
  } = useListView({ name });
  const { appendNewRecord } = usePopupForm();

  const methods = useForm({
    defaultValues: {},
  });
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const {
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    reset,
    setValue,
  } = methods;

  useEffect(() => {
    if (layout !== "update" && oldValues) {
      reset({ ...watch(), ...oldValues });
    }
  }, [oldValues]);

  const fetchData = async (data) => {
    const res = await GET_UPDATE_DATE(name, data?.id);
    reset(res);
  };

  useEffect(() => {
    if (number <= maxLength) {
      fetchData(listOfData?.[listOfNumbers?.at(number - 1)]);
    }
  }, [number, maxLength]);

  const onDelete = async () => {
    let data = watch(tabNames?.[0]);

    let res = await ApiActions.remove(name, {
      conditions: [
        {
          type: "and",
          conditions: [["id", "=", data?.id]],
        },
      ],
    });
    if (res?.success) {
      onDeleteItem(data?.number);
      if (SHOULD_DELETE_COST_CENTER?.[tabNames[0]]) {
        await ApiActions.remove("cost_center", {
          conditions: [
            { type: "and", conditions: [["id", "=", data?.cost_center_id]] },
          ],
        });
      }
    }
    setOpenConfirmation(false);
  };

  const onClickAddNew = async () => {
    setNumber(+maxLength + 1);
    setCurrentIndex(0);
    reset(getResetFields(name));
    setRefresh((p) => !p);
  };

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;

    setIsLoading(true);
    const getTheFunInsert = INSERT_FUNCTION[name];
    const res = await getTheFunInsert({ data: value });

    if (!!setRecordResponse) {
      setRecordResponse({ table: name, response: res });
    }

    if (res?.success) {
      toast.success(
        `Successfully ${isLayoutUpdate ? "Updated" : "Insert"} item in ` + name
      );

      if (!isLayoutUpdate) {
        await appendNewRecord(res);
        setMaxLength((prev) => +prev + 1);
      }
    } else {
      toast.error(res?.error?.detail);

    }
    if (!!onClose) onClose();
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? <Loading withBackdrop /> : null}
      <ConfirmModal
        onConfirm={onDelete}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <BlockPaper
      // containerClassName={popupView ? "z-[102] p-0" : null}
      // bodyClassName={popupView ? "!p-0" : null}
      // boxClassName={popupView ? "!shadow-none !p-0" : null}
      // layoutBodyClassName={popupView ? "!my-0" : null}
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate key={refresh}>
            <FormHeadingTitleSteps
              steps={steps}
              activeStage={currentIndex}
              goTo={goTo}
              onClose={onClose}
              customName={
                <span className="capitalize">
                  {maxLength < number ? (
                    <span className="text-red-500 ltr:mr-2 rtl:ml-2 bg-red-100 px-2 py-1 rounded-md">
                      New
                    </span>
                  ) : null}
                  {name} number {number}
                </span>
              }
            />
            <div className="h-5" />
            {fields?.length ? (
              <>
                {formSettings?.formType === "grid" ? (
                  <div key={steps?.[currentIndex]}>
                    <TableFields
                      tab={tab}
                      values={watch()?.[tab]}
                      fields={fields}
                      CACHE_LIST={!!CACHE_LIST ? CACHE_LIST : undefined}
                    />
                  </div>
                ) : (
                  <Fields
                    tab={name === "user" ? null : tab}
                    fields={fields}
                    values={watch()?.[tab]}
                    errors={errors}
                    CACHE_LIST={CACHE_LIST}
                  />
                )}
              </>
            ) : null}
            <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
              <FormStepPagination
                number={number}
                goTo={goToNumber}
                // maxLength={maxLength}
                maxLength={maxLength}
                isNewOne={number > maxLength}
                setNumber={setNumber}
                onClickDelete={() => setOpenConfirmation(true)}
                isArchived={watch(CONSTANT_COLUMNS_NAME.is_archived)}
                isDeleted={watch(CONSTANT_COLUMNS_NAME.is_deleted)}
                allowActions={watch(`${tabNames?.[0]}.id`)}
                onClickAddNew={onClickAddNew}
              />
              <Button
                title={maxLength >= number ? "Modify" : "Submit"}
                classes="ltr:ml-auto rtl:mr-auto"
                disabled={!isDirty}
              />
            </div>
          </form>
        </FormProvider>
      </BlockPaper>
    </>
  );
};

export default FormSteps;
