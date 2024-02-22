import getFormByTableName from "Helpers/FormsStructure/new-tables-forms";
import { ApiActions } from "Helpers/Lib/api";
import INSERT_FUNCTION from "Helpers/Lib/operations/global-insert";
import {
  getAccountList,
  getAccountsChildrenByName,
  getCustomers,
} from "Helpers/Lib/operations/global-read";
import GET_UPDATE_DATE from "Helpers/Lib/operations/global-read-update";
import { UNIQUE_REF_TABLES } from "Helpers/constants";
import { usePopupForm } from "Hooks/usePopupForm";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const withFormSingular = (FormComponent, additional) => {
  return function Singular({
    name,
    layout,
    oldValues,
    refetchData,
    onClose,
    ...props
  }) {
    name = name || additional?.name;
    const params = useParams();
    const methods = useForm({
      defaultValues:
        layout === "update"
          ? async () => await GET_UPDATE_DATE(name, params?.id)
          : oldValues || {},
    });
    const { reset, watch } = methods;
    const [loading, setLoading] = useState(false);
    const [CACHE_LIST, setCACHE_LIST] = useState({});

    useEffect(() => {
      if (layout !== "update" && oldValues) {
        reset({ ...watch(), ...oldValues });
      }
    }, [oldValues]);

    const fields = useMemo(() => getFormByTableName(name), [name]);

    useEffect(() => {
      getRefTables();
    }, [name]);

    const getRefTables = async () => {
      if (!fields?.length) return;
      let hash = {};
      for (let i = 0; i < fields?.length; i++) {
        let field = fields?.[i];

        if (hash[field?.ref_table] || CACHE_LIST?.[field?.ref_table]) continue;

        if (field?.ref_table === "account") {
          hash.account = await getAccountList();
          continue;
        }

        if (field?.ref_table === UNIQUE_REF_TABLES.clients) {
          hash[UNIQUE_REF_TABLES.clients] = await getAccountsChildrenByName("Customers");
          hash.account = await getAccountList();
          continue;
        }

        if (field?.ref_table === UNIQUE_REF_TABLES.suppliers) {
          hash[UNIQUE_REF_TABLES.suppliers] = await getAccountsChildrenByName("Suppliers");
          hash.account = await getAccountList();
          continue;
        }

        if (field.is_ref) {
          const response = await ApiActions.read(
            field?.ref_table,
            field?.conditions || {}
          );
          hash[field?.ref_table] = response?.result;
        }
      }
      setCACHE_LIST((prev) => ({
        ...prev,
        ...hash,
      }));
    };
    return (
      <FormComponent
        {...props}
        methods={methods}
        name={name}
        fields={fields}
        CACHE_LIST={CACHE_LIST}
        loading={loading}
        setLoading={setLoading}
        layout={layout}
        onClose={onClose}
        refetchData={refetchData}
        setCACHE_LIST={setCACHE_LIST}
      />
    );
  };
};
