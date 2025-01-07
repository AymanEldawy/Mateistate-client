import { Checkbox } from "Components/StructurePage/CustomFields";
import useFlatColoring from "Hooks/useFlatColoring";
import { useMemo, useState } from "react";
import ToolsColColor from "./ToolsColColor";
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
          floor_no: y + 1,
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
          floor_no: i + 1,
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
      <div className="max-w-fit">
        <table>
          <thead
            className={`text-xs text-gray-700 uppercase dark:border-dark-border dark:bg-dark-border dark:text-gray-300 bg-gray-200 !bg-[#0099a5] text-white`}
          >
            <tr>
              {canInsertColor ? (
                <th classes="px-4 py-2 border border-gray-400 min-w-[20px]"></th>
              ) : null}
              {Array(selectedTab?.y ? yCount : xCount)
                .fill(0)
                .map((row, indexY) => (
                  <th
                    key={`${row}-${indexY}`}
                    classes="border px-4 py-2 border-gray-400 min-w-[90px] !py-2 text-sm !px-2"
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
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {selectedTab?.y !== "" ? (
              Array(xCount)
                .fill(0)
                .map((r, indexX) => (
                  <tr key={`${r}-${indexX}`}>
                    {canInsertColor ? (
                      <td
                        className={`px-4 py-2 dark:border-dark-border !p-0 !px-2  border border-gray-400 darkL`}
                      >
                        <Checkbox
                          name={tabName}
                          onChange={
                            (e) =>
                              onSelectAllHorizontal(e, indexX, yCount, true)
                            // onSelectAllHorizontal(e, indexX, selectedTab?.y ? yCount : xCount, tabName)
                          }
                        />
                      </td>
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
                  </tr>
                ))
            ) : (
              <tr>
                {canInsertColor ? (
                  <td
                    className={`px-4 py-2 dark:border-dark-border !p-0 !px-2  border border-gray-400 darkL`}
                  >
                    <Checkbox
                      name={tabName}
                      onChange={(e) => onSelectAllHorizontal(e, 0, xCount)}
                    />
                  </td>
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
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
