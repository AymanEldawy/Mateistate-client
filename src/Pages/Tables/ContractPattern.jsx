
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import PatternsForm from "Pages/Patterns/PatternsForm";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ContractPattern = () => {
  const name = "contract_pattern";
  const navigate = useNavigate();
  return (
    <>
      <LayoutWrapper
        name={name}

        FormRender={(props) => {
          return <PatternsForm
            name={name}
            {...props}
            onClose={() => {
              props.onClose("/patterns/contract_pattern");
            }}
          />;
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

export default ContractPattern;
