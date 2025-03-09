import { CloseIcon } from "Components/Icons";
import React, { useState } from "react";
import Modal from "./Modal/Modal";
import Btn from "./Btn";

const FormTitle = ({ name, onClose, extraContentBar, isDirty }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} containerClassName='!z-[105]'>
        <h3 className="text-yellow-600 font-semibold text-lg">Warning</h3>
        <p className="text-gray-600 text-sm">Are you sure you wan't leave the page without saving.</p>
        <div className="flex items-center gap-2 mt-4">
          <Btn onClick={() => setOpen(false)} kind="default">Cancel</Btn>
          <Btn
            onClick={() => {
              onClose();
              setOpen(false)
            }}
            kind="error">
            Exist
          </Btn>
        </div>
      </Modal>
      <div className="flex justify-between w-full bg-gray-100 p-2  py-2 border-b border-b-gray-300">
        <h3 className="font-semibold capitalize text-lg text-gray-700 rtl:ml-5 ltr:mr-5 ">
          {name === 'user' ? 'Customers and suppliers' : name?.replace(/_/g, " ")}
        </h3>
        {extraContentBar && (
          <div className="flex items-center gap-4 justify-end ltr:mr-auto rtl:ml-auto ltr:border-l-2 rtl:border-r-2 border-gray-300 px-4">
            {extraContentBar}
          </div>
        )}
        {true ? (
          <button
            type="button"
            onClick={() => {
              if (isDirty) {
                setOpen(true);
              } else {
                onClose()
              }

            }}
            className="h-7 w-7 rounded-md hover:border-red-500 border border-transparent duration-300 flex items-center justify-center bg-red-100 text-red-500"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        ) : null}
      </div>
    </>
  );
};

export default FormTitle;
