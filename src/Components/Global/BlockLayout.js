import { ChevronIcon, LongArrow } from "Components/Icons";
import Layout from "Components/Layout";
import React from "react";
import { useNavigate } from "react-router-dom";

const BlockLayout = ({
  title,
  customTitle,
  contentBar,
  children,
  containerClassName,
  bodyClassName,
  layoutBodyClassName,
  hideBack,
  contentTopBar,
  contentBottomBar
}) => {
  const navigate = useNavigate();

  return (
    <div className={"main-content m-4 flex-1 container-full pb-20"}>
      <div className="flex items-center gap-4 mb-4 justify-between bg-white shadow p-2 rounded-md">
        <div className="mr-auto gap-2 flex items-center">
          {hideBack ? null : (
            <button
              onClick={() => navigate(-1)}
              className="hover:bg-gray-200 h-7 w-7 rounded-md flex items-center justify-center"
            >
              <LongArrow className="rotate-180 w-5 h-5" />
            </button>
          )}
          <h2 className="capitalize text-lg font-medium text-gray-600 dark:border-[#333] dark:text-white">
            {customTitle ? customTitle : title?.replace(/_|-/g, " ")}{" "}
          </h2>
        </div>
        {contentTopBar && contentTopBar}
      </div>
      <div className={`${containerClassName} p-4 rounded-md bg-white shadow`}>
        {contentBar ? contentBar : null}
        {children}
      </div>
      {contentBottomBar && contentBottomBar}
      </div>
  );
};

export default BlockLayout;
