import BlockPaper from "Components/Global/BlockPaper";
import { DynamicTable } from "Components/StructurePage/Tables/DynamicTable";
import useFetch from "Hooks/useFetch";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Entries = () => {
  const params = useParams();
  const { name } = params;
  const { loading, data, error, refetchData } = useFetch("entry_main_data");
  const navigate = useNavigate();

  const onClickAdd = () => {
    let number = +data?.at(-1)?.number + 1
    navigate(`/vouchers/entries/${number || 1}`);
  };

  console.log(data,'---');

  return (
    <div key={name}>
      <DynamicTable
        tableName="entry_main_data"
        refetchData={refetchData}
        data={data || []}
        loading={loading}
        onClickAdd={onClickAdd}
        setOpen={() => {}}
      />
    </div>
  );
};

export default Entries;
