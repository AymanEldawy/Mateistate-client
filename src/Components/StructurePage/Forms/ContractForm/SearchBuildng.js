import React from 'react'
import AsyncSelect from "react-select/async";
import { getSearchContract } from 'Helpers/Lib/global-read';
import { QueryClient } from '@tanstack/react-query';

export const SearchContract = ({
  formPagination
}) => {
  const queryClient = new QueryClient();

  const loadOptions = async (value, callback) => {
    try {
      const res = await queryClient.fetchQuery({
        queryKey: ["contract", 'search', value],
        queryFn: async () => {
          let response = await getSearchContract(value);
          console.log("🚀 ~ queryFn: ~ response:", response)
          return response?.result;
        },
        enable: !!value
      });
      console.log(res, 'res');

      callback(res || []);
      return res;
    } catch (error) {
      return [];
    }
  };



  return (

    <AsyncSelect
      placeholder="Search"
      className={`w-full min-h-[30px] h-[30px] bg-white rounded-md text-xs border min-w-[120px]`}
      classNames={{
        indicatorsContainer: () => "!hidden bg-black",
        control: (state) => `bg-transparent !border-none   !min-h-[30px] !h-[30px]`,
        container: (state) => `!border-none`,
        singleValue: () => "dark:text-gray-200 unique-valid !-mt-[5px]",
        multiValueLabel: () => "whitespace-nowrap ",
        menuList: () => "dark:bg-dark-bg ",
        menu: () => "min-w-[190px]",
        input: () => "!h-[30px] !py-0 !-mt-[3px]",
      }}
      getOptionLabel={(option) => {
        console.log("🚀 ~ option:", option)
        return option?.internal_number || `${option?.building_name}- ${option?.flat_name}`
      }}
      getOptionValue={(option) => option?.id}
      loadOptions={(inputValue, callback) => {
        loadOptions(inputValue, callback);
      }}
      onChange={option => {
        console.log("🚀 ~ option:", option)
        formPagination?.getPaginationTable(option?.number)
      }}
    />

  )
}
