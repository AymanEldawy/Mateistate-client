import { useEffect } from "react";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { Button } from "Components/Global/Button";

import { toast } from "react-toastify";
import { ApiActions } from "Helpers/Lib/api";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { Fields } from "./Fields";

let CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const FormSingular = ({ name, fields, onClose, oldValues, refetchData }) => {
  const methods = useForm({ defaultValues: oldValues });
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = methods;
  console.log(watch());


  useEffect(() => {
    getRefTables();
    if(oldValues) {
      console.log(...oldValues);
      setValue(...oldValues)
    }
  }, [name]);


  
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
  const handleInputChange = (name, value) => {
    setValue(name, value);
  };

  // Handel Submit
  const onSubmit = async (value) => {
    console.log("🚀 ~ file: FormSingular.js:66 ~ onSubmit ~ value:", value);
    setLoading(true);

    const res = await ApiActions.insert(name, {
      data: getValues(),
    });

    if (res?.success) {
      toast.success("Successfully added item in " + name);
      if (!!onClose) onClose();
      if (!!refetchData) refetchData();
      // reset form
      reset();
    } else {
      toast.error("Failed to add new item in " + name);
    }
    setLoading(false);
  };

  return (
    <FormProvider {...methods}>
      <FormHeadingTitle title={name} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fields
          values={getValues()}
          errors={errors}
          getCachedList={getCachedList}
          fields={fields}
          handleInputChange={handleInputChange}
        />
        <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
          <Button title="Submit" loading={loading} />
        </div>
      </form>
    </FormProvider>
  );
};

export default FormSingular;
