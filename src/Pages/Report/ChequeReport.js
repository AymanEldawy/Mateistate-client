import BlockPaper from "Components/Global/BlockPaper";
import { FormProvider, useForm } from "react-hook-form";
import { ChequeReportsFilters } from "../../Components/ReportsComponents/ChequeReports/ChequeReportsFilters";
import { Button } from "Components/Global/Button";
import { ReportFilterColumns } from "../../Components/ReportsComponents/ReportFilterColumns";
import { useEffect, useState } from "react";
import { ApiActions } from "Helpers/Lib/api";
import {
  Input,
  Select,
  CheckboxField,
  Switch,
} from "Components/StructurePage/CustomFields";
import { ReportFilterCard } from "../../Components/ReportsComponents/ReportFilterCard";
import { ReportFilterBuildings } from "../../Components/ReportsComponents/ReportFilterBuildings";
import { ReportFilterContractPatterns } from "../../Components/ReportsComponents/ReportFilterContractPatterns";
import { ReportReviewField } from "Components/ReportsComponents/ReportsFields/ReportReviewField";
import ReportSelectField from "Components/ReportsComponents/ReportsFields/ReportSelectField";
import ReportInputField from "Components/ReportsComponents/ReportsFields/ReportInputField";

const columns = [
  {
    label: "number",
    name: "internal_number",
  },
  {
    label: "feedback",
    name: "feedback",
  },
  {
    label: "connect_with",
    name: "connect_with",
  },
  {
    label: "amount",
    name: "amount",
  },
  {
    label: "currency_id",
    name: "currency_id",
  },
  {
    label: "observe_account_id",
    name: "observe_account_id",
  },
  { label: "observe_cost_center_id", name: "observe_cost_center_id" },
  {
    label: "observe_account_note",
    name: "observe_account_note",
  },
  {
    label: "beneficiary_name",
    name: "beneficiary_name",
  },
  {
    label: "parking number",
    name: "parking_id",
  },
  {
    label: "shop number",
    name: "shop_id",
  },
  {
    label: "apartment number",
    name: "apartment_id",
  },
  {
    label: "due_date",
    name: "due_date",
  },
  {
    label: "end_due_date",
    name: "end_due_date",
  },
  {
    label: "without_due_date",
    name: "without_due_date",
  },
  {
    label: "bank_id",
    name: "bank_id",
  },
  { label: "note1", name: "note1" },
  { label: "note2", name: "note2" },

  {
    label: "deport_status",
    name: "deport_status",
  },
  {
    label: "collection_status",
    name: "collection_status",
  },
  {
    label: "partial_collection_status",
    name: "partial_collection_status",
  },
  {
    label: "return_status",
    name: "return_status",
  },
  {
    label: "deposit_status",
    name: "deposit_status",
  },
];

const ChequeReport = () => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState([]);
  const [chqPatterns, setChqPatterns] = useState([]);
  const [chqIds, setChqIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const getData = async () => {
    const chqResponse = await ApiActions.read("cheque_pattern");
    setChqPatterns(chqResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = async () => {};

  return (
    <BlockPaper title={"Cheques Report"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
          <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
            <ChequeReportsFilters />
            <div className="grid gap-4">
              <ReportFilterBuildings
                buildingsIds={buildingsIds}
                setBuildingsIds={setBuildingsIds}
                bodyClassName="h-[270px]"
              />
              <ReportFilterContractPatterns
                contractIds={contractIds}
                setContractIds={setContractIds}
                bodyClassName="h-[285px]"
              />
              <div className="px-2 flex flex-col gap-2">
                <CheckboxField
                  containerClassName="!flex-row-reverse items-center gap-4"
                  labelClassName="mt-2"
                  {...{
                    label: "Showing papers not linked to contract",
                    name: "linked_contract",
                  }}
                />
                <CheckboxField
                  containerClassName="!flex-row-reverse items-center gap-4"
                  labelClassName="mt-2"
                  {...{
                    label: "Show papers that are not linked to contracts only",
                    name: "linked_contract_only",
                  }}
                />
              </div>
              <ReportFilterCard
                title={"Migration"}
                // containerClassName="border-0 shadow-none p-0"
              >
                <CheckboxField
                  {...{
                    label: "displaying_transferred_constraints",
                    name: "transferred",
                  }}
                />
                <CheckboxField
                  {...{
                    label: "displaying_untransferred_constraints",
                    name: "untransferred",
                  }}
                />
              </ReportFilterCard>
              <ReportReviewField />
            </div>
            <div className="grid gap-4 max-[768px]:col-span-full max-[768px]:grid-cols-2">
              <ReportFilterColumns
                columns={columns}
                selectedColumns={selectedColumns}
                setSelectedColumns={setSelectedColumns}
                bodyClassName="!max-h-[450px]"
              />
              <div className="grid gap-4">
                <ReportFilterColumns
                  containerClassName="w-full"
                  title="Cheque Patterns"
                  columns={chqPatterns?.map((c) => ({
                    name: c?.id,
                    label: c?.name,
                  }))}
                  selectedColumns={chqIds}
                  setSelectedColumns={setChqIds}
                />
                <div className="flex flex-col gap-2 items-start px-2">
                  <CheckboxField
                    labelClassName="mt-2"
                    containerClassName=" gap-4 !flex-row-reverse !items-center"
                    {...{
                      label: "Securities that have no status",
                      name: "securities_without_status",
                    }}
                  />
                  <CheckboxField
                    readOnly={watch("securities_without_status")}
                    labelClassName="mt-2"
                    containerClassName=" gap-4 !flex-row-reverse !items-center"
                    {...{
                      label: "collection",
                      name: "collection",
                    }}
                  />
                  <CheckboxField
                    readOnly={watch("securities_without_status")}
                    labelClassName="mt-2"
                    containerClassName=" gap-4 !flex-row-reverse !items-center"
                    {...{
                      label: "deportation",
                      name: "deportation",
                    }}
                  />

                  <ReportFilterCard
                    containerClassName="w-full"
                    customTitle={
                      <Switch
                        readOnly={watch("securities_without_status")}
                        labelClassName="!mt-0 !text-base !font-semibold"
                        switchContainerClassName="!mt-0"
                        containerClassName="gap-4 mb-1 !flex-row-reverse !items-center !justify-start ltr:!mr-auto"
                        {...{
                          label: "return",
                          name: "return",
                        }}
                      />
                    }
                  >
                    {/* <CheckboxField
                    /> */}
                    <ReportSelectField
                      readOnly={!watch("return")}
                      labelClassName="w-[140px]"
                      containerClassName="flex-1"
                      {...{
                        label: "return_status",
                        name: "return_status",
                        list: [
                          { id: 0, name: "All" },
                          { id: 1, name: "" },
                          { id: 2, name: "" },
                        ],
                      }}
                    />
                    <ReportInputField
                      labelClassName="w-[140px]"
                      {...{
                        label: "return_reason",
                        name: "return_reason",
                        type: "number",
                      }}
                      readOnly={!watch("return")}
                    />
                  </ReportFilterCard>
                  <ReportFilterCard
                    containerClassName="w-full"
                    bodyClassName="!grid-cols-1 w-full"
                    customTitle={
                      <Switch
                        readOnly={watch("securities_without_status")}
                        labelClassName="!mt-0 !text-base !font-semibold"
                        switchContainerClassName="!mt-0"
                        containerClassName="gap-4 mb-1 !flex-row-reverse !items-center !justify-start ltr:!mr-auto"
                        {...{
                          label: "partial_collection",
                          name: "partial_collection",
                        }}
                      />
                    }
                  >
                    <ReportSelectField
                      readOnly={!watch("partial_collection")}
                      containerClassName="flex-1 w-full"
                      selectClassName="w-full flex-1"
                      {...{
                        label: "partial_collection_status",
                        name: "partial_collection_status",
                        list: [
                          { id: 0, name: "All" },
                          { id: 1, name: "" },
                          { id: 2, name: "" },
                        ],
                      }}
                    />
                  </ReportFilterCard>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start mt-8">
            <div className="flex flex-col gap-4"></div>
          </div>
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
          <div className="my-8 flex justify-end"></div>
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default ChequeReport;
