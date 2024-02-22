import Layout from "Components/Layout";
import React from "react";

const BlockPaper = ({
  title,
  customTitle,
  subTitle,
  contentBar,
  children,
  fullWidth,
  containerClassName,
  bodyClassName,
  boxClassName
}) => {

  return (
    <Layout>
      <div className={`${containerClassName ? '' : 'mb-16'}`}>
        <div
          className={`${fullWidth ? "container-full" : "container"} mx-auto ${bodyClassName}`}
        >
          <div className={`p-4 shadow bg-white dark:bg-dark-bg rounded-md ${boxClassName}`}>
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
