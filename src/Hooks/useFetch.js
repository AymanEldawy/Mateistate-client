import { ApiActions } from "Helpers/Lib/api";
import { getAccount } from "Helpers/Lib/operations/global-read";
import { useEffect, useState } from "react";

const GLOBAL_READ_DATA = {
  account: getAccount,
  // cost_center: getCostCenter
}

const useFetch = (name) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let res = null;
      if(GLOBAL_READ_DATA[name]){
        let get = GLOBAL_READ_DATA[name]
        res = await get()
      }
      else 
        res = await ApiActions.read(name)
      setData(res.result);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  const refetchData = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, refetchData };
};


// export const useEffect = (name) => {
//   const [loading, setLoading] = useState(false);

//   const fetchDate = async () => {
//     setLoading(true)
//     let res = null;
//     if(GLOBAL_READ_DATA[name])
//       res = await GLOBAL_READ_DATA[name]
//     else 
//       res = await ApiActions.read(name)
  
//     if(res)
//       setData(res)
//     setLoading(false)
//   }

//   useEffect(() => {
//   })
// }
export default useFetch;
