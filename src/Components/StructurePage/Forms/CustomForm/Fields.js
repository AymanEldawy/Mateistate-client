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

export const Fields = ({
  fields,
  values,
  errors,
  getCachedList,
  handleInputChange,
}) => {
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
        if (field?.name.indexOf("terms") !== -1) {
          return (
            <Textarea
              key={`${field?.name}`}
              containerClassName="col-span-full"
              textareaClassName="min-h-[250px]"
              label={field?.name?.replace(/_/g, " ")}
              error={errors[field?.name] ? 'Field is required' : ''}
              handleInputChange={handleInputChange}
            />
          );
        } else if (field?.is_ref) {
          return (
            <UniqueField
              {...field}
              label={field?.name?.replace(/_/g, " ")}
              key={`${field?.name}`}
              table={field?.ref_table}
              getCachedList={getCachedList}
              list={!!getCachedList ? getCachedList(field?.ref_table) : []}
              error={errors[field?.name] ? 'Field is required' : ''}
              handleInputChange={handleInputChange}
            />
          );
        } else if (field?.key === "radio") {
          return (
            <Radio
              {...field}
              key={`${field?.name}`}
              label={field?.name?.replace(/_/g, " ")}
              error={errors[field?.name] ? 'Field is required' : ''}
              handleInputChange={handleInputChange}
            />
          );
        } else if (field?.key === "select") {
          return (
            <Select
              {...field}
              key={`${field?.name}`}
              label={field?.name?.replace(/_/g, " ")}
              value={values?.[field?.name]}
              error={errors[field?.name] ? 'Field is required' : ''}
              handleInputChange={handleInputChange}
            />
          );
        } else if (field?.key === "image") {
          return (
            <UploadFile
              containerClassName="col-span-2"
              src={values?.[field?.name]}
              index={i}
              readonly={field?.readonly}
              label={field?.name?.replace(/_/g, " ")}
              error={errors[field?.name] ? 'Field is required' : ''}
              handleInputChange={handleInputChange}
            />
          );
        } else if (field?.key === "checkbox" || field.key === "choose") {
          return (
            <Radio
              {...field}
              key={`${field?.name}`}
              label={field?.name?.replace(/_/g, " ")}
              type={field.key === "choose" ? "checkbox" : ""}
              list={field?.list}
              error={errors[field?.name] ? 'Field is required' : ''}
              handleInputChange={handleInputChange}
            />
          );
        } else if (field?.key === "switch") {
          return (
            // <Switch
            //   {...field}
            //   defaultChecked={values?.[field?.name]}
            //   key={`${field?.name}`}
            //   label={field?.name?.replace(/_/g, " ")}
            //   error={errors[field?.name] ? 'Field is required' : ''}
            // handleInputChange={handleInputChange}
            // />
            <></>
          );
        } else {
          return (
            <Input
              {...field}
              key={`${field?.name}`}
              label={field?.name?.replace(/_/g, " ")}
              error={errors[field?.name] ? 'Field is required' : ''}
              handleInputChange={handleInputChange}
            />
          );
        }
      })}
    </div>
  );
};
