import { DropDowns } from "Helpers/functions";
import React from "react";

export const DisplayRow = ({ row, getCachedList }) => {
  return (
    <ul className="flex flex-col mt-4 rounded-md p-2 overflow-auto max-h-full pb-12">
      {Object.entries(row).map(([key, value]) => {
        if (key === "seclvl") {
          value = DropDowns(key)[value].name
        } 
        if(key?.indexOf('guid') !== -1) {
          value = getCachedList(value) || value
        }
        return (
          <li
            key={key}
            className="border-b last:border-b-0 p-2 px-4 text-sm capitalize flex items-center justify-between gap-4 odd:bg-gray-100"
          >
            <strong className="text-gray-600">{key}:</strong>{" "}
            {value ? (
              <span className="bg-blue-100 p-1 rounded-md">{value}</span>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};
