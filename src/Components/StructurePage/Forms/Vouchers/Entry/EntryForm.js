import { useCallback, useEffect, useMemo, useState } from "react";
import { EntryHead } from "./EntryHead";
import { EntryFooter } from "./EntryFooter";
import getFormByTableName from "Helpers/Forms/forms";
import { useForm } from "react-hook-form";
import TableFields from "Components/TableComponents/TableFields";
import GET_UPDATE_DATE from "Helpers/Lib/global-read-update";
import { toast } from "react-toastify";
import { ErrorText } from "Components/Global/ErrorText";
import useRefTable from "Hooks/useRefTables";
import FormWrapperLayout from "../../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useCurd from "Hooks/useCurd";
import FormLayout from "../../FormWrapperLayout/FormLayout";
import useFormPagination from "Hooks/useFormPagination";

const EntryForm = ({ oldValue, onlyView, outerClose, onClose, number }) => {
  // const [number, setNumber] = useState(0)
  const name = "entry_main_data";
  const params = useParams();
  const { set, insert } = useCurd();
  const id = params?.id;
  const methods = useForm();
  const [gridErrors, setGridErrors] = useState(null);
  const formPagination = useFormPagination({ name, number })

  const {
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = methods;

  const queryClientEntry = useQuery({
    queryKey: [name, formPagination?.currentId],
    queryFn: async () => {
      const res = await GET_UPDATE_DATE("entry", formPagination?.currentId);
      if (res?.id) {
        reset(res);
      }
    },
    enabled: !!formPagination?.currentId,
  });

  useEffect(() => {
    if (oldValue) {
      reset(oldValue);
    }
  }, [oldValue]);

  useEffect(() => {
    if (formPagination?.currentNumber > formPagination.lastNumber) {
      setValue('number', formPagination?.currentNumber)
    }
  }, [formPagination?.currentNumber])

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

  const onSubmit = async (value) => {
    if (value.difference !== 0) {
      toast.error("The Difference Amount must be equal 0");
      return;
    }

    if (value.difference === 0) {
      let grid = value.grid;
      delete value.grid;
      let res = null;
      if (value.id) {
        res = await set(name, value, value?.id);
      } else {
        res = await insert(name, { ...value });
        if (res?.success) {
        }
      }

      let entryId = id || res?.record?.id;

      insertIntoGrid(grid, entryId);
    } else {
      toast.error("The difference value must be equal 0");
    }
  };

  const insertIntoGrid = async (grid, itemId) => {
    for (const item of grid) {
      if (item?.id && item.account_id) {
        set("entry_grid_data", item, item?.id);
      } else {
        if (item.account_id) {
          insert("entry_grid_data", { ...item, entry_main_data_id: itemId });
        }
      }
    }
  };  

  return (
    <FormLayout
      popupView={onlyView}
      name="Entry"
      onSubmit={onSubmit}
      methods={methods}
      isLoading={queryClientEntry?.isLoading}
      onClose={onClose}
      tableName={name}
      formPagination={formPagination}
    // hidePaginationBar={true}
    >
      <div
        className={
          `pb-10 ${watch("is_deleted")
            ? "filter blur-sm grayscale pointer-events-none"
            : ""
          }`
        }
      >
        <EntryHead
          fields={fields}
          errors={errors}
          layout={"update"}
          values={watch()}
          onlyView={onlyView || watch("created_from_id")}
        // number={number}
        />

        <div
          className={`min-h-[150px] mt-4 ${gridErrors ? "border border-red-500" : ""
            }`}
        >
          {gridErrors ? (
            <ErrorText containerClassName="-mb-4 -mt-[1px] rounded-none">
              {gridErrors}
            </ErrorText>
          ) : null}
          <TableFields
            key={id}
            fields={gridFields}
            tab="grid"
            errors={errors}
            withPortal
            increasable={onlyView || watch("created_from") ? false : true}
            onlyView={onlyView || watch("created_from_id")}
            rowsCount={watch("created_from_id") ? watch("grid")?.length : 5}
          />
        </div>

        <EntryFooter
          fields={fields}
          errors={errors}
          // number={number}
          // maxLength={maxLength}
          // goTo={goToNumber}
          values={watch()}
          onlyView={onlyView}
          hideSubmit={watch("created_from_id")}
        />
      </div>
    </FormLayout>
  );
};

export default EntryForm;
