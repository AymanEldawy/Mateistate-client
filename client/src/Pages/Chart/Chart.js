import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BlockPaper from "Components/BlockPaper/BlockPaper";
import RenderTree from "Components/RenderTree/RenderTree";
import { SERVER_URL } from "Helpers/functions";
import { useTranslation } from "react-i18next";
import Loading from "Components/Loading/Loading";
import { toast } from "react-toastify";

function toTree(data, pid = null) {
  return data?.reduce((r, e) => {
    if (e.ParentGUID == pid) {
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chartTree, setChartTree] = useState();
  const params = useParams();
  const { name } = params;
  const getData = async () => {
    setLoading(true);
    await axios
      .post(`${SERVER_URL}/list`, {
        table: name,
      })
      .then((res) => {
        setChartTree(toTree(res?.data?.recordset));
        setData(res?.data?.recordset);
        setLoading(false);
      });
    setLoading(false);
  };
  const deleteItem = async (itemGuid) => {
    await axios
      .post(`${SERVER_URL}/delete`, {
        table: name,
        guids: itemGuid,
      })
      .then((res) => {
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, [name]);
  const onSubmit = async (values) => {
    let body = {
      dat: values,
      columns: Object.keys(values),
      table: name,
    };
    let res = await axios.post(`${SERVER_URL}/create`, {
      ...body,
    });
    if (res?.status === 200) {
      toast.success("Added Successfully");
      getData();
      return true;
    } else {
      toast.error("Failed to add new");
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
