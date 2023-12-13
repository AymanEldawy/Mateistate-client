import { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Button } from "Components/Global/Button";
import { IGNORED_Fields } from "Helpers/constants";

import CheckboxField from "./CheckboxField";
import Field from "./Field";
import InputField from "./InputField";
import RadioField from "./RadioField";
import SelectField from "./SelectField";
import UploadFile from "./UploadFile";

const SuperForm = ({
  onSubmit,
  initialFields,
  goBack,
  goNext,
  allowSteps,
  oldValues,
  getCachedList,
}) => {

  const [submitLoader, setSubmitLoader] = useState(false)
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const location = useLocation();
  
  useEffect(() => {
    setErrors({});
    setTouched({});
    if (oldValues) {
      setValues(oldValues);
    } else {
      setValues({});
    }
  }, [location?.pathname, oldValues]);
  
  // useEffect(() => {
  //   if (oldValues) {
  //     setValues(oldValues);
  //   }
  // }, [oldValues]);

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
    if(name === 'seclvl')
      value = +value
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

  const submit = async (e) => {
    e.preventDefault();
    if (!errors.length) {
      setSubmitLoader(true)
      const res = await onSubmit(values);
      if (res) {
        setValues({});
        setErrors({});
        setTouched({});
      }
      setSubmitLoader(false)
    }
  };
  
  return (
    <form onSubmit={submit} className="mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {!!initialFields
          ? initialFields?.map((field, i) => {
              if(IGNORED_Fields?.includes(field.name)) return;
              if (field?.key === "input") {
                return (
                  <InputField
                    value={values?.[field?.name]}
                    key={`${field?.name}`}
                    type={field?.type}
                    name={field?.name}
                    label={field?.name}
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
                  <Field
                    value={values?.[field?.name]}
                    table={field?.ref_table}
                    key={`${field?.name}`}
                    list={!!getCachedList ? getCachedList(field?.ref_table) : []}
                    type={field?.type}
                    label={field?.name}
                    name={field?.name}
                    onFocus={() => onTouched(field?.name)}
                    required={field?.required}
                    getSelectedValue={handelChangeField}
                  />
                );
              } else if (field?.key === "radio") {
                return (
                  <RadioField
                    defaultChecked={values?.[field?.name]}
                    key={`${field?.name}`}
                    label={field?.name}
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
                  <SelectField
                    defaultValue={values?.[field?.name]}
                    key={`${field?.name}`}
                    name={field?.name}
                    label={field?.name}
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
                    label={field?.name}
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
              } else if (field?.key === "checkbox") {
                return (
                  <CheckboxField
                    defaultChecked={values?.[field?.name]}
                    key={`${field?.name}`}
                    label={field?.name}
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
              } else {
                return (
                  <InputField
                    value={values?.[field?.name]}
                    key={`${field?.name}`}
                    name={field?.name}
                    type={field?.type}
                    label={field?.name}
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
      <div className="flex justify-between gap-4 items-center">
        {allowSteps ? (
          <Button title="Back" onClick={goBack} type="button" />
        ) : null}
        {!!goNext && allowSteps ? (
          <Button type="button" title="Next" onClick={goNext} />
        ) : (
          <Button type="submit" title="Submit" loading={submitLoader} />
        )}
      </div>
    </form>
  );
};

export default memo(SuperForm);
