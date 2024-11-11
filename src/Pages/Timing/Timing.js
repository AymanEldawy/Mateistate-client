import BlockPaper from "Components/Global/BlockPaper";
import { Button } from "Components/Global/Button";
import { CloseIcon, TrashIcon } from "Components/Icons";
import {
  Input,
  Select,
  UniqueField,
} from "Components/StructurePage/CustomFields";
import TableFields from "Components/StructurePage/CustomTable/TableFields";
import { SELECT_LISTS } from "Helpers/constants";
import { generateUserTiming } from "Helpers/functions";
import useCurd from "Hooks/useCurd";
import useRefTable from "Hooks/useRefTables";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const Timing = () => {
  const methods = useForm({
    defaultValues: {
      setting: {
        period: 1,
        start_day: new Date(),
        long: 3,
      },
    },
  });
  const { remove, insert, get } = useCurd();
  const { CACHE_LIST, fieldsHash, fields } = useRefTable("user_work_times");
  console.log("🚀 ~ Timing ~ CACHE_LIST:", CACHE_LIST);
  const [isGenerating, setIsGenerating] = useState(false);
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    watch,
    values,
    setValue,
  } = methods;

  // generate timing
  const onGenerateTiming = () => {
    setIsGenerating(true);
    const data = generateUserTiming(watch("setting"));
    setValue("timing", data?.timings);
    setValue("views", data?.views);
    setIsGenerating(false);
  };
  console.log(watch("timing"));

  const handleSave = async () => {
    for (const item of watch("timing")) {
      await insert("user_work_times", item);
    }
    setValue("timing", []);
    setValue("views", []);
  };
  console.log(watch());

  return (
    <BlockPaper title="User Working time">
      <FormProvider {...methods}>
        <div className="grid grid-cols-4 items-center gap-2">
          <UniqueField
            {...fieldsHash["user_id"]}
            className="min-w-[170px] border-0 !rounded-none !h-full"
            table={"account"}
            label="user"
            name="setting.account_id"
            CACHE_LIST={CACHE_LIST}
            error={errors?.user_id ? "Field is required" : ""}
            list={CACHE_LIST?.user}
            value={values?.user_id || ""}
          />
          <Select
            label="period"
            name="setting.period"
            value={1}
            list={[
              { name: "Light", id: 1 },
              { name: "Night", id: 2 },
              { name: "Both", id: 3 },
            ]}
          />
          <Select
            label="Period of days"
            name="setting.long"
            value={3}
            list={[
              { name: "Day", id: 1 },
              { name: "Week", id: 7 },
              { name: "Month", id: 30 },
              { name: "3 Month", id: 90 },
            ]}
          />
          <Input
            label="start_day"
            name="setting.start_day"
            type="date"
            error={errors?.start_date ? "Field is required" : ""}
            containerClassName="h-10 !h-full min-w-[55px]"
          />

          {watch("setting.period") === 1 || watch("setting.period") === 3 ? (
            <>
              <Select
                label="time_light_start"
                name="setting.time_light_start"
                list={SELECT_LISTS("time_light_start")}
              />
              <Select
                label="time_light_end"
                name="setting.time_light_end"
                list={SELECT_LISTS("time_light_end")}
              />
            </>
          ) : null}
          {watch("setting.period") === 2 || watch("setting.period") === 3 ? (
            <>
              <Select
                label="time_night_start"
                name="setting.time_night_start"
                list={SELECT_LISTS("time_night_start")}
              />
              <Select
                label="time_night_end"
                name="setting.time_night_end"
                list={SELECT_LISTS("time_night_end")}
              />
            </>
          ) : null}
        </div>
        <Button
          // disabled={
          //   !watch("setting.account_id") ||
          //    !watch("setting.account_id")
          // }
          type="button"
          onClick={onGenerateTiming}
          title="Generate timing"
          loading={isGenerating}
          classes="whitespace-nowrap mt-4 w-[200px]"
        />

        {watch("timing")?.length ? (
          <>
            <div className="flex items-center capitalize bg-gray-100 border py-2 mt-4">
              <div className="px-2 text-center w-10">#</div>
              <div className="px-2 text-center flex-1">User</div>
              <div className="px-2 text-center flex-1">Date</div>
              <div className="px-2 text-center flex-1">time_light_start</div>
              <div className="px-2 text-center flex-1">time_light_end</div>
              <div className="px-2 text-center flex-1">time_night_start</div>
              <div className="px-2 text-center flex-1">time_night_end</div>
              <div className="px-2 text-center flex-1">Action</div>
            </div>
            {watch("views")?.map((time, index) => (
              <div
                className="flex items-center capitalize border-b py-2"
                key={index}
              >
                <div className="px-2 text-center w-10">{index + 1}</div>
                <div className="px-2 text-center flex-1">
                  {CACHE_LIST?.account?.[watch("setting.user_id")]}
                </div>
                <div className="px-2 text-center flex-1">
                  {new Date(time?.date).toLocaleDateString("en-US")}
                </div>
                <div className="px-2 text-center flex-1">
                  {time?.time_light_start
                    ? new Date(time?.time_light_start).toLocaleTimeString(
                        "en-US"
                      )
                    : "---"}
                </div>
                <div className="px-2 text-center flex-1">
                  {time?.time_light_end
                    ? new Date(time?.time_light_end).toLocaleTimeString("en-US")
                    : "---"}
                </div>
                <div className="px-2 text-center flex-1">
                  {time?.time_night_start
                    ? new Date(time?.time_night_start).toLocaleTimeString(
                        "en-US"
                      )
                    : "---"}
                </div>
                <div className="px-2 text-center flex-1">
                  {time?.time_night_end
                    ? new Date(time?.time_night_end).toLocaleTimeString("en-US")
                    : "---"}
                </div>
                <div className="px-2 text-center flex-1">
                  <button
                    className="bg-red-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300 disabled:bg-red-200"
                    onClick={() => {}}
                  >
                    <TrashIcon />{" "}
                  </button>
                </div>
              </div>
            ))}
            <Button
              type="button"
              onClick={handleSave}
              title="Save Timing"
              loading={isSubmitting}
              classes="whitespace-nowrap mt-4 w-[200px]"
            />
          </>
        ) : null}
      </FormProvider>
    </BlockPaper>
  );
};

export default Timing;
