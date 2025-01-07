
import FormSingular from "Components/StructurePage/Forms/CustomForm/FormSingular";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const CostCenter = () => {
  const name = "cost_center";
  const navigate = useNavigate();
  return (
    <>
      <LayoutWrapper
        name={name}
        FormRender={(props) => {
          
          return <FormSingular name={name}  {...props} column="code" />
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

export default CostCenter;
