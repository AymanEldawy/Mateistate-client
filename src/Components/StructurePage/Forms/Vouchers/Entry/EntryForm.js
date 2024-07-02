import { useCallback, useEffect, useMemo, useState } from "react";
import { EntryHead } from "./EntryHead";
import { EntryFooter } from "./EntryFooter";
import getFormByTableName from "Helpers/Forms/forms";
import { useForm } from "react-hook-form";
import { ApiActions } from "Helpers/Lib/api";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import GET_UPDATE_DATE from "Helpers/Lib/global-read-update";
import { toast } from "react-toastify";
import { ErrorText } from "Components/Global/ErrorText";
import useRefTable from "Hooks/useRefTables";
import FormWrapperLayout from "../../FormWrapperLayout/FormWrapperLayout";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const EntryForm = ({ oldValue, onlyView, outerClose }) => {
  // const [number, setNumber] = useState(0)
  const name = "entry_main_data";
  const params = useParams();
  const id = params?.id;
  const { CACHE_LIST } = useRefTable("entry_grid_data");
  const methods = useForm();
  const [gridErrors, setGridErrors] = useState(null);

  const {
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = methods;

  const queryClientEntry = useQuery({
    queryKey: [name, id],
    queryFn: async () => {
      const res = await GET_UPDATE_DATE("entry", id);
      if (res?.id) {
        reset(res);
      }
    },
  });

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
        res = await ApiActions.update(name, {
          conditions: [{ type: "and", conditions: [["id", "=", value?.id]] }],
          updates: value,
        });
      } else {
        res = await ApiActions.insert(name, {
          data: { ...value },
        });
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
    <FormWrapperLayout
      popupView={onlyView}
      name="Entry"
      onSubmit={onSubmit}
      methods={methods}
      itemId={watch("id")}
      itemNumber={watch("number")}
      isLoading={queryClientEntry?.isLoading}
      onClose={outerClose}
      tableName={name}
      // hidePaginationBar={true}
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
          // number={number}
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
            key={id}
            fields={gridFields}
            tab="grid"
            errors={errors}
            withPortal
            CACHE_LIST={CACHE_LIST}
            increasable={onlyView || watch("created_from") ? false : true}
            onlyView={onlyView || watch("created_from_id")}
            rowsCount={
              !id && !onlyView ? 5 : watch("grid")?.length
            }
          />
        </div>

        <EntryFooter
          fields={fields}
          errors={errors}
          CACHE_LIST={CACHE_LIST}
          // number={number}
          // maxLength={maxLength}
          // goTo={goToNumber}
          values={watch()}
          onlyView={onlyView}
          hideSubmit={watch("created_from_id")}
        />
      </div>
    </FormWrapperLayout>
  );
};

export default EntryForm;
