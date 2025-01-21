import { useEffect, useMemo, useState } from "react";

import getFormByTableName from "Helpers/Forms/forms";
import useFlatColoring from "Hooks/useFlatColoring";
import { useFormContext } from "react-hook-form";
import TableFields from "Components/TableComponents/TableFields";
import { SELECT_LISTS } from "Helpers/constants";
import useCurd from "Hooks/useCurd";
import { ColorField, Input, Select } from "Components/StructurePage/CustomFields";
import { IncreaseTableBar } from "Components/TableComponents/IncreaseTableBar";
import AreaField from "Components/StructurePage/CustomFields/AreaField";

export const ToolsTabsTableForm = ({ errors, row }) => {
  const tab = 'grid';
  const { watch, setValue, register } = useFormContext();
  const [increaseCount, setIncreaseCount] = useState(5);
  const { onSelectColor, selectedColor, roomCounts, availableColors } =
    useFlatColoring();
  const fields = useMemo(() => {
    return getFormByTableName("property_values")
  }, [])

  const isOwnership = useMemo(() => {
    return !!row?.owner_account_id
  }, [row])

  useEffect(() => {
    let grid = watch()?.grid;

    for (let i = 0; i < grid?.length; i++) {
      if (roomCounts?.[grid[i].hex]) {
        setValue(`grid.${i}.room_count`, roomCounts?.[grid[i].hex]);
      }
    }
    setIncreaseCount(grid?.length || 5)
  }, [JSON.stringify(roomCounts)]);


  const onDecrement = () => {
    let index = increaseCount - 2;
    let grid = watch(tab || "grid");
    let newGrid = grid?.filter((c, i) => i !== index);
    setValue(tab || "grid", newGrid);
    setIncreaseCount((prev) => prev - 1);
  };

  console.log(watch());

  return (
    <div>
      <div className={`relative mt-4  max-h-[220px] overflow-x-auto `}>
        <table
          className={`border-collapse w-full text-xs text-left text-gray-500 dark:text-gray-400 border-[1px]  border-light-green rounded-md`}
        >
          <thead
            className={`sticky top-0 z-20 text-xs uppercase bg-light-green text-white `}
          >
            <tr>
              <th
                className={` border dark:border-dark-border whitespace-nowrap `}
              >
                {" "}
                <div className="text-center w-full block">#</div>
              </th>
              {fields?.map((col) => {
                if (col?.name === 'row_index') return;
                return (
                  <th
                    key={col?.name}
                    className={`px-2 py-2 border min-w-[120px] dark:border-dark-border whitespace-nowrap  `}
                  >
                    <div className="flex gap-2 items-center justify-between">
                      {col?.label || col?.name}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="">
            <>
              {Array(increaseCount)
                .fill(0)
                .map((r, index) => (
                  <tr
                    key={`r-${index}`}
                    className={index === selectedColor ? "bg-gray-200 dark:!bg-[#333]" : ""}
                  >
                    <td
                      className={`min-w-[40px] whitespace-nowrap h-4 border dark:border-dark-border relative `}
                      onClick={() => {
                        console.log('called herer', index);
                        
                        let hex = watch(`grid.${[index]}.hex`);
                        if (!hex || hex === "#000000") return;
                        onSelectColor(index, hex);
                      }}
                    >
                      <div
                        className="text-center w-full block"
                        role="button"
                      >
                        {index + 1}
                      </div>
                    </td>
                    {fields?.map((field) => {
                      if (field?.name === 'row_index') return;
                      return (
                        <td
                          className={`border whitespace-nowrap  dark:border-dark-border relative`}
                          key={`${field?.name}-${index}`}
                        >
                          {field?.key === "select" ? (
                            <select disabled value={isOwnership ? 1 : 2} {...register(`grid.${index}.${field?.name}`)} >
                              {field?.list?.map(c => (
                                <option value={c?.id} >{c?.name}</option>
                              ))}
                            </select>

                          ) : field?.type === "color" ? (
                            <ColorField
                              {...field}
                              availableColors={availableColors}
                              key={`${field?.name}-${index}`}
                              updatedName={`${tab}.${index}.${field?.name}`}
                              labelClassName="hidden"
                              inputClassName={
                                "border-0 !rounded-none"
                              }
                              value={watch(`grid.${index}.hex`)}
                            />
                          ) : field?.key === "area" ? (
                            <AreaField
                              {...field}
                              key={`${field?.name}-${index}`}
                              updatedName={`${tab}.${index}.${field?.name}`}
                              labelClassName="hidden"
                              containerClassName="h-10 !h-full min-w-[55px]"
                              inputClassName={
                                "border-0 !rounded-none"
                              }
                            />
                          ) : (
                            <Input
                              {...field}
                              key={`${field?.name}-${index}`}
                              updatedName={`${tab}.${index}.${field?.name}`}
                              labelClassName="hidden"
                              containerClassName="h-10 !h-full min-w-[55px]"
                              inputClassName={`border-0 !rounded-none`}
                              defaultValue={field?.name === 'property_type' ? '' : ''}
                            />

                          )}
                        </td>
                      )

                    })}
                  </tr>
                ))}
            </>
          </tbody>
        </table>
      </div>
      <IncreaseTableBar
        onDecrement={onDecrement}
        setIncreaseCount={setIncreaseCount}
        increaseCount={increaseCount}
      />
    </div>
  );
};
