import { Button } from "Components/Global/Button";
import Modal from "Components/Global/Modal/Modal";
import React from "react";
import { useTranslation } from "react-i18next";

const ConfirmModal = ({ open, setOpen, outerClose, onConfirm, type, msg }) => {
  const { t } = useTranslation();

  const onClose = () => {
    if (outerClose) outerClose();
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h3 className="text-red-500 text-lg mb-2 font-semibold">
        {type ? type : t("warning")}
      </h3>
      <p className="mb-6 mx-auto max-w-[90%]">
        {msg ? msg : t("confirm_delete")}
      </p>
      <div className="flex gap justify-end gap-2">
        <Button
          title={t("cancel")}
          classes="!bg-transparent !text-gray-500 border"
          onClick={onClose}
        />
        <Button title={t("Yes")} classes="!bg-red-500" onClick={onConfirm} />
      </div>
    </Modal>
  );
};

export default ConfirmModal;
