import ReportUniqueField from "Components/ReportsComponents/ReportsFields/ReportUniqueField";
import {
  CheckboxField,
  Input,
  Select,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import React, { useCallback, useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";

export const MaterialFormStepOne = ({
  tab,
  fields,
  values = {},
  errors,
}) => {
  const { watch, setValue } = useFormContext();
  const fieldsHash = useMemo(() => {
    let hash = {};
    for (const field of fields || []) {
      hash[field?.name] = field;
    }
    return hash;
  }, [fields]);

  const setDefaults = useCallback(() => {}, []);

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => {
  //     if (name?.indexOf("defaults1") >= 0 && type === 'change') {
  //       setValue("material.defaults2", undefined);
  //       setValue("material.defaults3", undefined);
  //     } else if (name?.indexOf("defaults2") >= 0 && type === 'change') {
  //       setValue("material.defaults1", undefined);
  //       setValue("material.defaults3", undefined);
  //     } else if (name?.indexOf("defaults3") >= 0 && type === 'change') {
  //       setValue("material.defaults1", undefined);
  //       setValue("material.defaults2", undefined);
  //     }
  //   });
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  if (!Object.keys(fieldsHash).length) return;

  const readOnly1 = watch("material.defaults2") || watch("material.defaults3");
  const readOnly2 = watch("material.defaults1") || watch("material.defaults3");
  const readOnly3 = watch("material.defaults1") || watch("material.defaults2");

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-x-5 gap-2">
        <Input {...fieldsHash?.code} updatedName={tab ? `${tab}.code` : ""} />
        <Input {...fieldsHash?.name} updatedName={tab ? `${tab}.name` : ""} />
        <Input
          {...fieldsHash?.ltnname}
          updatedName={tab ? `${tab}.ltnname` : ""}
        />
        <UniqueField
          {...fieldsHash?.material_group_id}
          updatedName={tab ? `${tab}.material_group_id` : ""}
          required
        />
        <Select
          {...fieldsHash?.material_type}
          updatedName={tab ? `${tab}.material_type` : ""}
          required
        />
        <UniqueField
          {...fieldsHash?.category_id}
          updatedName={tab ? `${tab}.category_id` : ""}
        />
      </div>
      <div className="bg-gray-100 grid grid-cols-2 gap-x-5 gap-2 p-2">
        <Input
          {...fieldsHash?.unit1}
          updatedName={tab ? `${tab}.unit1` : ""}
          readOnly={readOnly1}
          labelClassName={"w-[90px]"}
        />
        <CheckboxField
          {...fieldsHash?.defaults1}
          defaultChecked={values?.defaults1}
          updatedName={tab ? `${tab}.defaults1` : ""}
          values={values}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly1}
        />
        <Input
          {...fieldsHash?.barcode1}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          updatedName={tab ? `${tab}.barcode1` : ""}
          readOnly={readOnly1}
        />
      </div>
      <div className="bg-gray-100 grid grid-cols-2 gap-x-5 gap-2 p-2">
        <Input
          {...fieldsHash?.unit2}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          updatedName={tab ? `${tab}.unit2` : ""}
          readOnly={readOnly2}
        />
        <CheckboxField
          {...fieldsHash?.defaults2}
          defaultChecked={values?.defaults2}
          updatedName={tab ? `${tab}.defaults2` : ""}
          values={values}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly2}
        />
        <Input
          {...fieldsHash?.exchange2}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          updatedName={tab ? `${tab}.exchange2` : ""}
          readOnly={readOnly2}
        />
        <Input
          {...fieldsHash?.barcode2}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          updatedName={tab ? `${tab}.barcode2` : ""}
          readOnly={readOnly2}
        />
      </div>
      <div className="bg-gray-100 grid grid-cols-2 gap-x-5 gap-2 p-2">
        <Input
          {...fieldsHash?.unit3}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          updatedName={tab ? `${tab}.unit3` : ""}
          readOnly={readOnly3}
        />
        <CheckboxField
          {...fieldsHash?.defaults3}
          defaultChecked={values?.defaults3}
          updatedName={tab ? `${tab}.defaults3` : ""}
          values={values}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          readOnly={readOnly3}
        />
        <Input
          {...fieldsHash?.exchange3}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          updatedName={tab ? `${tab}.exchange3` : ""}
          readOnly={readOnly3}
        />
        <Input
          {...fieldsHash?.barcode3}
          labelClassName={"w-[90px]"}
          inputClassName="flex-1"
          updatedName={tab ? `${tab}.barcode3` : ""}
          readOnly={readOnly3}
        />
      </div>
      <Textarea
        {...fieldsHash?.note}
        updatedName={tab ? `${tab}.note` : ""}
        containerClassName=""
      />
    </div>
  );
};
