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
import { CREATED_FROM, GET_NEW_VOUCHER_ENTRY_GRID } from "Helpers/constants";
import { usePopupForm } from "Hooks/usePopupForm";
import { generateEntryFromReceiptVoucher } from "Helpers/Lib/operations/vouchers-actions";

let CACHE_LIST = {};
let CACHE_ROW_VALUE = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const PATTERN_SETTINGS = {
  auto_gen_entries: true,
  auto_transfer_entry: true,
  code: 32,
  debit_field_label: "Debit test name",
  default_account_id: "c85a8ba7-c9fa-493e-ad81-7d2898f3b1f5",
  gen_entries: true,
  name: "Receipts",
  required_cost_center: true,
  required_statement: true,
  show_contract_cost_center: true,
  show_contract_field: true,
  show_cost_center: true,
  show_currency: true,
  show_debit_field: true,
  show_note: true,
};

const VoucherForm = ({ layout }) => {
  const { refTable } = usePopupForm();
  const params = useParams();
  const { name, type } = params;
  const { data, loading, error } = useFetch("voucher_main_data", {
    conditions: [{ type: "and", conditions: [["voucher_type", "=", +type]] }],
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

  const gridFields = useMemo(() => {
    const fields = getFormByTableName("voucher_grid_data");
    let typeField = +type !== 2 ? "debit" : "credit";
    return fields?.filter(
      (field) =>
        field.name !== "voucher_main_data_id" && field?.name !== typeField
    );
  }, [type]);

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
      console.log("reset");
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
  }, [loading]);

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

  useEffect(() => {
    getRefTables();
  }, [name, type]);

  const getRefTables = async () => {
    for (const field of [...gridFields, fields.seller_id]) {
      console.log("🚀 ~ getRefTables ~ field:", field);
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

  console.log(watch());

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

    if (layout === "update") {
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
          layout: layout,
          gridTableName: "voucher_grid_data",
          grid,
          itemId,
        });

        if (PATTERN_SETTINGS?.auto_gen_entries) {
          // Generate A Constraint
          generateEntryFromReceiptVoucher({
            values,
            created_from:
              +type === 1 ? CREATED_FROM?.receipt : CREATED_FROM?.payment,
            grid,
            created_from_id: itemId,
          });
        }
      }
    }

    if (res?.success) {
      toast.success(
        layout === "update"
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );
    } else {
      toast.error("Failed to add new item in " + name);
    }
  };

  const insertIntoGrid = async (grid, itemId) => {
    for (const item of grid) {
      if (item?.id && item.account_id) {
        ApiActions.update("voucher_grid_data", {
          conditions: [{ type: "and", conditions: [["id", "=", item?.id]] }],
          updates: item,
        });
      } else {
        if (item.account_id) {
          ApiActions.insert("voucher_grid_data", {
            data: { ...item, voucher_main_data_id: itemId },
          });
        }
      }
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
            isPaymentVoucher={+type === 2}
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
            getCachedList={getCachedList}
          />
          <VoucherFooter
            fields={fields}
            name={name}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
            isNewOne={isNewOne}
            PATTERN_SETTINGS={PATTERN_SETTINGS}
          />
          <div className="flex items-center mt-4 border-t pt-2 justify-between">
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
