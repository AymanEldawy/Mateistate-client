export const DefaultColumnFilter = ({ column }) => {
  const { getFilterValue, setFilterValue } = column;
  return (
    <input
    className="border p-1 rounded max-w-[120px] "
      value={getFilterValue()}
      onChange={(e) => setFilterValue(e.target.value)}
      placeholder={`Filter ${column.id}`}
    />
  );
};
