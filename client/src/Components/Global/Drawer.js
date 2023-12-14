import Backdrop from "Components/Backdrop/Backdrop";
import { CloseIcon } from "Helpers/Icons";
import React from "react";

export const Drawer = ({ direction, children, onClose }) => {
  return (
    <>
      <Backdrop open={!!children} onClose={onClose} />
      <div
        className={`fixed top-0 h-screen min-w-[250px] max-w-lg bg-white dark:bg-bgmaindark shadow-md z-30
      ${direction === "left" ? "left-0" : "right-0"}
     `}
      >
        {children}
      </div>
    </>
  );
};
