import { PlusIcon } from "Components/Icons";
import MinusIcon from "Components/Icons/MinusIcon";
import React from "react";

export const IncreaseTableBar = ({
  increaseCount,
  setIncreaseCount,
  onDecrement,
}) => {
  return (
    <div className="flex items-center justify-between shadow bg-gray-100 dark:bg-dark-border">
      <button
        type="button"
        className="bg-blue-500 text-white p-1 active:bg-primary active:text-white disabled:bg-gray-100 disabled:text-gray-400 disabled:border disabled:cursor-not-allowed"
        disabled={increaseCount === 1}
        onClick={() => increaseCount > 1 && onDecrement()}
      >
        <MinusIcon circle className="h-5 w-5" />
      </button>
      <button
        type="button"
        className="bg-blue-500 text-white p-1 active:bg-primary active:text-white disabled:bg-gray-100 disabled:text-gray-400 disabled:border disabled:cursor-not-allowed"
        onClick={() => setIncreaseCount((prev) => prev + 1)}
      >
        <PlusIcon circle className="h-5 w-5" />
      </button>
    </div>
  );
};
