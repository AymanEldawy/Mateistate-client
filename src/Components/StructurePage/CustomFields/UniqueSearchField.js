import AsyncSelect from "react-select/async";

const UniqueSearchField = ({
  loadOptions,
  ...props
}) => {

  return (
    <AsyncSelect
      className={`w-full min-h-[30px] h-[30px] border-none border bg-white dark:bg-dark-bg rounded-md min-w-[120px] `}
      classNames={{
        indicatorsContainer: () => "!hidden bg-black",
        control: (state) => `bg-transparent !border-none   !min-h-[30px] !h-[30px]`,
        container: (state) =>
          `!border-none`,
        singleValue: () => "dark:text-gray-200 unique-valid !-mt-[5px]",
        multiValueLabel: () => "whitespace-nowrap ",
        menuList: () => "dark:bg-dark-bg ",
        menu: () => "min-w-[190px]",
        input: () => "!h-[30px] !py-0 !-mt-[2px]",
      }}
      placeholder={`Search`}
      getOptionLabel={(option) => {
        return option?.name;
      }}
      getOptionValue={(option) => option?.id}
      loadOptions={(inputValue, callback) => {
        loadOptions(inputValue, callback);
      }}
      {...props}
    />
  );
};

export default UniqueSearchField;
