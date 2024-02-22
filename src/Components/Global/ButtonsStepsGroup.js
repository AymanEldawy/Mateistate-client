import React from "react";
import { Button } from "./Button";

export const ButtonsStepsGroup = ({
  steps,
  back,
  loading,
  isLast,
  isFirst,
  disabled,
  next,
}) => {
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
      <Button
        title={"Submit"}
        loading={loading}
        disabled={disabled || loading}
      />
    </div>
  );
};
