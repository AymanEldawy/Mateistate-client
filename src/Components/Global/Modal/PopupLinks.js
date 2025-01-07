import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import {
  getBillsMenus,
  getChequesMenus,
  getContractMenus,
  getVouchersMenus,
} from "Helpers/menu";
import { Link, useNavigate } from "react-router-dom";
import { PlusIcon } from "Components/Icons";
import { DEFAULT_BILL_MENU, SERVICE_MENU } from "Helpers/constants";

export const PopupLinks = ({ onClose, name, open }) => {
  const navigate = useNavigate();
  const [links, setLinks] = useState([]);

  const getLinks = async () => {
    switch (name) {
      case "user":
        navigate("/user");
        break;
      case "user_work_times":
        navigate("/timing");
        break;
      case "account":
        navigate("/account");
        break;
      case "entry_main_data":
        setLinks([
          {
            key: "entries",
            name: "Entries",
            subChild: [
              {
                isForm: true,
                key: "Journal entry",
                link: "vouchers/entries/1",
              },
            ],
          },
        ]);
        break;
      case "bill":
        const BillsMenu = await getBillsMenus();

        setLinks(BillsMenu || DEFAULT_BILL_MENU);
        break;
      case "service":
        setLinks(SERVICE_MENU);
        break;
      case "cheque":
        const chequesMenus = await getChequesMenus();
        setLinks(chequesMenus);

        break;
      case "voucher_main_data":
        const voucherMenu = await getVouchersMenus();
        setLinks(voucherMenu);

        break;
      case "contract":
        const contractMenus = await getContractMenus();
        setLinks(contractMenus);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getLinks();
  }, [name]);

  return (
    <Modal open={open} onClose={onClose}>
      {links?.map((list) => (
        <div className="mb-4">
          <h3>{list?.name}</h3>
          <div className="flex gap-4 items-center mt-2">
            {list?.subChild
              ?.filter((_) => _?.isForm)
              ?.map((item, index) => (
                <Link
                  key={item?.link + index}
                  to={item?.link}
                  onClick={() => {
                    if(!!onClose) onClose()
                  }}
                  className="flex items-center gap-2 bg-light-green hover:bg-dark-green text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
                >
                  <PlusIcon className="w-6 h-6" circle />
                  {item?.key}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </Modal>
  );
};
