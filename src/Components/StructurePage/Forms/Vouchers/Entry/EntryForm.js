import { useCallback, useEffect, useMemo, useState } from "react";
import { EntryHead } from "./EntryHead";
import { EntryFooter } from "./EntryFooter";
import BlockPaper from "Components/Global/BlockPaper";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { useParams, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { ApiActions } from "Helpers/Lib/api";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import GET_UPDATE_DATE from "Helpers/Lib/operations/global-read-update";
import useFetch from "Hooks/useFetch";
import { toast } from "react-toastify";
import { GET_NEW_ENTRY_GRID } from "Helpers/constants";
import { getAccountList } from "Helpers/Lib/operations/global-read";

const EntryForm = ({ oldValue, onlyView }) => {
  const params = useParams();
  const { data, loading, error } = useFetch("entry_main_data", {
    limit: 1,
    sorts: [{ column: "number", order: "DESC", nulls: "last" }],
  });
  const methods = useForm();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [number, setNumber] = useState(0);
  const [maxLength, setMaxLength] = useState(0);
  const [CACHE_LIST, setCACHE_LIST] = useState({});

  const {
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = methods;

  const getEntryValues = async (num) => {
    console.log(number);
    const col = {
      number,
      credit: 0,
      currency_id: "",
      currency_val: 0,
      debit: 0,
      difference: 0,
      note: "",
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
    if (!params?.number) return;
    setValue("number", params?.number);
    getEntryValues(params?.number);
    setNumber(params?.number);
  }, [params?.number]);
console.log(number, maxLength, '---');
  useEffect(() => {
    if (loading) return;
    console.log(data, '=--');
    setMaxLength(+data?.at(0)?.number || 0);
  }, [loading]);

  useEffect(() => {
    if (oldValue) {
      reset(oldValue);
    }
  }, [oldValue]);

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
    let hash = {};
    for (const field of ["cost_center", "currency", "seller"]) {
      const response = await ApiActions.read(field);
      hash[field] = response?.result;
    }
    hash.account = await getAccountList();
    setCACHE_LIST(hash);
  };

  useEffect(() => {
    getRefTables();
  }, []);

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
    if (num > maxLength) {
      setRefresh((p) => !p);
    }
    setNumber(num);
  };

  const onClickAddNew = () => {
    navigate(`/vouchers/entries/${+maxLength + 1}`);
    setNumber(maxLength + 1);
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
        if(res?.success)
          setMaxLength((p) => +p + 1);
      }

      let entryId = maxLength < number ? res?.record?.id : value.id;

      insertIntoGrid(grid, entryId);
    } else {
      toast.error("The difference value must be equal 0");
    }
  };

  const insertIntoGrid = async (grid, itemId) => {
    for (const item of grid) {
      if (item?.id && item.account_id && item?.observe_account_id) {
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
        fullWidth={onlyView}
        bodyClassName={onlyView ? "!p-0" : ""}
        boxClassName="!shadow-none"
        containerClassName={onlyView ? "mb-0" : ""}
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
              rowsCount={
                maxLength < number && !onlyView ? 5 : watch("grid")?.length
              }
              CACHE_LIST={CACHE_LIST}
              onBlurNumbersField={onBlurNumbersField}
              increasable={onlyView ? false : true}
              onlyView={onlyView || watch("created_from_id")}
            />
          </div>
          <EntryFooter
            fields={fields}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
            isNewOne={+maxLength < number}
            number={number}
            maxLength={data?.at(0)?.number || 0}
            goTo={goTo}
            values={watch()}
            onlyView={onlyView}
            hideSubmit={watch("created_from_id")}
            onClickAddNew={onClickAddNew}
          />
        </form>
      </BlockPaper>
    </FormProvider>
  );
};

export default EntryForm;
