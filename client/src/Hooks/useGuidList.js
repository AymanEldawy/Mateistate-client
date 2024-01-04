import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { SERVER_URL } from "Helpers/functions";

export const ListsGuidsContext = createContext();
const guidListCached = {};

const getTableData = async (table, addTableList) => {
  return await axios
    .post(`${SERVER_URL}/list`, {
      table,
    })
    .then((res) => {
      let data = res?.data?.recordset;
      // setLists(data);
      addTableList(table, data);
      return data;
    });
};

export const ListsGuidsProvider = ({ children }) => {
  const [lists, setLists] = useState("");
  // const [guid, set]
  const addTableList = (name, data) => {
    setLists((prev) => {
      return {
        ...prev,
        [name]: data,
      };
    });
  };

  const getGuidName = (table, guid) => {
    if (!guid || !table) return;
    if (!guidListCached[guid]) {
      if (lists[table]) {
        lists?.[table]?.forEach((item) => {
          guidListCached[item?.id] = item?.Name;
        });
      } else {
        getTableData(table, addTableList);
      }
    }
    return guidListCached[guid] || "";
  };

  return (
    <ListsGuidsContext.Provider
      value={{ lists, addTableList, getGuidName, guidListCached }}
    >
      {children}
    </ListsGuidsContext.Provider>
  );
};

export const useGuidList = () => useContext(ListsGuidsContext);
