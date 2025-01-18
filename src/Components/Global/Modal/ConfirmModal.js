import { Button } from "Components/Global/Button";
import Modal from "Components/Global/Modal/Modal";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../Loading";

const ConfirmModal = ({ open, setOpen, outerClose, onConfirm, type, msg }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const onClose = () => {
    if (outerClose) outerClose();
    setOpen(false);
  };

  const onClickConfirm = async () => {
    setIsLoading(true);
    await onConfirm();
    onClose();
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? <p>Loading...</p> : null}
      <Modal open={open} onClose={onClose} containerClassName="z-[103]">
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
          <Button
            title={t("Yes")}
            classes="!bg-red-500"
            onClick={onClickConfirm}
            disabled={isLoading}
          />
        </div>
      </Modal>
    </>
  );
};

export default ConfirmModal;
