import Modal from "Components/Global/Modal/Modal";
import React, { useState } from "react";
import { FullImage } from "./FullImage";
import { CloseIcon } from "Components/Icons";

export const FilePreviews = ({ images }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className="flex items-center absolute -top-1 rtl:left-0 ltr:right-0 z-10"
      >
        {images?.slice(0, 5)?.map((imgSrc, index) => (
          <img
            key={`${imgSrc}-${index}`}
            src={imgSrc}
            alt={`file ${index}`}
            className=" rounded-full object-cover border h-12 w-[50px] -ml-3 shadow-md shrink-0"
          />
        ))}
        {images?.length > 5 ? (
          <span className=" rounded-full border h-12 w-[50px] -ml-3 shadow-md flex items-center justify-center bg-blue-500 text-white">
            +{images?.slice(5)?.length}
          </span>
        ) : null}
      </div>
      {open ? (
        <Modal
          open={true}
          onClose={() => setOpen(false)}
          modalClassName="!p-2"
          containerClassName="!z-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 rounded-xl z-20 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute z-10 top-2 ltr:left-2 rtl:right-2 h-9 w-9 rounded-full flex items-center justify-center bg-red-100 text-red-500 "
            >
              <CloseIcon className="w-5 h-5 text-red-500" />
            </button>
            {images?.map((imgSrc, index) => (
              <FullImage
                key={imgSrc}
                src={imgSrc}
                alt={`file ${index}`}
                className="w-full shadow-lg border max-w-none rounded-md object-cover "
              />
            ))}
          </div>
        </Modal>
      ) : null}
    </>
  );
};
