import Btn from "Components/Global/Btn";
import { EyeIcon, PlusIcon, PrintIcon, TrashIcon } from "Components/Icons";
import { DebouncedInput } from "Components/StructurePage/CustomFields";
import React from "react";
import { useTranslation } from "react-i18next";

export const ListHeader = ({
  onSearch,
  onClickAdd,
  onClickDelete,
  onClickView,
  onClickPrint,
  DeleteProps,
  addtionalActions
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-4 justify-between">
      {onSearch && (
        <div className="">
          <DebouncedInput
            type="text"
            id="search-navbar"
            className={`block w-full px-2 py-1  text-xs rounded-md dark:text-white text-gray-900 border border-gray-300  bg-gray-100 active:ring-blue-200 focus-visible:ring-blue-200 focus:ring-blue-500 focus:border-blue-500`}
            onChange={(value) => onSearch(value)}
            debounce={500}
          />
        </div>
      )}
      <div className="flex items-center gap-2">
        {onClickAdd && (
          <Btn onClick={onClickAdd}>
            <PlusIcon className="w-6 h-6" circle />
            {t("add_new")}
          </Btn>
        )}
        {onClickDelete && (
          <Btn kind="error" onClick={onClickDelete} {...DeleteProps}>
            <TrashIcon />{" "}
          </Btn>
        )}
        {onClickView && (
          <Btn onClick={() => onClickView(true)} kind="success">
            <EyeIcon />
          </Btn>
        )}
        {!!onClickPrint ? (
          <Btn onClick={onClickPrint} kind="info">
            <PrintIcon className="w-5 h-5" />
            {t("print")}
          </Btn>
        ) : null}
        {!!addtionalActions && addtionalActions}
      </div>
    </div>
  );
};
