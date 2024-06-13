import { useQueryClient } from "@tanstack/react-query";
import { ApiActions } from "Helpers/Lib/api";

const fetchQuery = async ({ table, limit, offset, page = 1 }) => {
  try {
    const response = await ApiActions.read(table, {
      // You can include limit, offset, or any other parameters here
      // limit,
      // offset,
    });
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch data.");
  }
};

const useFetchQuery = ({ table, limit, offset, page = 1 }) => {
  const queryClient = useQueryClient();
  return queryClient.fetchQuery([table, page], () =>
    fetchQuery({ table, limit, offset, page })
  );
};

export default useFetchQuery;
