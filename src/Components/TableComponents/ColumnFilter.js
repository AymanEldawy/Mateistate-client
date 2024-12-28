export const DefaultColumnFilter = ({ column }) => {
  const { getFilterValue, setFilterValue } = column;
  return (
    <input
      value={getFilterValue()}
      onChange={(e) => setFilterValue(e.target.value)}
      placeholder={`Filter ${column.id}`}
    />
  );
};
