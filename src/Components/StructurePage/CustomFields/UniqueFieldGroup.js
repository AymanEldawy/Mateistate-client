import { useEffect } from "react";
import { usePopupForm } from "Hooks/usePopupForm";
import { EyeIcon, PlusIcon } from "Components/Icons";
import { useState } from "react";
import Select from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { SELECT_LISTS } from "Helpers/constants";
import { ApiActions } from "Helpers/Lib/api";
import { useTranslation } from "react-i18next";
import { getConnectWithUrl } from "Helpers/functions";

const REF_TABLES = {
  1: "contract",
  2: "lawsuit",
  3: "bill",
};

const UniqueFieldGroup = ({ tab, values, errors }) => {
  const { t } = useTranslation();
  const { dispatchForm } = usePopupForm();
  const { control, watch, setValue } = useFormContext();
  const [list, setList] = useState([]);
  const [chooseList, setChooseList] = useState([]);
  const [selectNameError, setSelectNameError] = useState("");
  const [selectNameIdError, setSelectNameIdError] = useState("");
  const [selectedItemNumber, setSelectedItemNumber] = useState(1);
  const [viewUrl, setViewUrl] = useState(null);

  const selectName = tab ? `${tab}.connect_with` : "connect_with";
  const selectNameId = tab ? `${tab}.connect_with_id` : "connect_with_id";

  console.log(watch());
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
          label: table === "contract" ? item?.number : item?.name,
        }));
        setList(list);
      }
    }
    setSelectedItemNumber(watch(selectName));
    const refTable = REF_TABLES?.[watch(selectName)];
    if (refTable) {
      fetchList(refTable);
    }
  }, [watch(selectName)]);

  console.log(list);
  useEffect(() => {
    let connectWithId = watch(selectNameId);
    if (connectWithId) getViewUrl(connectWithId);
  }, [watch(selectNameId)]);

  const getViewUrl = async (connectWithId) => {
    const response = await getConnectWithUrl(watch(selectName), connectWithId);
    console.log("🚀 ~ getViewUrl ~ response:", response);
  };

  return (
    <>
      <div className={"flex flex-col min-w-[200px]"}>
        <label
          title="connect with"
          className="overflow-hidden text-ellipsis text-sm font-normal whitespace-nowrap mb-1 capitalize "
        >
          connect with
        </label>
        <Controller
          name={selectName}
          control={control}
          render={({ field: { onChange }, value, ref }) => {
            return (
              <Select
                className={`border rounded-md bg-none bg-transparent`}
                classNames={{
                  control: (state) => "bg-transparent !border-none",
                  container: (state) =>
                    "!bg-none !bg-transparent dark:!border-dark-border",
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
        {selectNameError ? (
          <p className="bg-red-200 mt-2 rounded text-sm text-red-500 px-2 py-1">
            {selectNameError}
          </p>
        ) : null}
      </div>
      {selectedItemNumber > 0 ? (
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
                    menuPlacement="auto"
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
                    // defaultValue={list?.find(
                    //   (c) => c?.value === watch(selectNameId)
                    // )}
                    // value={list?.find(
                    //   (c) =>{
                    //     console.log(c?.value, watch(selectNameId));
                    //     return c?.value == watch(selectNameId)
                    //   }
                    // )}
                    // onChange={onChange}
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
          {selectNameIdError ? (
            <p className="bg-red-200 mt-2 rounded text-sm text-red-500 px-2 py-1">
              {selectNameIdError}
            </p>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default UniqueFieldGroup;
