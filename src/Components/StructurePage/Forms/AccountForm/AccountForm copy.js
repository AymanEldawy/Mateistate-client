import { ApiActions } from "Helpers/Lib/api";
import FormHeadingTitle from "Components/Global/FormHeadingTitle";
import { useEffect, useState } from "react";
import { getLastNumberByColumn } from "../../../../Helpers/Lib/global-insert";
import useRefTable from "Hooks/useRefTables";
import { FormProvider, useForm } from "react-hook-form";
import BlockPaper from "Components/Global/BlockPaper";
import { toast } from "react-toastify";
import useListView from "Hooks/useListView";
import { usePopupForm } from "Hooks/usePopupForm";
import { getResetFields } from "Helpers/Lib/global-reset";
import { Button } from "Components/Global/Button";
import { FormStepPagination } from "../../../Global/FormStepPagination";
import { CONSTANT_COLUMNS_NAME } from "Helpers/constants";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import Loading from "Components/Global/Loading";
import { removeNullValues } from "Helpers/functions";
import { AccountFormFields } from "./AccountFormFields";
import {
  ACCOUNT_ASSEMBLY_TYPE_CODE,
  ACCOUNT_ASSEMBLY_TYPE_NAME,
  ACCOUNT_DISTRIBUTIVE_TYPE_CODE,
  ACCOUNT_DISTRIBUTIVE_TYPE_NAME,
  ACCOUNT_NORMAL_TYPE_CODE,
} from "Helpers/GENERATE_STARTING_DATA";
import { insertIntoGrid } from "Helpers/Lib/vouchers-insert";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const automaticChangesOnAccount = async (name, watch, setValue) => {
  if (name === "parent_id") {
    const response = await ApiActions.read("account", {
      conditions: [
        { type: "and", conditions: [["id", "=", watch("parent_id")]] },
      ],
    });
    if (response?.success) {
      const number = await getLastNumberByColumn(
        "account",
        "parent_id",
        watch("parent_id"),
        "internal_number"
      );

      let record = response?.result?.at(0);
      const accountNumber = number
        ? +number + 1
        : record?.internal_number + "1";

      setValue("final_id", record?.final_id || record?.parent_id);
      setValue("internal_number", accountNumber);
    }
  }
};

const onChangeAccountType = async (value, setValue) => {
  if (value < 2) return;

  // const res = await getLastNumberByName("account", 'internal_number');
  const res = await ApiActions.read("account", {
    limit: 1,
    conditions: [
      {
        type: "and",
        conditions: [["parent_id", "==", "null"]],
      },
    ],
    sorts: [{ column: "internal_number", order: "DESC", nulls: "last" }],
  });
  if (res?.result?.length) {
    setValue("internal_number", +res?.result?.at(0)?.internal_number + 1);
  }
};

const calculatePercentage = (watch, setTotalPercentage) => {
  let grid = watch(ACCOUNT_DISTRIBUTIVE_TYPE_NAME);
  if (grid?.length < 1) return;

  setTotalPercentage(
    parseInt(
      grid?.reduce((result, curr) => {
        return result + (+curr?.percentage || 0);
      }, 0)
    )
  );
};

const AccountForm = ({ onClose, popupView }) => {
  const name = "account";
  const params = useParams();
  const {
    goToNumber,
    isLayoutUpdate,
    listOfNumbers,
    number,
    setNumber,
    maxLength,
    setMaxLength,
    openConfirmation,
    listOfData,
    setOpenConfirmation,
    setListOfData,
    setListOfNumbers,
    onDeleteItem,
  } = useListView({ name, defaultNumber: params?.number });
  const { setRecordResponse, appendNewRecord } = usePopupForm();

  const methods = useForm();

  const {
    reset,
    watch,
    setValue,
    formState: { isDirty, errors },
    setError,
    handleSubmit,
    clearErrors,
  } = methods;
  const { CACHE_LIST, fields } = useRefTable(name);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [totalPercentage, setTotalPercentage] = useState(1);

  const accountQueryClient = useQuery({
    queryKey: [name, listOfNumbers?.[number - 1]],
    queryFn: async () => {
      const res = await ApiActions.read("account", {
        conditions: [
          {
            type: "and",
            conditions: [["number", "=", listOfNumbers[number - 1]]],
          },
          // { type: "and", conditions: [["main_account_id", "=", data?.id]] },
        ],
      });

      let account = res?.result?.at(0);

      if (account?.id) {
        if (account?.type !== ACCOUNT_NORMAL_TYPE_CODE) {
          let subTableName =
            account?.type === ACCOUNT_ASSEMBLY_TYPE_CODE
              ? ACCOUNT_ASSEMBLY_TYPE_NAME
              : ACCOUNT_DISTRIBUTIVE_TYPE_NAME;
          const res = await ApiActions.read(subTableName, {
            conditions: [
              {
                type: "and",
                conditions: [["main_account_id", "=", account?.id]],
              },
            ],
          });
          if (res?.success) {
            account[subTableName] = res?.result;
          }
        }

        reset(account);
        return account;
      }
    },
  });

  useEffect(() => {
    let isAccount = name === "account";
    const subscription = watch((value, { name, type }) => {
      if (isAccount) {
        automaticChangesOnAccount(name, watch, setValue);
      }
      if (name === "type") {
        onChangeAccountType(watch(name), setValue);
      }
      if (name?.indexOf(ACCOUNT_ASSEMBLY_TYPE_NAME) !== -1) {
        clearErrors(ACCOUNT_ASSEMBLY_TYPE_NAME);
      }
      if (name?.indexOf(ACCOUNT_DISTRIBUTIVE_TYPE_NAME) !== -1) {
        clearErrors(ACCOUNT_DISTRIBUTIVE_TYPE_NAME);
        calculatePercentage(watch, setTotalPercentage);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onClickAddNew = () => {
    setNumber(+maxLength + 1);
    reset(getResetFields(name));
    setRefresh((p) => !p);
  };

  const onDelete = async () => {
    let [id, number] = watch(["id", "number"]);
    // let number =
    let res = await ApiActions.remove(name, {
      conditions: [
        {
          type: "and",
          conditions: [["id", "=", id]],
        },
      ],
    });
    if (res?.success) {
      onDeleteItem(number);
    }
    setOpenConfirmation(false);
  };

  const validationAccount = () => {
    let type = watch("type");
    let ACCOUNTS_TYPES = [
      { name: ACCOUNT_ASSEMBLY_TYPE_NAME, code: ACCOUNT_ASSEMBLY_TYPE_CODE },
      {
        name: ACCOUNT_DISTRIBUTIVE_TYPE_NAME,
        code: ACCOUNT_DISTRIBUTIVE_TYPE_CODE,
      },
    ];

    for (const account of ACCOUNTS_TYPES) {
      if (type === account.code) {
        if (!watch(`${account.name}.0.account_id`)) {
          setError(account.name, {
            type: "required",
            message: `Please fill the ${account.name}`,
          });
          return;
        }
        if (
          watch(account.name).length < 2 ||
          !watch(`${account.name}.1.account_id`)
        ) {
          setError(account.name, {
            type: "required",
            message: `The ${account.name} must be at least 2 accounts`,
          });
          return;
        }
      }
    }

    return true;
  };

  // Handel Submit
  const onSubmit = async (value) => {
    if (!isDirty || !validationAccount()) return;
    setIsLoading(true);
    const account_assembly = watch(ACCOUNT_ASSEMBLY_TYPE_NAME);
    const account_distributive = watch(ACCOUNT_DISTRIBUTIVE_TYPE_NAME);

    delete value?.[ACCOUNT_ASSEMBLY_TYPE_NAME];
    delete value?.[ACCOUNT_DISTRIBUTIVE_TYPE_NAME];

    let values = removeNullValues(value);
    let res = null;
    let account_id = values?.id;

    if (isLayoutUpdate) {
      res = await ApiActions.update(name, {
        conditions: [{ type: "and", conditions: [["id", "=", watch("id")]] }],
        updates: values,
      });
    } else {
      res = await ApiActions.insert(name, {
        data: values,
      });
      account_id = res?.record?.id;
    }

    if (res?.success) {
      toast.success(
        isLayoutUpdate
          ? `Successfully update row: ${values?.name} in ${name}`
          : "Successfully added item in " + name
      );

      if (
        value?.type === ACCOUNT_ASSEMBLY_TYPE_CODE ||
        value?.type === ACCOUNT_DISTRIBUTIVE_TYPE_CODE
      ) {
        let gridTableName =
          value?.type === ACCOUNT_ASSEMBLY_TYPE_CODE
            ? ACCOUNT_ASSEMBLY_TYPE_NAME
            : ACCOUNT_DISTRIBUTIVE_TYPE_NAME;

        let list =
          value?.type === ACCOUNT_ASSEMBLY_TYPE_CODE
            ? account_assembly
            : account_distributive;

        let grid = [];

        for (const item of list) {
          if (item?.account_id) grid.push(item);
        }

        insertIntoGrid({
          gridTableName,
          grid,
          itemId: account_id,
          itemSearchName: "main_account_id",
        });
      }

      if (!isLayoutUpdate) {
        let record = res?.record;
        setListOfNumbers((prev) => [...prev, record?.number]);
        accountQueryClient.refresh();
      }

      if (!!setRecordResponse) {
        setRecordResponse({ table: name, response: res });
      }

      if (!isLayoutUpdate) {
        setMaxLength((prev) => +prev + 1);
        await appendNewRecord(res);
        reset();
      }
    } else {
      toast.error(res?.error?.detail);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? <Loading withBackdrop /> : null}
      <ConfirmModal
        onConfirm={onDelete}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <BlockPaper
        containerClassName={popupView ? "z-[102] p-0" : null}
        bodyClassName={popupView ? "!p-0" : null}
        boxClassName={popupView ? "!shadow-none !p-0" : null}
        layoutBodyClassName={popupView ? "!my-0" : null}
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate key={refresh}>
            <FormHeadingTitle
              onClose={onClose}
              customName={
                <span className="capitalize">
                  {maxLength < number ? (
                    <span className="text-red-500 ltr:mr-2 rtl:ml-2 bg-red-100 px-2 py-1 rounded-md">
                      New
                    </span>
                  ) : null}
                  {name?.replace(/_/g, " ")} number {number}
                </span>
              }
            />

            <AccountFormFields
              CACHE_LIST={CACHE_LIST}
              fields={fields}
              errors={errors}
              watch={watch}
              totalPercentage={totalPercentage}
            />
            
            <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
              <FormStepPagination
                number={number}
                goTo={goToNumber}
                // maxLength={maxLength}
                maxLength={maxLength}
                isNewOne={number > maxLength}
                setNumber={setNumber}
                onClickDelete={() => setOpenConfirmation(true)}
                isArchived={watch(CONSTANT_COLUMNS_NAME.is_archived)}
                isDeleted={watch(CONSTANT_COLUMNS_NAME.is_deleted)}
                allowActions={watch("id")}
                onClickAddNew={onClickAddNew}
              />
              <Button
                title={maxLength >= number ? "Modify" : "Submit"}
                classes="ltr:ml-auto rtl:mr-auto"
                disabled={
                  !isDirty ||
                  (watch("type") === 4 &&
                    (+totalPercentage !== 100 ||
                      watch(ACCOUNT_DISTRIBUTIVE_TYPE_NAME)?.length < 2))
                }
              />
            </div>
          </form>
        </FormProvider>
      </BlockPaper>
    </>
  );
};

export default AccountForm;
