import { useCallback, useEffect, useMemo, useState } from "react";
import { VoucherHead } from "./VoucherHead";
import { VoucherFooter } from "./VoucherFooter";
import BlockPaper from "Components/Global/BlockPaper";
import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { ApiActions } from "Helpers/Lib/api";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { toast } from "react-toastify";
import GET_UPDATE_DATE from "Helpers/Lib/operations/global-read-update";
import { Button } from "Components/Global/Button";
import { VoucherStepsButton } from "./VoucherStepsButton";
import useFetch from "Hooks/useFetch";
import { GET_NEW_VOUCHER_ENTRY_GRID } from "Helpers/constants";
import { usePopupForm } from "Hooks/usePopupForm";
import {
  generateEntryFromVoucher,
  insertIntoGrid
} from "Helpers/Lib/operations/vouchers-insert";

let CACHE_LIST = {};
let CACHE_ROW_VALUE = {};

const VoucherForm = () => {
  const { refTable } = usePopupForm();
  const params = useParams();
  const { name, type } = params;
  const methods = useForm();
  const { data, loading, error } = useFetch("voucher_main_data", {
    conditions: [{ type: "and", conditions: [["voucher_type", "=", +type]] }],
    limit: 1,
    sorts: [{ column: "number", order: "DESC", nulls: "last" }],
  });
  const [refresh, setRefresh] = useState(false);
  const [number, setNumber] = useState(params?.number);
  const [isNewOne, setIsNewOne] = useState(false);
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const [gridFields, setGridFields] = useState([]);

  const {
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isDirty },
  } = methods;

  const fields = useMemo(() => {
    let forms = getFormByTableName("voucher_main_data");
    let hash = {};
    for (const field of forms) {
      hash[field.name] = field;
    }
    return hash;
  }, []);

  useEffect(() => {
    const fields = getFormByTableName("voucher_grid_data");
    let newFields = [];
    for (const field of fields) {
      switch (field?.name) {
        case "cost_center_id":
          if (PATTERN_SETTINGS?.required_cost_center) {
            field.required = true;
            newFields.push(field);
          }
          break;
        case "note":
          if (PATTERN_SETTINGS?.required_statement) {
            field.required = true;
            newFields.push(field);
          }
          break;
        case "debit":
          if (PATTERN_SETTINGS?.show_debit_field) {
            field.required = true;
            field.label = PATTERN_SETTINGS?.debit_field_label;
            newFields.push(field);
          }
          break;
        case "credit":
          if (PATTERN_SETTINGS?.show_credit_field) {
            field.required = true;
            field.label = PATTERN_SETTINGS?.credit_field_label;
            newFields.push(field);
          }
          break;

        default:
          newFields.push(field);
          break;
      }
    }
    setGridFields(newFields);
  }, [PATTERN_SETTINGS, type]);

  const getEntryValues = async (num) => {
    const col = {
      number,
      voucher_type: +type,
      grid: GET_NEW_VOUCHER_ENTRY_GRID(),
    };

    const res = await GET_UPDATE_DATE("voucher", num, {
      voucherType: +type,
    });

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
    if (loading) return;
    if (number > (data?.at(0)?.number || 0)) {
      setIsNewOne(true);
    }
  }, [loading, number, data]);

  useEffect(() => {
    const getVoucherPattern = async () => {
      const response = await ApiActions.read("voucher_pattern", {
        conditions: [{ type: "and", conditions: [["code", "=", type]] }],
      });
      setPATTERN_SETTINGS(response?.result?.at(0));
    };
    getVoucherPattern();
  }, [type]);

  useEffect(() => {
    if (refTable?.isClosed) {
      reFetchRefTable(refTable?.table);
    }
  }, [refTable?.isClosed]);

  const reFetchRefTable = async (table) => {
    const response = await ApiActions.read(table);
    if (response?.result?.length) {
      CACHE_LIST[table] = response?.result;
      setRefresh((p) => !p);
    }
  };

  useEffect(() => {
    getRefTables();
  }, [name, type]);

  const getRefTables = async () => {
    for (const field of [...gridFields, fields.seller_id]) {
      if (field.is_ref) {
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

  const goTo = (num) => {
    if (num > (data?.at(0)?.number || 0)) {
      setIsNewOne(true);
      reset();
    } else {
      setIsNewOne(false);
    }
    setNumber(num);
  };

  const calculateAmount = useCallback((row, val, column) => {
    let prevValue = watch(column);
    let newValue = prevValue;
    let value = parseInt(val);
    if (!value) return;

    if (CACHE_ROW_VALUE?.[row]) {
      newValue -= CACHE_ROW_VALUE?.[row];
      newValue += value;
    } else {
      newValue += value;
    }

    CACHE_ROW_VALUE[row] = value;
    setValue(column, newValue);
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!type) return;
      if (name?.indexOf("grid.") === -1) return;
      let currentVal = watch(name);
      let nameSplit = name?.split(".");
      let row = nameSplit?.[1];
      let columnName = nameSplit?.[2];

      if (columnName === "credit" || columnName === "debit")
        calculateAmount(row, currentVal, columnName);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (value) => {
    let grid = watch("grid");
    delete value.grid;
    let values = {};

    let res = null;

    delete value.gen_entries;

    if (!isNewOne) {
      res = await ApiActions.update("voucher_main_data", {
        conditions: [{ type: "and", conditions: [["id", "=", params?.id]] }],
        updates: value,
      });
    } else {
      res = await ApiActions.insert("voucher_main_data", {
        data: value,
      });

      if (res?.status) {
        let itemId = res?.result?.at(0)?.id;
        insertIntoGrid({
          grid,
          itemId,
          tableName: "voucher_main_data",
          gridTableName: "voucher_grid_data",
          itemSearchName: "voucher_main_data_id",
          should_update: !isNewOne,
        });

        if (PATTERN_SETTINGS?.auto_gen_entries) {
          // Generate A Constraint
          generateEntryFromVoucher({
            values,
            created_from: `voucher-${name}`,
            grid,
            created_from_id: itemId,
            should_update: !isNewOne,
          });
        }
      }
    }

    if (res?.success) {
      toast.success(
        !isNewOne
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );
    } else {
      toast.error("Failed to add new item in " + name);
    }
  };

  return (
    <FormProvider {...methods}>
      <BlockPaper
        customTitle={
          <span className="capitalize">
            {isNewOne ? (
              <span className="text-red-500 ltr:mr-2 rtl:ml-2 bg-red-100 px-2 py-1 rounded-md">
                {isNewOne ? "New" : ""}
              </span>
            ) : null}
            {name?.replace("-", " ")} {number}
          </span>
        }
      >
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <VoucherHead
            fields={fields}
            name={name}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
            PATTERN_SETTINGS={PATTERN_SETTINGS}
          />
          <TableFields
            fields={gridFields}
            tab="grid"
            errors={errors}
            rowsCount={10}
            CACHE_LIST={CACHE_LIST}
            rowStyles={(index) => {
              if (PATTERN_SETTINGS?.even_table_color && index % 2 === 0) {
                return { background: PATTERN_SETTINGS?.even_table_color };
              } else if (PATTERN_SETTINGS?.odd_table_color && index % 2 !== 0) {
                return { background: PATTERN_SETTINGS?.odd_table_color };
              }
            }}
          />
          <VoucherFooter
            fields={fields}
            name={name}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
            isNewOne={isNewOne}
            PATTERN_SETTINGS={PATTERN_SETTINGS}
          />
          <div className="flex items-center mt-4 border-t dark:border-dark-border pt-2 justify-between">
            <VoucherStepsButton
              number={number}
              goTo={goTo}
              maxLength={data?.at(0)?.number || 0}
              isNewOne={isNewOne}
            />
            <Button title="Submit" />
          </div>
        </form>
      </BlockPaper>
    </FormProvider>
  );
};

export default VoucherForm;
