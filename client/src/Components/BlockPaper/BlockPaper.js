import Layout from "Layout";
import React from "react";

const BlockPaper = ({ title, subTitle, contentBar, children, fullWidth }) => {

  return (
    <Layout>
      <div className="!mb-16">
        <div
          className={`${
            fullWidth ? "container-full" : "container"
          } mx-auto `}
        >
          <div className="p-4 shadow bg-white dark:bg-dark-bg rounded-md">
            <div className="border-b mb-4 pb-2 flex items-center justify-between">
              {title ? (
                <h2 className="capitalize text-lg font-medium text-gray-600 dark:border-[#333] dark:text-white">
                  {" "}
                  {title?.replace(/_|-/g, ' ')}{" "}
                </h2>
              ) : null}
              {subTitle ? subTitle : null}
            </div>
            {contentBar ? contentBar : null}
            <div>{children}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlockPaper;
