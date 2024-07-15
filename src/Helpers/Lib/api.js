// Example Usage of MatieStateClient

import Cookies from "js-cookie";
import MatieStateClient from "./MatieStateClient";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

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
export const baseURL = "http://203.161.62.124:5000/";
// export const baseURL = "http://localhost:5000";

function CURD() {
  const matieStateClient = new MatieStateClient(baseURL);

  // Example Usage of getReport method
  const report = async (reportName, params) => {
    try {
      const tenant_id = Cookies.get("tenant_id");
      if (tenant_id) {
        params = {
          ...params,
          conditions: [
            ...params?.conditions,
            { type: "and", conditions: [["tenant_id", "=", tenant_id]] },
          ],
        };
      }
      const getReportResponse = await matieStateClient.getReport(
        reportName,
        params
      );
      return getReportResponse;
    } catch (error) {
      console.error("Error Getting report:", error);
      return error;
    }
  };
  // Example Usage of createRecord method
  const insert = async (tableName, params) => {
    try {
      const createRecordResponse = await matieStateClient.createRecord(
        tableName,
        {
          ...params,
          data: {
            ...params?.data,
            id: uuidv4(),
            tenant_id: Cookies.get("tenant_id"),
          },
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
      // if (tenant_id) {
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
  const removeEntry = async (id) => {
    return await matieStateClient.deleteRecords(`entry_main_data`, {
      conditions: [{ type: "and", conditions: [["created_from_id", "=", id]] }],
    });
  };

  const deleteContract = async (params) => {
  };

  // Example Usage of deleteRecords method
  const remove = async (tableName, params = {}) => {
    if (tableName === "contract") {
      return await deleteContract(params);
    }

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

  // Search Example Usage of readRecords method
  const search = async (tableName, params = {}) => {
    try {
      const readRecordResponse = await matieStateClient.readRecords(tableName, {
        ...params,
        tenant_id: Cookies.get("tenant_id"),
      });
      return readRecordResponse;
    } catch (error) {
      console.error("Error reading records:", error);
      return error;
    }
  };

  const getById = async (tableName, id, conditions) => {
    return await read(tableName, {
      conditions: conditions
        ? conditions
        : [{ type: "and", conditions: [["id", "=", id]] }],
    });
  };

  return {
    insert,
    read,
    update,
    remove,
    search,
    getById,
    report,
  };
}

export const ApiActions = CURD();
