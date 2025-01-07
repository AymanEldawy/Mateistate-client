import { getOne } from "Helpers/functions";
import { CURD } from "Helpers/Lib/api";

const useCurd = () => {
  const curd = CURD();

  // get data
  const get = async (name, params) => {
    return curd.read(name);
  };

  // set data
  const set = async (name, values, id) => {
    return curd.update(name, {
      conditions: [{ type: "and", conditions: [["id", "=", id]] }],
      updates: values,
    });
  };

  // remove data
  const remove = async (name, id) => {
    return await curd.remove(name, {
      conditions: [
        {
          type: "and",
          conditions:
            typeof id === "object" && id?.length > 1
              ? [["id", "in", id]]
              : [["id", "=", id]],
        },
      ],
    });
  };

  // insert data
  const insert = async (name, data) => {
    return curd.insert(name, data);
  };

  // getOneBy
  const getOneBy = async (name, value, column = "id", columns = ["*"]) => {
    console.log(name, value, column);

    return curd.read(name, {
      conditions: [{ type: "and", conditions: [[column, "=", value]] }],
      columns,
    });
  };

  const getNextOne = async (name, value, columns = ["*"]) => {
    const response = await curd.read(name, {
      conditions: [{ type: "and", conditions: [["number", ">", value]] }],
      limit: 1,
      columns,
    });
    return response;
  };

  const getPreviousOne = async (name, value, columns = ["*"]) => {
    const response = await curd.read(name, {
      conditions: [{ type: "and", conditions: [["number", "<", value]] }],
      sorts: [{ column: "number", order: "DESC", nulls: "last" }],
      limit: 1,
      columns,
    });
    return response;
  };

  const getFirstOne = async (name, columns = ["*"]) => {
    const response = await curd.read(name, {
      limit: 1,
      sorts: [{ column: "number", order: "ASC", nulls: "last" }],
      columns,
    });
    return response;
  };

  const getLastOne = async (name, columns = ["*"]) => {
    const response = await curd.read(name, {
      limit: 1,
      sorts: [{ column: "number", order: "DESC", nulls: "last" }],
      columns,
    });
    return response;
  };

  const getSearch = async (name, value, column = "name") => {
    console.log(name, value, column);

    return curd.read(name, {
      conditions: [
        { type: "and", conditions: [[column, "ilike", `%${value}%`]] },
      ],
    });
  };

  return {
    get,
    set,
    remove,
    insert,
    getOneBy,
    getSearch,
    getNextOne,
    getPreviousOne,
    getFirstOne,
    getLastOne,
  };
};

export default useCurd;
