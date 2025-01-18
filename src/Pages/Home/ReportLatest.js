import { NotAllowIcon } from "Components/Icons";
import { ReportLatestCard } from "./ReportLatestCard";
import { useQuery } from "@tanstack/react-query";
import { ApiActions } from "Helpers/Lib/api";
import Loading from "Components/Global/Loading";

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
  colSearchName = "name",
}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [name],
    queryFn: async () =>
      await ApiActions.read(name, {
        columns: ["id", "created_at", colSearchName],
        limit: limit,
        sorts: [{ column: colSearchName, order: "DESC", nulls: "last" }],
      }),
  });

  return (
    <div className={`${containerClassName} flex flex-col  w-full h-full`}>
      <div className="flex items-center justify-between border-b pb-1 dark:border-dark-border">
        <h2
          className={`${titleClassName} text-lg font-semibold capitalize  text-black dark:text-white`}
        >
          Latest {limit} {title || name}
        </h2>
        {/* <Link
          to={href}
          className="flex justify-center items-center rounded-full h-7 w-7 hover:bg-primary hover:text-white hover:border-primary"
        >
          <ChevronIcon className="w-4 h-4 ltr:-rotate-90 rtl:rotate-90" />
        </Link> */}
      </div>
      <div className={`${bodyClassName} flex-1 flex flex-col`}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {data?.result?.length ? (
              <>
                {data?.result?.slice(0, 4)?.map((item,index) => {
                  if (renderItem) return renderItem(item);
                  else
                    return (
                      <ReportLatestCard
                        key={index}
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
                <span>{title || name} is empty </span>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
