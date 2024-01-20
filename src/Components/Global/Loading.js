import React from "react";

import { HourglassIcon } from "Helpers/Icons";
import Backdrop from "Components/Global/Backdrop";

const Loading = ({ withBackdrop }) => {
  let classes = withBackdrop
    ? "!fixed -ml-16 -mt-16 top-1/2 left-1/2 w-32 h-32"
    : "mt-32 ml-32";
  return (
    <>
      {withBackdrop ? <Backdrop open={true} /> : null}
      <div
        className={`relative rounded-full h-16 w-16 text-center  z-50 ${classes}`}
      >
        {/* <span className="animate-bounce block duration-1000"> */}
        <HourglassIcon />
        {/* </span> */}
        <h3 className="text-white text-2xl -m-2 capitalize animate-pulse">
          loading <span className="text-5xl h-0">...</span>
        </h3>
      </div>
    </>
  );
};

export default Loading;
