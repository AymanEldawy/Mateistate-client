
import FormSingular from "Components/StructurePage/Forms/CustomForm/FormSingular";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import Timing from "Pages/Timing/Timing";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const UserWorkTimes = () => {
  const name = "user_work_times";
  const navigate = useNavigate();
  return (
    <>
      <LayoutWrapper
        name={name}
        FormRender={(props) => {
          console.log(props, "props");

          return <Timing name={name} {...props} />;
          // return <FormSingular name={name}  {...props} />
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

export default UserWorkTimes;
