
import LayoutWrapper from "Components/Tables/LayoutWrapper";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const material_group = () => {
  const name = "material_group";
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

export default material_group;
