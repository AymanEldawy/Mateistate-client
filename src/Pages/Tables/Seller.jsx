
import FormSingular from "Components/StructurePage/Forms/CustomForm/FormSingular";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Seller = () => {
  const name = "seller";
  const navigate = useNavigate();
  return (
    <>
      <LayoutWrapper
        name={name}
        FormRender={(props) => {
          console.log(props,'props');
          
          return <FormSingular name={name}  {...props} />
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

export default Seller;
