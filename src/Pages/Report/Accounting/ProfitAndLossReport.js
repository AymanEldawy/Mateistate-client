import { useMemo, useState } from "react";
import BlockPaper from "Components/Global/BlockPaper";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "Components/Global/Button";
import REPORTS from "Helpers/Lib/global-reports";
import useRefTable from "Hooks/useRefTables";
import { getReportFields } from "Helpers/Reports";
import { ReportFilterFields } from "Components/ReportsComponents/ReportFilterFields";
import { ReportFields } from "Components/ReportsComponents/ReportsFields/ReportFields";
import { ReportResultsWrapper } from "Components/ReportsComponents/ReportResultsWrapper";
import { ReportStatementField } from "Components/ReportsComponents/ReportsFields/ReportStatementField";
import { ReportBetweenDateField } from "Components/ReportsComponents/ReportsFields/ReportDateField";
import { CheckboxField } from "Components/StructurePage/CustomFields";
import { ReportFilterCard } from "Components/ReportsComponents/ReportFilterCard";
import { ReportPostedField } from "Components/ReportsComponents/ReportsFields/ReportPostedField";

const REPORT_OPTIONS = [
  "include_previous_years",
  "show_empty_accounts",
  "show_closing_accounts_details",
];

const ProfitAndLossReport = ({ name }) => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [openReportResults, setOpenReportResults] = useState(false);
  const [data, setData] = useState([]);

  const fields = useMemo(() => getReportFields(name), []);

  const onSubmit = async (value) => {
    let fn = REPORTS?.[name];
    const res = await fn({
      filters: watch(),
    });
    setData(res?.data);
    console.log("🚀 ~ onSubmit ~ res:", res);
  };

  console.log({ filters: watch() });

  return (
    <>
      <BlockPaper title={name?.replace(/_/gi, " ")}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative"
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
              <ReportFilterFields title="Fields">
                <ReportFields
                  fields={fields}
                  sharedLabelClassName="w-[200px]"
                  // containerClassName="grid grid-cols-2 gap-4"
                />
              </ReportFilterFields>
              <div className="grid gap-4">
                <ReportBetweenDateField containerClassName="!m-0" />
                <ReportPostedField containerClassName="!m-0" />
              </div>
              <div className="grid gap-4">
                {REPORT_OPTIONS?.map((option) => (
                  <CheckboxField label={option} name={option} key={option} />
                ))}
              </div>
            </div>
            <div className="my-8 flex justify-end"></div>
            <Button
              onClick={() => setOpenReportResults(true)}
              title="Show"
              classes="my-4 flex ltr:ml-auto rtl:mr-auto"
            />
          </form>
        </FormProvider>
      </BlockPaper>
      <ReportResultsWrapper
        data={data}
        columns={[]}
        open={openReportResults}
        onClose={() => setOpenReportResults(false)}
      />
    </>
  );
};

export default ProfitAndLossReport;
