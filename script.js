const fs = require("fs");
const list = [
  "apartment",

  "parking",
  "cost_center",
  "owner",
  "lessor",
  "seller",
  "reservation",
  "bank",
  "currency",
  "shop",
  "land",
  "villa",
  "owner_expenses_types",
  "owner_expenses",
  "watchman",
  "lawsuit",
  "store",
  "material_group",
  "material",
  "service",
  "category",
  "category_problem",
  "user_work_times",
  "lack_reason",
  "evacuation_request",
  "contract_pattern",
  "cheque_pattern",
  "voucher_pattern",
  "bill_pattern",
  "voucher_main_data",
  "bill",
  "cheque",
  "contract",
];

const content = `
import LayoutWrapper from "Components/Tables/LayoutWrapper";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ffffffffffff = () => {
  const name = "ffffffffffff";
  const navigate = useNavigate();
  return (
    <>
      <LayoutWrapper
        name={name}
        FormRender={(props) => {
          console.log(props,'props');
          
          return <p>testing ho</p>
        }}
        // onClickDelete={}
        // onClickAdd={}
        // onClickPrint={}
        // onClickView={}
        // onSearch={}
      />
    </>
  );
};

export default ffffffffffff;
`;
function gen() {
  for (const key of list) {
    let name = 'list/' + key?.replace(key?.[0], key?.[0]?.toLocaleUpperCase()) + ".js";

    fs.writeFile(name, content?.replace(/ffffffffffff/gi, key), (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
  }
}

gen();
