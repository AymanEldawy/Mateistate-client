import { ChevronIcon } from "Helpers/Icons";
import React, { useState } from "react";

export const InputList = ({
  options = ["test", "test2", "test3", "test4"],
}) => {
  const [openList, setOpenList] = useState(false);
  const [val, setVal] = useState("");

  const handleSelect = (val) => {
    setVal(val);
    setOpenList(false);
  };

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div className="w-fit z-40 relative">
      <div className="flex gap-2 items-center border dark:border-borderdark rounded-md overflow-hidden">
        <button
          className={`border dark:border-borderdark p-1 ${openList ? " bg-blue-400 text-white" : ""}`}
          onClick={() => setOpenList((p) => !p)}
        >
          <ChevronIcon
            className={`w-5 h-5 duration-200 ${openList ? "rotate-180" : ""}`}
          />{" "}
        </button>
        <input className="!bg-transparent !border-none" value={val} onChange={handleChange} />
      </div>
      {openList ? (
        <ul className="absolute top-full left-0 w-full bg-white dark:bg-bgmaindark p-4 rounded-b-md shadow">
          {options.map((opt) => (
            <li
              onClick={() => handleSelect(opt)}
              className="p-2 border-b  dark:border-borderdark last:border-b-0 cursor-pointer hover:bg-gray-100 dark:hover:bg-borderdark"
            >
              {opt}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
