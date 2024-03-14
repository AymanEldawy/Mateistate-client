export const ReportFilterFields = ({ children, title, containerClassName }) => {
  return (
    <div className={containerClassName}>
      {title ? (
        <h2 className="capitalize text-xl font-medium text-blue-500 ltr:border-l-4 border-blue-500 px-2 mb-4">
          {title}
        </h2>
      ) : null}
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};
