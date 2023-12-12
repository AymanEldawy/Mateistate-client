import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import BlockPaper from "Components/BlockPaper/BlockPaper";
import ConfirmModal from "Components/ConfirmModal/ConfirmModal";
import SuperForm from "Components/CustomForm/SuperForm";

import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import Modal from "Components/Modal/Modal";
import { TableBar } from "Components/TableBar/TableBar";
import { useAlert } from "Hooks/useAlert";
import formsApi from "Helpers/Forms/formsApi";
import { SERVER_URL } from "Helpers/functions";
import SuperTable from "Components/CustomTable/SuperTable";
import { ApiActions } from "Helpers/Lib/api";
import { getAllColumns, getColumns, getForm } from "Helpers/constants";



const CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const List = () => {
  const params = useParams();
  const { name } = params;
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(name || "");
  const [activeStage, setActiveStage] = useState("");
  const [fields, setFields] = useState([]);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatchAlert } = useAlert();
  const [reffedTables, setReffedTables] = useState(null);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [searchKey, setSearchKey] = useState("Name");
  const [selectedList, setSelectedList] = useState({});

  // Get data
  let singleList = useMemo(() => getForm(name?.toLowerCase()), [name]);
  const forms = singleList?.forms;
  const steps = singleList?.steps;

  // check if form is more then step
  useEffect(() => {
    if (steps?.length) {
      setActiveStage(steps?.[0]);
      setFields(forms[steps?.[0]]);
      setColumns(getAllColumns(forms));
    } else {
      setColumns(getColumns(singleList));
      setFields(singleList);
    }
    setSearchKey(columns.includes("Name") ? "Name" : columns[0]);
  }, [steps, forms, columns, singleList]);

  const getLists = async (tableName) => {
    const response = await axios.post(`${SERVER_URL}/list`, {
      table: tableName,
    });
    CACHE_LIST[tableName] = response?.data?.recordset;
  };

  const getRefData = async () => {
    const response = await axios.post(`${SERVER_URL}/checkref`, {
      table: name,
    });

    let data = response?.data?.recordset;

    if (data) {
      let collect = {};
      for (const item of data) {
        if (item?.reffedTables !== name) {
          getLists(item?.Referenced_Table);
        } else {
          CACHE_LIST[name] = data;
        }
        collect[item?.Column] = item?.Referenced_Table;
      }
      setReffedTables(collect);
    }
  };

  const getData = async () => {
    setLoading(true);
    const response = await axios.post(`${SERVER_URL}/list`, {
      table: name,
    });

    if (response?.status === 200) {
      setData(response?.data?.recordset);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!name) return;
    getData();
    getRefData();
  }, [name]);

  // Handel Submit
  const onSubmit = async (values) => {
    if (steps && activeStage !== steps[steps?.length - 1]) return;
    setOpen(false);
    dispatchAlert({
      open: true,
      type: "loading",
      msg: "Loading ...",
    });
    let columns = [];
    for (const key in values) {
      if (values?.[key]) columns.push(key);
    }

    let body = {
      dat: values,
      columns,
      table: name,
    };
    let res = await axios.post(`${SERVER_URL}/create`, {
      ...body,
    });

    if (!res?.data?.originalError) {
      dispatchAlert({
        open: true,
        type: "success",
        msg: "Successfully added item in " + name,
      });
      getData();
      return true;
    } else {
      dispatchAlert({
        open: true,
        type: "error",
        msg: "Failed to add new item in " + name,
      });
      return false;
    }
  };

  const deleteItem = async () => {
    await axios
      .post(`${SERVER_URL}/delete`, {
        table: name,
        guids: Object.keys(selectedList),
      })
      .then((res) => {
        getData();
      });
    setOpenConfirmation(false);
  };

  // handel Tabs
  const changeTab = useCallback(
    (tabName) => {
      setTab(tabName);
      setFields(forms[tabName]);
      setActiveStage(tabName);
    },
    [activeStage, fields, tab]
  );

  const goNext = useCallback(() => {
    let index = steps?.indexOf(activeStage);
    if (index !== steps?.length) {
      setActiveStage(steps?.[index + 1]);
      setFields(forms[steps?.[index + 1]]);
    } else return;
  }, [activeStage, forms, steps]);

  const goBack = useCallback(() => {
    let index = steps?.indexOf(activeStage);
    if (index > 0) {
      setActiveStage(steps?.[index - 1]);
      setFields(forms[steps?.[index - 1]]);
    } else return;
  }, [activeStage, forms, steps]);

  return (
    <>
      <ConfirmModal
        onConfirm={deleteItem}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <Modal open={open} onClose={() => setOpen(false)}>
        <FormHeadingTitleSteps
          name={name}
          steps={steps}
          changeTab={changeTab}
          activeStage={activeStage}
        />
        <div className="h-5" />
        <SuperForm
          getCachedList={!!getCachedList ? getCachedList : undefined}
          allowSteps={steps?.length}
          initialFields={fields}
          onSubmit={onSubmit}
          goBack={goBack}
          goNext={
            steps?.length - 1 == steps?.indexOf(activeStage)
              ? undefined
              : goNext
          }
        />
      </Modal>
      <BlockPaper title={name}>
        <TableBar
          onDeleteClick={() => setOpenConfirmation(true)}
          onAddClick={() => setOpen(true)}
          onSearchChange={setSearchValue}
          searchValue={searchValue}
          onSelectChange={setItemsPerPage}
          itemsPerPage={itemsPerPage}
          selectedList={selectedList}
          // columns={columns}
          // searchKey={searchKey}
          // setSearchKey={setSearchKey}
        />
        {!!columns ? (
          <SuperTable
            reffedTables={reffedTables}
            table={name}
            itemsPerPage={itemsPerPage}
            deleteItem={deleteItem}
            columns={columns}
            data={data}
            allowSelect
            searchKey={searchKey}
            searchValue={searchValue}
            selectedList={selectedList}
            setSelectedList={setSelectedList}
            loading={loading}
          />
        ) : null}
      </BlockPaper>
    </>
  );
};

export default List;
