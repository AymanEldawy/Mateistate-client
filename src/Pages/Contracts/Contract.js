import BlockPaper from "Components/BlockPaper/BlockPaper";
import { Button } from "Components/Global/Button";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import { GalleryForm } from "Components/StructurePage/Forms/CustomForm/GalleryForm";
import TableForm from "Components/StructurePage/Forms/CustomForm/TableForm";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import useFormSteps from "Hooks/useFormSteps";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Contract = () => {
  const params = useParams();
  const name = params?.name;
  const type = params?.type;
  const contractAssetsType = name?.split("_").at(0);
  const [loading, setLoading] = useState(false);
  const {
    next,
    back,
    isFirst,
    isLast,
    goTo,
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
  } = useFormSteps({ name });

  console.log(values, "v");
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
    } else {
      toast.error("Failed to add new item in " + name);
    }
    setLoading(false);
  };

  return (
    <BlockPaper>
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
              oldValues={values?.[tab] || {}}
              setValues={setValues}
              formSettings={formSettings}
              getCachedList={!!getCachedList ? getCachedList : undefined}
              fields={fields}
              values={values[tab]}
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
    </BlockPaper>
  );
};

export default Contract;
