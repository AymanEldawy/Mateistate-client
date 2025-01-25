import { PopupLinks } from "Components/Global/Modal/PopupLinks";
// import ContractForm from "Components/StructurePage/Forms/ContractForm/ContractForm";
import LayoutWrapper from "Components/TableComponents/LayoutWrapper";
import getTableData from "Helpers/Lib/global-read";
import useCurd from "Hooks/useCurd";
import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
const ContractForm = lazy(() => import("Components/StructurePage/Forms/ContractForm/ContractForm"))

const Contract = () => {
  const name = "contract";
  const params = useParams();
  const navigate = useNavigate();
  const {remove} = useCurd()
  const [searchQuery] = useSearchParams();
  const type = params?.type;
  const code = searchQuery.get("code");
  const assetType = searchQuery.get("flat_type")?.toLowerCase();
  const contractName = `${assetType}_${type}_contract`;
  const [openLinks, setOpenLinks] = useState(false);

  const deleteContract = async (list, refetch) => {
    console.log("🚀 ~ deleteContract ~ list:", list)
    await remove('contract', Object.keys(list))
    refetch()
    return true
  }

console.log(openLinks,'dsdsdldsi');

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
        onClickDelete={deleteContract}
        outerData={(filters) => getTableData('contract', filters)}
        FormRender={(props) => {
          if (code) {
            props.setOpenForm(true);
          } else return;

          return (
            <Suspense>

              <ContractForm
                contractName={contractName}
                number={params?.number}
                name={name}
                {...props}
                onClose={() => {
                  props.onClose();
                }}
                code={params?.code}
              />
            </Suspense>
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

export default Contract;
