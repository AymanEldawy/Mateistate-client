import { PopupLinks } from "Components/Global/Modal/PopupLinks";
import BillForm from "Components/StructurePage/Forms/BillForm/BillForm";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import React, { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Bill = () => {
  const name = "bill";
  const navigate = useNavigate();
  const params = useParams();
  const [openLinks, setOpenLinks] = useState(false);

  return (
    <>
      {openLinks && (
        <PopupLinks
          name={name}
          onClose={() => setOpenLinks(false)}
          open={openLinks}
        />
      )}
      <LayoutWrapper
        name={name}
        onClickAdd={() => setOpenLinks(true)}
        FormRender={(props) => {
          console.log(props, "props");
          console.log(props, "props");
          if (params?.code) {
            props.setOpenForm(true);
          } else return;

          return (
            <BillForm
              {...props}
              onClose={() => {
                navigate("/bill");
                props?.onClose();
              }}
              patternCode={params?.code}
            />
          );
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

export default Bill;
