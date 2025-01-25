
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import PatternsForm from "Pages/Patterns/PatternsForm";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const BillPattern = () => {
  const name = "bill_pattern";
  const navigate = useNavigate();
  return (
    <>
      <LayoutWrapper
        name={name}
        FormRender={(props) => {
          console.log(props, 'props');

          return <PatternsForm
            name={name}
            {...props}
            onClose={() => {
              props.onClose('/bill');
            }}
          />
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

export default BillPattern;
