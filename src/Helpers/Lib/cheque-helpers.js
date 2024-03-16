import { ApiActions } from "./api";

export const updateChqStatus = async (updates, chqId) => {
  return await ApiActions.update("bill", {
    conditions: [{ type: "and", conditions: [["id", "=", chqId]] }],
    updates,
  });
};
