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

  // getReport
  const getReport = async () => {
    return curd.report();
  };

  // getOneBy
  const getOneBy = async (name, value, column = "id") => {
    console.log(name, value, column);

    return curd.read(name, {
      conditions: [{ type: "and", conditions: [[column, "=", value]] }],
    });
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
  };
};

export default useCurd;
