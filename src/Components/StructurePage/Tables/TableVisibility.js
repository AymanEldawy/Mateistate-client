import { Drawer } from "Components/Global/Drawer";
import { CloseIcon } from "Components/Icons";
import { useLocalStorage } from "Hooks/useLocalStorage";

export const TableVisibility = ({
  table,
  tableName,
  onClose,
  columnVisibility,
}) => {
  const { getTable, setTable } = useLocalStorage();

  const saveSetting = () => {
    setTable(tableName, columnVisibility);
  };

  return (
    <Drawer onClose={onClose}>
      <div className="mt-4 w-72 overflow-auto max-h-full dark:bg-dark-bg">
        <div className="flex justify-between items-center gap-4 px-2">
          <h3 className="font-semibold text-lg text-center capitalize ltr:border-l-4 rtl:border-r-4 px-2 dark:text-white dark:border-white text-primary border-primary">
            {tableName}
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                saveSetting();
              }}
              className=" border rounded-full flex items-center justify-center h-7 w-7 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <ul className="flex flex-col rounded-md mt-4 pb-12">
          <li className="border-b last:border-b-0 p-2 px-4 text-sm capitalize flex items-center justify-between gap-4 dark:border-dark-bg bg-gray-300 dark:bg-dark-border">
            <span className="">column name</span>
            <label className="relative w-1/4 flex gap-4 items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                {...{
                  type: "checkbox",
                  checked: table.getIsAllColumnsVisible(),
                  onChange: table.getToggleAllColumnsVisibilityHandler(),
                }}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </li>
          {table.getAllLeafColumns().map((column) => {
            return (
              <div key={column.id}>
                <li
                  key={column.id}
                  className="border-b last:border-b-0 p-2 px-4 text-sm capitalize flex items-center justify-between gap-4 odd:bg-gray-100 dark:bg-transparent"
                >
                  <span className="w-1/2 ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {column.id}
                  </span>
                  <label
                    title={column.id}
                    className="relative w-1/4 flex gap-4 items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      {...{
                        type: "checkbox",
                        checked: column.getIsVisible(),
                        onChange: column.getToggleVisibilityHandler(),
                      }}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </Drawer>
  );
};
