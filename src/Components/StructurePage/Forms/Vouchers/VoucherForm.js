import { useEffect, useMemo, useState } from "react";
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

let CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const VoucherForm = ({ layout }) => {
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
  console.log(watch());

  useEffect(() => {
    if (!number) return;
    getEntryValues(number);
  }, [number]);

  useEffect(() => {
    if(loading) return;
    if (number > (data?.at(0)?.number || 0)) {
      setIsNewOne(true);
    }
  }, [loading]);

  const getRefTables = async () => {
    for (const field of [...gridFields]) {
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

  useEffect(() => {
    getRefTables();
  }, [name, type]);

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
    let values = {};
    for (const key in value) {
      let val = value[key];
      if (val !== undefined && val !== null && val !== "") {
        values[key] = val;
      }
    }

    let res = null;

    if (layout === "update") {
      res = await ApiActions.update(name, {
        conditions: [{ type: "and", conditions: [["id", "=", params?.id]] }],
        updates: values,
      });
    } else {
      res = await ApiActions.insert(name, {
        data: values,
      });
      if (res?.status) {
        insertIntoGrid({
          layout: layout,
          gridTableName:
            +type === 2 ? "voucher_grid_data" : "voucher_grid_data",
          grid: watch("grid"),
          itemId: res?.result?.at(0)?.id,
          refName:
            +type === 2 ? "voucher_main_data_id" : "voucher_main_data_id",
        });
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
      if (item?.id && (item.account_id || item?.observe_account_id)) {
        ApiActions.update("entry_grid_data", {
          conditions: [{ type: "and", conditions: [["id", "=", item?.id]] }],
          updates: item,
        });
      } else {
        if (item.account_id || item?.observe_account_id) {
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <VoucherHead
            isAccounting={+type === 2}
            fields={fields}
            name={name}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
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
