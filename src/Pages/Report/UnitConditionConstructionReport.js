import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import { FormProvider, useForm } from "react-hook-form";
import { CheckboxField } from "Components/StructurePage/CustomFields";
import { ReportFilterBuildings } from "Components/ReportsComponents/ReportFilterBuildings";
import { useMemo, useState } from "react";
import { getReportColumns } from "Helpers/Reports";
import { useTranslation } from "react-i18next";

const REPORT_OPTIONS_UNITS = ["flats", "shops", "parking"];
const REPORT_OPTIONS_STATUS = ["leased", "sold", "reserved", "empty"];

const UnitConditionConstructionReport = () => {
  const name = "unit_condition_for_construction_report";
  const methods = useForm();
  const { t } = useTranslation();
  const { handleSubmit, watch } = methods;
  const [buildingsIds, setBuildingsIds] = useState({});

  const columns = useMemo(() => getReportColumns(name), []);

  const onSubmit = (value) => {};

  return (
    <BlockPaper title={name}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
            <div className="grid gap-2">
              <h4 className="font-medium">{t("Units")}</h4>
              <div className="px-4 flex flex-col gap-2">
                {REPORT_OPTIONS_UNITS?.map((option) => (
                  <CheckboxField
                    key={option}
                    {...{
                      label: option,
                      name: option,
                    }}
                  />
                ))}
              </div>
              <h4 className="font-medium">{t("Status")}</h4>
              <div className="px-4 flex flex-col gap-2">
                {REPORT_OPTIONS_STATUS?.map((option) => (
                  <CheckboxField
                    key={option}
                    {...{
                      label: option,
                      name: option,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <ReportFilterBuildings
                buildingsIds={buildingsIds}
                setBuildingsIds={setBuildingsIds}
                bodyClassName="h-[240px]"
              />
            </div>
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default UnitConditionConstructionReport;
