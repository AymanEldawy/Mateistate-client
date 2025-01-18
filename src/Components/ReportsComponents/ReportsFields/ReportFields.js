import {
  CheckboxField,
  Input,
  Select,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import { useFormContext } from "react-hook-form";
import ReportSelectField from "./ReportSelectField";
import ReportUniqueField from "./ReportUniqueField";
import ReportInputField from "./ReportInputField";
import { ReportFieldBetweenValues } from "./ReportFieldBetweenValues";

export const ReportFields = ({
  fields,
  values,
  tab,
  containerClassName,
  sharedLabelClassName,
  sharedInputClassName,
  sharedContainerClassName,
}) => {
  const { watch } = useFormContext();

  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      {fields?.map((field, i) => {
        if (field?.is_ref) {
          return (
            <ReportUniqueField
              {...field}
              key={`${field?.name}-${i}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              table={field?.ref_table}
              values={values}
              labelClassName={sharedLabelClassName}
              containerClassName={sharedContainerClassName}
              inputClassName={sharedInputClassName}
            />
          );
        } else if (field?.key === "select") {
          return (
            <ReportSelectField
              {...field}
              key={`${field?.name}-${i}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              values={values}
              value={watch(tab ? `${tab}.${field?.name}` : field?.name)}
              labelClassName={sharedLabelClassName}
              containerClassName={sharedContainerClassName}
              selectContainerClassName={sharedInputClassName}
            />
          );
        } else if (field?.key === "switch") {
          return (
            <CheckboxField
              {...field}
              defaultChecked={values?.[field?.name]}
              key={`${field?.name}-${i}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              values={values}
              labelClassName={sharedLabelClassName}
              containerClassName={sharedContainerClassName}
              inputClassName={sharedInputClassName}
            />
          );
        } else if (field?.key === "between") {
          return (
            <ReportFieldBetweenValues
              {...field}
              key={`${field?.name}-${i}`}
              labelClassName={sharedLabelClassName}
              containerClassName={sharedContainerClassName}
              inputClassName={sharedInputClassName}
            />
          );
        } else {
          return (
            <ReportInputField
              {...field}
              key={`${field?.name}-${i}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              values={values}
              tab={tab}
              labelClassName={sharedLabelClassName}
              containerClassName={sharedContainerClassName}
              inputClassName={sharedInputClassName}
            />
          );
        }
      })}
    </div>
  );
};
