import { ChevronIcon } from "Components/Icons";
import React from "react";
import { Link } from "react-router-dom";

export const ReportLatestCard = ({
  item,
  itemClassName,
  itemHref,
  renderTitle,
}) => {
  console.log("🚀 ~ item:", item)
  console.log(itemHref,item.id, 'itemHref');
  return (
    <Link to={`${itemHref}/${item?.id}/`} className={`${itemClassName}`}>
      <div className="flex justify-between text-gray-500 items-center p-2 rounded-md shadow hover:shadow-md">
        <div className="flex flex-col gap-1">
          <small className="text-xs">
            {new Date(item?.created_at).toLocaleDateString("en-UK")}
          </small>
          <h4 className="capitalize -mt-1 font-medium">
            {renderTitle ? renderTitle(item) : item?.name || item?.number}
          </h4>
        </div>
        <span className="flex justify-center items-center border rounded-full h-7 w-7 hover:bg-primary hover:text-white hover:border-primary">
          <ChevronIcon className="w-4 h-4 ltr:-rotate-90 rtl:rotate-90" />
        </span>
      </div>
    </Link>
  );
};
