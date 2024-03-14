import {
  Input,
  Select,
  Switch,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import getFormByTableName from "Helpers/Forms/forms";
import useRefTable from "Hooks/useRefTables";
import React, { useMemo } from "react";
import { ReportFilterCard } from "../ReportFilterCard";
import { ReportFilterFields } from "../ReportFilterFields";
import { useFormContext } from "react-hook-form";
import { Fields } from "Components/StructurePage/Forms/CustomForm/Fields";

export const ChequeFilters = () => {
  const { watch } = useFormContext();
  const { CACHE_LIST } = useRefTable("cheque");
  const fields = useMemo(() => getFormByTableName("cheque_report_fields"), []);

  return (
    <ReportFilterFields
      title="fields"
      // containerClassName="border-0 shadow-none p-0"
    >
      <Fields
        CACHE_LIST={CACHE_LIST}
        list={!!CACHE_LIST ? CACHE_LIST?.account : []}
        fields={fields}
        containerClassName="!mb-0"
        customGrid="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-3"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 border-t pt-4">
        {/* test */}
        <ReportFilterCard
          title="Statement"
          // containerClassName="border-0 shadow-none p-0"
          customTitle={
            <>
              <Switch
                containerClassName="-mt-2"
                {...{
                  name: "allow_statement",
                }}
              />
              <span className="capitalize">{"Statement"}</span>
            </>
          }
        >
          <div className="flex gap-2 items-start">
            <Select
              containerClassName="flex-1"
              readOnly={!watch("allow_statement")}
              {...{
                label: "statement_words",
                name: "statement_words",
                list: [
                  { id: 1, name: "Contains" },
                  { id: 2, name: "Non-Contains" },
                ],
              }}
            />
          </div>

          <Input
            containerClassName="flex-1"
            readOnly={!watch("allow_statement")}
            {...{
              label: "statement",
              name: "statement",
            }}
          />
        </ReportFilterCard>
        <ReportFilterCard
          title={"Paper"}
          // containerClassName="border-0 shadow-none p-0"
          customTitle={
            <>
              <Switch
                containerClassName="-mt-2"
                {...{
                  name: "allow_paper",
                }}
              />
              <span className="capitalize">{"Paper"}</span>
            </>
          }
        >
          <div className="flex gap-2 items-start">
            <Select
              containerClassName="flex-1"
              readOnly={!watch("allow_paper")}
              {...{
                label: "paper_words",
                name: "paper_words",
                list: [
                  { id: 1, name: "Contains" },
                  { id: 2, name: "Non-Contains" },
                ],
              }}
            />
          </div>
          <Input
            containerClassName="flex-1"
            readOnly={!watch("allow_paper")}
            {...{
              label: "paper",
              name: "paper",
            }}
          />
        </ReportFilterCard>
        <ReportFilterCard
          title={"Note"}
          // containerClassName="border-0 shadow-none p-0"
          customTitle={
            <>
              <Switch
                containerClassName="-mt-2"
                {...{
                  name: "allow_note",
                }}
              />
              <span className="capitalize">{"Note"}</span>
            </>
          }
        >
          <div className="flex gap-2 items-start">
            <Select
              containerClassName="flex-1"
              readOnly={!watch("allow_note")}
              {...{
                label: "note_words",
                name: "note_words",
                list: [
                  { id: 1, name: "Contains" },
                  { id: 2, name: "Non-Contains" },
                ],
              }}
            />
          </div>
          <Input
            containerClassName="flex-1"
            readOnly={!watch("allow_note")}
            {...{
              label: "note",
              name: "note",
            }}
          />
        </ReportFilterCard>
        <ReportFilterCard
          title={"Migration"}
          // containerClassName="border-0 shadow-none p-0"
        >
          <Switch
            {...{
              label: "displaying_transferred_constraints",
              name: "transferred",
            }}
          />
          <Switch
            {...{
              label: "displaying_untransferred_constraints",
              name: "untransferred",
            }}
          />
        </ReportFilterCard>
        <ReportFilterCard
          // containerClassName="border-0 shadow-none p-0"
          customTitle={
            <>
              <Switch
                containerClassName="-mt-2"
                {...{
                  // label: "include_due_date",
                  name: "allow_due_date",
                }}
              />
              <span className="capitalize">{"Due Date"}</span>
            </>
          }
        >
          <Input
            containerClassName="flex-1"
            readOnly={!watch("allow_due_date")}
            {...{
              label: "start_due_date",
              name: "start_due_date",
              type: "date",
            }}
          />
          <Input
            containerClassName="flex-1"
            readOnly={!watch("allow_due_date")}
            {...{
              label: "end_due_date",
              name: "end_due_date",
              type: "date",
            }}
          />
        </ReportFilterCard>
        <ReportFilterCard
          // containerClassName="border-0 shadow-none p-0"
          customTitle={
            <>
              <Switch
                containerClassName="-mt-2"
                {...{
                  // label: "include_date",
                  name: "allow_date",
                }}
              />
              <span className="capitalize">{"Created Date"}</span>
            </>
          }
        >
          <Input
            containerClassName="flex-1"
            readOnly={!watch("allow_date")}
            {...{
              label: "start_date",
              name: "start_date",
              type: "date",
            }}
          />
          <Input
            containerClassName="flex-1"
            readOnly={!watch("allow_date")}
            {...{
              label: "end_date",
              name: "end_date",
              type: "date",
            }}
          />
        </ReportFilterCard>
        <ReportFilterCard
          title={"Report Review"}
          // containerClassName="border-0 shadow-none p-0"
        >
          <Switch
            {...{
              label: "reviewed_presentation",
              name: "reviewed",
            }}
          />
          <Switch
            {...{
              label: "unreviewed_presentation",
              name: "unreviewed",
            }}
          />
        </ReportFilterCard>
      </div>
    </ReportFilterFields>
  );
};
