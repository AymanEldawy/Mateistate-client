import React from "react";
import { Button } from "../Global/Button";
import Modal from "../Modal/Modal";
import { useTranslation } from "react-i18next";

const ConfirmModal = ({ open, setOpen, onConfirm }) => {
  const { t } = useTranslation();
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <h3 className="text-red-500 text-lg mb-2 font-semibold">
        {t("warning")}
      </h3>
      <p className="mb-6 mx-auto max-w-[90%]">{t("confirm_delete")}</p>
      <div className="flex gap justify-end gap-2">
        <Button
          title={t("cancel")}
          classes="!bg-transparent !text-gray-500 border"
          onClick={() => setOpen(false)}
        />
        <Button title={t("yes")} classes="!bg-red-500" onClick={onConfirm} />
      </div>
    </Modal>
  );
};

export default ConfirmModal;
