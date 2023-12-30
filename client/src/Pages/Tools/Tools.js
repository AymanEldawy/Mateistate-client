import axios from "axios";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import BlockPaper from "Components/BlockPaper/BlockPaper";
import TableForm from "Components/Forms/CustomForm/TableForm";
import { Button } from "Components/Global/Button";
import ContentBar from "Components/Global/ContentBar/ContentBar";
import formsApi from "Helpers/Forms/formsApi";
import {
  generateApartments,
  getPrefix, hexToDecimal,
  SERVER_URL
} from "Helpers/functions";
import {
  LockIcon, PlusIcon
} from "Helpers/Icons";
import MinusIcon from "Helpers/Icons/MinusIcon";
import Loading from "Components/Loading/Loading";
import ToolsTabs from "./ToolsTabs";


const CACHE_UPDATES_COLORS = {};
const CACHE_UPDATES_Apartments = {};

const CACHE_LIST = {};
const getCachedList = (tableName) => {
  return CACHE_LIST[tableName];
};
let CACHE_LIST_COLORS = {};
let CACHE_APARTMENTS = {};

const tabs = [
  {
    alias: 0,
    tabName: "Apartment",
    x: "ApartmentCountOfFloor",
    y: "FloorCount",
  },
  {
    alias: 2,
    tabName: "Pent Houses",
    x: "BHouseFloor",
    y: "BHouseFlatCount",
  },
  {
    alias: 1,
    tabName: "Mezzanine",
    x: "MBalanceFloor",
    y: "MBalanceFlatCount",
  },
  {
    alias: 3,
    tabName: "Office",
    x: "OfficeFloor",
    y: "OfficeCount",
  },
  {
    alias: "Parking",
    tabName: "Car parking",
    x: "ParkingFloor",
    y: "ParkingCount",
  },
  {
    alias: "Parking",
    tabName: "Underground parking",
    x: "ParkingFloorUnder",
    y: "ParkingCountUnder",
  },
  { alias: "Shop", tabName: "Shops", x: "ShopCount", y: "" },
  {
    alias: 7,
    tabName: "Driver flats",
    x: "FlatDriverCount",
    y: "",
  },
  {
    alias: 8,
    tabName: "Servant flats",
    x: "FlatServantCount",
    y: "",
  },
];

const Tools = () => {
  const { Guid } = useParams();
  const location = useLocation();
  const { row } = location?.state;
  const [count, setCount] = useState(25);
  const [refresh, setRefresh] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedColor, setSelectedColor] = useState("");
  const [getValuesWithoutSubmit, setGetValuesWithoutSubmit] = useState();
  const [getIndexOfRowUpdated, setGetIndexOfRowUpdated] = useState("");
  const fields = formsApi["flatbuildingdetails"];
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [flatsDetails, setFlatsDetails] = useState({});
  const [canInsertColor, setCanInsertColor] = useState(false);

  const getLists = async (tableName) => {
    await axios
      .post(`${SERVER_URL}/list`, {
        table: tableName,
      })
      .then((res) => {
        CACHE_LIST[tableName] = res?.data?.recordset;
      });
  };
  const findList = async (type) => {
    await axios
      .post(`${SERVER_URL}/findPropertyOfBuilding`, {
        building: row?.Guid,
        table: type,
      })
      .then((res) => {
        let data = res?.data?.recordset;
        if (data.length) {
          for (const row of data) {
            CACHE_APARTMENTS[row?.NO] = row;
          }
        }
      })
      .catch((err) => {
      });
  };
  const getColoring = async () => {
    setLoading(true);
    await axios
      .post(`${SERVER_URL}/getColoring`)
      .then((res) => {
        let dataLength = res?.data?.recordset?.length;
        CACHE_LIST_COLORS = {
          ...res?.data?.recordset,
        };
        if (dataLength > count) {
          setCount(dataLength);
        }
      })
      .catch((err) => {
      });
    setLoading(false);
  };

  useEffect(() => {
    getColoring();
    findList("apartment");
    findList("shop");
    findList("parking");
  }, [Guid]);

  useEffect(() => {
    getLists("Building");
    getLists("cust");
  }, []);
  useEffect(() => {}, [refresh]); // Refresh / force rerender
  useEffect(() => {
    for (const key in getValuesWithoutSubmit) {
      CACHE_LIST_COLORS[key] = getValuesWithoutSubmit[key];
    }
    setRefresh((p) => !p);
  }, [getValuesWithoutSubmit]);
  useEffect(() => {
    CACHE_UPDATES_COLORS[getIndexOfRowUpdated] = getIndexOfRowUpdated;
  }, [getIndexOfRowUpdated]);
  const onDecrement = useCallback(() => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  }, [count]);
  const onIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);
  // select color
  const onSelectColor = useCallback(
    (key) => {
      setSelectedColor(key);
      setCanInsertColor(true);
    },
    [selectedColor]
  );
  const preventInsertColor = () => {
    setSelectedColor("");
    setCanInsertColor(false);
  };
  const insertColor = (tabName, itemHash) => {
    let prefix = getPrefix(tabName);
    let hash = itemHash?.split("-");
    let NoValue = `${prefix} ${hash[1]}`;
    let uniqueHash = `${itemHash}&${tabName}`;
    let additionalValues = {};
    CACHE_UPDATES_Apartments[uniqueHash] = uniqueHash;
    if (typeof selectedTab?.alias === "number") {
      additionalValues = {
        CardKind: selectedTab?.alias,
      };
    } else {
      additionalValues = {};
    }
    if (flatsDetails[uniqueHash]) {
      setFlatsDetails((prev) => {
        return {
          ...prev,
          [uniqueHash]: {
            NO: NoValue,
            ...additionalValues,
            ...prev?.[uniqueHash],
            FlatBuildingDetailsIndex: selectedColor,
            BuildingGuid: Guid,
          },
        };
      });
    } else {
      setFlatsDetails((prev) => {
        return {
          ...prev,
          [uniqueHash]: {
            NO: NoValue,
            ...additionalValues,
            FlatBuildingDetailsIndex: selectedColor,
            BuildingGuid: Guid,
          },
        };
      });
    }
    setRefresh((p) => !p);
  };
  const removeOneItemColor = useCallback(
    (tabName, itemHash) => {
      let newList = flatsDetails;
      if (!!newList[`${itemHash}&${tabName}`])
        newList[`${itemHash}&${tabName}`].FlatBuildingDetailsIndex = null;
      setFlatsDetails(newList);

      setRefresh((p) => !p);
    },
    [flatsDetails]
  );
  const removeFromColor = useCallback(
    (index, count, direction, tabName) => {
      if (direction === "vertical") {
        for (let i = 0; i < count; i++) {
          let itemHash = `${tabName}-${i + 1}0${index + 1}`;
          removeOneItemColor(tabName, itemHash);
        }
      } else {
        for (let i = 0; i < count; i++) {
          let itemHash = `${tabName}-${index + 1}0${i + 1}`;
          removeOneItemColor(tabName, itemHash);
        }
      }
      setRefresh((p) => !p);
    },

    [removeOneItemColor]
  );
  const onSubmit = async () => {
    setLoading(true);
    let newColoringList = {};

    for (const key in CACHE_LIST_COLORS) {
      if (!CACHE_UPDATES_COLORS[key]) {
        continue;
      }
      newColoringList[key] = CACHE_LIST_COLORS?.[key];
      if (typeof newColoringList?.[key]?.["Color"] === "string")
        newColoringList[key]["Color"] = hexToDecimal(
          newColoringList[key]?.Color?.substr(1)
        );
    }
    let newFlatDetails = {};

    for (const row in flatsDetails) {
      if (CACHE_UPDATES_Apartments[row]) {
      } else {
        continue;
      }
      let splitRow = row?.split("&");
      let tabName = splitRow?.[1];
      if (!newFlatDetails[tabName]) newFlatDetails[tabName] = [];

      let data = {
        ...CACHE_LIST_COLORS[flatsDetails[row]?.FlatBuildingDetailsIndex],
      };
      if (data?.Color) delete data.Color;
      if (data?.Guid) delete data.Guid;
      if (data?.Type) delete data.Type;
      if (data?.SalePrice) delete data.SalePrice;
      if (data?.SalePrice2) delete data.SalePrice2;
      if (data?.SalePrice3) delete data.SalePrice3;
      if (data?.Count) delete data.Count;
      if (
        tabName?.toLowerCase()?.includes("parking") ||
        tabName?.toLowerCase()?.includes("shop")
      ) {
        if (data?.BathroomCount) delete data?.BathroomCount;
        if (data?.FlatKind) delete data?.FlatKind;
        if (data?.Class) delete data?.Class;
        if (data?.BalconyCount) delete data?.BalconyCount;
      }
      newFlatDetails[tabName] = [
        ...newFlatDetails?.[tabName],
        {
          ...flatsDetails?.[row],
          ...data,
        },
      ];
    }
    generateApartments(newFlatDetails, Guid);
    await axios
      .post(`${SERVER_URL}/handleColoring`, {
        colors: !!newColoringList ? Object.values(newColoringList) : [],
      })
      .then((res) => {
        CACHE_LIST_COLORS = {};
        CACHE_APARTMENTS = {};
        getColoring();
        findList("apartment");
        findList("shop");
        findList("parking");
      });
    setLoading(false);
  };

  return (
    <BlockPaper
      contentBar={
        <ContentBar
          title="Flat Building Details"
          description={
            <Link
              to={`/update/building/${row?.Guid}`}
              state={{ row, table: "building" }}
              className="text-blue-500 dark:text-white hover:underline text-sm"
            >
              {row?.Name ? row?.Name : "Edit Building"}
            </Link>
          }
        >
          <div className="flex bg-white dark:bg-dark-border shadow-sm rounded min-w-[70px] overflow-hidden">
            <button
              onClick={preventInsertColor}
              className={`px-4 py-1 bg-green-500 rounded-sm text-white ${
                !canInsertColor ? " bg-red-500 " : ""
              }`}
            >
              <LockIcon open={!canInsertColor} className="h-5 w-5" />
            </button>
            <button
              className="hover:text-blue-500 dark:hover:text-white flex-1 p-1 disabled:bg-gray-50 scale-90"
              onClick={onDecrement}
              disabled={count === 1}
            >
              <MinusIcon />
            </button>
            <button
              className="hover:text-blue-500 dark:hover:text-white flex-1 p-1 scale-90"
              onClick={onIncrement}
            >
              <PlusIcon />
            </button>
          </div>
        </ContentBar>
      }
    >
      {loading ? (
        <Loading withBackdrop />
      ) : (
        <>
          <TableForm
            selectedColor={selectedColor}
            onSelectColor={onSelectColor}
            oldValues={CACHE_LIST_COLORS}
            initialFields={fields}
            rowLength={count}
            getCachedList={getCachedList}
            getValuesWithoutSubmit={setGetValuesWithoutSubmit}
            setGetIndexOfRowUpdated={setGetIndexOfRowUpdated}
          />

          <ToolsTabs
            data={data}
            insertColor={insertColor}
            canInsertColor={canInsertColor}
            flatsDetails={flatsDetails}
            setFlatsDetails={setFlatsDetails}
            removeFromColor={removeFromColor}
            CACHE_LIST_COLORS={CACHE_LIST_COLORS}
            removeOneItemColor={removeOneItemColor}
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            row={row}
            CACHE_APARTMENTS={CACHE_APARTMENTS}
          />
          <div className="mt-8 flex justify-end">
            <Button onClick={onSubmit} title="Submit" loading={loading} />
          </div>
        </>
      )}
    </BlockPaper>
  );
};

export default Tools;
