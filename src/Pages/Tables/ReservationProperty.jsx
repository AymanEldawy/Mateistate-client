
import ReservationPropertyForm from "Components/StructurePage/Forms/ReservationProperty/ReservationPropertyForm";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ReservationProperty = () => {
  const name = "reservation_property";
  const navigate = useNavigate();
  return (
    <>
      <LayoutWrapper
        name={name}
        FormRender={(props) => {
          console.log(props, "props");

          return <ReservationPropertyForm {...props} />;
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

export default ReservationProperty;
