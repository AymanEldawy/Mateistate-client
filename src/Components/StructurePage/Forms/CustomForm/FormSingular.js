import { ApiActions } from "Helpers/Lib/api";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { Fields } from "./Fields";
import { useEffect, useState } from "react";
import INSERT_FUNCTION from "../../../../Helpers/Lib/global-insert";
import useRefTable from "Hooks/useRefTables";
import { FormProvider, useForm } from "react-hook-form";
import BlockPaper from "Components/Global/BlockPaper";
import { toast } from "react-toastify";
import useListView from "Hooks/useListView";
import { usePopupForm } from "Hooks/usePopupForm";
import { getResetFields } from "Helpers/Lib/global-reset";
import { Button } from "Components/Global/Button";
import { FormStepPagination } from "../../../Global/FormStepPagination";
import { CONSTANT_COLUMNS_NAME } from "Helpers/constants";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import Loading from "Components/Global/Loading";
import { removeNullValues } from "Helpers/functions";

const FormSingular = ({ name, onClose, popupView }) => {
  const {
    goToNumber,
    isLayoutUpdate,
    listOfNumbers,
    number,
    setNumber,
    maxLength,
    setMaxLength,
    openConfirmation,
    listOfData,
    setOpenConfirmation,
    setListOfData,
    setListOfNumbers,
    onDeleteItem,
  } = useListView({ name });
  const { setRecordResponse, appendNewRecord } = usePopupForm();

  const methods = useForm({
    defaultValues: {},
  });

  const {
    reset,
    watch,
    setValue,
    errors,
    formState: { isDirty },
    handleSubmit,
  } = methods;
  const { fields, CACHE_LIST } = useRefTable(name);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (number <= maxLength) {
      reset(listOfData?.[listOfNumbers?.at(number - 1)]);
    }
  }, [number]);

  const onClickAddNew = () => {
    setNumber(+maxLength + 1);
    reset(getResetFields(name));
    setRefresh((p) => !p);
  };

  const onDelete = async () => {
    let [id, number] = watch(["id", "number"]);
    // let number =
    let res = await ApiActions.remove(name, {
      conditions: [
        {
          type: "and",
          conditions: [["id", "=", id]],
        },
      ],
    });
    if (res?.success) {
      onDeleteItem(number);
    }
    setOpenConfirmation(false);
  };

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty) return;
    setIsLoading(true);

    let values = removeNullValues(value);

    let res = null;

    if (isLayoutUpdate) {
      res = await ApiActions.update(name, {
        conditions: [{ type: "and", conditions: [["id", "=", watch("id")]] }],
        updates: values,
      });
    } else {
      if (INSERT_FUNCTION?.[name]) {
        const getTheFunInsert = INSERT_FUNCTION[name];
        res = await getTheFunInsert(values);
      } else {
        res = await ApiActions.insert(name, {
          data: values,
        });
      }
    }

    if (res?.success) {
      toast.success(
        isLayoutUpdate
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );

      if (!isLayoutUpdate) {
        let record = res?.record;
        setListOfData((prev) => ({
          ...prev,
          [record?.number]: record,
        }));
        setListOfNumbers((prev) => [...prev, record?.number]);
      }

      if (!!setRecordResponse) {
        setRecordResponse({ table: name, response: res });
      }

      if (!isLayoutUpdate) {
        setMaxLength((prev) => +prev + 1);
        await appendNewRecord(res);
        reset();
      }
    } else {
      toast.error(res?.error?.detail);
    }
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
        containerClassName={popupView ? "z-[102] p-0" : null}
        bodyClassName={popupView ? "!p-0" : null}
        boxClassName={popupView ? "!shadow-none !p-0" : null}
        layoutBodyClassName={popupView ? "!my-0" : null}
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate key={refresh}>
            <FormHeadingTitle
              onClose={onClose}
              customName={
                <span className="capitalize">
                  {maxLength < number ? (
                    <span className="text-red-500 ltr:mr-2 rtl:ml-2 bg-red-100 px-2 py-1 rounded-md">
                      New
                    </span>
                  ) : null}
                  {name?.replace(/_/g, " ")} number {number}
                </span>
              }
            />
            <Fields
              values={watch()}
              errors={errors}
              CACHE_LIST={CACHE_LIST}
              fields={fields}
            />
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
                allowActions={watch("id")}
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

export default FormSingular;
