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

const ContractTerminationForm = ({
  CACHE_LIST,
  tab,
  onClickRenew,
  SHOULD_UPDATES,
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
    () => getFormByTableName("termination_fines_grid"),
    []
  );

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      let key = name?.split(".")?.at(-1);
      switch (key) {
        case "terminated":
          if (watch(name)) {
            SHOULD_UPDATES[tab] = true;
            setValue("contract.status", CONTRACT_STATUS.TERMINATED);
          } else {
            delete SHOULD_UPDATES[tab];
            setValue("contract.status", CONTRACT_STATUS.ON);
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

      <div className="flex items-center justify-between gap-4 border-b p-2  -mt-2">
        <div className="flex items-center gap-4">
          <CheckboxField {...fields?.gen_entries} updatedName={`${tab}.gen_entries`} />
          {watch(`${tab}.id`) ? <ViewEntry id={watch(`${tab}.id`)} /> : null}
        </div>
        <div className="flex items-center gap-4">
          {stage === 1 ? (

            <Btn
              type="button"
              onClick={() => setStage(2)}
            >
              Open Termination fees
            </Btn>
          ) : (
            <Btn
              type="button"
              kind="error"
              onClick={() => setStage(1)}
            >
              close Termination fees
            </Btn>
          )}
          <Btn
            kind="warn"
            disabled={!watch(`${tab}.terminated`) || !watch(`${tab}.id`)}
            onClick={onClickRenew}
            containerClassName="!text-black"
          >
            Renew Contract
          </Btn>
        </div>
      </div>
      <div className="">
        {stage === 1 ? (
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8 lg:gap-12 my-4">
            <div className="flex flex-col gap-4">
              <CheckboxField {...fields?.terminated} updatedName={`${tab}.terminated`} />
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
              <Btn kind="info" containerClassName="!w-fit">
                Print Clearance
              </Btn>

            </div>
          </div>
        ) :
          <div className="">
            <TableFields
              fields={fields_grid}
              tab="termination_fines_grid"
              CACHE_LIST={CACHE_LIST}
              rowsCount={watch("termination_fines_grid")?.length || 5}
              withPortal
            />
            {watch(`termination_fines_grid.0.id`) ? <ViewEntry id={watch(`${tab}.id`)} /> : null}
          </div>
        }
      </div>
    </>
  );
};

export default ContractTerminationForm;
