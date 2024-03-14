import React from "react";

const COLOR_GUIDE = [
  { key: "empty", name: "Empty", color: "#eee" },
  { key: "rented", name: "Rented", color: "#080" },
  {
    key: "contract_near_ending",
    name: "Nearing the end of the contract",
    color: "#ff0",
  },
  { key: "contract_expired", name: "The contract has expired", color: "#f00" },
  { key: "reserved", name: "Reserved", color: "#00f" },
  { key: "not_available", name: "not available", color: "#aaa" },
];

export const BuildingSchemaResults = ({ results }) => {
  return (
    <div className="flex flex-col gap-4 mt-8 border-t pt-4">
      <div className="">
        <h3 className="mb-2 font-medium capitalize">Preparation</h3>
        <ul className="grid grid-cols-6 text-sm gap-4">
          {COLOR_GUIDE?.map((guide) => (
            <li className="flex flex-col items-center gap-1">
              <span className="font-medium">{results?.[guide?.key]?.percentage}</span>
              <span
                className="block w-full px-2 py-1 rounded-md text-center"
                style={{ backgroundColor: guide?.color }}
              >{results?.[guide?.key]?.count}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <h3 className="mb-2 font-medium capitalize">Color guide</h3>
        <ul className="grid grid-cols-6 text-sm gap-4">
          {COLOR_GUIDE?.map((guide) => (
            <li
              className="px-2 py-1 rounded-md text-center flex items-center justify-center capitalize"
              style={{ backgroundColor: guide?.color }}
            >
              {guide?.name}
            </li>
          ))}
        </ul>
      </div>
      {/* color guid */}
    </div>
  );
};
