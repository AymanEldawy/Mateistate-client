import Loading from "Components/Global/Loading";
import { CheckIcon, ChevronIcon, NotAllowIcon } from "Components/Icons";
import useFetch from "Hooks/useFetch";
import React from "react";
import { Link } from "react-router-dom";
import { ReportLatestCard } from "./ReportLatestCard";
import { LoadingCircle } from "Components/Global/LoadingCircle";

export const ReportLatest = ({
  title,
  name,
  renderItem,
  bodyClassName,
  containerClassName,
  titleClassName,
  href,
  itemHref,
  renderTitle,
  itemClassName,
  limit = 5,
}) => {
  const { loading, data, error } = useFetch(name, {
    columns: ["id", 'created_at', 'name'],
    limit: limit,
    sorts: [{ column: "created_at", order: "DESC", nulls: "last" }],
  });
  console.log("🚀 ~ data:", data, name, 'name')
  return (
    <div className={`${containerClassName} flex flex-col  w-full h-full`}>
      <div className="flex items-center justify-between border-b pb-1 dark:border-dark-border">
        <h2
          className={`${titleClassName} text-lg font-semibold capitalize  text-black dark:text-white`}
        >
          Latest {limit} {title || name}
        </h2>
        <Link to={href} className="flex justify-center items-center rounded-full h-7 w-7 hover:bg-primary hover:text-white hover:border-primary">
          <ChevronIcon className="w-4 h-4 ltr:-rotate-90 rtl:rotate-90" />
        </Link>
      </div>
      <div className={`${bodyClassName} flex-1 flex flex-col`}>
        {loading ? (
          <LoadingCircle />
        ) : (
          <>
            {data?.length ? (
              <>
                {data?.map((item) => {
                  if (renderItem) return renderItem(item);
                  else
                    return (
                      <ReportLatestCard
                        item={item}
                        itemClassName={itemClassName}
                        itemHref={itemHref}
                        renderTitle={renderTitle}
                      />
                    );
                })}
              </>
            ) : (
              <p className="text-red-500 flex justify-center items-center flex-1 capitalize flex-col">
                <NotAllowIcon className="w-12 h-12" />
                <span>{name} is empty </span>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
