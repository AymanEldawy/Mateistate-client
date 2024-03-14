import Table from "Components/StructurePage/CustomTable/Table";
import TableBody from "Components/StructurePage/CustomTable/TableBody";
import TableCol from "Components/StructurePage/CustomTable/TableCol";
import TableHead from "Components/StructurePage/CustomTable/TableHead";
import TableHeadCol from "Components/StructurePage/CustomTable/TableHeadCol";
import TableRow from "Components/StructurePage/CustomTable/TableRow";
import {
  generateFlatHashName,
  getAlphabetSortingView,
} from "Helpers/functions";
import React from "react";

export const BuildingSchemaUnits = ({
  selectedTab,
  building,
  flatsDetails,
}) => {
  let xCount = +building?.[selectedTab?.x] || 0;
  let yCount = selectedTab?.y
    ? +building?.[selectedTab?.y]
    : +building?.[selectedTab?.x];

  return (
    <div>
      <div>
        <Table className="max-w-fit">
          <TableHead classes="!bg-[#0099a5] text-white">
            {Array(selectedTab?.y ? yCount : xCount)
              .fill(0)
              .map((row, indexY) => (
                <TableHeadCol
                  key={`${row}-${indexY}`}
                  classes="border border-gray-400 min-w-[90px] !py-2 text-sm !px-2"
                >
                  
                  <div className="text-center w-full">
                    {getAlphabetSortingView(indexY + 1)}
                  </div>
                </TableHeadCol>
              ))}
          </TableHead>
          <TableBody>
            {selectedTab?.y !== "" ? (
              Array(xCount)
                .fill(0)
                .map((r, indexX) => {
                  return (
                    <TableRow key={`${r}-${indexX}`}>
                      {Array(yCount)
                        .fill(0)
                        .map((r, indexY) => {
                          const itemHash = generateFlatHashName(
                            selectedTab?.tabName,
                            selectedTab,
                            indexY,
                            indexX
                          );
                          const unit =
                            flatsDetails?.[selectedTab?.tabName]?.[itemHash];

                          return (
                            <TableCol classes="!p-0  border border-gray-400">
                              {unit ? (
                                <span className="text-center py-1 px-2 block">
                                  {unit?.[selectedTab?.no]}
                                </span>
                              ) : (
                                <span />
                              )}
                            </TableCol>
                          );
                        })}
                    </TableRow>
                  );
                })
            ) : (
              <TableRow>
                {Array(xCount)
                  .fill(0)
                  .map((r, indexX) => {
                    const itemHash = generateFlatHashName(
                      selectedTab?.tabName,
                      selectedTab,
                      0,
                      indexX
                    );

                    const unit =
                      flatsDetails?.[selectedTab?.tabName]?.[itemHash];

                    return (
                      <TableCol classes="!p-0  border border-gray-400">
                        {unit ? (
                          <span className="text-center py-1 px-2 block">
                            {unit?.[selectedTab?.no]}
                          </span>
                        ) : (
                          <span />
                        )}
                      </TableCol>
                    );
                  })}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
