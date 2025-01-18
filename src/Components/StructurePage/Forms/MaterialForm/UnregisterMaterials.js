import { useQuery } from "@tanstack/react-query";
import BlockPaper from "Components/Global/BlockPaper";
import Loading from "Components/Global/Loading";
import React from "react";
import { CompareMaterialCard } from "./CompareMaterialCard";
import { ErrorText } from "Components/Global/ErrorText";
import useCurd from "Hooks/useCurd";
import FormLayout from "../FormWrapperLayout/FormLayout";
import { useForm } from "react-hook-form";

const UnregisterMaterials = ({ onClose }) => {
  const name = "material";
  const { getOneBy, get } = useCurd();
  const methods = useForm()
  const { isLoading, data, refresh } = useQuery({
    queryKey: [name, "unregister"],
    queryFn: async () => {
      const data = await getOneBy("service_material", 1, "status");
      return data?.result?.filter((c) => !c?.material_id);
    },
  });

  const { data: materials } = useQuery({
    queryKey: [name, "all"],
    queryFn: async () => {
      const data = await get("material");
      return data?.result;
    },
  });

  return (
    <FormLayout hidePaginationBar title={"Unregister Materials"} onClose={onClose} methods={methods} name={"unregister materials"} formClassName="min-w-[90%] min-h-[350px]">
      {isLoading ? (
        <Loading />
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
            <ErrorText containerClassName="text-center flex items-center justify-center">There are no materials needed to register</ErrorText>
          )}
        </>
      )}
    </FormLayout>
  );
};

export default UnregisterMaterials;
