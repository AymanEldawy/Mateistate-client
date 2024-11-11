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
      conditions: [{ type: "and", conditions: [["id", "=", id]] }],
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

  return {
    get,
    set,
    remove,
    insert,
  };
};

export default useCurd;
