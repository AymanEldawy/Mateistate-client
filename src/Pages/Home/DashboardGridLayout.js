import { ReportCount } from "./ReportCount";
import { ReportLatest } from "./ReportLatest";

export const DashboardGridLayout = () => {
  return (
    <div className="flex gap-4 h-full px-8">
      <div className="flex-1 flex flex-col -translate-y-4 h-full gap-4">
        <div className="flex-1 shadow overflow-hidden bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 h-1/2">
          <ReportLatest itemHref="/contracts" href="/reports/contracts" name="contract" />
        </div>
        <div className="flex-1 shadow overflow-hidden bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 h-1/2">
          <ReportLatest itemHref="/buildings/update" href="/buildings" name="building" />
        </div>
      </div>
      <div className="flex-[2] flex flex-col gap-4">
        <div className="flex gap-4 h-1/5">
          <div className="flex-1 shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2">
            <ReportCount name="building" href="buildings" />
          </div>
          <div className="flex-1 shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2">
            <ReportCount name="apartment" href="list/apartment" />
          </div>
          <div className="flex-1 shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2">
            <ReportCount name="parking" href="list/parking" />
          </div>
          <div className="flex-1 shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2">
            <ReportCount name="shop" href="list/shop" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 flex gap-4">
            <div className=" shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 flex-1"></div>
            <div className="flex flex-col gap-4 h-full w-1/3">
              <div className=" shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 flex-1">
                <ReportCount name="land" href="/list/land" />
              </div>
              <div className=" shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 flex-1">
                <ReportCount name="villa" href="/list/villa" />
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col flex gap-4">
            <div className="shadow hover:shadow-md hover:border bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2 flex-1"></div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col -translate-y-4 h-full gap-4">
        <div className="flex-1 shadow overflow-hidden bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2  h-1/2">
          <ReportLatest itemHref="/update/account" name="account" href="/list/account" />
        </div>
        <div className="flex-1 shadow overflow-hidden bg-white dark:bg-dark-bg dark:text-gray-200 rounded-md p-2  h-1/2">
          <ReportLatest itemHref="/update/cheque" colSearchName="number" name="bill" href="/reports/cheques" />
        </div>
      </div>
    </div>
  );
};
