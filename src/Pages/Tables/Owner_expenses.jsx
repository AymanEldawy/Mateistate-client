
import LayoutWrapper from "Components/Tables/LayoutWrapper";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const owner_expenses = () => {
  const name = "owner_expenses";
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

export default owner_expenses;
