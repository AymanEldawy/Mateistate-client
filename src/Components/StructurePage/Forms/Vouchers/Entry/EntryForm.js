import { useCallback, useEffect, useMemo, useState } from "react";
import { EntryHead } from "./EntryHead";
import { EntryFooter } from "./EntryFooter";
import BlockPaper from "Components/Global/BlockPaper";
import getFormByTableName from "Helpers/Forms/forms";
import { FormProvider, useForm } from "react-hook-form";
import { ApiActions } from "Helpers/Lib/api";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import GET_UPDATE_DATE from "Helpers/Lib/global-read-update";
import { toast } from "react-toastify";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import { CloseIcon } from "Components/Icons";
import { Button } from "Components/Global/Button";
import { FormStepPagination } from "../../../../Global/FormStepPagination";
import useListView from "Hooks/useListView";
import { getResetFields } from "Helpers/Lib/global-reset";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import Loading from "Components/Global/Loading";
import { ErrorText } from "Components/Global/ErrorText";
import useRefTable from "Hooks/useRefTables";

const EntryForm = ({ oldValue, onlyView, outerClose }) => {
  // const [number, setNumber] = useState(0)
  const name = "entry_main_data";
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
    setListOfNumbers,
    onDeleteItem,
  } = useListView({ name, ignoreList: !!onlyView });
  const { setVoucherInfo } = useVoucherEntriesView();
  const { CACHE_LIST } = useRefTable("entry_grid_data");
  const methods = useForm();
  const [refresh, setRefresh] = useState(false);
  const [gridErrors, setGridErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
    unregister,
  } = methods;

  const getEntryValues = async (num) => {
    const res = await GET_UPDATE_DATE("entry", num);
    if (res?.id) {
      reset(res);
    }
    setRefresh((p) => !p);
  };

  useEffect(() => {
    reset(getResetFields(name));
    if (number <= maxLength) {
      getEntryValues(listOfNumbers?.at(number - 1));
    }
  }, [number]);

  useEffect(() => {
    if (oldValue) {
      reset(oldValue);
    }
  }, [oldValue]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name?.indexOf(`grid.`) === -1) return;
      let subName = name?.split(".")?.at(-1);
      let row = name?.split(".")?.slice(0, 2)?.join(".");

      if (watch(`${row}.debit`) && watch(`${row}.credit`)) {
        if (subName === "debit") {
          setValue(`${row}.credit`, 0);
        }
        if (subName === "credit") {
          setValue(`${row}.debit`, 0);
        }
      }

      if (subName === "credit" || subName === "debit") {
        calculateDifferences();
      }
      if (subName === "account_id" && value) {
        validationAccounts();
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const fields = useMemo(() => {
    let forms = getFormByTableName(name);
    let hash = {};
    for (const field of forms) {
      hash[field.name] = field;
    }
    return hash;
  }, []);

  const gridFields = useMemo(() => getFormByTableName("entry_grid_data"), []);

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
  const calculateDifferences = useCallback(() => {
    let grid = watch("grid");
    let credit = 0;
    let debit = 0;
    for (const item of grid) {
      if (item.credit) {
        credit += +item?.credit;
      }
      if (item.debit) {
        debit += +item?.debit;
      }
    }
    setValue("debit", debit);
    setValue("credit", credit);
    setValue("difference", debit - credit);
  }, []);

  const validationAccounts = useCallback(() => {
    let grid = watch("grid");
    for (let i = 0; i < grid.length; i++) {
      let current = grid?.[i]?.account_id;
      let next = grid?.[i + 1]?.account_id;
      if (current && next) {
        if (current === next) {
          setGridErrors("The Accounts must be different");
          return;
        } else setGridErrors(``);
      }
    }
  }, []);

  const onClickAddNew = () => {
    setVoucherInfo({});
    setNumber(+maxLength + 1);
  };

  const onSubmit = async (value) => {
    if (value.difference !== 0) {
      toast.error("The Difference Amount must be equal 0");
      return;
    }
    setIsLoading(true);

    if (value.difference === 0) {
      let grid = value.grid;
      delete value.grid;
      let res = null;
      if (value.id) {
        res = await ApiActions.update(name, {
          conditions: [{ type: "and", conditions: [["id", "=", value?.id]] }],
          updates: value,
        });
      } else {
        res = await ApiActions.insert(name, {
          data: { ...value, number },
        });
        if (res?.success) {
          setMaxLength((p) => +p + 1);
          setListOfNumbers((prev) => [...prev, number]);
        }
      }

      let entryId = maxLength < number ? res?.record?.id : value.id;

      insertIntoGrid(grid, entryId);
    } else {
      toast.error("The difference value must be equal 0");
    }
    setIsLoading(false);
  };

  const insertIntoGrid = async (grid, itemId) => {
    for (const item of grid) {
      if (item?.id && item.account_id) {
        ApiActions.update("entry_grid_data", {
          conditions: [{ type: "and", conditions: [["id", "=", item?.id]] }],
          updates: item,
        });
      } else {
        if (item.account_id) {
          ApiActions.insert("entry_grid_data", {
            data: { ...item, entry_main_data_id: itemId },
          });
        }
      }
    }
  };


  return (
    <>
      {isLoading ? <Loading withBackdrop /> : null}
      <ConfirmModal
        onConfirm={onDelete}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <FormProvider {...methods}>
        <BlockPaper
          fullWidth={onlyView}
          bodyClassName={onlyView ? "!p-0" : ""}
          boxClassName="!shadow-none"
          containerClassName={onlyView ? "mb-0" : ""}
          layoutBodyClassName={onlyView ? "!my-0" : ""}
          subTitle={
            <>
              {outerClose ? (
                <button
                  onClick={outerClose}
                  className="h-9 w-9 rounded-full flex items-center justify-center bg-red-100 text-red-500"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              ) : null}
            </>
          }
          customTitle={
            <>
              {maxLength < number ? (
                <span className="text-red-500 ltr:mr-2 rtl:ml-2 bg-red-100 px-2 py-1 rounded-md">
                  {maxLength < number ? "New" : ""}
                </span>
              ) : null}
              Entry {number || oldValue?.number}
            </>
          }
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            key={number || oldValue?.number}
            noValidate
          >
            <div
              className={
                watch("is_deleted")
                  ? "filter blur-sm grayscale pointer-events-none"
                  : ""
              }
            >
              <EntryHead
                fields={fields}
                errors={errors}
                CACHE_LIST={CACHE_LIST}
                layout={"update"}
                values={watch()}
                number={number}
                isNewOne={+maxLength < number}
              />

              <div
                className={`min-h-[150px] mt-4 ${
                  gridErrors ? "border border-red-500" : ""
                }`}
              >
                {gridErrors ? (
                  <ErrorText containerClassName="-mb-4 -mt-[1px] rounded-none">
                    {gridErrors}
                  </ErrorText>
                ) : null}
                <TableFields
                  key={number}
                  fields={gridFields}
                  tab="grid"
                  errors={errors}
                  withPortal
                  CACHE_LIST={CACHE_LIST}
                  increasable={onlyView || watch("created_from") ? false : true}
                  onlyView={onlyView || watch("created_from_id")}
                  rowsCount={
                    maxLength < number && !onlyView ? 5 : watch("grid")?.length
                  }
                />
              </div>

              <EntryFooter
                fields={fields}
                errors={errors}
                CACHE_LIST={CACHE_LIST}
                number={number}
                maxLength={maxLength}
                goTo={goToNumber}
                values={watch()}
                onlyView={onlyView}
                hideSubmit={watch("created_from_id")}
              />
            </div>
            <div className="flex items-center mt-4 border-t pt-2 justify-between gap-4">
              {onlyView ? null : (
                <FormStepPagination
                  number={number}
                  goTo={goToNumber}
                  maxLength={maxLength}
                  isNewOne={+maxLength < number}
                  onClickAddNew={onClickAddNew}
                />
              )}
              {watch("created_from_id") || onlyView ? null : (
                <Button
                  title="Submit"
                  disabled={
                    watch("difference") !== 0 ||
                    watch("grid")?.length < 2 ||
                    (watch("debit") === 0 && watch("credit") === 0)
                  }
                />
              )}
            </div>
          </form>
        </BlockPaper>
      </FormProvider>
    </>
  );
};

export default EntryForm;
