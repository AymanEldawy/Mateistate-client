import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import BlockPaper from "Components/BlockPaper/BlockPaper";
import ConfirmModal from "Components/ConfirmModal/ConfirmModal";
import SuperForm from "Components/CustomForm/SuperForm";
import SuperTable from "Components/CustomTable/SuperTable";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import Modal from "Components/Modal/Modal";
import { TableBar } from "Components/TableBar/TableBar";
import { getAllColumns, getColumns, getForm } from "Helpers/constants";
import { SERVER_URL } from "Helpers/functions";
import { ApiActions } from "Helpers/Lib/api";
import { useAlert } from "Hooks/useAlert";

const CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const List = () => {
  const { dispatchAlert } = useAlert();
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
      checkRefTable(steps?.[0])
    } else {
      setColumns(getColumns(singleList));
      setFields(singleList);
      checkRefTable(singleList)
    }
    setSearchKey(columns.includes("Name") ? "Name" : columns[0]);
  }, [steps, forms, singleList]);

  useEffect(() => {
    if (!name) return;
    getData();
  }, [name]);

  async function checkRefTable(fields) {
    setLoading(true);
    if (!fields?.length) return;
    for (const field of fields) {
      if (field.is_ref) {
        const response = await ApiActions.read(field?.ref_table);
        CACHE_LIST[field?.ref_table] = response?.result;
        for (const item of response?.result) {
          CACHE_LIST[item.guid] = item.name || item.number || item.guid;
        }

      }
    }
    setLoading(false);
  }
  const getData = async () => {
    setLoading(true);
    const response = await ApiActions.read(name);
    setData(response?.result);
    setLoading(false);
  };

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

    let res = await ApiActions.insert(name, {
      data: values,
    });

    if (res?.success) {
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
    const res = await ApiActions.remove(name, {
			// conditions: [{ type: 'and', conditions: [['id', 'in', Object.keys(selectedList)]] }],
			conditions: [{ type: 'or', conditions:  ['guid', 'in', Object.keys(selectedList)] }],

    });
    console.log("🚀 ~ file: List.js:130 ~ deleteItem ~ res:", res)

    if (res.status === 200) getData();
    setOpenConfirmation(false);
  };

  // handel Tabs
  const changeTab = useCallback(
    (tabName) => {
      setTab(tabName);
      setFields(forms[tabName]);
      setActiveStage(tabName);
    },
    [forms]
  );

  const goNext = useCallback(() => {
    let index = steps?.indexOf(activeStage);
    if (index !== steps?.length) {
      setActiveStage(steps?.[index + 1]);
      setFields(forms[steps?.[index + 1]]);
    }
  }, [activeStage, forms, steps]);

  const goBack = useCallback(() => {
    let index = steps?.indexOf(activeStage);
    if (index > 0) {
      setActiveStage(steps?.[index - 1]);
      setFields(forms[steps?.[index - 1]]);
    }
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
            steps?.length - 1 === steps?.indexOf(activeStage)
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
            // reffedTables={reffedTables}
            getCachedList={!!getCachedList ? getCachedList : undefined}
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
