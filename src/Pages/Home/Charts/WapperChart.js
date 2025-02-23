
export const WrapperChart = ({
  title,
  name,
  renderItem,
  bodyClassName,
  containerClassName,
  titleClassName,
  colSearchName = "name",
  children
}) => {

  return (
    <div className={`${containerClassName} flex flex-col  w-full h-full`}>
      <div className="flex items-center justify-between border-b pb-1 dark:border-dark-border">
        <h2
          className={`${titleClassName} text-lg font-semibold capitalize  text-black dark:text-white`}
        >
          {name}
        </h2>

      </div>
      {children}
    </div>
  );
};
