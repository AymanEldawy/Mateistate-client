import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EditIcon, PlusIcon, TrashIcon } from "Components/Icons";
import ConfirmModal from "Components/Global/Modal/ConfirmModal";
import { useTranslation } from "react-i18next";
import useCurd from "Hooks/useCurd";
import useContextMenu from "Hooks/useContextMenu";
import { ContextMenuComponent } from "Components/Global/ContextMenuComponent";

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

  return (
    <>
      <ConfirmModal onConfirm={onDeleteItem} open={open} setOpen={setOpen} />
      <div
        onClick={toggleOpen}
        className="flex capitalize cursor-pointer relative"
        onContextMenu={(e) => {
          handleContextMenu(row?.id, e);
        }}
      >
        {activeItemId === row?.id ? (
          <ContextMenuComponent
            contextMenuPosition={contextMenuPosition}
            items={[
              {
                icon: <PlusIcon circle />,
                name: "Add class",
                onClick: (e) => {
                  e.stopPropagation();
                  onSelectedItem();
                },
              },
              {
                icon: <TrashIcon />,
                name: "delete class",
                onClick: () => setOpen(true),
              },
              {
                icon: <PlusIcon circle />,
                name: "Add material 1",
                onClick: (e) => {
                  e.stopPropagation();
                  onSelectedItem();
                },
              },
              {
                icon: <EditIcon />,
                name: "edit class",
                onClick: () => {
                  navigate(`/form/${table}/${row?.id}`);
                },
              },
            ]}
          />
        ) : null}
        <div className="group options flex ltr:pl-8 rtl:pr-8 min-w-[190px] hover:text-black dark:hover:text-white dark:hover:bg-dark-bg dark:hover:border-dark-border hover:bg-gray-100 border-transparent rounded border hover:border-gray-300">
          <button className="scale-75">{icon}</button>
          <span
            className={`mx-2 ${
              row?.type && row?.type !== 1 ? "text-blue-500" : ""
            }`}
          >{`${row?.code}-${row?.name}`}</span>

          <span className="ltr:ml-8 rtl:mr-8" />
        </div>
      </div>
    </>
  );
};

export default MaterialTreeViewItem;
