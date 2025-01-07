
import FormSteps from "Components/StructurePage/Forms/CustomForm/FormSteps";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Lawsuit = () => {
  const name = "lawsuit";
  const navigate = useNavigate();
  return (
    <>
      <LayoutWrapper
        name={name}
        FormRender={(props) => {
          console.log(props,'props');
          
          return <FormSteps name={name} {...props} />;
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

export default Lawsuit;
