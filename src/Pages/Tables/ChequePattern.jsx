
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import PatternsForm from "Pages/Patterns/PatternsForm";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ChequePattern = () => {
  const name = "cheque_pattern";
  const navigate = useNavigate();
  return (
    <>
      <LayoutWrapper
        name={name}
        FormRender={(props) => {
          console.log(props, 'props');

          return <PatternsForm
            name={name}
            {...props} onClose={() => {
              props.onClose(`/patterns/cheque_pattern`);
            }} />
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

export default ChequePattern;
