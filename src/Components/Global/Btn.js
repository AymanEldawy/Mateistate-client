import React from "react";

const Btn = ({ children, kind, containerClassName, isLoading, isActive, ...props }) => {

  let classes = `bg-blue-500 active:bg-blue-700 hover:bg-blue-700 ${isActive && 'bg-blue-700'} text-white`;

  switch (kind) {
    case "success":
      classes =
        `bg-green-500 active:bg-green-700 hover:bg-green-700 ${isActive && 'bg-green-700'} text-white`;
      break;
    case "primary":
      classes =
        `bg-[#06a96c] active:bg-[#06a96c] hover:bg-[#06a96c] ${isActive && 'bg-[#06a96c]'} text-white`;
      break;
    case "error":
      classes = `bg-red-500 active:bg-red-700 hover:bg-red-700 ${isActive && 'bg-red-700'} text-white`;
      break;
    case "info":
      classes =
        `bg-indigo-500 active:bg-indigo-700 hover:bg-indigo-700 ${isActive && 'bg-indigo-700'} text-white`;
      break;
    case "warn":
      classes =
        `bg-yellow-500 active:bg-yellow-700 hover:bg-yellow-700 ${isActive && 'bg-yellow-700'} text-white`;
      break;

    case 'default':
      classes =
        `bg-gray-200 active:bg-gray-400 hover:bg-gray-700 ${isActive && 'bg-gray-700'} text-white`;
    default:
      break;
  }

  return (
    <button
      className={`text-sm flex items-center gap-4 disabled:bg-gray-200 disabled:text-gray-400 text-white px-4 h-7 tracking-wide rounded-md py-1 font-medium capitalize duration-300 ${classes} ${containerClassName}`}
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
