import BlockPaper from "Components/Global/BlockPaper";
import { FormProvider, useForm } from "react-hook-form";
import { ContractPatternList } from "../ContractsReport/ContractPatternList";
import { ChequeFilters } from "./ChequeFilters";
import { Button } from "Components/Global/Button";
import { ReportFilterColumns } from "../ReportFilterColumns";
import { useEffect, useState } from "react";
import { ApiActions } from "Helpers/Lib/api";
import {
  Checkbox,
  Input,
  Select,
  Switch,
} from "Components/StructurePage/CustomFields";
import { ReportFilterCard } from "../ReportFilterCard";
import { ReportFilterBuildings } from "../ReportFilterBuildings";
import { ReportFilterContractPatterns } from "../ReportFilterContractPatterns";

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
    const chqResponse = await ApiActions.read("bill_pattern");
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
          <div className="flex gap-4">
            <div className="flex-1">
              <ChequeFilters />
            </div>
            <div className="w-1/4">
              <ReportFilterColumns
                columns={columns}
                selectedColumns={selectedColumns}
                setSelectedColumns={setSelectedColumns}
                bodyClassName="!max-h-[670px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start mt-8">
            <div className="flex flex-col gap-4">
              <ReportFilterContractPatterns
                contractIds={contractIds}
                setContractIds={setContractIds}
              />
              <div className="flex flex-col gap-2 items-start">
                <Switch
                  containerClassName="!flex-row-reverse items-center gap-4"
                  labelClassName="mt-2"
                  {...{
                    label: "Showing papers not linked to contract",
                    name: "linked_contract",
                  }}
                />
                <Switch
                  containerClassName="!flex-row-reverse items-center gap-4"
                  labelClassName="mt-2"
                  {...{
                    label: "Show papers that are not linked to contracts only",
                    name: "linked_contract_only",
                  }}
                />
              </div>
            </div>
            <ReportFilterBuildings
              buildingsIds={buildingsIds}
              setBuildingsIds={setBuildingsIds}
            />
            <div className="flex flex-col gap-2 items-start">
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
              <Switch
                labelClassName="mt-2"
                containerClassName=" gap-4 !flex-row-reverse !items-center"
                {...{
                  label: "Securities that have no status",
                  name: "securities_without_status",
                }}
              />
              <Switch
                readOnly={watch("securities_without_status")}
                labelClassName="mt-2"
                containerClassName=" gap-4 !flex-row-reverse !items-center"
                {...{
                  label: "collection",
                  name: "collection",
                }}
              />
              <Switch
                readOnly={watch("securities_without_status")}
                labelClassName="mt-2"
                containerClassName=" gap-4 !flex-row-reverse !items-center"
                {...{
                  label: "deportation",
                  name: "deportation",
                }}
              />
              <Switch
                readOnly={watch("securities_without_status")}
                labelClassName="mt-2"
                containerClassName=" gap-4 !flex-row-reverse !items-center"
                {...{
                  label: "return",
                  name: "return",
                }}
              />
              <ReportFilterCard containerClassName="w-full">
                <Select
                  readOnly={!watch("return")}
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
                <Input
                  {...{
                    label: "return_reason",
                    name: "return_reason",
                    type: "number",
                  }}
                  readOnly={!watch("return")}
                />
              </ReportFilterCard>
              <Switch
                readOnly={watch("securities_without_status")}
                labelClassName="mt-2"
                containerClassName=" gap-4 !flex-row-reverse !items-center"
                {...{
                  label: "partial_collection",
                  name: "partial_collection",
                }}
              />
              <ReportFilterCard
                containerClassName="w-full"
                bodyClassName="!grid-cols-1 w-full"
              >
                <Select
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
          <Button title="Show" classes="my-4 flex ltr:ml-auto rtl:mr-auto" />
          <div className="my-8 flex justify-end"></div>
        </form>
      </FormProvider>
    </BlockPaper>
  );
};

export default ChequeReport;
