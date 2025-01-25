import { getOne } from "Helpers/functions";
import { CURD } from "Helpers/Lib/api";
import { UNIQUE_REF_TABLES } from 'Helpers/constants';

const useCurd = () => {
  const curd = CURD();

  // get data
  const get = async (name, params) => {
    return curd.read(name, params);
  };
  // getDataWithFilter
  const getDataWithFilter = async (name, filters) => {
    let conditions = []
    if (filters?.length) {
      for (const filter of filters) {
        conditions.push({ type: "and", conditions: [[filter?.id, "ilike", `%${filter?.value}%`]] })
      }
    }
    return curd.read(name, {
      conditions
    });
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
    return curd.read(name, {
      conditions: [{ type: "and", conditions: [[column, "=", value]] }],
      columns,
    });
  };

  const getNextOne = async (name, value, columns = ["*"], code) => {
    let condition = code ? {
      type: "and", conditions: [["number", ">", value]]
    } : {}
    const response = await curd.read(name, {
      conditions: [{ type: "and", conditions: [["number", ">", value]] }, condition],
      limit: 1,
      columns,
    });
    return response;
  };

  const getPreviousOne = async (name, value, columns = ["*"], code) => {
    let condition = code ? {
      type: "and", conditions: [["code", "=", code]]
    } : {}
    const response = await curd.read(name, {
      conditions: [{ type: "and", conditions: [["number", "<", value]] }, condition],
      sorts: [{ column: "number", order: "DESC", nulls: "last" }],
      limit: 1,
      columns,
    });
    return response;
  };

  const getFirstOne = async (name, columns = ["*"], code) => {
    let condition = code ? {
      type: "and", conditions: [["code", "=", code]]
    } : {}
    const response = await curd.read(name, {
      conditions: [condition],
      limit: 1,
      sorts: [{ column: "number", order: "ASC", nulls: "last" }],
      columns,
    });
    return response;
  };

  const getLastOne = async (name, columns = ["*"], code) => {
    let condition = code ? {
      type: "and", conditions: [["code", "=", code]]
    } : {}
    const response = await curd.read(name, {
      conditions: [condition],
      limit: 1,
      sorts: [{ column: "number", order: "DESC", nulls: "last" }],
      columns,
    });
    return response;
  };

  const getLastOneBy = async (name, column = 'id', value, columns = ["*"]) => {
    const response = await curd.read(name, {
      conditions: [{ type: 'and', conditions: [[column, '=', value]] }],
      limit: 1,
      sorts: [{ column: "number", order: "DESC", nulls: "last" }],
      columns,
    });
    return response;
  };

  const getSearch = async (name, value, column = "name") => {

    return curd.read(name, {
      conditions: [
        { type: "and", conditions: [[column, "ilike", `%${value}%`]] },
      ],
    });
  };

  const getDynamicSearch = async (name, value, column = "name", user) => {
    let table = name;
    let additional = {}
    switch (name) {
      case UNIQUE_REF_TABLES.employee:
      case UNIQUE_REF_TABLES.suppliers:
      case UNIQUE_REF_TABLES.user_customer:
      case UNIQUE_REF_TABLES.user_supplier:
        table = 'user';
        break;
      case UNIQUE_REF_TABLES.clients:
      case UNIQUE_REF_TABLES.supervisor:
        table = 'account';
        break;
      default:
        // Handle default case if needed
        break;
    }

    return curd.read(table, {
      conditions: [
        { type: "and", conditions: [[column, "ilike", `%${value}%`]] },
        additional
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
    getDataWithFilter,
    getLastOneBy,
    getDynamicSearch
  };
};

export default useCurd;
