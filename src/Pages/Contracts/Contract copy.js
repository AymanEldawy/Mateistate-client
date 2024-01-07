import BlockPaper from "Components/BlockPaper/BlockPaper";
import { DynamicForm } from "Components/StructurePage/Forms/CustomForm/DynamicForm";
import getFormByTableName from "Helpers/Forms/new-tables-forms";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

const Contract = () => {
  const params = useParams();
  const type = params?.type;
  const name = params?.name;
  const contractAssetsType = name?.split("_").at(0);
  const { next, back, currentIndex, goTo, isLast } = useFormSteps(steps);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("");
  const [fields, setFields] = useState([]);
  const [formSettings, setFormSettings] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});

  useEffect(() => {
    setErrors({});
    setValues({});
  }, [name]);

  useEffect(() => {
    getRefTables();
  }, [currentIndex]);

  useEffect(() => {
    if (oldValues) {
      setValues(oldValues);
    }
  }, [oldValues]);
  console.log(fields);

  const getRefTables = async () => {
    if (!fields?.length) return;

    for (const field of fields) {
      if (CACHE_LIST[field?.ref_table]) continue;

      if (field.is_ref) {
        const response = await ApiActions.read(field?.ref_table);
        CACHE_LIST[field?.ref_table] = response?.result;
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

  const handelChangeField = (name, value, required) => {
    if (required) {
      insertIntoErrors(name, value);
    }
    let tab = steps?.[currentIndex];
    setValues((prev) => ({
      ...prev,
      [tab]: {
        ...prev?.[tab],
        [name]: value,
      },
    }));
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

  // check if form is more then step
  useEffect(() => {
    if (!steps) return;

    let tab = steps?.[0];
    setFields(forms[tab]?.fields || []);
    setFormSettings(forms[tab]);
    checkRefTable(tab);
    console.log("🚀 ~ file: FormSteps.js:103 ~ useEffect ~ tab:", tab);
  }, [steps, forms]);

  async function checkRefTable(fields) {
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
  }

  useEffect(() => {
    let tabName = steps?.[currentIndex];
    setTab(tabName);
    setFields(forms?.[tabName]?.fields || []);
    setFormSettings(forms?.[tabName]);
  }, [currentIndex]);

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


  console.log(name, type, contractAssetsType);
  // Get data
  let formSchema = useMemo(() => {
    const forms = getFormByTableName(name);
    return forms;
  }, [name]);

  const forms = useMemo(() => formSchema?.forms, [formSchema]);
  console.log("🚀 ~ file: DynamicForm.js:14 ~ DynamicForm ~ forms:", forms);
  const steps = useMemo(() => formSchema?.steps, [formSchema]);

  return (
    <BlockPaper>
      <form onSubmit={onSubmit}>
        {formSettings?.formType === "grid" ? (
          <div key={steps?.[currentIndex]}>
            <TableForm
              activeStage={steps?.[currentIndex]}
              oldValues={values?.[tab] || {}}
              setGlobalValues={setValues}
              formSettings={formSettings}
              getCachedList={!!getCachedList ? getCachedList : undefined}
              allowSteps={steps?.length}
              initialFields={fields}
              onSubmit={onSubmit}
              goBack={back}
              goNext={next}
            />
          </div>
        ) : (
          <>
            {formSettings?.formType === "gallery" ? (
              <GalleryForm
                fields={fields}
                values={values[steps?.[currentIndex]]}
                errors={errors}
                handelFieldUpload={handelFieldUpload}
                handelChangeField={handelChangeField}
                getCachedList={getCachedList}
              />
            ) : (
              <Fields
                fields={fields}
                values={values[steps?.[currentIndex]]}
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
