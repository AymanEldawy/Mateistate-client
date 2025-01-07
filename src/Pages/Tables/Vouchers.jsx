import { PopupLinks } from "Components/Global/Modal/PopupLinks";
import VoucherForm from "Components/StructurePage/Forms/Vouchers/Voucher/VoucherForm";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import React, { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Vouchers = () => {
  const name = "voucher_main_data";
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
          if (params?.code) {
            props.setOpenForm(true);
          } else return;

          return (
            <VoucherForm
              {...props}
              code={params?.code}
              number={params?.number}
              onClose={() => {
                navigate("/vouchers/");
                props.onClose();
              }}
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

export default Vouchers;
