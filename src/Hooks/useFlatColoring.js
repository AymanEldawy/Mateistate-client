import { ApiActions } from "Helpers/Lib/api";
import { FLAT_PROPERTY_TABS_SETTINGS } from "Helpers/constants";
import { createContext, useContext, useEffect, useState } from "react";

const FlatColoringContext = createContext(null);

const COLLECTION_COUNTS = {};
const UPDATES_ROWS = {};

const deleteAssetsById = async (table, row) => {
  const response = await ApiActions.remove(table, {
    conditions: [{ type: "and", conditions: [["id", "=", row?.id]] }],
  });
  if (response?.success) {
    await ApiActions.remove("cost_center", {
      conditions: [
        { type: "and", conditions: [["id", "=", row?.cost_center_id]] },
      ],
    });
  }
};

const calculateRoomCount = (collections, setRoomCounts) => {
  const counts = {};
  for (const hex in collections) {
    counts[collections[hex]] = counts[collections[hex]]
      ? counts[collections[hex]] + 1
      : 1;
  }
  setRoomCounts(counts);
};

export const FlatColoringProvider = ({ children }) => {
  const [hex, setHex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [flatsDetails, setFlatsDetails] = useState({});
  const [canInsertColor, setCanInsertColor] = useState(false);
  const [roomCounts, setRoomCounts] = useState({});

  useEffect(() => {
    calculateRoomCount(COLLECTION_COUNTS, setRoomCounts);
  }, [JSON.stringify(COLLECTION_COUNTS)]);

  // select color
  const onSelectColor = (rowIndex, hexValue) => {
    setSelectedColor(rowIndex);
    setHex(hexValue);
    setCanInsertColor(true);
  };

  const onPreventColor = () => {
    setSelectedColor("");
    setHex("");
    setCanInsertColor(false);
  };

  const onInsertColor = (tab, indexHash, additional) => {
    let tabSettings = FLAT_PROPERTY_TABS_SETTINGS[tab];
    let flatType = tabSettings?.type
      ? { [tabSettings?.type_col_name]: tabSettings?.type }
      : {};
    let rest = additional
      ? { ...additional, [tabSettings?.no]: additional?.name, ...flatType }
      : {};

    UPDATES_ROWS[indexHash] = true;

    COLLECTION_COUNTS[additional?.name] = hex;

    let prevItem = flatsDetails?.[tab]?.[indexHash];

    if (prevItem?.id && prevItem?.hex !== hex) {
      // Handle delete prev asset
      let asset = FLAT_PROPERTY_TABS_SETTINGS?.[tab];
      deleteAssetsById(asset?.table, prevItem);
    }

    setFlatsDetails((prev) => ({
      ...prev,
      [tab]: {
        ...prev?.[tab],
        [indexHash]: {
          ...prev?.[tab]?.[indexHash],
          ...rest,
          hex: hex,
          row_index: selectedColor,
          asset_hash: indexHash,
        },
      },
    }));
  };

  const onRemoveFromColor = (tabName, item) => {
    delete COLLECTION_COUNTS[item];

    let flats = flatsDetails;
    let removedItem = flats?.[tabName]?.[item];
    // Handle delete prev asset
    if (removedItem?.id) {
      let asset = FLAT_PROPERTY_TABS_SETTINGS?.[tabName];
      deleteAssetsById(asset?.table, removedItem);
    }
    delete flats[tabName][item];
    setFlatsDetails((prev) => ({
      ...flats,
    }));
  };

  const onChangeApartmentName = (tab, indexHash, value) => {
    let tabSettings = FLAT_PROPERTY_TABS_SETTINGS[tab];
    setFlatsDetails((prev) => ({
      ...prev,
      [tab]: {
        ...prev?.[tab],
        [indexHash]: {
          ...prev?.[tab]?.[indexHash],
          [tabSettings.no]: value,
        },
      },
    }));
  };

  return (
    <FlatColoringContext.Provider
      value={{
        flatsDetails,
        setFlatsDetails,
        selectedColor,
        onSelectColor,
        onPreventColor,
        canInsertColor,
        onInsertColor,
        // onRemoveOneItemColor,
        onRemoveFromColor,
        onChangeApartmentName,
        roomCounts,
        COLLECTION_COUNTS,
        UPDATES_ROWS,
      }}
    >
      {children}
    </FlatColoringContext.Provider>
  );
};

const useFlatColoring = () => useContext(FlatColoringContext);

export default useFlatColoring;
