// import { ApiActions } from "Helpers/Lib/api";
// import React, { useEffect, useState } from "react";
// import { ReportFilterColumns } from "./ReportFilterColumns";

// export const UserConnect = ({
//   ids,
//   setIds,
//   bodyClassName,
//   containerClassName,
//   name
// }) => {

//   const getData = async () => {
//     const buildingResponse = await ApiActions.read(name);
//     setIds(buildingResponse?.result);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

  
//   const onChangeFilterColumns = (e) => {
//     let name = e.target.name;
//     let checked = e.target.checked;
//     if (ids?.[name] && !checked) {
//       let list = ids;
//       delete list[name];
//       setIds(list);
//     } else {
//       setIds((prev) => ({
//         ...prev,
//         [name]: true,
//       }));
//     }
//     setRefresh((p) => !p);
//   };

//   const handleToggleSelectAll = (e) => {
//     if (e.target.checked) {
//       let hash = {};
//       for (const col of columns) {
//         hash[col?.[searchKey]] = true;
//       }
//       setIds(hash);
//     } else {
//       setIds({});
//     }
//   };

//   useEffect(() => {
//     if(disabledItem) setIds({});
//   }, [disabledItem])



//   return (
//     <ReportFilterColumns
//       title="Buildings"
//       columns={buildings?.map((c) => ({
//         name: c?.id,
//         label: c?.name,
//       }))}
//       selectedColumns={buildingsIds}
//       setIds={setBuildingsIds}
//       bodyClassName={bodyClassName}
//       containerClassName={containerClassName}
//     />
//   );
// };

import React from 'react'

export const UserConnect = () => {
  return (
    <div>UserConnect</div>
  )
}
