import { FLAT_PROPERTY_TABS_SETTINGS } from "Helpers/constants";
import { createContext, useContext, useState } from "react";

const CACHE_UPDATES_Apartments = {};
const FlatColoringContext = createContext(null);

export const FlatColoringProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [hex, setHex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [flatsDetails, setFlatsDetails] = useState({});
  const [canInsertColor, setCanInsertColor] = useState(false);
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
    console.log(
      "🚀 ~ file: useFlatColoring.js:27 ~ onInsertColor ~ tabSettings:",
      tabSettings
    );
    let rest = additional
      ? { ...additional, [tabSettings.no]: additional?.name }
      : {};

    setFlatsDetails((prev) => ({
      ...prev,
      [tab]: {
        ...prev?.[tab],
        [indexHash]: {
          ...prev?.[tab]?.[indexHash],
          ...rest,
          hex: hex,
        },
      },
    }));
  };

  const onRemoveFromColor = (tabName, item) => {
    let flats = flatsDetails;
    console.log(
      "🚀 ~ file: useFlatColoring.js:50 ~ onRemoveFromColor ~ flats:",
      flats
    );
    delete flats[tabName][item];
    console.log(
      "🚀 ~ file: useFlatColoring.js:50 ~ onRemoveFromColor ~ flats:",
      flats
    );
    setFlatsDetails(flats);
    setRefresh((p) => !p);
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
      }}
    >
      {children}
    </FlatColoringContext.Provider>
  );
};

const useFlatColoring = () => useContext(FlatColoringContext);

export default useFlatColoring;
