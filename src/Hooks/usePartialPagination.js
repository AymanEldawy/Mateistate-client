import { CURD } from "Helpers/Lib/api";

const usePartialPagination = () => {
  const name = 'op_partial_collection';
  const curd = CURD();

  const getNextPartial = async (value, chqId) => {
    const response = await curd.read(name, {
      conditions: [
        { type: "and", conditions: [["number", ">", value]] },
        { type: "and", conditions: [["cheque_id", "=", chqId]] },
      ],
      limit: 1,
    });
    return response;
  };

  const getPreviousPartial = async (value, chqId) => {
    const response = await curd.read(name, {
      conditions: [
        { type: "and", conditions: [["number", "<", value]] },
        { type: "and", conditions: [["cheque_id", "=", chqId]] },
      ],
      sorts: [{ column: "number", order: "DESC", nulls: "last" }],
      limit: 1,
    });
    return response;
  };

  const getFirstPartial = async (chqId) => {

    const response = await curd.read(name, {
      conditions: [
        { type: "and", conditions: [["cheque_id", "=", chqId]] },
      ],
      limit: 1,
      sorts: [{ column: "number", order: "ASC", nulls: "last" }],
    });
    return response;
  };

  const getLastPartial = async (chqId) => {

    const response = await curd.read(name, {
      conditions: [
        { type: "and", conditions: [["cheque_id", "=", chqId]] },
      ],
      limit: 1,
      sorts: [{ column: "number", order: "DESC", nulls: "last" }],
    });
    return response;
  };

  return {
    getNextPartial,
    getPreviousPartial,
    getFirstPartial,
    getLastPartial,
  };
};

export default usePartialPagination;
