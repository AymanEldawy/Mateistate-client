import { CloseIcon } from "Components/Icons";
import React from "react";

const FormTitle = ({ name, onClose }) => {
  return (
    <div className="flex justify-between w-full bg-gray-100 p-2  py-2 border-b border-b-gray-300">
      <h3 className="font-semibold capitalize text-lg text-gray-700">
        {name?.replace(/_/g, " ")}
      </h3>
      {true ? (
        <button
          type="button"
          onClick={onClose}
          className="h-7 w-7 rounded-md hover:border-gray-500 border border-transparent duration-300 flex items-center justify-center bg-gray-100 text-gray-500"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      ) : null}
    </div>
  );
};

export default FormTitle;
