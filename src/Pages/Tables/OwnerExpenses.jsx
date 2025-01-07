
import OwnerExpensesForm from "Components/StructurePage/Forms/OwnerExpensesForm/OwnerExpensesForm";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const OwnerExpenses = () => {
  const name = "owner_expenses";
  const navigate = useNavigate();
  return (
    <>
      <LayoutWrapper
        name={name}
        FormRender={(props) => {
          console.log(props, "props");

          return <OwnerExpensesForm {...props} />;
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

export default OwnerExpenses;
