import React from "react";
import {
  Input,
  Radio,
  Select,
  Switch,
  Textarea,
  UniqueField,
  UploadFile,
} from "Components/StructurePage/CustomFields";
import { IGNORED_Fields } from "Helpers/constants";
import { ButtonField } from "Components/StructurePage/CustomFields/ButtonField";
import { useFormContext } from "react-hook-form";

export const Fields = ({
  fields,
  values,
  errors,
  getCachedList,
  tab,
  globalButtonsActions,
}) => {
  const { watch } = useFormContext();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
      {fields?.map((field, i) => {
        if (
          IGNORED_Fields?.includes(field.name) ||
          field?.hide_in_form ||
          field?.hide_in_form_add ||
          field?.name === "created_at"
        )
          return;
        if (field?.name.indexOf("terms") !== -1 || field?.type === "long") {
          return (
            <Textarea
              {...field}
              key={`${field?.name}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              containerClassName="col-span-full"
              textareaClassName="min-h-[250px]"
              label={field?.name?.replace(/_/g, " ")}
              values={values}
              error={
                tab
                  ? errors?.[tab]?.[field?.name]?.type
                  : errors?.[field?.name]?.type
              }
            />
          );
        } else if (field?.name === "btn_action") {
          return (
            <ButtonField
              {...field}
              key={`${field?.label}`}
              watch={tab ? `${tab}.${field?.watch}` : field.watch}
              globalButtonsActions={globalButtonsActions}
            />
          );
        } else if (field?.is_ref) {
          return (
            <UniqueField
              {...field}
              label={field?.name?.replace(/_/g, " ")}
              key={`${field?.name}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              table={field?.ref_table}
              getCachedList={getCachedList}
              list={!!getCachedList ? getCachedList(field?.ref_table) : []}
              values={values}
              error={
                tab
                  ? errors?.[tab]?.[field?.name]?.type
                  : errors?.[field?.name]?.type
              }
            />
          );
        } else if (field?.key === "radio") {
          // console.log('radio', field);
          return (
            <Radio
              {...field}
              key={`${field?.name}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              label={field?.name?.replace(/_/g, " ")}
              values={values}
              error={
                tab
                  ? errors?.[tab]?.[field?.name]?.type
                  : errors?.[field?.name]?.type
              }
            />
          );
        } else if (field?.key === "select") {
          // console.log('select', field);
          return (
            <Select
              {...field}
              key={`${field?.name}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              label={field?.name?.replace(/_/g, " ")}
              values={values}
              value={watch(tab ? `${tab}.${field?.name}` : field?.name)}
              error={
                tab
                  ? errors?.[tab]?.[field?.name]?.type
                  : errors?.[field?.name]?.type
              }
            />
          );
        } else if (field?.key === "image") {
          // console.log('image', field);
          return (
            <UploadFile
              {...field}
              key={`${field?.name}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              containerClassName="col-span-2"
              // src={values?.[field?.name]}
              index={i}
              readonly={field?.readonly}
              label={field?.name?.replace(/_/g, " ")}
              values={values}
              error={
                tab
                  ? errors?.[tab]?.[field?.name]?.type
                  : errors?.[field?.name]?.type
              }
            />
          );
        } else if (field?.key === "switch") {
          // console.log('switch', field);
          return (
            <Switch
              {...field}
              defaultChecked={values?.[field?.name]}
              key={`${field?.name}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              label={field?.name?.replace(/_/g, " ")}
              values={values}
              error={errors?.[field?.name] ? "Field is required" : ""}
            />
            // <></>
          );
        } else if (field?.type === "checkbox" || field.key === "choose") {
          // console.log('checkbox', 'choose', field);
          return (
            <Radio
              {...field}
              key={`${field?.name}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              label={field?.name?.replace(/_/g, " ")}
              type={field.key === "choose" ? "checkbox" : ""}
              list={field?.list}
              values={values}
              error={
                tab
                  ? errors?.[tab]?.[field?.name]?.type
                  : errors?.[field?.name]?.type
              }
            />
          );
        } else {
          // console.log('normal', field?.type , field);
          return (
            <Input
              {...field}
              key={`${field?.name}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              label={field?.name?.replace(/_/g, " ")}
              values={values}
              tab={tab}
              error={
                tab
                  ? errors?.[tab]?.[field?.name]?.type
                  : errors?.[field?.name]?.type
              }
            />
          );
        }
      })}
    </div>
  );
};
