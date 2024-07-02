import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import {
  getChequesMenus,
  getContractMenus,
  getVouchersMenus,
} from "Helpers/menu";
import { Link } from "react-router-dom";
import { PlusIcon } from "Components/Icons";
import { SERVICE_MENU } from "Helpers/constants";

export const PopupLinks = ({ onClose, name }) => {
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState([]);

  const getLinks = async () => {
    switch (name) {
      // case "entry_main_data":
      //   setLinks([
      //     {
      //       key: 'entries',
      //       name:'Entries',
      //       subChild: [{
      //         isForm: true,
      //         key: "Journal entry",
      //         link: "vouchers/entries/1",
      //       }],
      //     },
      //   ]);
      //   break;
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
    <Modal open={true} onClose={onClose}>
      {links?.map((list) => (
        <div>
          <h3>{list?.name}</h3>
          <div className="flex gap-4 items-center mt-2">
            {list?.subChild
              ?.filter((_) => _?.isForm)
              ?.map((item) => (
                <Link
                  key={item?.link}
                  to={item?.link}
                  className="flex items-center gap-2 bg-gray-400 hover:bg-blue-500 text-sm text-white py-2 rounded px-2 font-normal capitalize hover:shadow-md hover:rounded-lg duration-300"
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
