import { Checkbox } from "Components/StructurePage/CustomFields";
import TableBody from "Components/StructurePage/CustomTable/TableBody";
import TableCol from "Components/StructurePage/CustomTable/TableCol";
import TableHead from "Components/StructurePage/CustomTable/TableHead";
import TableHeadCol from "Components/StructurePage/CustomTable/TableHeadCol";
import TableRow from "Components/StructurePage/CustomTable/TableRow";
import useFlatColoring from "Hooks/useFlatColoring";
import React, { useMemo, useState } from "react";
import ToolsColColor from "./ToolsColColor";
import Table from "Components/StructurePage/CustomTable/Table";
import { getPrefix } from "Helpers/functions";

export const ToolsTabsTable = ({
  row,
  selectedTab,
  flatsDetails,
  setFlatsDetails,
}) => {
  const { canInsertColor, onInsertColor, onRemoveFromColor } =
    useFlatColoring();
  const { tabName } = selectedTab;
  const [isUpdatable, setIsUpdatable] = useState("");

  // let prefix = useMemo(() => getPrefix(selectedTab.tabName), [selectedTab]);
  let prefix = 1;

  if (!row?.id) return;

  const defaultInsertColor = (itemHash, tabName, data, index) => {
    setFlatsDetails((prev) => {
      return {
        ...prev,
        [`${itemHash}&${tabName}`]: {
          ...data,
          // FlatBuildingDetailsIndex: index,
        },
      };
    });
  };

  const onSelectAllHorizontal = (e, y, x) => {
    for (let i = 0; i < x; i++) {
      let itemValue = `${prefix} ${y + 1}0${i}`;
      if (e.target.checked) {
        let additional = {
          name: itemValue,
          x_index: i,
          y_index: y,
        };
        onInsertColor(tabName, itemValue, additional);
      } else {
        onRemoveFromColor(tabName, itemValue);
      }
    }
  };

  const onSelectAllVertical = (e, y, x) => {
    const { tabName } = selectedTab;
    for (let i = 0; i < x; i++) {
      let itemValue = `${prefix} ${i + 1}0${y}`;
      if (e.target.checked) {
        let additional = {
          name: itemValue,
          x_index: y,
          y_index: i + 1,
        };
        onInsertColor(tabName, itemValue, additional);
      } else {
        onRemoveFromColor(tabName, itemValue);
      }
    }
    // setRefresh((p) => !p);
  };

  let xCount = 3;
  let yCount = 4;
  // let xCount = +row[selectedTab?.x];
  // let yCount = selectedTab?.y ? +row[selectedTab?.y] : +row[selectedTab?.x];

  return (
    <Table className="max-w-fit">
      <TableHead classes="!bg-[#0099a5] text-white">
        {canInsertColor ? (
          <TableHeadCol classes="border border-gray-400 min-w-[20px]"></TableHeadCol>
        ) : null}
        {Array(selectedTab?.y ? yCount : xCount)
          .fill(0)
          .map((row, indexY) => (
            <TableHeadCol
              key={`${row}-${indexY}`}
              classes="border border-gray-400 min-w-[90px] !py-2 text-sm !px-2"
            >
              <div className="flex gap-1 justify-between items-center">
                {canInsertColor && selectedTab?.y !== "" ? (
                  <Checkbox
                    name={tabName}
                    className="mr-2 !ml-0"
                    onChange={(e) => {
                      onSelectAllVertical(e, indexY, yCount);
                    }}
                  />
                ) : null}
                0{indexY + 1}
              </div>
            </TableHeadCol>
          ))}
      </TableHead>
      <TableBody>
        {selectedTab?.y !== "" ? (
          Array(xCount)
            .fill(0)
            .map((r, indexX) => (
              <TableRow key={`${r}-${indexX}`}>
                {canInsertColor ? (
                  <TableCol classes="!p-0 !px-2  border border-gray-400">
                    <Checkbox
                      name={tabName}
                      onChange={(e) => onSelectAllHorizontal(e, indexX, yCount)}
                    />
                  </TableCol>
                ) : null}
                {Array(yCount)
                  .fill(0)
                  .map((r, indexY) => (
                    <ToolsColColor
                      key={`${indexY}-${row}`}
                      xIndex={indexX}
                      yIndex={indexY}
                      prefix={prefix}
                      tabName={tabName}
                      defaultInsertColor={defaultInsertColor}
                      // CACHE_APARTMENTS={CACHE_APARTMENTS}
                      isUpdatable={isUpdatable}
                      setFlatsDetails={setFlatsDetails}
                      selectedTab={selectedTab}
                      setIsUpdatable={setIsUpdatable}
                      flatsDetails={flatsDetails}
                      isMatrix
                    />
                  ))}
              </TableRow>
            ))
        ) : (
          <TableRow>
            {canInsertColor ? (
              <TableCol classes="!p-0 !px-2  border border-gray-400">
                <Checkbox
                  name={tabName}
                  onChange={(e) => onSelectAllHorizontal(e, 0, xCount)}
                />
              </TableCol>
            ) : null}
            {Array(xCount)
              .fill(0)
              .map((r, indexX) => (
                <ToolsColColor
                  key={`${0}-${row}`}
                  xIndex={indexX}
                  prefix={prefix}
                  tabName={tabName}
                  defaultInsertColor={defaultInsertColor}
                  isUpdatable={isUpdatable}
                  setFlatsDetails={setFlatsDetails}
                  selectedTab={selectedTab}
                  setIsUpdatable={setIsUpdatable}
                  flatsDetails={flatsDetails}
                />
              ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
