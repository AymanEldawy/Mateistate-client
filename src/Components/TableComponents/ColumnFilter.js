export const DefaultColumnFilter = ({ column }) => {
  if(!column) return null
  const { filterVariant } = column?.columnDef.meta ?? {}
  console.log("🚀 ~ DefaultColumnFilter ~ filterVariant:", filterVariant)
  const columnFilterValue = column?.getFilterValue()
  if(column?.columnDef?.header === 'number')
    console.log("🚀 ~ DefaultColumnFilter ~ filterVariant:", column.get)
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
