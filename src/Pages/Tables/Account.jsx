import AccountForm from "Components/StructurePage/Forms/AccountForm/AccountForm";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Account = () => {
  const name = "account";
  const navigate = useNavigate();
  const params = useParams();

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
          return <AccountForm {...props} />;
        }}
      />
    </>
  );
};

export default Account;
