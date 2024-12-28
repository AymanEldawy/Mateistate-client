import useContextMenu from "Hooks/useContextMenu";
import { useEffect } from "react";

export const ContextMenuComponent = ({
  items = [],
  customRender,
  itemClassName,
  contextMenuPosition,
}) => {
  const { activeItemId, hideContextMenu } = useContextMenu();
  useEffect(() => {
    const handleClickOutside = () => {
      // if (activeItemId !== null) {
        hideContextMenu();
      // }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeItemId, hideContextMenu]);
  // if (activeId !== activeItemId) return;
  return (
    <ul
      className="fixed rounded-md border bg-white dark:bg-dark-bg z-[1000] p-3 list-none"
      style={{
        top: contextMenuPosition?.y + "px",
        left: contextMenuPosition?.x + "px",
      }}
    >
      {customRender ? (
        customRender(items)
      ) : (
        <>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                item?.onClick();
                hideContextMenu();
              }}
              className={`flex hover:text-blue-500 gap-2 items-center whitespace-nowrap hover:bg-blue-50 text-sm p-1 text-gray-600`}
            >
              {item?.icon && (
                <span className="w-8 scale-[80%] shrink-0 flex items-center justify-center">
                  {item?.icon}{" "}
                </span>
              )}
              {item.name}
            </li>
          ))}
        </>
      )}
    </ul>
  );
};
