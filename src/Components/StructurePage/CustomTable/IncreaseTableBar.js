import { PlusIcon } from "Components/Icons";
import MinusIcon from "Components/Icons/MinusIcon";
import React from "react";

export const IncreaseTableBar = ({ increaseCount, setIncreaseCount }) => {
  return (
    <div className="flex items-center justify-between shadow bg-gray-100">
      <button
        className="bg-gray-200 p-1 active:bg-primary active:text-white disabled:bg-gray-100 disabled:text-gray-400 disabled:border disabled:cursor-not-allowed"
        disabled={increaseCount === 1}
        onClick={() =>
          increaseCount > 1 && setIncreaseCount((prev) => prev - 1)
        }
      >
        <MinusIcon circle className="h-5 w-5" />
      </button>
      <button
        className="bg-gray-200 p-1 active:bg-primary active:text-white disabled:bg-gray-100 disabled:text-gray-400 disabled:border disabled:cursor-not-allowed"
        onClick={() => setIncreaseCount((prev) => prev + 1)}
      >
        <PlusIcon circle className="h-5 w-5" />
      </button>
    </div>
  );
};
