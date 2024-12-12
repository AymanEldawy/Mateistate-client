import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BlockPaper from "Components/Global/BlockPaper";
import RenderTree from "Components/RenderTree/RenderTree";
import { useTranslation } from "react-i18next";
import Loading from "Components/Global/Loading";
import { toast } from "react-toastify";
import { Checkbox } from "Components/StructurePage/CustomFields";
import { useQuery } from "@tanstack/react-query";
import useCurd from "Hooks/useCurd";
import { toTree } from "Helpers/functions";
import MaterialRenderTree from "Components/MaterialTree/MaterialRenderTree";

const MaterialChart = () => {
  const name = "material";
  const { t } = useTranslation();
  const { remove, insert, get } = useCurd();
  const [showStatus, setShowStatus] = useState(false);
  const [storeId, setStoreId] = useState(false);
  const {
    data: chartTree,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: [name, "chart"],
    queryFn: async () => {
      const data = await get("material_group");
      return toTree(data?.result);
    },
  });

  const { data: materialGroupChart, isLoading: isLoadingMaterialGroup } =
    useQuery({
      queryKey: [name, "material_group", storeId],
      queryFn: async () => {
        const data = await get("material_group");
        return toTree(data?.result?.slice(0, 50));
      },
    });

  const deleteItem = async (itemId) => {
    const res = await remove(name, itemId);
    if (res.success) refetch();
  };

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
    <BlockPaper title={t("stores")} key={name}>
      {!isLoading ? (
        <>
          {chartTree?.length ? (
            <MaterialRenderTree
              chartTree={chartTree}
              name={"material_group"}
              deleteItem={deleteItem}
              onSubmit={onSubmit}
              refetchData={refetch}
              onClickItem={(id) => setStoreId(id)}
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

export default MaterialChart;
