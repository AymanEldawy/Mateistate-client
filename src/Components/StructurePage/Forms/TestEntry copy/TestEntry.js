import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BlockPaper from "Components/BlockPaper/BlockPaper";

import Loading from "Components/Loading/Loading";
import { SERVER_URL } from "Helpers/functions";
import { ChevronIcon } from "Helpers/Icons";
import { useAlert } from "Hooks/useAlert";

import TestEntryFormTable from "./TestEntryFormTable";
import { toast } from "react-toastify";
import { Input, UniqueField } from "Components/StructurePage/CustomFields";

const columns = {
  Credit: "",
  Debit: "",
  CurrencyGuid: "",
  CurrencyVal: "",
  Note: "",
  Date: "",
  Difference: "",
  Number: "",
};
const childColumns = [
  "AcGuid",
  "Debit",
  "Credit",
  "CurrencyGuid",
  "CurrencyVal",
  "Note",
  "CostGuid",
  "ObverseAcGuid",
];
const cashedEntries = {};
const cashedEntriesAcGuidValues = {};
let hashIndex = {};

const updateReadonlyValues = (index, name, value, setReadOnlyValues) => {
  let newValue = 0;
  let oldValue = 0;
  if (!hashIndex[`${name}-${index}`]) {
    hashIndex[`${name}-${index}`] = value; // story key value
    newValue = value;
  } else {
    oldValue = hashIndex[`${name}-${index}`]; // store old value
    hashIndex[`${name}-${index}`] = value; // reset key value
    newValue = value - oldValue;
  }

  if (!isNaN(parseInt(newValue))) {
    setReadOnlyValues((prev) => {
      return {
        ...prev,
        [name]: prev[name] + parseInt(newValue),
      };
    });
    setReadOnlyValues((prev) => {
      return {
        ...prev,
        Difference: prev["Debit"] - prev["Credit"],
      };
    });
  }
};

const TestEntry = () => {
  const params = useParams();
  const { id } = params;
  const [entries, setEntries] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedRowNumber, setSelectedRowNumber] = useState(0);
  const [numberOfRows, setNumberOfRows] = useState();
  const [data, setData] = useState([]);
  const [readOnlyValues, setReadOnlyValues] = useState(columns);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [shouldUpdateUniqueIdentifyCols, setShouldUpdateUniqueIdentifyCols] =
    useState({ index: null, status: false });

  // get Rows Data
  const getRows = async (Guid) => {
    setLoading(true);
    if (cashedEntries[Guid]) {
      setEntries(cashedEntries[Guid]);
    } else {
      let newEntry = {};
      await axios
        .post(`${SERVER_URL}/rowinfo`, {
          table: "DEntry",
          num: Guid,
        })
        .then((res) => {
          if (res?.data?.recordset) {
            for (const row of res?.data?.recordset) {
              newEntry[row?.Number] = row;
            }
          } else {
            newEntry = {};
          }
        });
      cashedEntries[Guid] = newEntry;
      setEntries(newEntry);
    }
    setLoading(false);
  };
  // Get Data
  const getData = async () => {
    setLoading(true);
    await axios
      .post(`${SERVER_URL}/list`, {
        table: "HEntry",
      })
      .then((res) => {
        let numbers = [];
        let sortedSheet = res?.data?.recordset?.sort(
          (a, b) => a?.Number - b?.Number
        );
        setData(sortedSheet);
        if (sortedSheet) {
          for (const current of sortedSheet) {
            numbers.push({
              Guid: current?.id,
              Number: current?.Number,
            });
          }
          setReadOnlyValues(sortedSheet[0]);
          setNumberOfRows(numbers); // select all numbers of rows
          getRows(sortedSheet[selectedRowNumber]?.id); // get rows for current selected number
        }
      });
    setLoading(false);
  };

  useEffect(() => {
    // if (id) {
    getData();
    // }
  }, []);
  // auto fill or Update all currencyGuid & currencyVal in table
  useEffect(() => {
    for (const key in entries) {
      if (entries[key]["Credit"] || entries[key]["Debit"]) {
        checkAutoInherit(key);
      }
    }
  }, [shouldUpdate]);
  // auto fill or or update next row when AcGuid & ObverseAcGuid in the same row have value
  useEffect(() => {
    let { index } = shouldUpdateUniqueIdentifyCols;
    if (entries?.[index]?.AcGuid && entries?.[index]?.ObverseAcGuid) {
      if (!entries?.[index + 1]?.AcGuid) {
        setEntries((prev) => {
          return {
            ...prev,
            [index + 1]: {
              ...prev?.[index + 1],
              AcGuid: prev?.[index]?.ObverseAcGuid,
            },
          };
        });
      }
      if (!entries?.[index + 1]?.ObverseAcGuid) {
        setEntries((prev) => {
          return {
            ...prev,
            [index + 1]: {
              ...prev?.[index + 1],
              ObverseAcGuid: prev?.[index]?.AcGuid,
            },
          };
        });
      }
    }
  }, [shouldUpdateUniqueIdentifyCols]);

  // steps
  const goNext = () => {
    if (selectedRowNumber < numberOfRows?.length - 1) {
      setReadOnlyValues(data[selectedRowNumber + 1]);
      getRows(numberOfRows[selectedRowNumber + 1]?.id);
      setSelectedRowNumber((prev) => prev + 1);
    }
  };
  const goBack = () => {
    if (selectedRowNumber > 0) {
      setReadOnlyValues(data[selectedRowNumber - 1]);
      getRows(numberOfRows[selectedRowNumber - 1]?.id);
      setSelectedRowNumber((prev) => prev - 1);
    }
  };

  const handelChangeField = (name, value) => {
    setReadOnlyValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (name === "CurrencyGuid" || name === "CurrencyVal") {
      setShouldUpdate((prev) => !prev);
    }
  };
  const handelChangeFieldBlur = (index, name, value) => {
    updateReadonlyValues(index, name, value, setReadOnlyValues);
  };

  const checkAutoInherit = (index) => {
    if (readOnlyValues?.CurrencyGuid) {
      if (!entries?.[index]?.CurrencyGuid) {
        setEntries((prev) => {
          return {
            ...prev,
            [index]: {
              ...prev?.[index],
              CurrencyGuid: readOnlyValues?.CurrencyGuid,
            },
          };
        });
      }
    }
    if (readOnlyValues?.CurrencyVal) {
      if (!entries?.[index]?.CurrencyVal) {
        setEntries((prev) => {
          return {
            ...prev,
            [index]: {
              ...prev?.[index],
              CurrencyVal: readOnlyValues?.CurrencyVal,
            },
          };
        });
      }
    }
  };
  const allowSelect = (key) => {
    return cashedEntriesAcGuidValues?.hasOwnProperty(key);
  };

  const handelChangeEntriesField = (index, name, value) => {
    let checkToContinue = true;
    if (name === "AcGuid") {
      if (
        cashedEntriesAcGuidValues[value] &&
        cashedEntriesAcGuidValues[value] !== index
      ) {
        checkToContinue = false;
        cashedEntriesAcGuidValues[value] = index;
        return;
      } else {
        cashedEntriesAcGuidValues[value] = index;
      }
    }
    // Insert grid
    setEntries((prev) => {
      return {
        ...prev,
        [index]: { ...prev?.[index], [name]: value },
      };
    });
    // auto insert to AcGuid / ObverseAcGuid
    if (name === "AcGuid" || name === "ObverseAcGuid") {
      setShouldUpdateUniqueIdentifyCols((prev) => {
        return {
          index: index,
          status: !prev?.status,
        };
      });
    }
    // auto insert to CurrencyGuid / CurrencyVal
    if (name === "Credit" || name === "Debit") {
      checkAutoInherit(index);
    }
  };

  // Handel Submit
  const onSubmit = async () => {
    let entriesData = {};
    let data = {};
    for (const col in entries) {
      if (entries[col] !== null) {
        entriesData[col] = entries[col];
      }
    }
    for (const col in readOnlyValues) {
      if (readOnlyValues[col] !== null) {
        data[col] = readOnlyValues[col];
      }
    }
    if (+readOnlyValues["Difference"] === 0) {
      let body = {
        childTable: "DEntry",
        childData: entriesData,
        childColumns: childColumns,
        table: "HEntry",
      };
      if (readOnlyValues["Number"] !== "") {
        body["num"] = numberOfRows[selectedRowNumber]?.id;
        delete data["Difference"];
        delete data["Number"];
        body["dat"] = data;
        body["columns"] = Object.keys(data);
        let res = await axios.post(`${SERVER_URL}/updateEntryParent`, {
          ...body,
        });
        if (res?.statusText === "OK") {
          toast.success("Update Successfully...");
        } else {
          toast.error("");
        }
      } else {
        delete data["Difference"];
        delete data["Number"];
        body["dat"] = data;
        body["columns"] = Object.keys(data);
        let res = await axios.post(`${SERVER_URL}/createEntryParent`, {
          ...body,
        });
        if (res?.statusText === "OK") {
          toast.success("added Successfully...");
        } else {
          toast.error("");
        }
      }
    }
  };

  return (
    <>
      {loading ? <Loading withBackdrop /> : null}
      <BlockPaper title="CREATE NEW DENTRY">
        {/* Form */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
          <Input
            name="Date"
            type="date"
            label="Date"
            value={readOnlyValues["Date"]}
            onChange={(e) => handelChangeField("Date", e.target.value)}
          />
          <UniqueField
            table="Currency"
            name="CurrencyGuid"
            label="Currency Guid"
            list={[]}
            required={true}
            value={readOnlyValues["CurrencyGuid"]}
                      onChange={(props) => {
            handelChangeField(field?.name, props.value, field?.required)
          }}
          />
          <Input
            name="CurrencyVal"
            type="number"
            label="Currency Value"
            value={readOnlyValues["CurrencyVal"]}
            onChange={(e) => handelChangeField("CurrencyVal", e.target.value)}
          />
          <Input
            name="Note"
            type="text"
            label="Note"
            value={readOnlyValues["Note"]}
            onChange={(e) => handelChangeField("Note", e.target.value)}
          />
        </div>
        <TestEntryFormTable
          entries={entries}
          handelChangeFieldBlur={handelChangeFieldBlur}
          handelChangeEntriesField={handelChangeEntriesField}
          allowSelect={allowSelect}
        />
        <div className=" mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
          <Input
            name="Credit"
            type="Credit"
            label="Credit"
            value={readOnlyValues?.Credit}
            readOnly
          />
          <Input
            name="Debit"
            type="Debit"
            label="Debit"
            value={readOnlyValues?.Debit}
            readOnly
          />
          <Input
            name="Difference"
            type="Difference"
            label="Difference"
            value={readOnlyValues?.Difference}
            readOnly
          />
          {
            <div className={`${!!numberOfRows ? "flex gap-2 items-end" : ""}`}>
              {!!numberOfRows ? (
                <button
                  onClick={goBack}
                  className="h-8 w-8 justify-center items-center flex rounded-md bg-gray-200 shadow disabled:text-gray-400"
                >
                  <span className="rotate-90 block scale-[80%]">
                    <ChevronIcon />
                  </span>
                </button>
              ) : null}
              <Input
                className="flex-1"
                name="Number"
                type="Number"
                label="Number"
                value={readOnlyValues?.Number}
                readOnly
              />
              {!!numberOfRows ? (
                <button
                  onClick={goNext}
                  className="h-8 w-8 justify-center items-center flex rounded-md bg-gray-200 shadow disabled:text-gray-400"
                >
                  <span className="-rotate-90 block scale-[80%]">
                    <ChevronIcon />
                  </span>
                </button>
              ) : null}
            </div>
          }
        </div>
        <button
          onClick={onSubmit}
          className="mt-4 rounded-md px-4 py-2 bg-blue-500 text-sm font-medium text-white "
        >
          Submit
        </button>
      </BlockPaper>
    </>
  );
};

export default TestEntry;
