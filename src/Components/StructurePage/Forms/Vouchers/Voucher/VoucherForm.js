import { useCallback, useEffect, useMemo, useState } from "react";
import { VoucherHead } from "./VoucherHead";
import { VoucherFooter } from "./VoucherFooter";
import getFormByTableName from "Helpers/Forms/forms";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ApiActions } from "Helpers/Lib/api";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { toast } from "react-toastify";
import GET_UPDATE_DATE from "Helpers/Lib/global-read-update";
import { METHODS } from "Helpers/constants";
import {
  deleteEntry,
  generateEntryFromVoucher,
  insertIntoGrid,
} from "Helpers/Lib/vouchers-insert";
import { CREATED_FROM_VOUCHER_CODE } from "Helpers/GENERATE_STARTING_DATA";
import useRefTable from "Hooks/useRefTables";
import { useQuery } from "@tanstack/react-query";
import FormWrapperLayout from "../../FormWrapperLayout/FormWrapperLayout";
import useCurd from "Hooks/useCurd";

let CACHE_ROW_VALUE = {};

const VoucherForm = ({
  voucherName,
  voucherType,
  popupView,
  setRecordResponse,
  oldValues = null,
  outerClose,
}) => {
  const params = useParams();
  const id = params?.id;
  const name = params?.name || voucherName;
  const type = params?.type || voucherType;
  const methods = useForm();
  const { set, insert } = useCurd();
  const { CACHE_LIST } = useRefTable("voucher_grid_data");
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const [gridFields, setGridFields] = useState([]);

  const {
    watch,
    reset,
    setValue,
    formState: { errors, isDirty },
  } = methods;

  const queryClientNewVoucher = useQuery({
    queryKey: ["voucher_main_data", id, type],
    queryFn: async () => {
      const res = await GET_UPDATE_DATE("voucher", id, {
        voucherType: +type,
      });
      reset(res);
    },
  });

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

  useEffect(() => {
    if (oldValues) {
      reset(oldValues);
    }
  }, [oldValues?.number]);

  useEffect(() => {
    const getVoucherPattern = async () => {
      const response = await ApiActions.read("voucher_pattern", {
        conditions: [{ type: "and", conditions: [["code", "=", type]] }],
      });
      setPATTERN_SETTINGS(response?.result?.at(0));
    };
    getVoucherPattern();
  }, [type]);

  const calculateAmount = useCallback((row, val, column) => {
    let value = 0;
    let amountColumnName =
      column === "credit" ? "credit_amount" : "debit_amount";
    let totalColumnName = column === "credit" ? "debit_total" : "credit_total";

    if (CACHE_ROW_VALUE?.[row]) {
      let oldValue = CACHE_ROW_VALUE?.[row];
      let subValue = watch(amountColumnName) - oldValue;
      value = +val + subValue;
    } else {
      value = watch(amountColumnName) ? +val + +watch(amountColumnName) : +val;
    }
    CACHE_ROW_VALUE[row] = +val;

    setValue(amountColumnName, value);
    setValue(totalColumnName, value);
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!type) return;
      if (name?.indexOf("grid.") === -1) return;
      let currentVal = watch(name);
      let subName = name?.split(".")?.at(-1);
      let row = name?.split(".")?.[1];

      if (subName === "credit" || subName === "debit")
        calculateAmount(row, currentVal, subName);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async () => {
    if (!isDirty) return;

    let value = watch();
    let grid = watch("grid");
    delete value.grid;
    let values = {};
    let res = null;

    let itemId = value.id;

    if (value?.id) {
      res = await set("voucher_main_data", value, value?.id);
    } else {
      res = await insert("voucher_main_data", {
        ...value,
        voucher_type: +type,
      });
      itemId = res?.record.id;
    }

    if (res?.success) {
      insertIntoGrid({
        grid,
        itemId,
        tableName: "voucher_main_data",
        gridTableName: "voucher_grid_data",
        itemSearchName: "voucher_main_data_id",
        should_update: id,
      });

      if (!!setRecordResponse) {
        setRecordResponse({
          table: name,
          response: res,
          method: values?.id ? METHODS.UPDATE : METHODS.INSERT,
          grid,
          id: values?.id,
        });
      }

      if (PATTERN_SETTINGS?.auto_gen_entries || watch("gen_entries")) {
        // Generate A Constraint
        generateEntryFromVoucher({
          values: value,
          created_from: CREATED_FROM_VOUCHER_CODE,
          created_from_code: +type,
          grid,
          created_from_id: itemId,
          should_update: !id,
        });
      } else deleteEntry(itemId);
    }

    if (res?.success) {
      toast.success(
        id
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );
      queryClientNewVoucher?.refetch();
    } else {
      toast.error(res?.error?.detail);
    }
  };

  return (
    <FormWrapperLayout
      popupView={popupView}
      name={name}
      onSubmit={onSubmit}
      methods={methods}
      itemId={watch("id")}
      itemNumber={watch("number")}
      isLoading={queryClientNewVoucher?.isLoading}
      onClose={outerClose}
    >
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
        rowsCount={watch("grid")?.length || 1}
        CACHE_LIST={CACHE_LIST}
        withPortal
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
        isNewOne={!id}
        PATTERN_SETTINGS={PATTERN_SETTINGS}
      />
    </FormWrapperLayout>
  );
};

export default VoucherForm;
