import getFormByTableName from "Helpers/Forms/forms";
import useRefTable from "Hooks/useRefTables";
import { useMemo } from "react";
import { ReportFilterFields } from "../ReportFilterFields";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { ReportReviewField } from "Components/ReportsComponents/ReportsFields/ReportReviewField";
import { ReportFields } from "../ReportsFields/ReportFields";

export const PropertyMovingReportFilter = () => {
  const { CACHE_LIST } = useRefTable("property_moving");

  const fields = useMemo(
    () => getFormByTableName("property_moving"),

    []
  );

  return (
    <ReportFilterFields title={"Fields"}>
      <ReportFields
        containerClassName="gap-3"
        fields={fields}
        CACHE_LIST={CACHE_LIST}
        sharedLabelClassName="w-[200px]"
      />
    </ReportFilterFields>
  );
};
