import Layout from "Layout";
import React from "react";

const BlockPaper = ({ title, contentBar, children, fullWidth }) => {

  return (
    <Layout>
      <div className="!mb-16">
        <div
          className={`${
            fullWidth ? "container-full" : "container"
          } mx-auto `}
        >
          <div className="p-4 shadow bg-white  dark:bg-dark-bg rounded-md">
            {title ? (
              <h3 className="capitalize border-b mb-4 pb-2 text-lg font-medium text-gray-600 dark:border-[#333] dark:text-white">
                {" "}
                {title?.replace(/_|-/g, ' ')}{" "}
              </h3>
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
