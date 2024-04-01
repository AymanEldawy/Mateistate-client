import * as React from "react";

import menuData from "Helpers/menu";
import { Link } from "react-router-dom";
import { ChevronIcon } from "Components/Icons";
import { useTranslation } from "react-i18next";

const Menu = ({ menu }) => {
  const { t } = useTranslation();
  // const [dropdown, setDropdown] = React.useState(false);
  // const [subDropdown, setSubDropdown] = React.useState(false);
  // const [dropdownGroup, setDropdownGroup] = React.useState();
  // const handleClick = (key) => {
  //   setDropdown(key);
  // };
  // const handleSubDropdown = (key) => {
  //   setSubDropdown(key);
  // };
  // const closeDropDown = (e) => {
  //   e.stopPropagation();
  //   setDropdown(" ");
  //   setSubDropdown(" ");
  // };
  const list = (links) => {
    return (
      links
        // ?.sort(
        //   (a, b) => +b.hasOwnProperty("subChild") - +a.hasOwnProperty("subChild")
        // )
        .map((item, i) => {
          if (item?.children) {
            return (
              <li key={item?.name} className="relative group ">
                <button className="whitespace-nowrap flex justify-between items-center  hover:text-blue-600  dark:hover:bg-transparent dark:hover:text-white py-2 w-full ">
                  <span className="scale-[65%]">{item?.icon}</span>
                  {t(item.name)}
                  <span className="ml-auto rtl:mr-auto pl-2 rtl:pr-2">
                    <ChevronIcon className="h-3 w-3" />
                  </span>
                </button>
                <ul
                //  ${
                //     item?.children?.length > 7
                //       ? "grid grid-cols-3 min-w-[650px] items gap-1"
                //       : " flex flex-col gap-2"
                //   } 
                  className={`${item?.classes} opacity-0 pointer-events-none !group-hover:opacity-1 !group-hover:pointer-events-auto absolute bg-white bg_dark shadow top-[40px] py-4 rounded-md z-[99]`}
                >
                  {list(item.children)}
                </ul>
              </li>
            );
          }
          if (item?.subChild) {
            return (
              <li key={item?.name} className="relative">
                <button className="whitespace-nowrap gap-2 justify-between hover:text-blue-600 py-2 hover:bg-gray-100 dark:hover:bg-transparent dark:hover:text-white px-4 w-full flex items-center ">
                  {t(item.name)}
                  <span className="-rotate-90">
                    <ChevronIcon className="!w-3 !h-3 " />
                  </span>
                </button>
                <ul className="opacity-0 pointer-events-none absolute bg-white bg_dark shadow top-[0] py-4 rounded-md z-[99] left-full">
                  {list(item.subChild)}
                </ul>
              </li>
            );
          }
          return (
            <li key={item?.name} className="relative">
              {item?.link === "" ? (
                <button className="whitespace-nowrap capitalize hover:text-blue-600 dark:hover:bg-transparent dark:hover:text-white py-2 px-4 w-full flex">
                  {t(item.name)}
                </button>
              ) : (
                <Link
                  className={`whitespace-nowrap capitalize hover:text-blue-600 dark:hover:bg-transparent dark:hover:text-white py-2 px-4 w-full flex ${item?.classes}`}
                  to={item?.link}
                >
                  {t(item.name)}
                </Link>
              )}
            </li>
          );
        })
    );
  };

  return (
    <div className="shadow bg-white dark:bg-dark-bg hidden lg:block ">
      <div className="max-w-[1400px] mx-auto">
        <ul className="primary-menu text-gray-500 dark:text-gray-400 text-sm font-medium min-h-[40px] flex gap-1 items-center justify-between capitalize">
          {list(menu)}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
