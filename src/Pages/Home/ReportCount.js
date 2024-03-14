import { ApiActions } from "Helpers/Lib/api";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const ReportCount = ({ name, containerClassName, href }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [name, 'counts'],
    queryFn: async () => await ApiActions.read(name),
  });

  return (
    <Link
      to={href}
      className={`flex flex-col gap-2 items-center justify-center w-full h-full capitalize ${containerClassName}`}
    >
      <h3 className="text-xl font-medium text-primary">{name}</h3>
      <strong className="text-2xl">{data?.result?.length}</strong>
    </Link>
  );
};
