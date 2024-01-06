import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useState } from "react";
import { Button } from "Components/Global/Button";
import { toast } from "react-toastify";
import GLOBAL_INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import TableForm from "./TableForm";
import useFormSteps from "Hooks/useFormSteps";

import { Fields } from "./Fields";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import { GalleryForm } from "./GalleryForm";

const CACHE_LIST = {};

const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};

const FormSteps = ({ name, onClose, refetchData, oldValues }) => {
  const {
    next,
    back,
    isLast,
    currentIndex,
    values,
    errors,
    handelChangeField,
    handelFieldUpload,
    tab,
    formSettings,
    steps,
    setValues,
    fields,
    getCachedList,
  } = useFormSteps({ name, oldValues });
  const [loading, setLoading] = useState(false);

  // Handel Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    next();
    if (!isLast()) return;
    setLoading(true);
    const getTheFunInsert = INSERT_FUNCTION[name];
    const res = await getTheFunInsert({ data: { test: "tes", ...values } });

    if (res?.success) {
      toast.success("Successfully added item in " + name);
      if (!!refetchData) refetchData();
      setValues({});
    } else {
      toast.error("Failed to add new item in " + name);
    }
    if (!!onClose) onClose();
    setLoading(false);
  };

  return (
    <>
      <FormHeadingTitleSteps
        name={name}
        steps={steps}
        // changeTab={goTo}
        activeStage={currentIndex}
      />
      <div className="h-5" />
      <form onSubmit={onSubmit}>
        {formSettings?.formType === "grid" ? (
          <div key={steps[currentIndex]}>
            <TableForm
              activeStage={tab}
              values={values[tab]}
              setValues={setValues}
              fields={fields}
              getCachedList={!!getCachedList ? getCachedList : undefined}
            />
          </div>
        ) : (
          <>
            {formSettings?.formType === "gallery" ? (
              <GalleryForm
                fields={fields}
                values={values[steps[currentIndex]]}
                errors={errors}
                handelFieldUpload={handelFieldUpload}
                handelChangeField={handelChangeField}
                getCachedList={getCachedList}
              />
            ) : (
              <Fields
                fields={fields}
                values={values[steps[currentIndex]]}
                errors={errors}
                handelFieldUpload={handelFieldUpload}
                handelChangeField={handelChangeField}
                getCachedList={getCachedList}
              />
            )}
          </>
        )}
        <div className="flex justify-between gap-4 items-center mt-4">
          {steps ? <Button title="Back" onClick={back} type="button" /> : null}
          <Button title={isLast() ? "Submit" : "next"} loading={loading} />
        </div>
      </form>
    </>
  );
};

export default FormSteps;
