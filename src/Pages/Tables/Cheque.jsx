import { PopupLinks } from "Components/Global/Modal/PopupLinks";
import ChequeForm from "Components/StructurePage/Forms/ChequesForm/ChequeForm";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import React, { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Cheque = () => {
  const name = "cheque";
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
        code={params?.code}
        FormRender={(props) => {
          return (
            <ChequeForm
              patternCode={params?.code}
              number={params?.number}
              {...props}
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

export default Cheque;
