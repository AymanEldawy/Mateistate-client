import React, { useMemo } from "react";
import { VoucherHead } from "./VoucherHead";
import { VoucherFooter } from "./VoucherFooter";
import BlockPaper from "Components/BlockPaper/BlockPaper";
import VoucherBodyGrid from "./VoucherBodyGrid";
import getFormByTableName from "Helpers/Forms/new-tables-forms";
import { useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { ApiActions } from "Helpers/Lib/api";

const CACHE_LIST = {};
const getRefTables = async () => {
  for (const table of ["account", "currency", "seller", "cost_center"]) {
    const response = await ApiActions.read(table);
    CACHE_LIST[table] = response?.result;

    for (const item of response?.result) {
      CACHE_LIST[item.id] = item.name || item.number || item.id;
    }
  }
};

getRefTables();

const Voucher = ({ children }) => {
  const params = useParams();
  const { name, type } = params;
  const methods = useForm();
  const {
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = methods;

  const fields = useMemo(() => {
    let forms = getFormByTableName("accounting_voucher_main_data");
    let hash = {};
    for (const field of forms) {
      hash[field.name] = field;
    }
    return hash;
  }, []);

  const handleInputChange = (name, value, index) => {
    setValue(name, value);
  };

  const onSubmit = () => {};

  return (
    <FormProvider {...methods}>
      <BlockPaper title={name?.replace("_main_data", "")}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VoucherHead
            isAccounting={+type === 2}
            fields={fields}
            name={name}
            handleInputChange={handleInputChange}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
          />
          <VoucherBodyGrid
            layout={+type === 2 ? "debit" : "credit"}
            handleInputChange={handleInputChange}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
          />
          <VoucherFooter
            fields={fields}
            name={name}
            handleInputChange={handleInputChange}
            errors={errors}
            CACHE_LIST={CACHE_LIST}
          />
        </form>
      </BlockPaper>
    </FormProvider>
  );
};

export default Voucher;
