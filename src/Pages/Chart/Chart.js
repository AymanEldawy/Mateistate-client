import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BlockPaper from "Components/Global/BlockPaper";
import RenderTree from "Components/RenderTree/RenderTree";
import { useTranslation } from "react-i18next";
import Loading from "Components/Global/Loading";
import { toast } from "react-toastify";
import { ApiActions } from "Helpers/Lib/api";
import { Checkbox } from "Components/StructurePage/CustomFields";
import { useQuery } from '@tanstack/react-query';

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
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [name],
    queryFn: async () => await ApiActions.read(name),
  });

  const [chartTree, setChartTree] = useState([]);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    if (data?.result?.length) setChartTree(toTree(data?.result));
    else setChartTree([]);
  }, [isLoading, name, data]);

  const deleteItem = async (itemId) => {
    const res = await ApiActions.remove(name, {
      conditions: [
        {
          type: "and",
          conditions: [["id", "=", itemId]],
        },
      ],
    });

    if (res.success) refetch();
  };

  const onSubmit = async (values) => {
    const res = await ApiActions.insert(name, {
      data: values,
    });

    if (res?.status) {
      toast.success("Successfully added item in " + name);
      refetch();
      return true;
    } else {
      toast.error(res?.error?.detail);
      return false;
    }
  };

  return (
    <BlockPaper
      subTitle={
        name === "account" ? (
          <Checkbox
            containerClassName="w-fit max-w-[120px] rounded-md"
            text="Show Type"
            onChange={(e) => setShowStatus(e.target.checked)}
          />
        ) : null
      }
      title={t("chart")}
      key={name}
    >
      {!isLoading ? (
        <>
          {chartTree?.length ? (
            <RenderTree
              chartTree={chartTree}
              name={name}
              deleteItem={deleteItem}
              onSubmit={onSubmit}
              refetchData={refetch}
              showStatus={showStatus}
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
