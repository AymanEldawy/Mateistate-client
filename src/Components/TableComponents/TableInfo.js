
// const CA
export const TableInfo = () => {
  return (
      <div className="flex items-center justify-between  my-4 border-y py-2 border-gray-200 text-sm">
        <div className="flex gap-2 items-center">
          <span className="font-medium">Filters: </span>
          <span className="bg-blue-50 text-blue-500 rounded-md px-2 py-1 text-xs font-medium capitalize">
            client name
          </span>
          <span className="bg-blue-50 text-blue-500 rounded-md px-2 py-1 text-xs font-medium capitalize">
            building name
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-medium">Sort: </span>
          <span className="bg-orange-50 text-orange-500 rounded-md px-2 py-1 text-xs font-medium capitalize">
          From oldest to newest
          </span>
        </div>
      </div>
  );
};