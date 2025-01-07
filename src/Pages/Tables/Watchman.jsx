
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const watchman = () => {
  const name = "watchman";
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

export default watchman;
