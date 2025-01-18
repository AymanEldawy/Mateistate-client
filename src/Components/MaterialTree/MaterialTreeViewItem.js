import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import { useTranslation } from "react-i18next";
import useCurd from "Hooks/useCurd";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { EditIcon, PlusIcon, TrashIcon } from "Components/Icons";

const MaterialTreeViewItem = ({
  row,
  icon,
  toggleOpen,
  onSelectedItem,
  showStatus,
  isMaterial,
  refetch,
  handleContextMenu,
  activeItemId,
  contextMenuPosition,
}) => {
  const table = isMaterial ? "material" : "material_group";
  const navigate = useNavigate();
  const { remove } = useCurd();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const onDeleteItem = async () => {
    const response = await remove(table, row?.id);
    if (response?.success) {
      setOpen(false);
      refetch();
    }
  };

  const title = isMaterial ? 'Material' : 'Class'

  return (
    <>
      <ConfirmModal onConfirm={onDeleteItem} open={open} setOpen={setOpen} />
      <ContextMenu id={row?.id} className="bg-gray-50 border border-gray-200 rounded-md p-2 text-sm shadow flex flex-col gap-1">
        <MenuItem
          className={`flex hover:text-blue-500 gap-2 items-center cursor-pointer whitespace-nowrap hover:bg-blue-50 text-sm p-1 text-gray-600`}
          onClick={() => onSelectedItem(row, title)}
        >
          <PlusIcon className="h-[17px] w-[17px]" circle /> Add {title}
        </MenuItem>
        <MenuItem
          className={`flex hover:text-blue-500 gap-2 items-center cursor-pointer whitespace-nowrap hover:bg-blue-50 text-sm p-1 text-gray-600`}
          onClick={() => onSelectedItem(row, title)}
        >
          <EditIcon className="h-[17px] w-[17px]" /> Edit {title}
        </MenuItem>
        <MenuItem
          className={`flex text-red-500 gap-2 items-center cursor-pointer whitespace-nowrap hover:bg-red-50 text-sm p-1`}
          onClick={() => setOpen(true)}
        >
          <TrashIcon className="h-[17px] w-[17px]" /> Delete {title}
        </MenuItem>
        {!isMaterial && (
          <>
            <MenuItem
              className="border h-[1px] border-gray-100"
              divider />
            <MenuItem
              className={`flex hover:text-blue-500 gap-2 items-center cursor-pointer whitespace-nowrap hover:bg-blue-50 text-sm p-1 text-gray-600`}
              onClick={() => onSelectedItem(row, 'Material')}
            >
              <PlusIcon className="h-[17px] w-[17px]" circle />
              Add Material
            </MenuItem>

          </>
        )}
      </ContextMenu>

      <div className=""
        onClick={toggleOpen}
      >
        <ContextMenuTrigger
          id={row?.id}
          className="flex capitalize cursor-pointer relative"
        >

          <div className="group options flex ltr:pl-8 rtl:pr-8 min-w-[190px] hover:text-black dark:hover:text-white dark:hover:bg-dark-bg dark:hover:border-dark-border hover:bg-gray-100 border-transparent rounded border hover:border-gray-300">
            <span className="scale-75">{icon}</span>
            <span
              className={`mx-2 ${row?.type && row?.type !== 1 ? "text-blue-500" : ""
                }`}
            >{`${row?.code}-${row?.name}`}</span>

            <span className="ltr:ml-8 rtl:mr-8" />
          </div>
        </ContextMenuTrigger>
      </div>

    </>
  );
};

export default MaterialTreeViewItem;
