import * as React from "react";

import menuData from "Helpers/menu";
import { Link } from "react-router-dom";
import { ArrowSolidIcon, ChevronIcon } from "Components/Icons";
import { useTranslation } from "react-i18next";

const Menu = ({ menu }) => {
  const { t } = useTranslation();
  const [dropdown, setDropdown] = React.useState();

  const handleClickMenu = (level, id) => {
    if (level === 0) {
      setDropdown({
        [level]: id
      })
    } else {
      setDropdown((prev) => ({
        ...prev,
        [level]: id
      }));
    };
  }

  const closeDropDown = (e) => {
    setDropdown("");
  };

  const list = (links, level) => {
    return (
      links
        .map((item, i) => {
          if (item?.children) {
            return (
              <li
                key={item?.name}
                onClick={(e) => {
                  e.stopPropagation()
                  handleClickMenu(level, item?.name)
                }}
                className={`relative border border-transparent group hover:bg-gray-100 hover:border-[#ddd] ${item?.name === dropdown?.[level] ? 'bg-gray-100 border-[#ddd]' : ''}`}
              >
                <button className="whitespace-nowrap flex justify-between items-center px-1 py-1 w-full ">
                  <span className="scale-[60%] pr-1 rtl:pl-1">{item?.icon}</span>
                  {t(item.name)}
                  <span className="ml-auto rtl:mr-auto pl-4 rtl:pr-4">
                    <ArrowSolidIcon className="h-4 w-4 rotate-90" />
                  </span>
                </button>
                <ul
                  className={`${item?.classes} ${item?.name === dropdown?.[level] ? 'min-w-full opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none '} gap-x-1 absolute bg-white bg_dark top-[32px] py-4 rounded-md z-[99]`}
                >
                  {list(item.children, level + 1)}
                </ul>
              </li>
            );
          }
          if (item?.subChild) {
            return (
              <li
                key={item?.name}
                onClick={(e) => {
                  e.stopPropagation()
                  handleClickMenu(level, item?.name)
                }}
                className={`relative border border-transparent hover:bg-[#e4e4e4] hover:border-[#ddd] group ${item?.name === dropdown?.[level] ? 'bg-[#e4e4e4] border-[#ddd]' : ''}`}
              >
                <button className="whitespace-nowrap justify-between gap-2 px-2 py-2 w-full flex items-center ">
                  {t(item.name)}
                  <ArrowSolidIcon className="!w-4 !h-4 rtl:rotate-180" />
                </button>
                <ul className={`absolute ${item?.classes} ${item?.name === dropdown?.[level] ? 'min-w-full opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none '} bg-white bg_dark gap-x-1 top-[0] py-4 rounded-md z-[99] left-full`}>
                  {list(item.subChild)}
                </ul>
              </li>
            );
          }
          return (
            <li key={item?.name} className="relative hover:bg-[#e4e4e4] hover:border-[#ddd]" onClick={(e) => {
              e.stopPropagation()
              setDropdown('')
            }}>
              {item?.link === "" ? (
                <button className="whitespace-nowrap px-2 py-2 capitalize w-full flex">
                  {t(item.name)}
                </button>
              ) : (
                <Link
                  className={`whitespace-nowrap px-2 py-2 capitalize w-full flex ${item?.classes}`}
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
      <div className="shadow bg-white dark:bg-dark-bg hidden lg:block z-[31] text-xs font-medium">
        <div className="container mx-auto">
          <ul className="primary-menu text-gray-500 dark:text-gray-400 font-medium flex items-center capitalize">
            {list(menu, 0)}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
