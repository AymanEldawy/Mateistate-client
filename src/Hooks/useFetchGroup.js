import { ApiActions } from "Helpers/Lib/api";
import { getAccount } from "Helpers/Lib/operations/global-read";
import { GLOBAL_READ_GROUP_DATA } from "Helpers/Lib/operations/global-read-update";
import { useEffect, useState } from "react";

const useFetchGroup = (name, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGroupData = async () => {
    try {
      let res = null;
      if (GLOBAL_READ_GROUP_DATA[name]) {
        let get = GLOBAL_READ_GROUP_DATA[name];
        res = await get(id);
      } else
        res = await ApiActions.read(name, {
          conditions: [{ type: "and", conditions: [["id", "=", id]] }],
        });
      setData(res.result);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroupData();
  }, [name]);

  return { data, loading, error };
};

export default useFetchGroup;
