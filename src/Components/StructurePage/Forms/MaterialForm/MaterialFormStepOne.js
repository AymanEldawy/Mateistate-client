import ReportInputField from "Components/ReportsComponents/ReportsFields/ReportInputField";
import ReportUniqueField from "Components/ReportsComponents/ReportsFields/ReportUniqueField";
import {
  CheckboxField,
  Input,
  Select,
  Textarea,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import React, { useEffect, useMemo } from "react";

export const MaterialFormStepOne = ({
  tab,
  fields,
  values = {},
  errors,
  CACHE_LIST,
}) => {
  
  const fieldsHash = useMemo(() => {
    let hash = {};
    for (const field of fields || []) {
      hash[field?.name] = field;
    }
    return hash;
  }, [fields]);

  if (!Object.keys(fieldsHash).length) return;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-3 gap-4">
        <Input
          {...fieldsHash?.code}
          error={errors?.code ? "Field is required" : ""}
          updatedName={tab ? `${tab}.code` : ""}
        />
        <Input
          {...fieldsHash?.name}
          error={errors?.name ? "Field is required" : ""}
          updatedName={tab ? `${tab}.name` : ""}
        />
        <Input
          {...fieldsHash?.ltnName}
          error={errors?.ltnName ? "Field is required" : ""}
          updatedName={tab ? `${tab}.ltnName` : ""}
        />
        <UniqueField
          {...fieldsHash?.material_group_id}
          CACHE_LIST={CACHE_LIST}
          list={!!CACHE_LIST ? CACHE_LIST?.material_group : []}
          error={errors?.material_group_id ? "Field is required" : ""}
          updatedName={tab ? `${tab}.material_group_id` : ""}
        />
        <Select
          {...fieldsHash?.material_type}
          error={errors?.material_type ? "Field is required" : ""}
          updatedName={tab ? `${tab}.material_type` : ""}
        />
        <UniqueField
          {...fieldsHash?.category_id}
          CACHE_LIST={CACHE_LIST}
          list={!!CACHE_LIST ? CACHE_LIST?.category : []}
          error={errors?.category_id ? "Field is required" : ""}
          updatedName={tab ? `${tab}.category_id` : ""}
        />
      </div>
      <div className="flex flex-col gap-4 flex-wrap w-full max-w-2xl mx-auto">
        <div className="grid grid-cols-2 items-center gap-4">
          <ReportInputField
            {...fieldsHash?.unit1}
            error={errors?.unit1 ? "Field is required" : ""}
            updatedName={tab ? `${tab}.unit1` : ""}
          />
          <CheckboxField
            {...fieldsHash?.defaults1}
            defaultChecked={values?.defaults1}
            updatedName={tab ? `${tab}.defaults1` : ""}
            values={values}
            error={errors?.defaults1 ? "Field is required" : ""}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
          />
          <ReportInputField
            {...fieldsHash?.barcode2}
            error={errors?.barcode2 ? "Field is required" : ""}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.barcode2` : ""}
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <ReportInputField
            {...fieldsHash?.unit2}
            error={errors?.unit2 ? "Field is required" : ""}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.unit2` : ""}
          />
          <CheckboxField
            {...fieldsHash?.defaults2}
            defaultChecked={values?.defaults2}
            updatedName={tab ? `${tab}.defaults2` : ""}
            values={values}
            error={errors?.defaults2 ? "Field is required" : ""}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
          />
          <ReportInputField
            {...fieldsHash?.exchange2}
            error={errors?.exchange2 ? "Field is required" : ""}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.exchange2` : ""}
          />
          <ReportInputField
            {...fieldsHash?.barcode1}
            error={errors?.barcode1 ? "Field is required" : ""}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.barcode1` : ""}
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <ReportInputField
            {...fieldsHash?.unit3}
            error={errors?.unit3 ? "Field is required" : ""}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.unit3` : ""}
          />
          <CheckboxField
            {...fieldsHash?.defaults3}
            defaultChecked={values?.defaults3}
            updatedName={tab ? `${tab}.defaults3` : ""}
            values={values}
            error={errors?.defaults3 ? "Field is required" : ""}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
          />
          <ReportInputField
            {...fieldsHash?.exchange3}
            error={errors?.exchange2 ? "Field is required" : ""}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.exchange3` : ""}
          />
          <ReportInputField
            {...fieldsHash?.barcode3}
            error={errors?.barcode3 ? "Field is required" : ""}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.barcode3` : ""}
          />
        </div>
      </div>
      <Textarea
          {...fieldsHash?.note}
          error={errors?.note ? "Field is required" : ""}
          updatedName={tab ? `${tab}.note` : ""}
          containerClassName=""
        />

    </div>
  );
};
