import BlockPaper from "Components/BlockPaper/BlockPaper";
import { ButtonsStepsGroup } from "Components/Global/ButtonsStepsGroup";
import FormHeadingTitleSteps from "Components/Global/FormHeadingTitleSteps";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import Installment from "Components/StructurePage/Installment/Installment";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import useFormSteps from "Hooks/useFormSteps";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ContractWrapperProvider from "./ContractWrapper";

const Contract = () => {
  const params = useParams();
  const name = params?.name;
  const type = params?.type;
  const contractAssetsType = name?.split("_").at(0);
  const [loading, setLoading] = useState(false);
  const method = useForm();
  const {
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = method;
  const {
    next,
    back,
    isLast,
    currentIndex,
    tab,
    formSettings,
    steps,
    fields,
    getCachedList,
  } = useFormSteps({ name });

  const handleInputChange = (name, value) => {
    setValue(name, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  // Handel Submit
  const onSubmit = async (value) => {
    console.log("🚀 ~ onSubmit ~ value:", value);
    next();
    if (!isLast()) return;
    setLoading(true);

    const getTheFunInsert = INSERT_FUNCTION[name];
    const res = await getTheFunInsert({ data: { value } });

    if (res?.success) {
      toast.success("Successfully added item in " + name);
    } else {
      toast.error("Failed to add new item in " + name);
    }
    setLoading(false);
  };
  console.log(watch());

  return (
    <ContractWrapperProvider>
      <Installment />
      <div key={name}>
        <FormProvider {...method}>
          <BlockPaper>
            <FormHeadingTitleSteps
              name={name}
              steps={steps}
              // changeTab={goTo}
              activeStage={currentIndex}
            />
            <div className="h-5" />
            <form onSubmit={handleSubmit(onSubmit)}>
              {formSettings?.formType === "grid" ? (
                <div key={steps?.[currentIndex]}>
                  <TableFields
                    tab={tab}
                    errors={errors}
                    formSettings={formSettings}
                    getCachedList={!!getCachedList ? getCachedList : undefined}
                    fields={fields}
                    // values={watch()?.[tab]}
                    handleInputChange={handleInputChange}
                  />
                </div>
              ) : (
                <Fields
                  fields={fields}
                  tab={tab}
                  values={watch()?.[tab]}
                  errors={errors}
                  getCachedList={getCachedList}
                  handleInputChange={handleInputChange}
                />
              )}
              <ButtonsStepsGroup
                isLast={isLast}
                loading={loading}
                steps={steps}
                back={back}
              />
            </form>
          </BlockPaper>
        </FormProvider>
      </div>
    </ContractWrapperProvider>
  );
};

export default Contract;
