import * as React from 'react';

import { menuData } from 'Helpers/menu';
import { Link } from 'react-router-dom';
import logo from 'Assets/Images/abrepair-logo.svg';
import { ChevronIcon, PowerIcon } from 'Components/Icons';
import { IconsBar } from './IconsBar';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ open, menu }) => {
  const [dropdown, setDropdown] = React.useState(false);
  const { t } = useTranslation();

  const handleClick = (key, level) => {
    if (dropdown[level] === key) {
      setDropdown((prev) => {
        return { ...prev, [level]: '' };
      });
    } else {
      setDropdown((prev) => {
        return { ...prev, [level]: key };
      });
    }
  };


  const list = (links, level = 0) => {
    return links?.map((item) => {
      if (item?.children) {
        return (
          <li
            key={item?.name}
            className={`relative group w-full border-b dark:border-black border-gray-200 py-2 ${
              dropdown[level] === item?.name
                ? 'bg-gray-100 bg_dark border-b border-t dark:border-black border-gray-200'
                : ''
            }`}
          >
            <button
              className={`whitespace-nowrap gap-3 flex justify-between items-center hover:text-blue-600  dark:hover:bg-transparent dark:hover:text-white py-2 w-full ${
                dropdown[level] === item?.name
                  ? ' text-blue-600 dark:text-white'
                  : ''
              } `}
              onClick={() => handleClick(item?.name, level)}
            >
              <span className="scale-[80%] px-2">{item?.icon}</span>
              {item.name}
              <span
                className={`scale-[60%] rtl:rotate-90 ltr:ml-auto rtl:mr-auto pl-2 rtl:pr-2 ltr:-rotate-90 transition-transform duration-200 ${
                  dropdown[level] === item?.name
                    ? 'ltr:!rotate-0 rtl:!rotate-180'
                    : ''
                }`}
              >
                <ChevronIcon />
              </span>
            </button>
            {dropdown[level] === item?.name ? (
              <ul className="flex flex-col rounded-md">
                {list(item.children, level + 1)}
              </ul>
            ) : null}
          </li>
        );
      }
      if (item?.subChild) {
        return (
          <li
            key={item?.name}
            className={`relative group w-full ${
              dropdown[level] === item?.name
                ? 'bg-gray-100 bg_dark border-b border-t dark:border-black border-gray-200'
                : ''
            }`}
          >
            <button
              className={`whitespace-nowrap gap-3 justify-between hover:text-blue-600 py-2 hover:bg-gray-100 dark:hover:bg-transparent dark:hover:text-white px-4 w-full flex ${
                dropdown[level] === item?.name
                  ? ' text-blue-600 dark:text-white'
                  : ''
              } `}
              onClick={() => handleClick(item?.name, level)}
            >
              {item.name}
              <span
                className={`scale-[60%] rtl:rotate-90 ltr:ml-auto rtl:mr-auto rtl:mr-auto pl-2 rtl:pr-2 -rotate-90 transition-transform duration-200 ${
                  dropdown[level] === item?.name
                    ? 'ltr:!rotate-0 rtl:!rotate-180'
                    : ''
                }`}
              >
                <ChevronIcon />
              </span>
            </button>
            {dropdown[level] === item?.name ? (
              <ul className="rounded-md gap-2">
                {list(item.subChild, level + 1)}
              </ul>
            ) : null}
          </li>
        );
      }
      return (
        <li key={item?.name} className="relative w-full">
          {item?.link === '' ? (
            <button className="whitespace-nowrap hover:text-blue-600 dark:hover:bg-transparent dark:hover:text-white py-2 px-4 w-full flex">
              {item.name}
            </button>
          ) : (
            <Link
              className="whitespace-nowrap  hover:text-blue-600 dark:hover:bg-transparent dark:hover:text-white py-2 px-4 w-full flex"
              to={item?.link}
            >
              {item.name}
            </Link>
          )}
        </li>
      );
    });
  };
  return (
    <aside
      className={`lg:hidden fixed w-72 flex flex-col h-screen shadow z-[101] transition-transform duration-300 bg-white dark:bg-dark-bg ${
        open ? 'left-0' : '-left-72'
      }`}
    >
      <Link
        className="bg-primary dark:border-gray-700  shadow p-2 flex items-center justify-between border-b"
        to="/"
      >
        <img src={logo} alt="Abrepair" className="max-w-[140px] mx-auto" />
      </Link>

      <div className="flex bg-gray-200 dark:bg-[#333] items-center justify-center gap-2 dark:border-black border-b py-2">
        <IconsBar />
      </div>
      <ul className="flex-col flex-1 overflow-auto max-h-screen text-gray-500 dark:text-gray-400 text-sm font-medium min-h-[40px] flex items-start justify-between capitalize">
        {list(menu)}
        <li className="relative w-full">
          <button
            className={`whitespace-nowrap gap-3 flex items-center text-red-500 ltr:hover:pl-6 rtl:hover:pr-6 hover:bg-red-500 hover:text-white duration-300 py-2 w-full `}
          >
            <span className="scale-[80%] px-2">
              <PowerIcon className="text-inherit h-6 w-6" />{' '}
            </span>
            {t('logout')}
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
