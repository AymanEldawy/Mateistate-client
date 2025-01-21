export const DefaultColumnFilter = ({ column }) => {
  if(!column) return null
  const { filterVariant } = column?.columnDef.meta ?? {}
  const columnFilterValue = column?.getFilterValue()
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
