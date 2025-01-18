
import Select from "react-select";

const NormalSelect = ({
  labelClassName,
  containerClassName,
  label,
  keyValue = "id",
  keyLabel = "name",
  selectClassNames,
  title,
  list,
  selectedItem,
  onChange,
}) => {

console.log(selectedItem, 'ldsdiasodas');


  return (
    <div
      className={`flex flex-row gap-1 ` + containerClassName}
    >
      {label && (
        <label
          title={label}
          className={
            "w-[100px] lg:w-[120px] shrink-0 font-medium text-gray-600 overflow-hidden text-ellipsis text-[11px] whitespace capitalize flex items-center gap-1 " +
            labelClassName
          }
        >
          {title}

        </label>
      )}
      <div
        className={`relative flex text-xs items-start  w-full`}
      >
        <Select
          isClearable
          menuPlacement="auto"
          menuPortalTarget={document?.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          className={`min-h-[30px] h-[30px]  bg-white border rounded-md w-full field-select-container min-w-[100px]`}
          // classNamePrefix="field-select"
          classNames={{
            control: (state) => "!border-none !min-h-[30px] !h-[30px]",
            container: (state) =>
              `!bg-none dark:!border-dark-border`,
            singleValue: () => "dark:text-gray-200 unique-valid !-mt-[5px]",
            menuList: () => "dark:bg-dark-bg",
            indicatorsContainer: () => "h-[30px] !hidden",
            input: () => "dark:text-gray-200 !h-[30px] !py-0 !-mt-[4px]",
            // valueContainer: () => "-mt-1",
            ...selectClassNames,
          }}

          options={list}
          value={list?.find(
            (c) => c?.value === selectedItem
          )}
          getOptionLabel={option => option?.[keyLabel || 'name']}
          getOptionValue={option => option?.[keyValue || 'id']}
          onChange={(option) => {
            onChange(option);
          }}
        />
      </div>
    </div>
  );
};

export default NormalSelect;
