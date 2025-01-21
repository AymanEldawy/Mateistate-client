// Example Usage of MatieStateClient

import Cookies from "js-cookie";
import MatieStateClient from "./MatieStateClient";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export const SHOULD_DELETE_ENTRY = {
  account: true,
  contract: true,
  cheque: true,
  voucher_main_data: true,
  op_collection: true,
  op_partial_collection: true,
  op_deportation: true,
  op_return: true,
  contract_termination: true,
};

export const baseURL = "http://66.29.143.191/";
// export const baseURL = "http://localhost:5000";

export function CURD() {
  const matieStateClient = new MatieStateClient(baseURL);

  // Example Usage of createRecord method
  const insert = async (tableName, params) => {
    try {
      let data = {
        ...params,
      };

      if (tableName !== "members") {
        data.tenant_id = Cookies.get("tenant_id");
      }

      const createRecordResponse = await matieStateClient.createRecord(
        tableName,
        {
          data,
        }
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
      const tenant_id = Cookies.get("tenant_id");
      // if (tenant_id && tableName !== 'members') {
      //   params = {
      //     ...params,
      //     conditions: [
      //       ...(params?.conditions || []),
      //       { type: "and", conditions: [["tenant_id", "=", tenant_id]] },
      //     ],
      //   };
      // }

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

  // Remove Entry
  const removeRecord = async (table, col, value) => {
    const res = await matieStateClient.deleteRecords(table, {
      conditions: [{ type: "and", conditions: [[col, "=", value]] }],
    });
    return res;
  };

  // Remove Entry
  const removeEntry = async (id) => {
    const res = await matieStateClient.deleteRecords("entry_main_data", {
      conditions: [{ type: "and", conditions: id?.length ? [["created_from_id", "in", id]] : [["created_from_id", "=", id]] }],
    });
    return res;
  };

  const deleteContract = async (params) => {
    let res = null;
    for (const id of params?.conditions?.at(0)?.conditions) {
      // await removeEntry(id);
      await removeRecord("cheque", "connect_with_id", id);
      await removeRecord("voucher_main_data", "connect_with_id", id);
      res = await removeRecord("contract", "id", id);
    }
    return res;
  };

  // Example Usage of deleteRecords method
  const remove = async (tableName, params = {}) => {
    // if (tableName === "contract") {
    //   return await deleteContract(params);
    // }

    try {
      const deleteRecordResponse = await matieStateClient.deleteRecords(
        tableName,
        params
      );

      if (deleteRecordResponse?.success || SHOULD_DELETE_ENTRY?.[tableName]) {
        removeEntry(params?.conditions?.[0]?.conditions?.[0][2]);
      }

      return deleteRecordResponse;
    } catch ({ error }) {
      if (error?.table) {
        toast.error(
          `You can't delete this item because it's connect with ${error?.table} data.`
        );
      }
      // constraint
      console.error("Error deleting records:", error);
      return error;
    }
  };

  return {
    insert,
    read,
    update,
    remove,
  };
}

export const ApiActions = CURD();
