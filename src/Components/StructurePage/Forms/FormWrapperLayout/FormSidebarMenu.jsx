import React from "react";

export const FormSidebarMenu = ({ name, steps, activeStage, goTo }) => {
  return (
    <div className="flex sticky top-0 flex-col gap-2 bg-gray-200 py-4 text-gray-500 text-sm max-w-[150px] w-full ltr:border-r rtl:border-l border-gray-300">
      {steps?.map((step, index) => (
        <button
          key={step}
          type="button"
          onClick={() => goTo(index)}
          className={`${index === activeStage && 'bg-light-green text-white ltr:border-l-[6px] rtl:border-r-[6px] border-white'} w-full ltr:text-left rtl:text-right px-2 py-1 font-medium capitalize`}
        >
          {step?.replace(/_/g, " ").replace(`${name}`, "")}
        </button>
      ))}
    </div>
  );
};
