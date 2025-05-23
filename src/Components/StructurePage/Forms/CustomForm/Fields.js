import React from "react";
import {
  CheckboxField,
  ColorField,
  CurrencyFieldGroup,
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
import UniqueFieldGroup from "Components/StructurePage/CustomFields/UniqueFieldGroup";

export const Fields = ({
  fields,
  values,
  errors,
  tab,
  globalButtonsActions,
  containerClassName,
  customGrid,
  fieldsRow,
  labelClassName
}) => {
  const { watch } = useFormContext();

  return (
    <div
      className={`grid ${customGrid
          ? customGrid
          : "grid-cols-1 md:grid-cols-2"
        } gap-[10px] gap-x-8 mb-8 w-full ${containerClassName}`}
    >
      {fields?.map((field, i) => {
        if (
          IGNORED_Fields?.includes(field.name) ||
          field?.hide_in_form ||
          field?.hide_in_form_add
        )
          return;
        if (field?.name?.indexOf("terms") !== -1 || field?.type === "long") {
          return (
            <Textarea
              {...field}
              key={`${field?.name}-${i}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              labelClassName={labelClassName}
              containerClassName="col-span-full"
              textareaClassName="min-h-[250px]"
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
        } else if (field?.name === "currency_id") {
          return (
            <CurrencyFieldGroup
              {...field}
              key={`${field?.name}-${i}`}
              tab={tab}
              errors={errors}
            />
          );
        } else if (field?.name === "connect_with") {
          return (
            <UniqueFieldGroup
              key={`${field?.name}-${i}`}
              tab={tab}
              errors={errors}
            />
          );
        } else if (field?.is_ref) {
          return (
            <UniqueField
              {...field}
              key={`${field?.name}-${i}`}
              labelClassName={labelClassName}
              containerClassName={
                fieldsRow ? "grid grid-cols-2 items-center gap-2" : ""
              }
              selectContainerClassName={
                fieldsRow ? "!flex-1 w-full min-h-[20px]" : ""
              }
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              table={field?.ref_table}
            />
          );
        } else if (field?.key === "select") {
          return (
            <Select
              {...field}
              key={`${field?.name}-${i}`}
              labelClassName={labelClassName}
              containerClassName={
                fieldsRow ? "grid grid-cols-2 items-center gap-2" : ""
              }
              selectClassName={fieldsRow ? "!flex-1 w-full h-[35px]" : ""}
              menuPortalTarget={document?.body}
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              value={watch(tab ? `${tab}.${field?.name}` : field?.name)}
            />
          );
        } else if (field?.key === "image") {
          return (
            <UploadFile
              {...field}
              key={`${field?.name}-${i}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              labelClassName={labelClassName}
              containerClassName="col-span-2"
              index={i}
              readonly={field?.readonly}
            />
          );
        } else if (field?.key === "switch") {
          return (
            <CheckboxField
              {...field}
              defaultChecked={values?.[field?.name]}
              key={`${field?.name}-${i}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              labelClassName="flex flex-col-reverse !items-start"
            />
            // <CheckboxField
            //   {...field}
            //   defaultChecked={values?.[field?.name]}
            //   key={`${field?.name}-${i}`}
            //   updatedName={tab ? `${tab}.${field?.name}` : ""}
            // />
            // <></>
          );
        } else if (field?.type === "checkbox" || field.key === "choose") {
          return (
            <Radio
              {...field}
              key={`${field?.name}-${i}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              type={field.key === "choose" ? "checkbox" : ""}
              list={field?.list}
              error={
                errors && tab
                  ? errors?.[tab]?.[field?.name]?.message
                  : errors?.[field?.name]?.message
              }
            />
          );
        } else if (field?.type === "color") {
          return (
            <ColorField
              {...field}
              key={`${field?.name}-${i}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              tab={tab}
            />
          );
        } else {
          return (
            <Input
              {...field}
              key={`${field?.name}-${i}`}
              labelClassName={labelClassName}
              containerClassName={
                fieldsRow ? "grid grid-cols-2 items-center gap-2" : ""
              }
              inputClassName={fieldsRow ? "!flex-1 h-[30px]" : ""}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              tab={tab}
            />
          );
        }
      })}
    </div>
  );
};
