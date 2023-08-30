import React, { useContext, useMemo } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { ListsGuidsContext } from "../../Context/ListsGuidsContext";

const TableUniqueCol = ({ col, val, row, scope, reffedTables, classes }) => {
  const { guidListCached, getGuidName } = useContext(ListsGuidsContext);
  // useEffect(() => {
  // }, [val])
  // let v = useMemo(() => {
  //   return ;
  // }, [val]);
  return (
    <td className={`px-4 py-2 ${classes}`}>
      <Link
        className="text-blue-500"
        to={`/update/${reffedTables?.[col]}/${val}`}
        state={{ row, table: reffedTables?.[col] }}
      >
        {val
          ? guidListCached[col] || getGuidName(reffedTables?.[col], val)
          : null}
      </Link>
    </td>
  );
};

export default TableUniqueCol; //memo();
