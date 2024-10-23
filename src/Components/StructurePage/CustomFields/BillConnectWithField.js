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
  BILL_CONNECT_WITH_MAINTENANCES_CODE,
  BILL_CONNECT_WITH_MAINTENANCES_NAME,
  CONNECT_WITH_CONTRACT_NAME,
  CONNECT_WITH_NOTHING_CODE,
} from "Helpers/GENERATE_STARTING_DATA";
import { ErrorText } from "Components/Global/ErrorText";

const REF_TABLES = {
  [BILL_CONNECT_WITH_MAINTENANCES_CODE]: BILL_CONNECT_WITH_MAINTENANCES_NAME,
};

const BillConnectWithField = ({ tab, values, errors, old }) => {
  const { t } = useTranslation();
  const { control, watch } = useFormContext();
  const [list, setList] = useState([]);
  const [chooseList, setChooseList] = useState([]);
  const [selectedItemNumber, setSelectedItemNumber] = useState(1);
  const [viewUrl, setViewUrl] = useState(null);

  const selectName = tab ? `${tab}.connect_with` : "connect_with";
  const selectNameId = tab ? `${tab}.connect_with_id` : "connect_with_id";

  useEffect(() => {
    setChooseList(
      SELECT_LISTS("bill_connect_with")?.map((item) => ({
        value: item?.id,
        label: item?.name,
      }))
    );
  }, []);

  useEffect(() => {
    async function fetchList(table) {
      const response = await ApiActions.read(table);
      if (response?.success) {
        const list = response?.result?.map((item) => ({
          value: item?.id,
          label:
            table === BILL_CONNECT_WITH_MAINTENANCES_NAME?.toLocaleLowerCase()
              ? item?.number
              : item?.name,
        }));
        setList(list);
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
    <div className={`${watch(selectName) ? "flex gap-2" : ""}`}>
      <div className={`flex ${old ? "flex-row" : "flex-col"}`}>
        <label
          title="connect with"
          className={`${old && "w-[120px]"} overflow-selectName text-ellipsis text-sm font-normal whitespace-nowrap mb-1 capitalize`}
        >
          connect with
        </label>
        <Controller
          name={selectName}
          control={control}
          render={({ field: { onChange }, value, ref }) => {
            return (
              <Select
                menuPortalTarget={document?.body}
                styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                className={`border rounded-md bg-none bg-transparent`}
                classNames={{
                  control: (state) => "bg-transparent !border-none",
                  container: (state) =>
                    `!bg-none dark:!border-dark-border ${
                      old
                        ? "!bg-white dark:!bg-[#2C2C2C] w-full"
                        : "!bg-transparent"
                    }`,
                  singleValue: () => "dark:text-gray-200 unique-valid",
                  menuList: () => "dark:bg-dark-bg",
                }}
                options={chooseList}
                value={chooseList?.find((c) => c?.value === +watch(selectName))}
                onChange={(option) => {
                  onChange(option?.value);
                }}
              />
            );
          }}
        />
      </div>
      {selectedItemNumber > CONNECT_WITH_NOTHING_CODE ? (
        <div className=" min-w-[200px]">
          <label
            title="connect with id"
            className="overflow-hidden whitespace-nowrap text-ellipsis block text-sm font-normal mb-1 capitalize"
          >
            connect with id
          </label>
          <div
            className={`relative flex items-center border dark:border-dark-border rounded-`}
          >
            <Controller
              name={selectNameId}
              control={control}
              defaultValue={null}
              render={({ field: { onChange }, fieldState, formState }) => {
                return (
                  <Select
                    isClearable={true}
                    menuPlacement="auto"
                    menuPortalTarget={document?.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    options={list}
                    name={selectNameId}
                    className="w-full border-none"
                    classNames={{
                      indicatorsContainer: () => "!hidden bg-black",
                      control: (state) => "bg-transparent !border-none",
                      container: (state) =>
                        "!bg-none !bg-transparent !border-none",
                      singleValue: () => "dark:text-gray-200 unique-valid",
                      menuList: () => "dark:bg-dark-bg",
                    }}
                    value={list?.find((c) => c?.value === watch(selectNameId))}
                    onChange={(option) => onChange(option?.value)}
                  />
                );
              }}
            />

            <button
              type="button"
              disabled={selectedItemNumber <= 0}
              className="rtl:right-auto mx-1 rounded-md p-1 disabled:hover:bg-transparent disabled:text-gray-500 text-blue-500 hover:text-white hover:bg-blue-400"
            >
              <EyeIcon />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BillConnectWithField;
