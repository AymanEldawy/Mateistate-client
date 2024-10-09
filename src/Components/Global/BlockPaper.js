import { ChevronIcon } from "Components/Icons";
import Layout from "Components/Layout";
import React from "react";
import { useNavigate } from "react-router-dom";

const BlockPaper = ({
  title,
  customTitle,
  subTitle,
  contentBar,
  children,
  fullWidth,
  containerClassName,
  bodyClassName,
  boxClassName,
  layoutBodyClassName,
}) => {
  const navigate = useNavigate();

  return (
    <Layout bodyClassName={layoutBodyClassName}>
      <div className="!mb-2 container ">
        <button
          onClick={() => navigate(-1)}
          className="flex gap-2 items-center border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 duration-300 px-3 py-1 text-sm rounded-md"
        >
          <ChevronIcon className="rotate-90 w-4 h-4" /> Back
        </button>
      </div>{" "}
      <div className={`${containerClassName ? "" : "mb-16"}`}>
        <div
          className={`${
            fullWidth ? "container-full" : "container"
          } mx-auto ${bodyClassName}`}
        >
          <div
            className={`p-4 shadow bg-white dark:bg-dark-bg rounded-md ${boxClassName}`}
          >
            {title || customTitle ? (
              <div className="border-b mb-4 pb-2 flex items-center justify-between">
                <h2 className="capitalize text-lg font-medium text-gray-600 dark:border-[#333] dark:text-white">
                  {" "}
                  {customTitle ? customTitle : title?.replace(/_|-/g, " ")}{" "}
                </h2>
                {subTitle ? subTitle : null}
              </div>
            ) : null}
            {contentBar ? contentBar : null}
            <div>{children}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlockPaper;
