import { PlusIcon } from "Helpers/Icons";
import MinusIcon from "Helpers/Icons/MinusIcon";
import React from "react";

export const IncreaseTableBar = ({increaseCount, setIncreaseCount}) => {
  return (
    <div className="flex items-center justify-between shadow bg-gray-100">
      <button className="bg-gray-200 p-1 active:bg-primary active:text-white"
        onClick={() =>
          increaseCount > 1 && setIncreaseCount((prev) => prev - 1)
        }
      >
        <MinusIcon circle className="h-5 w-5" />
      </button>
      <button className="bg-gray-200 p-1 active:bg-primary active:text-white" onClick={() => setIncreaseCount((prev) => prev + 1)}>
        <PlusIcon circle className="h-5 w-5" />
      </button>
    </div>
  );
};
