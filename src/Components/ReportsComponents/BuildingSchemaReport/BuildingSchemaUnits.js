import {
  generateFlatHashName,
  getAlphabetSortingView,
} from "Helpers/functions";

export const BuildingSchemaUnits = ({
  selectedTab,
  building,
  flatsDetails,
}) => {
  let xCount = +building?.[selectedTab?.x] || 0;
  let yCount = selectedTab?.y
    ? +building?.[selectedTab?.y]
    : +building?.[selectedTab?.x];

  return (
    <div className={`max-w-fit relative overflow-x-auto mt-4 `}>
      <table className="border-collapse w-full text-sm text-left text-gray-500 dark:text-gray-400 border rounded-md dark:border-[#333]">
        <thead className="text-xs text-gray-700 uppercase dark:border-dark-border dark:bg-dark-border dark:text-gray-300 bg-gray-200!bg-[#0099a5] text-white">
          <tr>
            {Array(selectedTab?.y ? yCount : xCount)
              .fill(0)
              .map((row, indexY) => (
                <th
                  key={`${row}-${indexY}`}
                  className="border px-4 py-2 border-gray-400 min-w-[90px] !py-2 text-sm !px-2"
                >
                  <div className="text-center w-full">
                    {getAlphabetSortingView(indexY + 1)}
                  </div>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {selectedTab?.y !== "" ? (
            Array(xCount)
              .fill(0)
              .map((r, indexX) => {
                return (
                  <tr key={`${r}-${indexX}`}>
                    {Array(yCount)
                      .fill(0)
                      .map((r, indexY) => {
                        const itemHash = generateFlatHashName(
                          selectedTab?.tabName,
                          selectedTab,
                          indexY,
                          indexX
                        );
                        const unit =
                          flatsDetails?.[selectedTab?.tabName]?.[itemHash];

                        return (
                          <td classes="px-4 py-2 dark:border-dark-border !p-0  border border-gray-400">
                            {unit ? (
                              <span className="text-center py-1 px-2 block">
                                {unit?.[selectedTab?.no]}
                              </span>
                            ) : (
                              <span />
                            )}
                          </td>
                        );
                      })}
                  </tr>
                );
              })
          ) : (
            <tr>
              {Array(xCount)
                .fill(0)
                .map((r, indexX) => {
                  const itemHash = generateFlatHashName(
                    selectedTab?.tabName,
                    selectedTab,
                    0,
                    indexX
                  );

                  const unit = flatsDetails?.[selectedTab?.tabName]?.[itemHash];

                  return (
                    <td classes="px-4 py-2 dark:border-dark-border !p-0  border border-gray-400">
                      {unit ? (
                        <span className="text-center py-1 px-2 block">
                          {unit?.[selectedTab?.no]}
                        </span>
                      ) : (
                        <span />
                      )}
                    </td>
                  );
                })}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
