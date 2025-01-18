import { useEffect, useMemo, useState } from "react";
import useCurd from "./useCurd";

const columns = ["id", "number"];

const useFormPagination = ({ name, number, code }) => {
  const { getOneBy, getNextOne, getPreviousOne, getFirstOne, getLastOne } =
    useCurd();
  const [currentNumber, setCurrentNumber] = useState();
  const [lastNumber, setLastNumber] = useState(number);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    if (number) {
      getPaginationTable();
      setCurrentNumber(number);
    } else if (!currentNumber) {
      goLast(true);
    }
  }, [number]);

  const getPaginationTable = async (defaultNumber) => {
    const current = await getOneBy(
      name,
      number || defaultNumber,
      "number",
      columns,
      code
    );
    if (current?.result?.length) {
      let data = current?.result?.at(0);
      setCurrentNumber(data?.number);
      if (data?.id) {
        setCurrentId(data?.id);
      }
    }
  };

  const goLast = async (isNew) => {
    const current = await getLastOne(name, columns, code);
    if (current?.result?.length) {
      let data = current?.result?.at(0);
      let last = +data?.number || 0;
      setLastNumber(last);
      if (isNew) {
        setCurrentNumber(last + 1);
      } else {
        setCurrentId(data?.id);
      }
    }
  };


  const isFirst = useMemo(() => {
    return currentNumber === 1;
  }, [currentNumber]);

  const isLast = useMemo(() => {
    return currentNumber === lastNumber;
  }, [currentNumber, lastNumber]);

  const goNew = async () => {
    if (lastNumber) {
      setCurrentNumber(+lastNumber + 1);
    } else {
      goLast(true);
    }
  };

  const goNext = async () => {
    const current = await getNextOne(name, currentNumber, columns, code);
    if (current?.result?.length) {
      let data = current?.result?.at(0);
      setCurrentNumber(data?.number);
      setCurrentId(data?.id);
    }
  };

  const goBack = async () => {
    if (currentNumber === 1) return;
    const current = await getPreviousOne(name, currentNumber, columns, code);
    if (current?.result?.length) {
      let data = current?.result?.at(0);
      setCurrentNumber(data?.number);
      setCurrentId(data?.id);
    }
  };

  const goFirst = async () => {
    if (currentNumber === 1) return;
    const current = await getFirstOne(name, columns, code);
    if (current?.result?.length) {
      let data = current?.result?.at(0);
      setCurrentNumber(data?.number);
      setCurrentId(data?.id);
    }
  };

  const goTo = async (index) => {
    if (index === "FIRST") {
      goFirst();
    } else if (index === "LAST") {
      goLast();
    } else getPaginationTable(index);
  };

  return {
    goNext,
    goBack,
    isFirst,
    goTo,
    setCurrentNumber,
    currentNumber,
    goFirst,
    goLast,
    isLast,
    lastNumber,
    goNew,
    currentId,
    getPaginationTable
  };
};

export default useFormPagination;
