import { useGuidList } from "Hooks/useGuidList";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const TableUniqueCol = ({ col, val, row, scope, CACHE_LIST, classes, ...props }) => {

   const data = useMemo(() => {
      return CACHE_LIST?.[val]
   }, [val])
  
   return (
      <td className={`px-4 py-2 ${classes}`} {...props}>
         <Link
            className="text-blue-500"
            // to={`/update/${reffedTables?.[col]}/${val}`}
            // state={{ row, table: reffedTables?.[col] }}
         >
            {data}
         </Link>
      </td>
   );
};

export default TableUniqueCol; //memo();
