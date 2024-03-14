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
import {
  generateFlatHashName,
  getAlphabetSortingView,
  getPrefix,
} from "Helpers/functions";
import { FLAT_PROPERTY_TABS } from "Helpers/constants";

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

  let prefix = useMemo(() => getPrefix(selectedTab.tabName), [selectedTab]);

  if (!row?.id) return;

  const onSelectAllHorizontal = (e, y, x, matrix) => {
    const { tabName } = selectedTab;
    let setting = FLAT_PROPERTY_TABS[tabName];

    for (let i = 0; i < x; i++) {
      let itemHash = matrix
        ? generateFlatHashName(tabName, setting, i, y)
        : generateFlatHashName(tabName, setting, y, i);

      if (e.target.checked) {
        let additional = {
          name: itemHash,
          x_index: i,
          y_index: y,
        };
        onInsertColor(tabName, itemHash, additional);
      } else {
        onRemoveFromColor(tabName, itemHash);
      }
    }
  };

  const onSelectAllVertical = (e, y, x) => {
    const { tabName } = selectedTab;
    for (let i = 0; i < x; i++) {
      
      let itemHash = generateFlatHashName(tabName, selectedTab, y, i);
      if (e.target.checked) {
        let additional = {
          name: itemHash,
          x_index: y,
          y_index: i + 1,
        };
        onInsertColor(tabName, itemHash, additional);
      } else {
        onRemoveFromColor(tabName, itemHash);
      }
    }
  };

  let xCount = +row[selectedTab?.x];
  let yCount = selectedTab?.y ? +row?.[selectedTab?.y] : +row?.[selectedTab?.x];

  return (
    <div key={selectedTab}>
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
                      inputClassName="mr-2 !ml-0 bg-gray-500 w-9"
                      onChange={(e) => {
                        onSelectAllVertical(e, indexY, xCount);
                        // onSelectAllVertical(e, indexY, yCount, tabName);
                        // onSelectAllVertical(e, xCount, yCount, tabName);
                      }}
                    />
                  ) : null}
                  {getAlphabetSortingView(indexY + 1)}
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
                    <TableCol classes="!p-0 !px-2  border border-gray-400 darkL">
                      <Checkbox
                        name={tabName}
                        onChange={
                          (e) => onSelectAllHorizontal(e, indexX, yCount, true)
                          // onSelectAllHorizontal(e, indexX, selectedTab?.y ? yCount : xCount, tabName)
                        }
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
                <TableCol classes="!p-0 !px-2  border border-gray-400 darkL">
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
                    yIndex={0}
                    xIndex={indexX}
                    prefix={prefix}
                    tabName={tabName}
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
    </div>
  );
};
