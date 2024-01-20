import React, { useEffect, useRef, useState } from "react";

import { FullImage } from "Components/Global/FullImage/FullImage";
import { FolderPlusIcon } from "Helpers/Icons";
import { Controller } from "react-hook-form";
import { FilePreviews } from "Components/Global/FullImage/FilePreviews";

const UploadFile = ({
  label,
  error,
  className,
  src,
  textPlaceholder,
  containerClassName,
  boxContainerClassName,
  ...field
}) => {
  const [preview, setPreview] = useState("");
  const [previews, setPreviews] = useState([]);

  const changeFile = (e) => {
    let files = e.target.files;
    if (field?.multiple) {
      let filesArray = [];
      for (const file of files) {
        filesArray.push(URL.createObjectURL(file));
      }
      setPreviews(filesArray);
    } else {
      setPreview(URL.createObjectURL(files?.[0]));
    }
  };

  return (
    <>
      <div
        className={`flex flex-col relative ${containerClassName}`}
        key={`${field?.index}-${field?.name}` || Math.round()}
      >
        {previews?.length ? (
          <FilePreviews images={previews} />
        ) : preview ? (
          <FullImage
            src={preview}
            alt="preview"
            className="absolute ltr:right-0 rtl:left-0 -top-1 h-16 cursor-pointer border-2 rounded-md border-black w-20 object-contain shadow z-20"
          />
        ) : null}

        {label ? (
          <label
            title={label}
            htmlFor={label}
            className="overflow-hidden flex gap-1 items-center text-ellipsis text-sm font-normal mb-1 capitalize"
          >
            {label}
            {field?.required ? (
              <span className="text-red-500 font-semibold">*</span>
            ) : (
              ""
            )}
          </label>
        ) : null}
        <div className="relative">
          <Controller
            name={field.name}
            render={({ field: { onChange } }) => {
              return (
                <input
                  id={label}
                  type="file"
                  {...field}
                  className={`border top-0 left-0 w-full h-full z-10 absolute opacity-0 rounded p-1 ${className} ${
                    error ? "border-red-200 text-red-500" : ""
                  }`}
                  onChange={(e) => {
                    onChange(
                      field?.multiple ? e.target.files : e.target.files.at(0)
                    );
                    changeFile(e);
                  }}
                />
              );
            }}
          />
          <span
            className={`bg-gray-100 dark:bg-[#2c2c2c] rounded-md hover:bg-gray-200 min-h-[37px] cursor-pointer capitalize left-0 w-full h-full top-0 flex gap-4 items-center justify-center ${boxContainerClassName}`}
          >
            <FolderPlusIcon />
            {textPlaceholder ? textPlaceholder : "upload file"}
          </span>
        </div>
        {error ? (
          <p className="bg-red-200 mt-2 rounded text-sm text-red-500 px-2 py-1">
            {error}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default UploadFile;
