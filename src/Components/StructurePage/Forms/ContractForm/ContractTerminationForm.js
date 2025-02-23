import { useEffect, useMemo, useState } from "react";
import getFormByTableName from "Helpers/Forms/forms";
import { useFormContext } from "react-hook-form";
import {
  CheckboxField,
  Input,
  Select,
  Textarea
} from "Components/StructurePage/CustomFields";
import { useVoucherEntriesView } from "Hooks/useVoucherEntriesView";
import { CONTRACT_STATUS } from "Helpers/Lib/contract-helpers";
import { ViewEntry } from "Components/Global/ViewEntry";
import Btn from "Components/Global/Btn";
import TableFields from "Components/TableComponents/TableFields";
import { CREATED_FROM_CONTRACT_FINES } from './../../../../Helpers/GENERATE_STARTING_DATA';

const ContractTerminationForm = ({
  CACHE_LIST,
  tab,
  onClickRenew,
}) => {
  const {
    watch,
    setValue,
    errors,
    formState: { isSubmitSuccessful },
  } = useFormContext();
  const { dispatchVoucherEntries } = useVoucherEntriesView();
  const [stage, setStage] = useState(1);

  const fields = useMemo(() => {
    let form = getFormByTableName("contract_termination");
    let hash = {};
    for (const field of form) {
      hash[field?.name] = field;
    }
    return hash;
  }, []);

  const fields_grid = useMemo(
    () => getFormByTableName("contract_fines_grid"),
    []
  );

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      let key = name?.split(".")?.at(-1);
      switch (key) {
        case "terminated":
          if (watch(name)) {
            setValue("contract.status", CONTRACT_STATUS.Terminate_and_Evacuated);
          } else {
            setValue("contract.status", CONTRACT_STATUS.Valid);
          }
          break;

        default:
          return;
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <div className="bg-gray-100 border-b  flex items-center -mt-2 w-fit">
        <button
          type="button"
          className={`text-sm !border-none p-2 py-1 duration-200 font-normal capitalize ${stage === 2 && 'bg-blue-100 text-blue-600 border-b shadow'}`}
          onClick={() => setStage(2)}
          isActive={stage === 2}
        >
          Termination fees
        </button>
        <button
          type="button"
          className={`text-sm !border-none p-2 py-1 duration-200 font-normal capitalize ${stage === 1 && 'bg-blue-100 text-blue-600 border-b shadow'}`}
          onClick={() => setStage(1)}
          isActive={stage === 1}
        >
          Termination
        </button>
      </div>
      <div className="">
        {stage === 1 ? (
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8 lg:gap-12 my-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-10">
                <CheckboxField {...fields?.terminated} updatedName={`${tab}.terminated`} />
                <div className="flex items-center gap-4">
                  <CheckboxField {...fields?.gen_entries} updatedName={`${tab}.gen_entries`} />
                  {watch(`${tab}.id`) ? <ViewEntry id={watch(`${tab}.id`)} /> : null}
                </div>
              </div>
              <Input
                {...fields?.termination_date}
                updatedName={`${tab}.termination_date`}
                // values={values}
                tab={tab}
              />
              <Input
                {...fields?.owner_total_amount}
                updatedName={`${tab}.owner_total_amount`}
                // values={values}
                tab={tab}
              />
              <div className="grid grid-cols-2 gap-2">
                <Input
                  {...fields?.owner_rest_amount}
                  containerClassName="flex-1"
                  updatedName={`${tab}.owner_rest_amount`}
                  // values={values}
                  tab={tab}
                />
                <Select
                  {...fields?.round_to}
                  updatedName={`${tab}.round_to`}
                  labelClassName="!w-fit"
                  selectClassName="w-full"
                  // containerClassName="w-full"
                  // values={values}
                  tab={tab}
                  value={watch(`${tab}.round_to`)}
                />
              </div>
              <Textarea
                {...fields?.revenue_note}
                containerClassName="flex-1"
                updatedName={`${tab}.revenue_note`}
                // values={values}
                tab={tab}
              />
            </div>
            <div className="flex flex-col gap-4">

              <CheckboxField
                {...fields?.evacuation_request}
                updatedName={`${tab}.evacuation_request`}
              />
              <Input
                {...fields?.evacuation_date}
                containerClassName="flex-1"
                updatedName={`${tab}.evacuation_date`}
                // values={values}
                readOnly={!watch(`${tab}.evacuation_request`)}
                tab={tab}
              />
              <CheckboxField
                {...fields?.clearance_printed}
                updatedName={`${tab}.clearance_printed`}
              />
              {watch(`${tab}.clearance_printed`) ? (
                <Input
                  {...fields?.clearance_printed_date}
                  updatedName={`${tab}.clearance_printed_date`}
                  // values={values}
                  tab={tab}
                />
              ) : null}
              <Btn kind="info" containerClassName="!w-fit text-sm">
                Print Clearance
              </Btn>

            </div>
          </div>
        ) :
          <div className="">
            <TableFields
              fields={fields_grid}
              tab="contract_fines_grid"
              CACHE_LIST={CACHE_LIST}
              rowsCount={watch("contract_fines_grid")?.length || 5}
              withPortal
            />
            <div className="mt-4" />
            {watch(`contract_fines_grid.0.id`) ? <ViewEntry id={watch(`contract.id`)} created_from={CREATED_FROM_CONTRACT_FINES} /> : null}
          </div>
        }
      </div>
    </>
  );
};

export default ContractTerminationForm;
