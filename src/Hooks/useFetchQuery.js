import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "Helpers/Lib/api";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const useFetchData = (keys, url) => {
  return useQuery({
    queryKey:keys, 
    queryFn: () => fetchData(`${baseURL + url}`)
  });
};

export default useFetchData;
