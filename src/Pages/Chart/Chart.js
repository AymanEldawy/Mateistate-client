import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BlockPaper from "Components/BlockPaper/BlockPaper";
import RenderTree from "Components/RenderTree/RenderTree";
import { SERVER_URL } from "Helpers/functions";
import { useTranslation } from "react-i18next";
import Loading from "Components/Loading/Loading";
import { toast } from "react-toastify";
import { ApiActions } from "Helpers/Lib/api";
import useFetch from "Hooks/useFetch";

function toTree(data, pid = null) {
  return data?.reduce((r, e) => {
    if (e.parent_id == pid) {
      const obj = { ...e };
      const children = toTree(data, e.id);
      if (children.length) obj.children = children;
      r.push(obj);
    }
    return r;
  }, []);
}

const Chart = () => {
  const { t } = useTranslation();
  const params = useParams();
  const { name } = params;
  const { loading, data, error, refetchData } = useFetch(name);
  console.log("🚀 ~ file: Chart.js:31 ~ Chart ~ data:", data)
  const [chartTree, setChartTree] = useState();

  useEffect(() => {
    if (data?.length) setChartTree(toTree(data));
  }, [data]);

  const deleteItem = async (itemId) => {
    const res = await ApiActions.remove(name, {
      conditions: [
        {
          type: "and",
          conditions: [["id", "=", itemId]],
        },
      ],
    });

    if (res.success) await refetchData();
  };

  const onSubmit = async (values) => {
    const res = await ApiActions.insert(name, {
      data: values,
    });

    if (res?.status) {
      toast.success("Successfully added item in " + name);
      refetchData();
      return true;
    } else {
      toast.error("Failed to add new item in " + name);
      return false;
    }
  };

  return (
    <BlockPaper title={t("chart")}>
      {!loading ? (
        <>
          {chartTree?.length ? (
            <RenderTree
              chartTree={chartTree}
              name={name}
              deleteItem={deleteItem}
              onSubmit={onSubmit}
              refetchData={refetchData}
            />
          ) : (
            <p className="bg-red-100 text-red-600 p-1 rounded-md text-center mt-2">
              {t("empty_result")}
            </p>
          )}
        </>
      ) : (
        <Loading withBackdrop />
      )}
    </BlockPaper>
  );
};

export default Chart;
