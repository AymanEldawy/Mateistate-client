import * as React from "react";

import menuData from "Helpers/menu";
import { Link } from "react-router-dom";
import { ChevronIcon } from "Components/Icons";
import { useTranslation } from "react-i18next";

const Menu = ({ menu }) => {
  const { t } = useTranslation();
  const [dropdown, setDropdown] = React.useState();

  const handleClickMenu = (level, id) => {
    setDropdown((prev) => ({
      ...prev,
      [level]: id
    }));
  };

  const closeDropDown = (e) => {
    console.log('called', '-');

    setDropdown("");
  };

  console.log(dropdown);

  const list = (links, level) => {
    return (
      links
        .map((item, i) => {
          if (item?.children) {
            return (
              <li key={item?.name} className="relative group" onClick={(e) => {
                e.stopPropagation()
                handleClickMenu(level, item?.name)
              }}>
                <button className="whitespace-nowrap flex justify-between items-center  hover:text-blue-600  dark:hover:bg-transparent dark:hover:text-white py-2 w-full ">
                  <span className="scale-[65%]">{item?.icon}</span>
                  {t(item.name)}
                  <span className="ml-auto rtl:mr-auto pl-2 rtl:pr-2">
                    <ChevronIcon className="h-3 w-3" />
                  </span>
                </button>
                <ul
                  className={`${item?.classes} ${item?.name === dropdown?.[level] ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none '} absolute bg-white bg_dark shadow top-[40px] py-4 rounded-md z-[99]`}
                >
                  {list(item.children, level + 1)}
                </ul>
              </li>
            );
          }
          if (item?.subChild) {
            return (
              <li key={item?.name} className="relative" onClick={(e) => {
                e.stopPropagation()
                handleClickMenu(level, item?.name)
              }}>
                <button className="whitespace-nowrap gap-2 justify-between hover:text-blue-600 py-2 hover:bg-gray-100 dark:hover:bg-transparent dark:hover:text-white px-4 w-full flex items-center ">
                  {t(item.name)}
                  <span className="-rotate-90">
                    <ChevronIcon className="!w-3 !h-3 " />
                  </span>
                </button>
                <ul className={`absolute ${item?.classes} ${item?.name === dropdown?.[level] ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none '} bg-white bg_dark shadow top-[0] py-4 rounded-md z-[99] left-full`}>
                  {list(item.subChild)}
                </ul>
              </li>
            );
          }
          return (
            <li key={item?.name} className="relative" onClick={(e) => {
              e.stopPropagation()
              setDropdown('')
            }}>
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
    <>
      <div className={`h-full w-full fixed top-0 left-0 z-[30] ${dropdown ? '' : 'hidden'}`} onClick={closeDropDown} />
      <div className="shadow bg-white dark:bg-dark-bg hidden lg:block z-[31]">
        <div className="max-w-[1400px] mx-auto">
          <ul className="primary-menu text-gray-500 dark:text-gray-400 text-sm font-medium min-h-[40px] flex gap-1 items-center justify-between capitalize">
            {list(menu, 0)}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
