import React, { useMemo } from "react";
import { VoucherHead } from "./VoucherHead";
import { VoucherFooter } from "./VoucherFooter";
import BlockPaper from "Components/BlockPaper/BlockPaper";
import VoucherBodyGrid from "./VoucherBodyGrid";
import getFormByTableName from "Helpers/Forms/new-tables-forms";

const Voucher = ({ children, name = "voucher_main_data" }) => {
  // grid
  // readonly
  const fields = useMemo(() => {
    let forms = getFormByTableName(name);
    let hash = {};
    for (const field of forms) {
      hash[field.name] = field;
    }
    return hash;
  }, []);

  return (
    <BlockPaper title={name?.replace("_main_data", "")}>
      <div>
        <VoucherHead fields={fields} name={name} />
        <VoucherBodyGrid layout="credit" />
        <VoucherFooter fields={fields} name={name} />
      </div>
    </BlockPaper>
  );
};

export default Voucher;
