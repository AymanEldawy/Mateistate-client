
import AccountForm from "Components/StructurePage/Forms/AccountForm/AccountForm";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Account = () => {
  const name = "account";
  const navigate = useNavigate();

  // onClickDelete
  // onClickView
  // onClickPrint


  return (
    <>
      <LayoutWrapper
        name={name}
        onClickDelete={() => {}}
        onClickView={() => {}}
        onClickPrint={() => {}}
        FormRender={(props) => {
          console.log(props, "props");

          return <AccountForm {...props} />;
        }}
      />
    </>
  );
};

export default Account;
