import { useQuery } from "@tanstack/react-query";
import Loading from "Components/Global/Loading";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";
import FormLayout from "Components/StructurePage/Forms/FormWrapperLayout/FormLayout";
import GET_UPDATE_DATE from "Helpers/Lib/global-read-update";
import useCurd from "Hooks/useCurd";
import useFormPagination from "Hooks/useFormPagination";
import useFormSteps from "Hooks/useFormSteps";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CACHE_DATA = {};

const PatternsForm = ({ layout, name, onClose }) => {
  const params = useParams();
  const { getOneBy, remove } = useCurd()
  const id = params?.id;
  const [isLoading, setIsLoading] = useState(false);
  const { insert, set } = useCurd();

  const methods = useForm();
  const {
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    reset,
  } = methods;
  const formPagination = useFormPagination({ name, number: params?.number, reset });

  useQuery({
    queryKey: [
      "list",
      name,
      formPagination?.currentId
    ],
    queryFn: async () => {
      const response = await getOneBy(name, formPagination?.currentId);
      // if (response?.status) {
      reset(response?.result?.at(0))
      // }
      return await response?.result;
    },
  });



  const { currentIndex, goTo, steps, fields } = useFormSteps({
    name,
  });

  const onSubmit = async (values) => {
    if (!isDirty) return;

    setIsLoading(true);

    let res = null;

    try {
      if (values?.id) {
        res = await set(name, values, values?.id);
      } else {
        res = await insert(name, values);
      }

      if (res?.success) {
        toast.success(
          values?.id
            ? `Successfully update row: ${values?.name} in ${name}`
            : "Successfully added item in " + name
        );
      } else {
        throw new Error(res?.error?.detail);
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (

    <FormLayout
      steps={steps}
      activeStage={currentIndex}
      goTo={goTo}
      formClassName="w-full xl:min-w-[900px] 2xl:min-w-[1200px]"
      name={name}
      onClose={onClose}
      formPagination={formPagination}
      methods={methods} onSubmit={onSubmit}
      isLoading={isLoading}

    >
      {isLoading && <Loading />} {/* Add Spinner component */}
      <div key={name}>

        <Fields
          values={watch()}
          fields={fields}
          // tab={tab}
          // values={watch()}
          errors={errors}
          customGrid="grid grid-cols-2 gap-4"
          labelClassName="!w-fit min-w-[120px] max-w-[170px]"
        />

      </div>
    </FormLayout >

  );
};

export default PatternsForm;
