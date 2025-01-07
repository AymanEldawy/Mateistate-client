import { Button } from "Components/Global/Button";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import {
  ChevronIcon,
  DoubleArrowIcon,
  PlusIcon,
  SearchIcon,
  TrashIcon,
} from "Components/Icons";
import React, { useState } from "react";
import Btn from "./Btn";

export const FormStepPagination = ({ formPagination }) => {
  const {
    goTo,
    goBack,
    goNext,
    lastNumber,
    setCurrentNumber,
    currentNumber,
    isLast,
    goNew,
  } = formPagination || {};
  

  return (
    <div className="flex flex-nowrap w-fit items-center justify-center gap-1 dark:bg-[#f1f1f121] dark:text-white">
      <button
        disabled={+currentNumber === 1}
        type="button"
        onClick={() => goTo("FIRST")}
        className="bg-light-green text-gray-100 disabled:text-gray-300 dark:disabled:!text-gray-700 disabled:opacity-90   rounded-md shadow flex items-center justify-center p-[2px]"
      >
        <DoubleArrowIcon className="ltr:rotate-180 w-6 h-6 text-inherit" />
      </button>
      <button
        disabled={+currentNumber === 1}
        type="button"
        onClick={goBack}
        className="bg-light-green text-gray-100 disabled:text-gray-300 dark:disabled:!text-gray-700 disabled:opacity-90   rounded-md shadow flex items-center justify-center p-[2px]"
      >
        <ChevronIcon className="rtl:-rotate-90 ltr:rotate-90 w-6 h-6 text-inherit" />
      </button>
      <span className="min-w-[40px] flex gap-1 text-center font-medium text-lg bg-gray-200 px-1">
        <input
          className="p-[2px] rounded h-[28px] text-center w-fit max-w-[56px] text-sm bg-gray-200"
          inputMode="numeric"
          value={currentNumber}
          onChange={(e) => {
            setCurrentNumber(e.target.value.replace(/[^0-9]/g, ""));
            if (e.keyCode === 27) {
              goTo(+e.target.value);
            }
          }}
          defaultValue={1}
          placeholder="1"
        />
        /
        {lastNumber}
      </span>
      <button
        disabled={isLast}
        type="button"
        className="bg-light-green text-gray-100 rounded-md shadow flex items-center justify-center p-[2px]"
        onClick={goNext}
      >
        <ChevronIcon className="rtl:rotate-90 ltr:-rotate-90 w-6 h-6 text-inherit" />
      </button>
      <button
        disabled={isLast}
        type="button"
        className="bg-light-green text-gray-100   rounded-md shadow flex items-center justify-center p-[2px]"
        onClick={() => goTo("LAST")}
      >
        <DoubleArrowIcon className="rtl:rotate-180 w-6 h-6 text-inherit" />
      </button>
      {currentNumber > lastNumber ? (
        <span className="text-yellow-500 border mx-4 border-yellow-500 bg-yellow-50 rounded p-1 text-sm">
          New
        </span>
      ) : (
        <Btn type="button" onClick={goNew} containerClassName="mx-4" >Add new</Btn>
      )}
    </div>
  );
};
