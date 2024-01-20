import React from "react";

const FormHeadingTitleSteps = ({ steps, name, changeTab, activeStage }) => {
  return (
    <>
      {steps?.length ? (
        <div className="flex flex-col w-full">
          <h3
            className={` p-2 flex-1 font-medium capitalize border-b-2 text-center dark:bg-dark-border shadow text-lg !text-blue-500 bg-blue-50 border-blue-500 `}
          >
            {name?.replace(/_/g, ' ')}
          </h3>
          <div className="flex items-center shadow text-left bg-gray-100 dark:bg-dark-bg border-t border-gray-100 dark:border-dark-border overflow-auto">
            {steps?.map((step, index) => (
              <button
                onClick={() => changeTab(index)}
                key={step}
                className={`${
                  activeStage === index
                    ? "!text-black !font-medium dark:bg-dark-border dark:!text-white bg-white rounded-t"
                    : ""
                } p-2 px-4 text-sm text-gray-500 dark:text-gray-200 font-normal flex-1 capitalize whitespace-nowrap`}
              >
                {step?.replace(/_/g, ' ').replace(`${name}`, '')}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          className={` p-2 w-full flex-1 shadow font-medium capitalize border-l-4 dark:bg-dark-border text-left text-lg !text-blue-500 bg-blue-50 border-blue-500 `}
        >
          {name?.replace(/_/g, ' ')}
        </button>
      )}
    </>
  );
};

export default FormHeadingTitleSteps;
