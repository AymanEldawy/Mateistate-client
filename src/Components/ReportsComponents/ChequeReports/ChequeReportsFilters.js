import getFormByTableName from "Helpers/Forms/forms";
import useRefTable from "Hooks/useRefTables";
import { useMemo } from "react";
import { ReportFilterFields } from "../ReportFilterFields";
import { useFormContext } from "react-hook-form";
import { ReportBetweenDateField } from "../ReportsFields/ReportDateField";
import { ReportFields } from "../ReportsFields/ReportFields";
import { ReportStatementField } from "../ReportsFields/ReportStatementField";

export const ChequeReportsFilters = () => {
  const { watch } = useFormContext();
  const { CACHE_LIST } = useRefTable("cheque");
  const fields = useMemo(() => getFormByTableName("cheque_report_fields"), []);

  return (
    <ReportFilterFields
      title="fields"
      // containerClassName="border-0 shadow-none p-0"
    >
      <ReportFields
        CACHE_LIST={CACHE_LIST}
        list={!!CACHE_LIST ? CACHE_LIST?.account : []}
        fields={fields}
        containerClassName="!mb-0 gap-3"
        sharedLabelClassName="w-[200px]"
      />
      <div className="">
        <ReportBetweenDateField
          title="Due Date"
          date1Field={{
            label: "start_due_date",
            name: "start_due_date",
          }}
          date2Field={{
            label: "end_due_date",
            name: "end_due_date",
          }}
        />
        <ReportBetweenDateField
          labelClassName="w-[230px]"
          date1Field={{
            name: "start_date",
          }}
          date2Field={{
            name: "end_date",
          }}
        />
        {/* <ReportStatementField name="statement" title="" /> */}
        <ReportStatementField name="paper" title="Paper" />
        <ReportStatementField name="note" title="Note" />
      </div>
    </ReportFilterFields>
  );
};
