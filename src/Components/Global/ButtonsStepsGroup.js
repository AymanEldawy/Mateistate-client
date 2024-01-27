import React from "react";
import { Button } from "./Button";

export const ButtonsStepsGroup = ({ steps, back, loading, isLast, isFirst, disabled }) => {
  return (
    <div className="flex justify-between gap-4 items-center mt-4">
      {steps ? <Button title="Back" onClick={back} type="button" disabled={isFirst()} /> : null}
      <Button title={isLast() ? "Submit" : "Next"} loading={loading} disabled={disabled} />
    </div>
  );
};
