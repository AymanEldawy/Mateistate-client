import React from "react";

export const Button = ({ title, onClick, ...props }) => {
  return (
    <button
      onClick={!!onClick ? onClick : undefined}
      className="rounded-md px-4 py-2 bg-blue-500 text-sm font-medium text-white "
      {...props}
    >
      {title}
    </button>
  );
};
