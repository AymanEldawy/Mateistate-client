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
        <Input {...fieldsHash?.code} updatedName={tab ? `${tab}.code` : ""} />
        <Input {...fieldsHash?.name} updatedName={tab ? `${tab}.name` : ""} />
        <Input
          {...fieldsHash?.ltnName}
          updatedName={tab ? `${tab}.ltnName` : ""}
        />
        <UniqueField
          {...fieldsHash?.material_group_id}
          CACHE_LIST={CACHE_LIST}
          list={!!CACHE_LIST ? CACHE_LIST?.material_group : []}
          updatedName={tab ? `${tab}.material_group_id` : ""}
        />
        <Select
          {...fieldsHash?.material_type}
          updatedName={tab ? `${tab}.material_type` : ""}
        />
        <UniqueField
          {...fieldsHash?.category_id}
          CACHE_LIST={CACHE_LIST}
          list={!!CACHE_LIST ? CACHE_LIST?.category : []}
          updatedName={tab ? `${tab}.category_id` : ""}
        />
      </div>
      <div className="flex flex-col gap-4 flex-wrap w-full max-w-2xl mx-auto">
        <div className="grid grid-cols-2 items-center gap-4">
          <ReportInputField
            {...fieldsHash?.unit1}
            updatedName={tab ? `${tab}.unit1` : ""}
          />
          <CheckboxField
            {...fieldsHash?.defaults1}
            defaultChecked={values?.defaults1}
            updatedName={tab ? `${tab}.defaults1` : ""}
            values={values}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
          />
          <ReportInputField
            {...fieldsHash?.barcode2}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.barcode2` : ""}
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <ReportInputField
            {...fieldsHash?.unit2}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.unit2` : ""}
          />
          <CheckboxField
            {...fieldsHash?.defaults2}
            defaultChecked={values?.defaults2}
            updatedName={tab ? `${tab}.defaults2` : ""}
            values={values}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
          />
          <ReportInputField
            {...fieldsHash?.exchange2}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.exchange2` : ""}
          />
          <ReportInputField
            {...fieldsHash?.barcode1}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.barcode1` : ""}
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <ReportInputField
            {...fieldsHash?.unit3}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.unit3` : ""}
          />
          <CheckboxField
            {...fieldsHash?.defaults3}
            defaultChecked={values?.defaults3}
            updatedName={tab ? `${tab}.defaults3` : ""}
            values={values}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
          />
          <ReportInputField
            {...fieldsHash?.exchange3}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.exchange3` : ""}
          />
          <ReportInputField
            {...fieldsHash?.barcode3}
            labelClassName={"w-[90px]"}
            inputClassName="flex-1"
            updatedName={tab ? `${tab}.barcode3` : ""}
          />
        </div>
      </div>
      <Textarea
        {...fieldsHash?.note}
        updatedName={tab ? `${tab}.note` : ""}
        containerClassName=""
      />
    </div>
  );
};
