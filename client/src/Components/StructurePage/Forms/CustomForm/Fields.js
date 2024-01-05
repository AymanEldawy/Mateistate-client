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
  handelFieldUpload,
  handelChangeField,
  getCachedList,
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
              containerClassName="col-span-full"
              textareaClassName="min-h-[250px]"
              value={values?.[field?.name]}
              key={`${field?.name}`}
              type={field?.type}
              name={field?.name}
              label={field?.name?.replace(/_/g, " ")}
              required={field?.required}
              error={errors[field?.name]}
              onChange={(e) =>
                handelChangeField(field?.name, e.target.value, field?.required)
              }
            />
          );
        } else if (field?.is_ref) {
          return (
            <UniqueField
              {...field}
              value={values?.[field?.name]}
              table={field?.ref_table}
              key={`${field?.name}`}
              list={!!getCachedList ? getCachedList(field?.ref_table) : []}
              type={field?.type}
              label={field?.name?.replace(/_/g, " ")}
              name={field?.name}
              getSelectedValue={handelChangeField}
              error={errors[field?.name]}
            />
          );
        } else if (field?.key === "radio") {
          return (
            <Radio
              defaultChecked={values?.[field?.name]}
              key={`${field?.name}`}
              label={field?.name?.replace(/_/g, " ")}
              name={field?.name}
              required={field?.required}
              error={errors[field?.name]}
              list={field?.list}
              onChange={(e) =>
                handelChangeField(field?.name, e.target.value, field?.required)
              }
            />
          );
        } else if (field?.key === "select") {
          return (
            <Select
              defaultValue={values?.[field?.name]}
              key={`${field?.name}`}
              name={field?.name}
              label={field?.name?.replace(/_/g, " ")}
              required={field?.required}
              list={field?.list}
              error={errors[field?.name]}
              value={values?.[field?.name]}
              onChange={(e) => {
                let value = field.intValue ? +e.target.value : e.target.value;
                handelChangeField(field?.name, value, field?.required);
              }}
            />
          );
        } else if (field?.key === "image") {
          return (
            <UploadFile
              containerClassName="col-span-2"
              src={values?.[field?.name]}
              index={i}
              name={field?.name}
              readonly={field?.readonly}
              label={field?.name?.replace(/_/g, " ")}
              required={field?.required}
              error={errors[field?.name]}
              onChange={(e) =>
                handelFieldUpload(field?.name, e, field?.required)
              }
            />
          );
        } else if (field?.key === "checkbox" || field.key === "choose") {
          return (
            <Radio
              {...field}
              values={values?.[field?.name]}
              key={`${field?.name}`}
              label={field?.name?.replace(/_/g, " ")}
              required={field?.required}
              type={field.key === "choose" ? "checkbox" : ""}
              error={errors[field?.name]}
              list={field?.list}
              onChange={(e) => {
                if (field.type === "json") {
                  handelChangeField(
                    field?.name,
                    {
                      ...values?.[field?.name],
                      [e.target.name]: e.target.checked,
                    },
                    field?.required
                  );
                } else {
                  handelChangeField(
                    field?.name,
                    e.target.checked,
                    field?.required
                  );
                }
              }}
            />
          );
        } else if (field?.key === "switch") {
          return (
            <Switch
              {...field}
              defaultChecked={values?.[field?.name]}
              key={`${field?.name}`}
              label={field?.name?.replace(/_/g, " ")}
              error={errors[field?.name]}
              onChange={(e) =>
                handelChangeField(
                  field?.name,
                  e.target.checked,
                  field?.required
                )
              }
            />
          );
        } else {
          return (
            <Input
              {...field}
              key={`${field?.name}`}
              value={values?.[field?.name]}
              label={field?.name?.replace(/_/g, " ")}
              error={errors[field?.name]}
              onChange={(e) => {
                let val =
                  field.type === "number" ? +e.target.value : e.target.value;
                handelChangeField(field?.name, val, field?.required);
              }}
            />
          );
        }
      })}
    </div>
  );
};
