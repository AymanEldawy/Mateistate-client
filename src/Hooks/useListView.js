import { useEffect, useMemo, useState } from "react";
import { ApiActions } from "Helpers/Lib/api";
import { useParams } from "react-router-dom";

const useListView = ({ name, defaultNumber, ignoreList, additional }) => {
  const params = useParams();
  const [number, setNumber] = useState(defaultNumber);
  const [maxLength, setMaxLength] = useState(1);
  const [listOfNumbers, setListOfNumbers] = useState([]);
  const [listOfData, setListOfData] = useState({});
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const isLayoutUpdate = useMemo(() => {
    return parseInt(maxLength) >= parseInt(number);
  }, [maxLength, number]);

  useEffect(() => {
    if (ignoreList) return;
    const getNumberList = async () => {
      let params = {
        sorts: [{ column: "number", order: "ASC", nulls: "last" }],
      };

      if (additional) {
        params = {
          ...params,
          additional,
        };
      }
      
      const res = await ApiActions.read(name, params);
      if (res?.success) {
        let data = res?.result;
        let hashData = {};
        let listNumber = [];

        for (const item of data) {
          listNumber.push(item?.number);
          hashData[item?.number] = item;
        }

        setListOfData(hashData);
        setListOfNumbers(listNumber);
        setMaxLength(res?.result?.length || 0);
        if (defaultNumber) {
          setNumber(defaultNumber);
        } else {
          setNumber(res?.result?.length + 1 || 1);
        }
      }
    };

    getNumberList();
  }, [name, ignoreList]);

  // Cleanup the delete item from data
  const onDeleteItem = (itemNumber) => {
    let newListOfData = listOfData;
    delete newListOfData?.[itemNumber];
    setListOfNumbers((prev) => prev?.filter((num) => +num !== +itemNumber));
    setMaxLength((prev) => prev - 1);
    setNumber((prev) => (+prev > 1 ? prev - 1 : 1));
  };

  return {
    maxLength,
    setMaxLength,
    goToNumber: setNumber,
    number,
    setNumber,
    isLayoutUpdate,
    listOfNumbers,
    openConfirmation,
    setOpenConfirmation,
    listOfData,
    setListOfData,
    setListOfNumbers,
    onDeleteItem,
  };
};

export default useListView;
