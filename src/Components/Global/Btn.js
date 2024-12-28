import React from "react";

const Btn = ({ children, kind, containerClassName, isLoading, ...props }) => {
  let classes = "bg-blue-500 active:bg-blue-700 hover:bg-blue-700 text-white";

  switch (kind) {
    case "success":
      classes =
        "bg-green-500 active:bg-green-700 hover:bg-green-700 text-white";
      break;
    case "error":
      classes = "bg-red-500 active:bg-red-700 hover:bg-red-700 text-white";
      break;
    case "info":
      classes =
        "bg-indigo-500 active:bg-indigo-700 hover:bg-indigo-700 text-white";
      break;
    case "warn":
      classes =
        "bg-yellow-500 active:bg-yellow-700 hover:bg-yellow-700 text-white";
      break;
    default:
      break;
  }

  return (
    <button
      className={`text-xs flex items-center gap-4 text-white px-2 rounded-md py-1 font-medium capitalize duration-300 ${classes} ${containerClassName}`}
      {...props}
    >
      {isLoading ? (
        <span className="animate-pulse flex items-center gap-2">
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Btn;
