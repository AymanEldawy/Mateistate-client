import { v4 as uuidv4 } from "uuid";

// Example Usage of MatieStateClient

import MatieStateClient from "./MatieStateClient";

function CURD() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhODc1NGE2LTdjMGQtNDRlMi05Y2QwLTgwMTdhYzAyZDE0OSIsImlhdCI6MTcwMjU3MDY5MSwiZXhwIjoxODYwMzU4NjkxfQ.i9AAmxBeVlrrCiybD9NQp7rKHJ0il85HobQ-xW40kbc";
  const baseURL = "http://203.161.63.57:4000";
  const matieStateClient = new MatieStateClient(baseURL, token);

  // Example Usage of createRecord method
  const insert = async (tableName, params) => {
    params.data['guid'] = uuidv4();
    try {
      const createRecordResponse = await matieStateClient.createRecord(
        tableName,
        params
      );
      return createRecordResponse;
    } catch (error) {
      console.error("Error creating record:", error);
      return error;
    }
  };

  // Example Usage of readRecords method
  const read = async (tableName, params = {}) => {
    try {
      const readRecordResponse = await matieStateClient.readRecords(
        tableName,
        params
      );
      return readRecordResponse;
    } catch (error) {
      console.error("Error reading records:", error);
      return error;
    }
  };

  // Example Usage of updateRecords method
  const update = async (tableName, params) => {
    try {
      const updateRecordResponse = await matieStateClient.updateRecords(
        tableName,
        params
      );
      return updateRecordResponse;
    } catch (error) {
      console.error("Error updating records:", error);
      return error;
    }
  };

  // Example Usage of deleteRecords method
  const remove = async (tableName, params = {}) => {
    console.log("🚀 ~ file: api.js:58 ~ remove ~ params:", params)
    try {
      const deleteRecordResponse = await matieStateClient.deleteRecords(
        tableName,
        params
      );
      return deleteRecordResponse;
    } catch (error) {
      console.error("Error deleting records:", error);
      return error;
    }
  };

  // Search Example Usage of readRecords method
  const search = async (tableName, params = {}) => {
    try {
      const readRecordResponse = await matieStateClient.readRecords(
        tableName,
        params
      );
      return readRecordResponse;
    } catch (error) {
      console.error("Error reading records:", error);
      return error;
    }
  };
  return {
    insert,
    read,
    update,
    remove,
    search,
  };
}

export const ApiActions = CURD();
