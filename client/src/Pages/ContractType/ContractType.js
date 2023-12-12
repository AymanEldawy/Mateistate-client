import axios from "axios";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

import BlockPaper from "Components/BlockPaper/BlockPaper";
import SuperForm from "Components/CustomForm/SuperForm";
import { useAlert } from "Hooks/useAlert";
import formsApi from "Helpers/Forms/formsApi";
import { SERVER_URL } from "Helpers/functions";

const CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const ContractType = () => {
  const [index, setIndex] = useState();
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allValues, setAllValues] = useState({});
  const [childrenValues, setChildrenValues] = useState({});
  const { alertMessage, dispatchAlert } = useAlert();
  const [openModalForm, setOpenModalForm] = useState(false);

  // Get data
  let singleList = useMemo(() => formsApi["contracttype"], []);
  useEffect(() => {
    setFields(singleList);
  }, []);

  // Handel Submit
  const onSubmit = async (values) => {
    setAllValues((prev) => {
      return {
        ...prev,
        ...values,
      };
    });
    let body = {
      dat: allValues,
      children: childrenValues,
      columns: Object.keys(allValues),
      table: "LeaseApartment",
    };
    let res = await axios.post(`${SERVER_URL}/create`, {
      ...body,
    });
    // if (res?.statusText === "OK") {
    //   dispatchAlert({
    //     open: true,
    //     type: "success",
    //     msg: "Added Successfully...",
    //   });
    // } else {
    // }
  };

  return (
    <BlockPaper title={"ContractType"}>
      <SuperForm
        oldValues={allValues}
        initialFields={fields}
        onSubmit={onSubmit}
      />
    </BlockPaper>
  );
};

export default ContractType;
