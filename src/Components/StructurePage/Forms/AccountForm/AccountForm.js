import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useMemo, useState } from "react";
import { getLastNumberByColumn } from "../../../../Helpers/Lib/global-insert";
import useRefTable from "Hooks/useRefTables";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { usePopupForm } from "Hooks/usePopupForm";
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
import FormWrapperLayout from "../FormWrapperLayout/FormWrapperLayout";
import useCurd from "Hooks/useCurd";
import { UniqueField } from "Components/StructurePage/CustomFields";
import NewUniqueField from "Components/StructurePage/CustomFields/NewUniqueField";
import useFormPagination from "Hooks/useFormPagination";
import { FormStepPagination } from "Components/Global/FormStepPagination";
import FormLayout from "../FormWrapperLayout/FormLayout";
import getFormByTableName from "Helpers/Forms/forms";
import UniqueSearchField from "Components/StructurePage/CustomFields/UniqueSearchField";

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
        "code"
      );

      let record = response?.result?.at(0);
      const accountNumber = number ? +number + 1 : record?.code + "1";

      setValue("final_id", record?.final_id || record?.parent_id);
      setValue("code", accountNumber);
    }
  }
};

const onChangeAccountType = async (value, setValue) => {
  if (value < 2) return;

  const res = await ApiActions.read("account", {
    limit: 1,
    conditions: [
      {
        type: "and",
        conditions: [["parent_id", "==", "null"]],
      },
    ],
    sorts: [{ column: "code", order: "DESC", nulls: "last" }],
  });
  if (res?.result?.length) {
    setValue("code", +res?.result?.at(0)?.code + 1);
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

const AccountForm = ({ onClose, popupView, number }) => {
  const name = "account";
  const params = useParams();
  const { set, insert, getOneBy, remove } = useCurd();
  const { setRecordResponse, appendNewRecord } = usePopupForm();
  const methods = useForm({ shouldUnregister: true });
  const {
    reset,
    watch,
    setValue,
    formState: { isDirty, errors },
    setError,
    clearErrors,
  } = methods;
  const [isLoading, setIsLoading] = useState(false);
  const [totalPercentage, setTotalPercentage] = useState(1);
  const formPagination = useFormPagination({ name, number: number, reset });
  const id = formPagination?.currentId;
  
  const accountQueryClient = useQuery({
    queryKey: [name, id],
    queryFn: async () => {
      const res = await getOneBy("account", id);
      let account = res?.result?.at(0);

      if (account?.id) {
        if (account?.type !== ACCOUNT_NORMAL_TYPE_CODE) {
          let subTableName =
            account?.type === ACCOUNT_ASSEMBLY_TYPE_CODE
              ? ACCOUNT_ASSEMBLY_TYPE_NAME
              : ACCOUNT_DISTRIBUTIVE_TYPE_NAME;
          const res = await getOneBy(
            subTableName,
            account?.id,
            "main_account_id"
          );
          if (res?.success) {
            account[subTableName] = res?.result;
          }
        }

        reset(account);

        return account;
      }
    },
    enabled: !!id,
  });

  const fields = useMemo(
    () => getFormByTableName(name),
    [name]
  );

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

    if (params?.id) {
      res = await set(name, values, watch("id"));
    } else {
      res = await insert(name, values);
      account_id = res?.record?.id;
    }

    if (res?.success) {
      toast.success(
        params?.id
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

      if (!params?.id) {
        let record = res?.record;
        accountQueryClient?.refresh();
      }

      if (!!setRecordResponse) {
        setRecordResponse({ table: name, response: res });
      }

      if (!params?.id) {
        await appendNewRecord(res);
        reset();
      }
    } else {
      toast.error(res?.error?.detail);
    }
    setIsLoading(false);
  };

  return (
    <FormLayout
      key={formPagination?.currentNumber}
      name={name}
      isLoading={isLoading}
      onClose={onClose}
      onSubmit={onSubmit}
      methods={methods}
      disabledSubmit={
        watch("type") === 4 &&
        (+totalPercentage !== 100 ||
          watch(ACCOUNT_DISTRIBUTIVE_TYPE_NAME)?.length < 2)
      }
      formPagination={formPagination}
      extraContentBar={
        <UniqueSearchField
        // loadOptions={}
        />
      }
    >

      <AccountFormFields
        fields={fields}
        errors={errors}
        watch={watch}
        totalPercentage={totalPercentage}
      />
    </FormLayout>
  );
};

export default AccountForm;
