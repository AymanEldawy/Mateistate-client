import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";

export const GalleryForm = ({ fields }) => {
  const [files, setFiles] = useState([]);
  const { register } = useFormContext();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          alt={file.name}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <div
        {...getRootProps()}
        className="flex border p-4 rounded-md shadow justify-center items-center"
      >
        <input {...getInputProps()} {...register()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {thumbs}
    </>
  );
};
