import { useEffect, useMemo } from "react";
import { useState } from "react";

import { Button } from "Components/Global/Button";

import useRefTable from "Hooks/useRefTable";
import { toast } from "react-toastify";
import { ApiActions } from "Helpers/Lib/api";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { Fields } from "./Fields";

let CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const FormSingular = ({ name, fields, onClose, oldValues= {}, refetchData }) => {

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(false);

  useEffect(() => {
    setErrors({});
    setTouched({});
    getRefTables()

  }, [name]);

  
  useEffect(() => {
    if (Object.keys(oldValues)?.length) {
      setValues(oldValues);
    }
  }, [oldValues]);

  const getRefTables = async () => {
    if (!fields?.length) return;

    for (const field of fields) {
      if (field.is_ref) {
        const response = await ApiActions.read(field?.ref_table);
        CACHE_LIST[field?.ref_table] = response?.result;

        for (const item of response?.result) {
          CACHE_LIST[item.id] = item.name || item.number || item.id;
        }
      }
    }
  };

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

  // Handel Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await ApiActions.insert(name, {
      data: values,
    });

    if (res?.success) {
      toast.success("Successfully added item in " + name);
      if (!!onClose) onClose();
      if (!!refetchData) refetchData();
      setValues({});
    } else {
      toast.error("Failed to add new item in " + name);
    }
    setLoading(false);
  };
  return (
    <>
      <FormHeadingTitle title={name} />
      <form onSubmit={onSubmit}>
        <Fields
          fields={fields}
          values={values}
          errors={errors}
          handelFieldUpload={handelFieldUpload}
          handelChangeField={handelChangeField}
          getCachedList={getCachedList}
        />
        <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
          <Button title="Submit" loading={loading} />
        </div>
      </form>
    </>
  );
};

export default FormSingular;
