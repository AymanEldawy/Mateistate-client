import { useQuery } from "@tanstack/react-query";
import BlockPaper from "Components/Global/BlockPaper";
import Loading from "Components/Global/Loading";
import { ApiActions } from "Helpers/Lib/api";
import React from "react";
import { CompareMaterialCard } from "./CompareMaterialCard";
import { ErrorText } from "Components/Global/ErrorText";

const UnregisterMaterials = () => {
  const name = "material";

  const { isLoading, data, refresh } = useQuery({
    queryKey: [name, "unregister"],
    queryFn: async () => {
      const data = await ApiActions.read("service_material", {
        conditions: [{ type: "and", conditions: [["status", "=", 1]] }],
      });
      return data?.result?.filter((c) => !c?.material_id);
    },
  });

  const { data: materials } = useQuery({
    queryKey: [name, "all"],
    queryFn: async () => {
      const data = await ApiActions.read("material");
      console.log("🚀 ~ queryFn: ~ data:", data);
      return data?.result;
    },
  });

  return (
    <BlockPaper title={"Unregister Materials"}>
      {isLoading ? (
        <Loading withBackdrop />
      ) : (
        <>
          {data?.length ? (
            <div className="">
              <div className="flex font-medium text-lg items-center gap-4 border-b py-2 bg-gray-100">
                <h3 className="w-[10px]">#</h3>
                <h3 className="w-[200px]">Material</h3>
                <h3 className="w-[100px]">Quantity</h3>
                <h3 className="flex-1">Register</h3>
              </div>
              <div className="flex flex-col gap-4 mt-2">
                {data?.map((material, index) => (
                  <CompareMaterialCard
                    index={index}
                    key={material?.id}
                    material={material}
                    materials={materials}
                    refresh={refresh}
                  />
                ))}
              </div>
            </div>
          ) : (
            <ErrorText>There are no materials needed to register</ErrorText>
          )}
        </>
      )}
    </BlockPaper>
  );
};

export default UnregisterMaterials;
