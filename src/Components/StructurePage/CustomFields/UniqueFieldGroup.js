import { useEffect } from "react";
import { EyeIcon } from "Components/Icons";
import { useState } from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { SELECT_LISTS } from "Helpers/constants";
import { ApiActions } from "Helpers/Lib/api";
import { useTranslation } from "react-i18next";
import { getConnectWithUrl } from "Helpers/functions";
import {
  CONNECT_WITH_BILL_CODE,
  CONNECT_WITH_BILL_NAME,
  CONNECT_WITH_CONTRACT_CODE,
  CONNECT_WITH_CONTRACT_NAME,
  CONNECT_WITH_LAWSUIT_CODE,
  CONNECT_WITH_LAWSUIT_NAME,
  CONNECT_WITH_NOTHING_CODE,
} from "Helpers/GENERATE_STARTING_DATA";
import { ErrorText } from "Components/Global/ErrorText";

const REF_TABLES = {
  [CONNECT_WITH_CONTRACT_CODE]: CONNECT_WITH_CONTRACT_NAME,
  [CONNECT_WITH_LAWSUIT_CODE]: CONNECT_WITH_LAWSUIT_NAME,
  [CONNECT_WITH_BILL_CODE]: CONNECT_WITH_BILL_NAME,
};

const UniqueFieldGroup = ({ tab, containerClassName, onSelectContract }) => {
  const { t } = useTranslation();
  const { control, watch, setValue } = useFormContext();
  const [list, setList] = useState([]);
  const [chooseList, setChooseList] = useState([]);
  const [selectNameError, setSelectNameError] = useState("");
  const [selectNameIdError, setSelectNameIdError] = useState("");
  const [selectedItemNumber, setSelectedItemNumber] = useState(1);
  const [viewUrl, setViewUrl] = useState(null);

  const selectName = tab ? `${tab}.connect_with` : "connect_with";
  const selectNameId = tab ? `${tab}.connect_with_id` : "connect_with_id";

  useEffect(() => {
    setChooseList(
      SELECT_LISTS("cheque_connect_with")?.map((item) => ({
        value: item?.id,
        label: item?.name,
      }))
    );
  }, []);

  useEffect(() => {
    async function fetchList(table) {
      const response = await ApiActions.read(table);
      if (response?.success) {
        setList(response?.result);
      }
    }
    setSelectedItemNumber(watch(selectName));
    const refTable = REF_TABLES?.[watch(selectName)];
    if (refTable) {
      fetchList(refTable?.toLowerCase());
    }
  }, [watch(selectName)]);

  useEffect(() => {
    let connectWithId = watch(selectNameId);
    if (connectWithId) getViewUrl(connectWithId);
  }, [watch(selectNameId)]);

  const getViewUrl = async (connectWithId) => {
    const response = await getConnectWithUrl(watch(selectName), connectWithId);
  };
  
  return (
    <>
      <div className={`flex flex-row gap-2 text-sm items-center ${containerClassName}`}>
        <label
          title="connect with"
          className="w-[100px] lg:w-[120px] shrink-0 overflow-hidden text-ellipsis text-sm font-normal whitespace-nowrap capitalize "
        >
          connect with
        </label>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-1">
            <Controller
              name={selectName}
              control={control}
              render={({
                field: { onChange, onBlur, ref, value },
                fieldState: { error },
              }) => {
                return (
                  <Select
                    ref={ref}
                    menuPortalTarget={document?.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    className={`border min-w-[130px] rounded-md bg-none bg-transparent  !min-h-[30px] !h-[30px]`}
                    classNames={{
                      indicatorsContainer: () => "h-[30px]",
                      control: (state) => "bg-transparent !border-none  !min-h-[30px] !h-[30px]",
                      container: (state) =>
                        "!bg-none !bg-transparent dark:!border-dark-border",
                      singleValue: () => "dark:text-gray-200 unique-valid !-mt-[5px]",
                      menuList: () => "dark:bg-dark-bg ",
                      menu: () => "min-w-[190px]",
                      input: () => "!h-[30px] !py-0 !-mt-[2px]",
                    }}
                    options={chooseList}
                    value={chooseList?.find(
                      (c) => c?.value === +watch(selectName)
                    )}
                    onChange={(option) => {
                      onChange(option?.value);
                    }}
                  />
                );
              }}
            />

            {selectNameError ? (
              <ErrorText containerClassName="py-1">{selectNameError}</ErrorText>
            ) : null}
          </div>

          {selectedItemNumber > CONNECT_WITH_NOTHING_CODE ? (
            <div
              className={`relative flex items-center border dark:border-dark-border rounded w-[100px]`}
            >
              <Controller
                name={selectNameId}
                control={control}
                // defaultValue={null}
                className="w-full"
                render={({
                  field: { onChange, onBlur, ref, value },
                  fieldState: { error },
                }) => {
                  return (
                    <Select
                      ref={ref}
                      isClearable={true}
                      menuPlacement="auto"
                      menuPortalTarget={document?.body}
                      styles={{
                        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                      }}
                      options={list}
                      name={selectNameId}
                      className="border-none !min-h-[30px] !h-[30px]"
                      classNames={{
                        indicatorsContainer: () => "!hidden bg-black w-full h-[30px]",
                        control: (state) => "bg-transparent !border-none  !min-h-[30px] !h-[30px]",
                        container: (state) =>
                          "!bg-none !bg-transparent !border-none w-full",
                        singleValue: () => "dark:text-gray-200 unique-valid !-mt-[5px]",
                        menuList: () => "dark:bg-dark-bg",
                        menu: () => "min-w-[100px]",
                        input: () => "!h-[30px] !py-0 !-mt-[5px]",
                      }}
                      value={list?.find(
                        (c) => c?.id === watch(selectNameId)
                      )}
                      getOptionLabel={option => option?.number}
                      getOptionValue={option => option?.id}
                      onChange={(option) => {
                        if (!!onSelectContract && watch(selectName) === CONNECT_WITH_CONTRACT_CODE) {
                          onSelectContract(option)
                        }
                        onChange(option?.value)
                      }}
                    />
                  );
                }}
              />

              {/* <button
                type="button"
                disabled={selectedItemNumber <= 0}
                className="rtl:right-auto mx-1 rounded-md p-1 disabled:hover:bg-transparent disabled:text-gray-500 text-blue-500 hover:text-white hover:bg-blue-400"
              >
                <EyeIcon />
              </button> */}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default UniqueFieldGroup;
