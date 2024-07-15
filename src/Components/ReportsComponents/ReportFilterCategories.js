import { ApiActions } from "Helpers/Lib/api";
import React, { useEffect, useState } from "react";
import { ReportFilterColumns } from "./ReportFilterColumns";

export const ReportFilterCategories = ({
  categoriesIds,
  setCategoriesIds,
  bodyClassName,
  containerClassName,
}) => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const categoryResponse = await ApiActions.read("category");
    setCategories(categoryResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReportFilterColumns
      title="Categories"
      columns={categories?.map((c) => ({
        name: c?.id,
        label: c?.name,
      }))}
      selectedColumns={categoriesIds}
      setSelectedColumns={setCategoriesIds}
      bodyClassName={bodyClassName}
      containerClassName={containerClassName}
    />
  );
};
