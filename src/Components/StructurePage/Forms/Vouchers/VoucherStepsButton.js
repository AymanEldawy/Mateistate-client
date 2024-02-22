import { Button } from "Components/Global/Button";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import { ChevronIcon, DoubleArrowIcon, SearchIcon } from "Components/Icons";
import React, { useState } from "react";

export const VoucherStepsButton = ({
  number,
  goTo,
  maxLength,
  isNewOne,
  onClickArchive,
  onClickDelete,
  isDeleted,
  isArchived,
  allowActions,
  setNumber,
  onClickAddNew,
}) => {
  const [num, setNum] = useState(0);
  const [open, setOpen] = useState(false);
  const [confirmationConfig, setConfirmConfig] = useState({});

  const onTakeAction = (action) => {
    let info = {};
    if (action === "archive") {
      info.type = "warning";
      info.msg = `Are you sure you want to Archived?`;
      info.onConfirm = () => {
        onClickArchive();
        setConfirmConfig({});
      };
    }

    setConfirmConfig({
      onConfirm: () => {
        onClickDelete();
        setConfirmConfig({});
      },
      outerClose: () => setConfirmConfig({}),
      open: true,
      ...info,
    });
  };

  return (
    <>
      <ConfirmModal {...confirmationConfig} />

      <div className="flex items-center flex-1 justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center gap-2 bg-blue-100 dark:bg-[#f1f1f121] dark:text-white rounded-2xl">
            <button
              disabled={+number === 1}
              type="button"
              onClick={() => goTo(1)}
              className="bg-blue-500 text-white disabled:text-gray-300 disabled:opacity-90 disabled:bg-gray-100 rounded-md shadow flex items-center justify-center p-1"
            >
              <DoubleArrowIcon className="ltr:rotate-180 w-6 h-6" />
            </button>
            <button
              disabled={+number === 1}
              type="button"
              onClick={() => goTo(number - 1)}
              className="bg-blue-500 text-white disabled:text-gray-300 disabled:opacity-90 disabled:bg-gray-100 rounded-md shadow flex items-center justify-center p-1"
            >
              <ChevronIcon className="rtl:-rotate-90 ltr:rotate-90 w-6 h-6" />
            </button>
            <span className="min-w-[40px] text-center font-medium text-lg">
              {number} / {maxLength}
            </span>
            <button
              disabled={isNewOne || number >= maxLength}
              type="button"
              className="bg-blue-500 text-white disabled:bg-gray-100 rounded-md shadow flex items-center justify-center p-1"
              onClick={() => goTo(+number + 1)}
            >
              <ChevronIcon className="rtl:rotate-90 ltr:-rotate-90 w-6 h-6" />
            </button>
            <button
              disabled={number >= maxLength}
              type="button"
              className="bg-blue-500 text-white disabled:bg-gray-100 rounded-md shadow flex items-center justify-center p-1"
              onClick={() => goTo(maxLength)}
            >
              <DoubleArrowIcon className="rtl:rotate-180 w-6 h-6 text-inherit" />
            </button>
          </div>
          <div className="flex rounded-md items-center border overflow-hidden">
            <input
              className="p-1 w-16"
              inputMode="numeric"
              value={num}
              onChange={(e) => setNum(e.target.value.replace(/[^0-9]/g, ""))}
            />
            <button
              type="button"
              disabled={num > +maxLength + 1}
              onClick={() => goTo(num)}
              className="bg-blue-500 text-white p-1 px-[6px] h-[32px] flex items-center justify-center  disabled:bg-gray-300 disabled:text-gray-400 disabled:border disabled:cursor-not-allowed"
            >
              <SearchIcon className="w-5 h-5 text-gray-200" />
            </button>
          </div>
          {number > +maxLength ? null : (
            <Button
              type="button"
              title="Add new"
              // className="text-blue-500"
              onClick={onClickAddNew}
            />
          )}
        </div>
        {allowActions ? (
          <div className="flex items-center gap-4">
            <Button
              type="button"
              classes={`${
                isDeleted ? "bg-red-200" : "bg-red-500"
              } bg-red-500 p-2 rounded-md `}
              onClick={() => onTakeAction("delete")}
              title={isDeleted ? "Deleted" : "Delete"}
            />
            {/* 
            <Button
              type="button"
              classes={`${
                isArchived ? "bg-teal-200" : "bg-teal-500"
              } bg-teal-500 p-2 rounded-md `}
              onClick={() => onTakeAction("archive")}
              title={isArchived ? "Archived" : "Archive"}
            /> */}
          </div>
        ) : null}
      </div>
    </>
  );
};
