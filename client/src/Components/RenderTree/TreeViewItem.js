import { useState } from "react";
import { Link } from "react-router-dom";
import { EditIcon, PlusIcon, TrashIcon } from "Helpers/Icons";
import ConfirmModal from "Components/ConfirmModal/ConfirmModal";
import { useTranslation } from "react-i18next";

const TreeViewItem = ({
  table,
  row,
  icon,
  toggleOpen,
  onSelectedItem,
  deleteItem,
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const onDeleteItem = () => {
    deleteItem([row?.Guid]);
    setOpen(false);
  };

  return (
    <>
      <ConfirmModal onConfirm={onDeleteItem} open={open} setOpen={setOpen} />
      <div onClick={toggleOpen} className="flex capitalize cursor-pointer">
        <div className="group options flex ltr:pl-8 rtl:pr-8 min-w-[190px] hover:text-black dark:hover:text-white dark:hover:bg-dark-bg dark:hover:border-dark-border hover:bg-gray-100 border-transparent rounded border hover:border-gray-300">
          <button className="scale-75">{icon}</button>
          <span className="mx-2">{row?.Name}</span>
          <span className="ltr:ml-8 rtl:mr-8" />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectedItem();
            }}
            className="tooltip text-transparent group-hover:text-blue-600 rounded-full"
            data-title={t("Add")}
          >
            <span className="scale-75 block">
              <PlusIcon circle />
            </span>
          </button>
          <Link
            className="tooltip text-transparent group-hover:text-green-500"
            data-title={t("Edit")}
            to={`/update/${table}/${row?.Guid}`}
            state={{ row, table }}
          >
            <span className="scale-75 block">
              <EditIcon />
            </span>
          </Link>
          <button
            className="tooltip text-transparent group-hover:text-red-500"
            data-title={t("Delete")}
            onClick={() => setOpen(true)}
          >
            <span className="scale-90 block">
              <TrashIcon />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TreeViewItem;
