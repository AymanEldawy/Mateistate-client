import { useCallback, useState } from "react";
import {
  FolderEmptyIcon,
  FolderMinusIcon,
  FolderPlusIcon,
} from "Components/Icons";

import Modal from "Components/Global/Modal/Modal";
import { DynamicForm } from "Components/StructurePage/Forms/CustomForm/DynamicForm";
import { ApiActions } from "Helpers/Lib/api";
import MaterialTreeViewItem from "./MaterialTreeViewItem";
import useContextMenu from "Hooks/useContextMenu";
import FormSingular from "Components/StructurePage/Forms/CustomForm/FormSingular";
import MaterialForm from "Components/StructurePage/Forms/MaterialForm/MaterialForm";

const MaterialRenderTree = ({
  chartTree,
  name,
  onSubmit,
  refetchData,
  showStatus,
  onClickItem,
  refetch,
}) => {
  const { handleContextMenu, activeItemId, contextMenuPosition } = useContextMenu();
  const [selectedItem, setSelectedItem] = useState(null);
  const [stage, setStage] = useState('STORE');
  const [open, setOpen] = useState({});

  const onSelectItemHandler = async (item, stage) => {
    setStage(stage);
    const response = await ApiActions.read(name, {
      conditions: [{ type: "and", conditions: [["parent_id", "=", item?.id]] }],
      limit: 1,
      sorts: [{ column: "code", order: "DESC", nulls: "last" }],
    });

    let defaultValues = {
      code: parseInt(`${item?.code}01`),
      parent_id: item?.id || null,
      final_id: item?.final_id || item?.parent_id || null,
    };

    let responseItem = response?.result?.at(0);

    if (responseItem) {
      defaultValues.code = +responseItem?.code + 1;
    }
    if (item?.level) defaultValues.level = +item?.level + 1;

    setSelectedItem(defaultValues);
  };

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

  const displayTree = useCallback(
    (tree, level = 1, isMaterial) => {
      return tree?.map((item) => {

        return (
          <li className="space-x-3 w-fit mt-2 mb-2 last:mb-0" key={item?.id}>
            <MaterialTreeViewItem
              isMaterial={isMaterial}
              onClickItem={() => onClickItem(item?.id)}
              row={item}
              toggleOpen={() => {
                if (item?.children?.length || item?.materials?.length)
                  toggleOpen(item?.id, level);
              }}
              onSelectedItem={onSelectItemHandler}
              open={open}
              refetch={refetch}
              handleContextMenu={handleContextMenu}
              activeItemId={activeItemId}
              contextMenuPosition={contextMenuPosition}
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
                    {displayTree(
                      item?.children?.sort((a, b) => a?.code - b?.code),
                      level + 1
                    )}
                  </ul>
                ) : null}
              </>
            ) : null}
            {item?.materials?.length ? (
              <>
                {open[level] === item?.id ? (
                  <ul
                    className={`relative bg-[#9991] dark:bg-[#1111] pr-4 !ml-4 rounded-md dark:before:border-dark-border before:border-l-2 before:absolute before:left-0 before:-z-1 before:h-full color-level-${level} after:opacity-20 after:w-4 after:h-full after:absolute after:top-0`}
                  >
                    {displayTree(
                      item?.materials?.sort((a, b) => a?.code - b?.code),
                      level + 1,
                      true
                    )}
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

      <Modal
        outerClose
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        containerClassName={"z-[102] p-0"}
        bodyClassName={"!p-0"}
        boxClassName={"!shadow-none !p-0"}
        layoutBodyClassName={"!my-0"}
      >
        {stage === 'Class' ? (
          <FormSingular
            name={"material_group"}
            oldValues={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        ) : (
          <MaterialForm
            onClose={() => setSelectedItem(null)}
          />
        )}
      </Modal>
      <ul
        className={`relative pr-4 ltr:!ml-4 rtl:!mr-4 rounded-md dark:before:border-dark-border ltr:before:border-l-2 rtl:before:border-r-2  before:absolute ltr:before:left-0 rtl:before:right-0 before:-z-1 before:h-full color-level-0 after:opacity-50 after:w-4 after:h-full after:absolute after:top-0`}
      >
        {displayTree(chartTree?.sort((a, b) => a?.code - b?.code))}
      </ul>
    </>
  );
};

export default MaterialRenderTree;
