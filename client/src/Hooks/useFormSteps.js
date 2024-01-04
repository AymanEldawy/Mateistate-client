import { ApiActions } from "Helpers/Lib/api";
import { useEffect, useMemo, useState } from "react";
import { useSSR } from "react-i18next";

const useFormSteps = (steps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirst = () => currentIndex === 0;
  const isLast = () => currentIndex === steps.length - 1;

  const next = () => {
    if (currentIndex >= steps.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const back = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const goTo = (index) => {
    setCurrentIndex(index);
  };


  return { next, back, isFirst, isLast, goTo, currentIndex };
};

export default useFormSteps;
