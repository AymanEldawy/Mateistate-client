import React, { useMemo } from "react";
import { VoucherHead } from "./VoucherHead";
import { VoucherFooter } from "./VoucherFooter";
import BlockPaper from "Components/BlockPaper/BlockPaper";
import VoucherBodyGrid from "./VoucherBodyGrid";
import getFormByTableName from "Helpers/Forms/new-tables-forms";
import { useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";

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
  console.log("🚀 ~ file: Voucher.js:14 ~ Voucher ~ type:", type);
  console.log("🚀 ~ file: Voucher.js:14 ~ Voucher ~ name:", name);

  const fields = useMemo(() => {
    let forms = getFormByTableName("accounting_voucher_main_data");
    console.log("🚀 ~ file: Voucher.js:17 ~ fields ~ forms:", forms);
    let hash = {};
    for (const field of forms) {
      hash[field.name] = field;
    }
    return hash;
  }, []);

  const handleInputChange = (name, value) => {
    setValue(name, value);
  };

  const onSubmit = () => {};

  return (
    <FormProvider {...methods}>
      <BlockPaper title={name?.replace("_main_data", "")}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VoucherHead
            fields={fields}
            name={name}
            handleInputChange={handleInputChange}
            errors={errors}
          />
          <VoucherBodyGrid
            layout="credit"
            handleInputChange={handleInputChange}
            errors={errors}
          />
          <VoucherFooter
            fields={fields}
            name={name}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        </form>
      </BlockPaper>
    </FormProvider>
  );
};

export default Voucher;
