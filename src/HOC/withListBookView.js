import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import { VoucherStepsButton } from "Components/StructurePage/Forms/Vouchers/VoucherStepsButton";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION, {
  getLastNumberByColumn,
  getLastNumberByName,
} from "Helpers/Lib/operations/global-insert";
import { GET_UPDATE_DATE_BY_NUMBER } from "Helpers/Lib/operations/global-read-update";
import { CONSTANT_COLUMNS_NAME, HAS_INTERNAL_NUMBER } from "Helpers/constants";
import { usePopupForm } from "Hooks/usePopupForm";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { getResetFields } from "Helpers/Lib/operations/global-reset";

let CACHE_DATA = {};

export default function withListBookView(FormComponent, additional) {
  return ({ defaultValues, name, popupView, code, ...props }) => {
    const params = useParams();
    name = additional?.name || name;
    const [number, setNumber] = useState(params?.number || 1);
    const [maxLength, setMaxLength] = useState(1);
    const [refresh, setRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { openForm, setRecordResponse } = usePopupForm();
    const [listOfNumbers, setListOfNumbers] = useState();

    const methods = useForm({
      defaultValues: {} ,
    });
    const {
      reset,
      watch,
      formState: { isDirty },
      handleSubmit,
    } = methods;

    useEffect(() => {
      if (!number) return;
      if (+number <= maxLength) fetchData();
    }, [number]);

    const isLayoutUpdate = useMemo(() => {
      return parseInt(maxLength) >= parseInt(number);
    }, [maxLength, number]);

    useEffect(() => {
      const getNumberList = async () => {
        let params = {
          // sorts: [{ column: "number", order: "DESC", nulls: "last" }],
        };
        if (code) {
          params.conditions = [
            { type: "and", conditions: [["code", "=", +code]] },
          ];
        }
        const res = await ApiActions.read(name, params);
        if (res?.success) {
          let data = res?.result;
          let list = [];

          for (const item of data) {
            list.push(item?.number);
          }
          let lastNumber = +list.at(-1);
          setListOfNumbers(list);
          setMaxLength(lastNumber || 0);
          setNumber(lastNumber || 1);
        }
      };

      getNumberList();
    }, [name]);

    const fetchData = async () => {
      if (CACHE_DATA?.[number] && +number <= maxLength) {
        reset(CACHE_DATA?.[number]);
      } else {
        let data = null;
        setIsLoading(true);
        if (GET_UPDATE_DATE_BY_NUMBER?.[name]) {
          const getUpdateData = GET_UPDATE_DATE_BY_NUMBER?.[name];
          data = await getUpdateData(number);
        } else {
          const res = await ApiActions.read(name, {
            conditions: [
              { type: "and", conditions: [["number", "=", number]] },
            ],
          });
          if (res?.success) {
            data = res?.result?.at(0);
          }
        }
        if (data?.id) {
          CACHE_DATA[number] = data;
          reset(data);
        } else {
          reset({ ...getResetFields(name)  });
          setRefresh((p) => !p);
        }
        setIsLoading(false);
      }
    };
    console.log(watch());

    const onClickAddNew = () => {
      setNumber(+maxLength + 1);
      reset({
        ...getResetFields(name) ,
      });
      setRefresh((p) => !p);

    };

    const goToNumber = (num) => {
      console.log("🚀 ~ goToNumber ~ num:", num);
      if (num > maxLength) {
        setRefresh((p) => !p);
      }
      setNumber(num);
    };

    const onDelete = async () => {};

    console.log(number, maxLength, "-w");
    // Handel Submit
    const onSubmit = async (value) => {
      if (!isDirty) return;
      setIsLoading(true);

      let values = {};
      for (const key in value) {
        let val = value[key];
        if (val !== undefined && val !== null && val !== "") {
          values[key] = val;
        }
      }

      let res = null;

      if (isLayoutUpdate) {
        res = await ApiActions.update(name, {
          conditions: [{ type: "and", conditions: [["id", "=", watch("id")]] }],
          updates: values,
        });
      } else {
        if (INSERT_FUNCTION?.[name]) {
          const getTheFunInsert = INSERT_FUNCTION[name];
          res = await getTheFunInsert(values);
        } else {
          res = await ApiActions.insert(name, {
            data: values,
          });
        }
      }

      if (res?.success) {
        toast.success(
          maxLength >= number
            ? `Successfully update row: ${values?.name} in ${name}`
            : "Successfully added item in " + name
        );

        if (!!setRecordResponse) {
          setRecordResponse({ table: name, response: res });
        }

        if (!isLayoutUpdate) {
          setMaxLength((prev) => +prev + 1);
          if (openForm.table) {
            let record = res?.record;
            let { additional } = openForm;
            additional?.setList((prev) => {
              return [...prev, { label: record?.name, value: record?.id }];
            });
            additional?.setValue(additional?.name, record.id);
          }

          reset();
        }
      } else {
        toast.error("Failed to add new item in " + name);
      }
      setIsLoading(false);
    };

    return (
      <BlockPaper
        containerClassName={popupView ? "z-[102] p-0" : null}
        bodyClassName={popupView ? "!p-0" : null}
        boxClassName={popupView ? "!shadow-none !p-0" : null}
        layoutBodyClassName={popupView ? "!my-0" : null}
      >
        <FormProvider {...methods}>
          <form key={number} onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormComponent
              goToNumber={goToNumber}
              onClickAddNew={onClickAddNew}
              number={number}
              setNumber={setNumber}
              maxLength={maxLength}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setMaxLength={setMaxLength}
              name={name}
              methods={methods}
              {...props}
            />
            <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
              <VoucherStepsButton
                number={number}
                goTo={goToNumber}
                // maxLength={maxLength}
                maxLength={maxLength}
                isNewOne={number > maxLength}
                setNumber={setNumber}
                onClickDelete={() => onDelete(CONSTANT_COLUMNS_NAME.is_deleted)}
                isArchived={watch(CONSTANT_COLUMNS_NAME.is_archived)}
                isDeleted={watch(CONSTANT_COLUMNS_NAME.is_deleted)}
                allowActions={watch("id")}
                onClickAddNew={onClickAddNew}
              />

              <Button
                title={maxLength >= number ? "Modify" : "Submit"}
                classes="ltr:ml-auto rtl:mr-auto"
                disabled={!isDirty}
              />
            </div>
          </form>
        </FormProvider>
      </BlockPaper>
    );
  };
}
