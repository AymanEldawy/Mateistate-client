import { Button } from "Components/Global/Button";
import { ApiActions } from "Helpers/Lib/api";
import React, { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";

export const CompareMaterialCard = ({
  index,
  material,
  materials,
  refresh,
}) => {
  const [selectedMaterial, setSelectedMaterials] = useState();
  const [isLoading, setIsLoading] = useState(false);
  console.log("🚀 ~ CompareMaterialCard ~ selectedMaterial:", selectedMaterial);

  const onSave = async () => {
    setIsLoading(true);
    const response = await ApiActions.update("service_material", {
      conditions: [{ type: "and", conditions: [["id", "=", material?.id]] }],
      updates: {
        material_id: selectedMaterial,
      },
    });
    if (response?.success) {
      toast.success("Successfully registered the Material");
      refresh();
    } else {
      toast.error("Failed to register the Material");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex gap-4 items-center">
      <span className="w-[10px]">{index + 1}</span>
      <h3 className="w-[200px] text-base capitalize font-bold">
        {material?.name}
      </h3>
      <h3 className="w-[100px] text-center text-base capitalize font-bold border p-[5px] rounded-md">
        {material?.quantity}
      </h3>
      <div className="flex-1 flex items-center gap-4">
        <Select
          menuPlacement="auto"
          menuPortalTarget={document?.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          className={`border rounded-md bg-none bg-transparent w-full max-w-xs`}
          classNames={{
            control: (state) => "bg-transparent !border-none",
            container: (state) =>
              "!bg-none !bg-transparent dark:!border-dark-border",
            singleValue: () => "dark:text-gray-200 unique-valid",
            menuList: () => "dark:bg-dark-bg",
          }}
          getOptionLabel={({ name }) => name}
          getOptionValue={({ id }) => id}
          placeholder={"Select material"}
          options={materials}
          value={materials?.find((c) => c?.id === selectedMaterial)}
          onChange={(option) => {
            setSelectedMaterials(option?.id);
          }}
        />
        <Button
          onClick={onSave}
          title="Save"
          disabled={isLoading}
          loading={isLoading}
        />
      </div>
    </div>
  );
};
