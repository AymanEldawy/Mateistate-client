import { useCallback } from "react";
import { useState } from "react";

import {
  FolderEmptyIcon,
  FolderMinusIcon,
  FolderPlusIcon,
} from "Components/Icons";

import Modal from "Components/Global/Modal/Modal";
import TreeViewItem from "./TreeViewItem";
import { DynamicForm } from "Components/StructurePage/Forms/CustomForm/DynamicForm";

const RenderTree = ({ chartTree, name, deleteItem, onSubmit, refetchData }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState({});

  const toggleOpen = (itemId, level) => {
    if (open[level] === itemId) {
      setOpen((prev) => {
        return {
          ...prev,
          [level]: "",
        };
      });
    } else
      setOpen((prev) => {
        return {
          ...prev,
          [level]: itemId,
        };
      });
  };

  const renderTree = useCallback(
    (tree, level = 1) => {
      return tree?.map((item) => {
        return (
          <li className="space-x-3 w-fit mt-2 mb-2 last:mb-0" key={item?.id}>
            <TreeViewItem
              deleteItem={deleteItem}
              table={name}
              row={item}
              toggleOpen={() => {
                if (item?.children?.length) toggleOpen(item?.id, level);
              }}
              onSelectedItem={() => setSelectedItem(item)}
              open={open}
              icon={
                !item?.children?.length ? (
                  <span className="text-gray-400 dark:text-gray-700">
                    <FolderEmptyIcon />
                  </span>
                ) : open[level] === item?.id ? (
                  <span className="text-red-600">
                    <FolderMinusIcon />
                  </span>
                ) : (
                  <span className="text-green-500">
                    <FolderPlusIcon />
                  </span>
                )
              }
            />
            {item?.children?.length ? (
              <>
                {open[level] === item?.id ? (
                  <ul
                    className={`relative bg-[#9991] dark:bg-[#1111] pr-4 !ml-4 rounded-md dark:before:border-dark-border before:border-l-2 before:absolute before:left-0 before:-z-1 before:h-full color-level-${level} after:opacity-20 after:w-4 after:h-full after:absolute after:top-0`}
                  >
                    {renderTree(item?.children, level + 1)}
                  </ul>
                ) : null}
              </>
            ) : null}
          </li>
        );
      });
    },
    [open, toggleOpen]
  );

  const submit = (values) => {
    const result = onSubmit(values);
    if (result) setSelectedItem(null);
  };

  return (
    <>
      <Modal open={!!selectedItem} onClose={() => setSelectedItem(null)}>
        <DynamicForm
          oldValues={{
            parent_id: selectedItem?.id || null,
            final_id: selectedItem?.final_id || selectedItem?.parent_id || null,
          }}
          onSubmit={submit}
          name={name}
          onClose={() => setSelectedItem(null)}
          refetchData={refetchData}
        />
      </Modal>
      <ul
        className={`relative pr-4 ltr:!ml-4 rtl:!mr-4 rounded-md dark:before:border-dark-border ltr:before:border-l-2 rtl:before:border-r-2  before:absolute ltr:before:left-0 rtl:before:right-0 before:-z-1 before:h-full color-level-0 after:opacity-50 after:w-4 after:h-full after:absolute after:top-0`}
      >
        {renderTree(chartTree)}
      </ul>
    </>
  );
};

export default RenderTree;
