import { LockIcon } from "Components/Icons";
import React from "react";

export const Locked = ({ isArchived, isDeleted }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-[#ffffff81]">
      <LockIcon className={`h-40 w-2h-40 ${isArchived ? 'text-green-500' : ''} ${isDeleted ? 'text-red-500' : ''} `} />
      <h3 className="text-4xl capitalize font-medium">{isDeleted ? "deleted" : isArchived ? "archived" : ""}</h3>
    </div>
  );
};
