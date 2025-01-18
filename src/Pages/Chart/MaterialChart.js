import { useEffect, useState } from "react";

import BlockPaper from "Components/Global/BlockPaper";
import { useTranslation } from "react-i18next";
import Loading from "Components/Global/Loading";
import { toast } from "react-toastify";
import useCurd from "Hooks/useCurd";
import { toTree } from "Helpers/functions";
import MaterialRenderTree from "Components/MaterialTree/MaterialRenderTree";
import useFetchData from "Hooks/useFetchQuery";

const MaterialChart = () => {
  const name = "material";
  const { t } = useTranslation();
  const { remove, insert, get } = useCurd();
  const [storeId, setStoreId] = useState(false);
  const [chartTree, setChartTree] = useState([]);
  const { data, refetch, isLoading } = useFetchData(
    [name, "chart", "material_group"],
    "web/getMaterialChart"
  );

  useEffect(() => {
    setChartTree(toTree(data));
  }, [data]);

  console.log(chartTree, "chartTree");

  const onSubmit = async (values) => {
    const res = await insert(name, values);
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
    <BlockPaper title={t("Class & materials")} key={name}>
      {!isLoading ? (
        <>
          {chartTree?.length ? (
            <MaterialRenderTree
              chartTree={chartTree}
              name={"material_group"}
              onSubmit={onSubmit}
              refetchData={refetch}
              onClickItem={(id) => setStoreId(id)}
              refetch={refetch}
            />
          ) : (
            <p className="bg-red-100 text-red-600 p-1 rounded-md text-center mt-2">
              {t("empty_result")}
            </p>
          )}
        </>
      ) : (
        <Loading />
      )}
    </BlockPaper>
  );
};

export default MaterialChart;
