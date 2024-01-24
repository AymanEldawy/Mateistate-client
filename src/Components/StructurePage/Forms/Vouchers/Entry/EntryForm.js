import { useCallback, useEffect, useMemo, useState } from "react";
import { EntryHead } from "./EntryHead";
import { EntryFooter } from "./EntryFooter";
import BlockPaper from "Components/Global/BlockPaper";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { ApiActions } from "Helpers/Lib/api";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import GET_UPDATE_DATE from "Helpers/Lib/operations/global-read-update";
import { useNavigate } from "react-router-dom";
import useFetch from "Hooks/useFetch";
import { currency } from "Helpers/columns-structure";
import { toast } from "react-toastify";
import { insertIntoGrid } from "Helpers/Lib/operations/global-insert";
import { GET_NEW_ENTRY_GRID } from "Helpers/constants";
import { usePopupForm } from "Hooks/usePopupForm";
let CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const EntryForm = ({ oldValue, onlyView }) => {
  const params = useParams();
  const { refTable } = usePopupForm();
  const { data, loading, error } = useFetch("entry_main_data", {
    limit: 1,
    sorts: [{ column: "number", order: "DESC", nulls: "last" }],
  });
  const methods = useForm();
  const [number, setNumber] = useState(params?.number);
  const [isNewOne, setIsNewOne] = useState(false);

  const {
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = methods;

  const getEntryValues = async (num) => {
    const col = {
      number,
      credit: 0,
      currency_id: "",
      currency_val: 0,
      debit: 0,
      difference: 0,
      note: '',
      created_at: "",
      grid: GET_NEW_ENTRY_GRID(),
    };

    const res = await GET_UPDATE_DATE("entry", num);
    
    if (res?.id) {
      reset(res);
    } else {
      reset(col);
    }
  };

  useEffect(() => {
    if (!number) return;
    getEntryValues(number);
  }, [number]);

  useEffect(() => {
    if (oldValue) {
      reset(oldValue);
    }
  }, [oldValue]);

  useEffect(() => {
    if (loading) return;
    if (number > (data?.at(0)?.number || 0)) {
      setIsNewOne(true);
    } else {
      setIsNewOne(false);
    }
  }, [loading]);

  const fields = useMemo(() => {
    let forms = getFormByTableName("entry_main_data");
    let hash = {};
    for (const field of forms) {
      hash[field.name] = field;
    }
    return hash;
  }, []);

  const gridFields = useMemo(() => getFormByTableName("entry_grid_data"), []);

  const getRefTables = async () => {
    for (const field of [...gridFields]) {
      if (field.is_ref && !field?.hide_in_form) {
        const response = await ApiActions.read(field?.ref_table, {
          columns: ["id", field?.ref_name || "name"],
        });
        CACHE_LIST[field?.ref_table] = response?.result;

        for (const item of response?.result) {
          CACHE_LIST[item.id] = item.name || item.number || item.id;
        }
      }
    }
  };

  useEffect(() => {
    getRefTables();
  }, []);

  useEffect(() => {
    if (refTable?.isClosed) {
      reFetchRefTable(refTable?.table);
    }
  }, [refTable?.isClosed]);

  const reFetchRefTable = async (table) => {
    const response = await ApiActions.read(table);
    if (response?.length) {
      CACHE_LIST[table] = response?.result;
    }
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

  const onBlurNumbersField = (e) => {
    let name = e.target.name;
    if (name?.indexOf("debit") !== -1 || name?.indexOf("credit") !== -1) {
      calculateDifferences();
    }
  };

  const goTo = (num) => {
    if (num > (data?.at(0)?.number || 0)) {
      setIsNewOne(true);
      reset();
    } else {
      setIsNewOne(false);
    }
    setNumber(num);
  };

  const onSubmit = async (value) => {
    if (value.difference === 0) {
      let grid = value.grid;
      delete value.grid;
      let res = null;
      if (value.id) {
        res = await ApiActions.update("entry_main_data", {
          conditions: [{ type: "and", conditions: [["id", "=", value?.id]] }],
          updates: value,
        });
      } else {
        res = await ApiActions.insert("entry_main_data", {
          data: value,
        });
      }

      let entryId = isNewOne ? res?.record?.id : value.id;

      insertIntoGrid(grid, entryId);
    } else {
      toast.error("The difference value must be equal 0");
    }
  };

  const insertIntoGrid = async (grid, itemId) => {
    for (const item of grid) {
      if (item?.id && (item.account_id && item?.observe_account_id)) {
        ApiActions.update("entry_grid_data", {
          conditions: [{ type: "and", conditions: [["id", "=", item?.id]] }],
          updates: item,
        });
      } else {
        if (item.account_id && item?.observe_account_id) {
          ApiActions.insert("entry_grid_data", {
            data: { ...item, entry_main_data_id: itemId },
          });
        }
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <BlockPaper
        customTitle={
          <>
            {isNewOne ? (
              <span className="text-red-500 ltr:mr-2 rtl:ml-2 bg-red-100 px-2 py-1 rounded-md">
                {isNewOne ? "New" : ""}
              </span>
            ) : null}
            Entry {number || oldValue?.number}
          </>
        }
      >
        <form onSubmit={handleSubmit(onSubmit)} key={number || oldValue?.number} noValidate>
          <EntryHead
            fields={fields}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
            layout={"update"}
            values={watch()}
          />
          <div className="min-h-[150px]">
            <TableFields
              fields={gridFields}
              tab="grid"
              errors={errors}
              rowsCount={isNewOne ? 5 : watch("grid")?.length}
              getCachedList={getCachedList}
              onBlurNumbersField={onBlurNumbersField}
            />
          </div>
          <EntryFooter
            fields={fields}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
            isNewOne={isNewOne}
            number={number}
            maxLength={data?.at(0)?.number || 0}
            goTo={goTo}
            values={watch()}
            onlyView={onlyView}
          />
        </form>
      </BlockPaper>
    </FormProvider>
  );
};

export default EntryForm;
