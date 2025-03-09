import { useCallback, useEffect, useMemo, useState } from "react";
import { VoucherHead } from "./VoucherHead";
import { VoucherFooter } from "./VoucherFooter";
import getFormByTableName from "Helpers/Forms/forms";
import { useForm } from "react-hook-form";
import TableFields from "Components/TableComponents/TableFields";
import { toast } from "react-toastify";
import GET_UPDATE_DATE from "Helpers/Lib/global-read-update";
import { METHODS } from "Helpers/constants";
import {
  deleteEntry,
  generateEntryFromVoucher,
  insertIntoGrid,
} from "Helpers/Lib/vouchers-insert";
import { useQuery } from "@tanstack/react-query";
import useCurd from "Hooks/useCurd";
import FormLayout from "../../FormWrapperLayout/FormLayout";
import useFormPagination from "Hooks/useFormPagination";
import { CheckboxField } from "Components/StructurePage/CustomFields";
import { ViewEntry } from "Components/Global/ViewEntry";
import { CREATED_FROM_VOUCHER } from "Helpers/GENERATE_STARTING_DATA";

let CACHE_ROW_VALUE = {};

const mergePatternWithVoucherData = (pattern) => {
  let patternValues = {};

  if (pattern?.auto_gen_entries) {
    patternValues.gen_entries = true;
  }

  return patternValues;
};

const VoucherForm = ({
  voucherName,
  voucherType,
  popupView,
  updateVoucherGrid,
  oldValues = null,
  outerClose,
  number,
  onClose,
  code,
}) => {
  const name = "voucher_main_data";
  const type = code;
  const methods = useForm({
    defaultValues: {
      gen_entries: true
    }
  });
  const { set, insert, getOneBy, remove } = useCurd();
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const [gridFields, setGridFields] = useState([]);
  const [reCalculate, setReCalculate] = useState(false);

  const {
    watch,
    reset,
    setValue,
    formState: { errors, isDirty },
  } = methods;
  const formPagination = useFormPagination({
    name,
    number,
    code,
    reset
  });
  const id = formPagination?.currentId;
  
  const queryClientNewVoucher = useQuery({
    queryKey: ["voucher_main_data", id, type],
    queryFn: async () => {
      const res = await GET_UPDATE_DATE("voucher", id, {
        voucherType: +type,
      });
      reset(res);
    },
    enabled: !!id
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
    if (oldValues && !oldValues?.number) {
      reset(oldValues);
    }
  }, [oldValues?.number]);

  useEffect(() => {
    if (oldValues && PATTERN_SETTINGS && !formPagination?.currentId) {
      reset({
        ...mergePatternWithVoucherData(PATTERN_SETTINGS, watch, setValue),
        ...oldValues,
      });
    } else if (formPagination?.currentNumber > formPagination?.lastNumber) {
      reset({
        ...mergePatternWithVoucherData(PATTERN_SETTINGS, watch, setValue),
      });
    }
  }, [oldValues, PATTERN_SETTINGS?.id]);

  useEffect(() => {
    const getVoucherPattern = async () => {
      const response = await getOneBy("voucher_pattern", type, "code");
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

      if (subName === "credit" || subName === "debit") {
        // calculateAmount(row, currentVal, subName);
        setReCalculate(p => !p)
        console.log('called recred',);


      }

    });

    return () => subscription.unsubscribe();
  }, [watch]);

  useMemo(() => {
    let grid = watch("grid");
    if (grid?.length) {
      let debit = 0
      let credit = 0
      for (const item of grid) {
        credit += +item?.credit
        debit += +item?.debit

      }
      setValue('debit_amount', debit)
      setValue('credit_total', debit)
      setValue('credit_amount', credit)
      setValue('debit_total', credit)
    }
  }, [reCalculate])

  console.log(watch(), 'WA');

  const onSubmit = async () => {
    if (!isDirty) return;

    setValue("voucher_pattern_id", PATTERN_SETTINGS?.id);

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
      });

      if (!!updateVoucherGrid && res?.record) {
        updateVoucherGrid(res?.record, grid)
      }

      if (PATTERN_SETTINGS?.auto_gen_entries || watch("gen_entries")) {
        // Generate A Constraint
        await generateEntryFromVoucher({
          values: value,
          created_from: CREATED_FROM_VOUCHER,
          created_from_code: +type,
          grid,
          created_from_id: itemId,
        });
      } else deleteEntry(itemId);
    }

    if (res?.success) {
      toast.success(
        id
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );
    } else {
      toast.error(res?.error?.detail);
    }
  };

  return (
    <FormLayout
      name={PATTERN_SETTINGS?.name}
      onSubmit={onSubmit}
      methods={methods}
      isLoading={queryClientNewVoucher?.isLoading}
      onClose={() => {
        if (!!outerClose) outerClose();
        onClose();
      }}
      formPagination={formPagination}
      extraContentBar={
        <>
          <div className="flex gap-4 items-center justify-end">
            <CheckboxField
              updatedName={`feedback`}
              name="feedback"
              label="feedback"
            />
            <CheckboxField
              name="gen_entries"
              label="gen_entries"
              updatedName={`gen_entries`}
              labelClassName="whitespace-nowrap"
            />
            {watch('id') ? (
              <ViewEntry id={watch('id')} />
            ) : null}
          </div>
        </>
      }
    >
      <VoucherHead
        fields={fields}
        name={name}
        errors={errors}
        PATTERN_SETTINGS={PATTERN_SETTINGS}
      />
      <TableFields
        fields={gridFields}
        tab="grid"
        errors={errors}
        rowsCount={watch("grid")?.length || 1}
        // onlyView={watch('id') && watch('is_first_batch')}
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
        isNewOne={!id}
        PATTERN_SETTINGS={PATTERN_SETTINGS}
      />
      <div className="mb-5" />
    </FormLayout>
  );
};

export default VoucherForm;
