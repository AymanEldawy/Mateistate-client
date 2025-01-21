
import BuildingForm from "Components/StructurePage/Forms/BuildingForm/BuildingForm";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import useCurd from "Hooks/useCurd";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Building = () => {
  const name = "building";
  const navigate = useNavigate();
  const {remove} = useCurd()


  const deleteBuilding = async (list) => {
    await remove(name, Object.keys(list))
    return true
  }

  return (
    <>
      <LayoutWrapper
        name={name}
        onClickDelete={deleteBuilding}
        FormRender={(props) => {
          console.log(props,'props');
          
          return <BuildingForm {...props} />
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

export default Building;
