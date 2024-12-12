import React from "react";
import { Button } from "./Button";
import { PaletteIcon } from "Components/Icons";
import { Link } from "react-router-dom";
import { useFormContext } from "react-hook-form";

export const ButtonsStepsGroup = ({
  steps,
  back,
  loading,
  isLast,
  isFirst,
  disabled,
  layout,
  next,
}) => {
  const { watch } = useFormContext();

  return (
    <div className="flex justify-between gap-4 items-center mt-4 border-t pt-4">
      <div className="flex gap-2 items-center">
        {steps ? (
          <Button
            title="Back"
            onClick={back}
            type="button"
            disabled={isFirst() || loading}
            classes="bg-orange-500"
          />
        ) : null}
        <Button
          title="Next"
          type="button"
          onClick={next}
          disabled={loading || isLast()}
          classes="bg-orange-500"
        />
      </div>
      <div className="flex gap-2 items-center">
        {watch("building.id") ? (
          <Link
            to={`/tools/${watch("building.id")}`}
            className="bg-gray-200 rounded-md p-2"
          >
            <PaletteIcon />
          </Link>
        ) : null}
        <Button
          title={layout ? "Modify" : "Save"}
          loading={loading}
          disabled={disabled || loading}
        />
      </div>
    </div>
  );
};
