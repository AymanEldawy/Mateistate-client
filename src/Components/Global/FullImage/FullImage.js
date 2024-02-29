import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import Modal from "Components/Global/Modal/Modal";
import { CloseIcon } from "Components/Icons";

export const FullImage = ({ src, alt, height, width, ...imgProps }) => {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imageRef = useRef();

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };
  useEffect(() => {
    if (!src) return;

    setError(false);
    setLoaded(false);
    imageRef?.current?.addEventListener("load", handleLoad);
    imageRef?.current?.addEventListener("error", handleError);
  }, [src]);

  return (
    <>
      {!error ? (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          onClick={() => setOpen(true)}
          className={`cursor-pointer !w-20 !h-16 object-cover ${imgProps?.className}`}
          {...imgProps}
        />
      ) : (
        <span
          className={`bg-primary-blue text-white rounded-full flex items-center justify-center !w-10 !h-10 text-xs object-contain ${imgProps?.className}`}
        >
          UnK
        </span>
      )}
      {open ? (
        <Modal
          open={true}
          onClose={() => setOpen(false)}
          modalClassName="!p-2"
          containerClassName=" z-50"
        >
          <div className="relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute z-10 top-2 ltr:left-2 rtl:right-2 h-9 w-9 rounded-full flex items-center justify-center bg-red-100 text-red-500 "
            >
              <CloseIcon className="w-5 h-5 text-red-500" />
            </button>
            <img
              src={src}
              alt={alt}
              className="xs:w-96 min-w-[270px] w-full max-w-none max-h-[90vh] rounded-md object-cover "
            />
          </div>
        </Modal>
      ) : null}
    </>
  );
};
