import React from "react";

export const Drawer = ({ direction, children }) => {
  return (
    <div
      className={`fixed top-0 h-screen min-w-[250px] max-w-lg
        ${direction === "left" ? "left-0" : "right-0"}
     `}
    >
      {children}
    </div>
  );
};
