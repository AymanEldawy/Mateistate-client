import useFetch from "Hooks/useFetch";
import React from "react";
import { Link } from "react-router-dom";

export const ReportCount = ({ name, containerClassName, href }) => {
  const { loading, data, error } = useFetch(name, {
    columns: ["id"],
  });
  return (
    <Link
      to={href}
      className={`flex flex-col gap-2 items-center justify-center w-full h-full capitalize ${containerClassName}`}
    >
      <h3 className="text-xl font-medium text-primary">{name}</h3>
      <strong className="text-2xl">{data?.length}</strong>
    </Link>
  );
};
