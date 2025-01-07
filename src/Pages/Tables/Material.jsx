import Btn from "Components/Global/Btn";
import Modal from "Components/Global/Modal/Modal";
import FormSteps from "Components/StructurePage/Forms/CustomForm/FormSteps";
import MaterialForm from "Components/StructurePage/Forms/MaterialForm/MaterialForm";
import UnregisterMaterials from "Components/StructurePage/Forms/MaterialForm/UnregisterMaterials";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Material = () => {
  const name = "material";
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <Modal open={open} bodyClassName="!p-0 w-[900px]">
          <UnregisterMaterials onClose={() => setOpen(false)} />
        </Modal>
      )}
      <LayoutWrapper
        name={name}
        FormRender={(props) => {
          console.log(props, "props");

          return <MaterialForm name={name} {...props} />;
        }}
        addtionalActions={
          <Btn kind="error" onClick={() => setOpen(true)}>
            Unregister materials
          </Btn>
        }
        // onClickDelete={}
        // onClickAdd={}
        // onClickPrint={}
        // onClickView={}
        // onSearch={}
      />
    </>
  );
};

export default Material;
