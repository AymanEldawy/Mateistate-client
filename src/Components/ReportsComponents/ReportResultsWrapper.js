import Modal from "Components/Global/Modal/Modal";
import React from "react";
import { ReportResultsBottomBar } from "./ReportResultsBottomBar";
import { ReportResultsUpperBar } from "./ReportResultsUpperBar";
import { ReportResultsTable } from "./ReportResultsTable";

export const ReportResultsWrapper = ({
  open,
  onClose,
  containerClassName,
  data,
  columns,
  loading,
  extraContentBar
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      containerClassName={containerClassName}
    >
      <ReportResultsUpperBar extraContentBar={extraContentBar} />
      <ReportResultsTable data={data} columns={columns} loading={loading} />
      <ReportResultsBottomBar />
      <div>ReportResultsWrapper</div>
    </Modal>
  );
};
