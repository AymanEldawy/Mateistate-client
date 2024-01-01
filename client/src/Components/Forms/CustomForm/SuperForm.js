import { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Button } from "Components/Global/Button";
import { IGNORED_Fields } from "Helpers/constants";

import {
  Select,
  UniqueField,
  Input,
  Radio,
  UploadFile,
  Switch,
  Textarea,
} from "../Fields";

const SuperForm = ({
  onSubmit,
  initialFields,
  oldValues,
  getCachedList,
  setValues,
  tab,
  allowSteps,
  values,
  activeStage
}) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const location = useLocation();

  useEffect(() => {
    setErrors({});
    setTouched({});
  }, [location?.pathname, oldValues, tab]);

  const insertIntoErrors = (name, value) => {
    if (value === "") {
      setErrors((prev) => {
        return {
          ...prev,
          [name]: "Field is required",
        };
      });
    } else {
      let newErrors = errors;
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const onTouched = (name) => {
    if (touched[name]) return;
    setTouched((prev) => {
      return {
        ...prev,
        [name]: true,
      };
    });
  };

  const handelChangeField = (name, value, required) => {
    if (required) {
      insertIntoErrors(name, value);
    }
    if (name === "seclvl") value = +value;

    if (allowSteps)
      setValues((prev) => ({
        ...prev,
        [activeStage]: {
          ...prev?.[activeStage],
          [name]: value,
        },
      }));
    else
      setValues((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
  };

  const handelFieldUpload = (name, e, required) => {
    if (required) {
      // insertIntoErrors(name, value);
    }
    setValues((prev) => {
      return {
        ...prev,
        [name]: e.target.files[0],
      };
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
      {!!initialFields
        ? initialFields?.map((field, i) => {
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
                  onFocus={() => onTouched(field?.name)}
                  required={field?.required}
                  error={
                    touched[field?.name] && errors[field?.name]
                      ? errors[field?.name]
                      : null
                  }
                  onChange={(e) =>
                    handelChangeField(
                      field?.name,
                      e.target.value,
                      field?.required
                    )
                  }
                />
              );
            } else if (field?.is_ref) {
              return (
                <UniqueField
                  value={values?.[field?.name]}
                  table={field?.ref_table}
                  key={`${field?.name}`}
                  list={!!getCachedList ? getCachedList(field?.ref_table) : []}
                  type={field?.type}
                  // label={field?.name}
                  label={field?.name?.replace(/_/g, " ")}
                  name={field?.name}
                  onFocus={() => onTouched(field?.name)}
                  required={field?.required}
                  getSelectedValue={handelChangeField}
                />
              );
            } else if (field?.key === "radio") {
              return (
                <Radio
                  defaultChecked={values?.[field?.name]}
                  key={`${field?.name}`}
                  // label={field?.name}
                  label={field?.name?.replace(/_/g, " ")}
                  name={field?.name}
                  required={field?.required}
                  onFocus={() => onTouched(field?.name)}
                  error={
                    touched[field?.name] && errors[field?.name]
                      ? errors[field?.name]
                      : null
                  }
                  list={field?.list}
                  onChange={(e) =>
                    handelChangeField(
                      field?.name,
                      e.target.value,
                      field?.required
                    )
                  }
                />
              );
            } else if (field?.key === "select") {
              return (
                <Select
                  defaultValue={values?.[field?.name]}
                  key={`${field?.name}`}
                  name={field?.name}
                  // label={field?.name}
                  label={field?.name?.replace(/_/g, " ")}
                  onFocus={() => onTouched(field?.name)}
                  required={field?.required}
                  list={field?.list}
                  error={
                    touched[field?.name] && errors[field?.name]
                      ? errors[field?.name]
                      : null
                  }
                  value={values?.[field?.name]}
                  onChange={(e) =>
                    handelChangeField(
                      field?.name,
                      e.target.value,
                      field?.required
                    )
                  }
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
                  // label={field?.name}
                  label={field?.name?.replace(/_/g, " ")}
                  onFocus={() => onTouched(field?.name)}
                  required={field?.required}
                  error={
                    touched[field?.name] && errors[field?.name]
                      ? errors[field?.name]
                      : null
                  }
                  onChange={(e) =>
                    handelFieldUpload(field?.name, e, field?.required)
                  }
                />
              );
            } else if (field?.key === "checkbox" || field.key === "choose") {
              return (
                <Radio
                  // defaultChecked={values?.[field?.name]}
                  values={values?.[field?.name]}
                  key={`${field?.name}`}
                  label={field?.name?.replace(/_/g, " ")}
                  required={field?.required}
                  onFocus={() => onTouched(field?.name)}
                  type={field.key === "choose" ? "checkbox" : ""}
                  error={
                    touched[field?.name] && errors[field?.name]
                      ? errors[field?.name]
                      : null
                  }
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
                  defaultChecked={values?.[field?.name]}
                  key={`${field?.name}`}
                  // label={field?.name}
                  label={field?.name?.replace(/_/g, " ")}
                  name={field?.name}
                  required={field?.required}
                  onFocus={() => onTouched(field?.name)}
                  error={
                    touched[field?.name] && errors[field?.name]
                      ? errors[field?.name]
                      : null
                  }
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
                  value={values?.[field?.name]}
                  key={`${field?.name}`}
                  name={field?.name}
                  type={field?.type}
                  // label={field?.name}
                  label={field?.name?.replace(/_/g, " ")}
                  onFocus={() => onTouched(field?.name)}
                  required={field?.required}
                  error={
                    touched[field?.name] && errors[field?.name]
                      ? errors[field?.name]
                      : null
                  }
                  onChange={(e) =>
                    handelChangeField(
                      field?.name,
                      e.target.value,
                      field?.required
                    )
                  }
                />
              );
            }
          })
        : null}
    </div>
  );
};

export default memo(SuperForm);
