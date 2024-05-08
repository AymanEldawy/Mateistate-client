export const SubStepsList = ({ steps, activeStage, goTo }) => {
  return (
    <div className="flex flex-col min-w-[250px] shadow text-left mb-8 bg-blue-100 dark:bg-dark-bg border-t border-gray-100 dark:border-dark-border overflow-auto">
      {steps?.map((step, index) => (
        <button
          type="button"
          onClick={() => goTo(index)}
          key={step}
          className={`${
            activeStage === index
              ? "!font-medium !bg-blue-500 ltr:border-l-4 rtl:border-r-4 border-blue-300 text-white"
              : ""
          } p-2 px-4 text-gray-500 dark:text-gray-200 font-normal flex-1 capitalize whitespace-nowrap  ltr:text-left rtl:text-right transition-all duration-100`}
        >
          {step?.replace(/building_|_/g, " ")}
        </button>
      ))}
    </div>
  );
};
