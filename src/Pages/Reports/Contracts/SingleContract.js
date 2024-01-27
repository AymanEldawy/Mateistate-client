import BlockPaper from "Components/Global/BlockPaper";
import GET_UPDATE_DATE from "Helpers/Lib/operations/global-read-update";
import { usePopupForm } from "Hooks/usePopupForm";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const levels = [
  "contract",
  "contract_commission",
  "contract_cycle",
  "contract_terms",
  "contract_linked_parking",
  "contract_pictures",
  "contract_termination",
  "contract_receipt_number",
  "contract_other_fees",
  "contract_fixed_assets",
];

const SingleContract = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getContractData = async () => {
    const response = await GET_UPDATE_DATE("apartment_rent_contract", id);
    if (response?.contract) setData(response);
  };

  useEffect(() => {
    getContractData();
  }, [id]);

  return (
    <BlockPaper title={`contract ${id}`}>

      <pre className="break-words">{JSON.stringify(data)}</pre>
    </BlockPaper>
  );
};

export default SingleContract;


/**
 Contract information 

Financial Information 
Contract duration

Payments

Commission 

Contract termination

Contract terms
Recipes No.

Other fees:

 Contract information 

Financial Information 
Contract duration

Payments

Commission 

Contract termination

Contract terms
Recipes No.

Other fees:

 */