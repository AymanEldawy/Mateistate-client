import { v4 as uuidv4 } from "uuid";

// Example Usage of MatieStateClient

import MatieStateClient from "./MatieStateClient";

function CURD() {
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0NTVjN2VjLTMwOGItNGNiYi05MWQ0LWIwYjQ4MTdmM2Y1MSIsImlhdCI6MTcwNDA5OTI4MiwiZXhwIjoxODYxODg3MjgyfQ.R3AbA2UfJL4j3TNc_E3ecEz5lq-s860S5uVhyiE8B9I"
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0NTVjN2VjLTMwOGItNGNiYi05MWQ0LWIwYjQ4MTdmM2Y1MSIsImlhdCI6MTcwNDExNDk2MCwiZXhwIjoxODYxOTAyOTYwfQ.4x56JCMyqgdxsER27ojj9GhSAYKghR2W2Q3oVevH88c"
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM4OTEzNzMyLTE5ZDUtNDBmOS1hNGE3LTNmZDY1ODFmNDY0MyIsImlhdCI6MTcwMzk2MTEzMSwiZXhwIjoxODYxNzQ5MTMxfQ.qKIvmH-wNdV3aTLCXyQcYKThfGOtGIZCvBu1UcRLjIk";
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM4OTEzNzMyLTE5ZDUtNDBmOS1hNGE3LTNmZDY1ODFmNDY0MyIsImlhdCI6MTcwNDA4MDAzMiwiZXhwIjoxODYxODY4MDMyfQ.-RooUZW2pEG0h9-ZjqzsfTYzuwkyPay73kpaS6P4izI";
  const baseURL = "http://203.161.62.124:4000";
  const matieStateClient = new MatieStateClient(baseURL, token);

  // Example Usage of createRecord method
  const insert = async (tableName, params) => {
    params.data["guid"] = uuidv4();
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
