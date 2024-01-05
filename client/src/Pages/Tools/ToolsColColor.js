import React, { useMemo } from "react";
import { memo } from "react";
import { useEffect } from "react";

import { Button } from "Components/Global/Button";
import { getValueOfInputColor } from "Helpers/functions";
import { EditIcon } from "Helpers/Icons";
import TableCol from "Components/StructurePage/CustomTable/TableCol";
import { Input } from "Components/StructurePage/CustomFields";
import useFlatColoring from "Hooks/useFlatColoring";
import { FLAT_PROPERTY_TABS_SETTINGS } from "Helpers/constants";

const ToolsColColor = ({
  isUpdatable,
  setIsUpdatable,
  CACHE_LIST_COLORS,
  apartmentNumber,
  tabName,
  CACHE_APARTMENTS,
  defaultInsertColor,
  setFlatsDetails,
  selectedTab,
  setRefresh,
  yIndex,
  xIndex,
  prefix,
  isMatrix,
}) => {
  const {
    onInsertColor,
    onChangeApartmentName,
    removeOneItemColor,
    canInsertColor,
    flatsDetails,
  } = useFlatColoring();

  let tabSettings = useMemo(
    () => FLAT_PROPERTY_TABS_SETTINGS[tabName],
    [tabName]
  );

  let itemHash = isMatrix
    ? `${prefix} ${xIndex + 1}0${yIndex}`
    : `${prefix} ${1}0${xIndex + 1}`;

  let flatName = tabSettings.no;
  let itemValue = flatsDetails?.[tabName]?.[itemHash]?.[flatName] || itemHash;
  let itemColor = flatsDetails?.[tabName]?.[itemHash]?.hex;

  // useEffect(() => {
  //   if (CACHE_APARTMENTS[apartmentNumber]) {
  //     defaultInsertColor(
  //       itemHash,
  //       tabName,
  //       CACHE_APARTMENTS[apartmentNumber]
  //       // CACHE_APARTMENTS[apartmentNumber]?.FlatBuildingDetailsIndex
  //     );
  //   }
  // }, [apartmentNumber]);

  return (
    <TableCol classes="!p-0  border border-gray-400">
      {isUpdatable === itemHash ? (
        <div className="px-1">
          <input
            type="number"
            className="h-full w-fit py-2 border-0 rounded-none focus-within:border-blue-400 focus:border"
            onKeyDown={(e) => {
              if (e.keyCode === 13) setIsUpdatable("");
            }}
            onBlur={(e) => {
              setIsUpdatable("");
            }}
            onChange={(e) => {
              onChangeApartmentName(tabName, itemHash, e.target.value);
            }}
            value={itemValue}
            defaultValue={itemValue}
          />
        </div>
      ) : (
        <div
          onClick={() => {
            if (canInsertColor)
              onInsertColor(tabName, itemHash, {
                name: itemValue,
                x_index: xIndex,
                y_index: yIndex,
              });
            if (itemColor) removeOneItemColor(tabName, itemHash);
          }}
          style={{
            background:
              typeof itemColor === "number"
                ? getValueOfInputColor(itemColor)
                : itemColor,
          }}
          className={`${
            itemColor ? "cursor-default" : "cursor-cell"
          } h-8 p-1 px-1 flex items-center justify-between tools-tab-item`}
        >
          <span className="bg-[#0005] text-white px-1 h-[22px] rounded-sm">
            {itemValue}
          </span>
          <div className="flex ml-3 rtl:mr-3 rtl:ml-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsUpdatable(itemHash);
              }}
              className="rounded-md scale-75 w-10 h-8 bg-blue-500 text-white flex items-center justify-center"
            >
              <EditIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </TableCol>
  );
};

export default ToolsColColor;
