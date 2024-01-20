import { Link } from "react-router-dom";
import logo from "Assets/Images/abrepair-logo.svg";
import BarsIcon from "Helpers/Icons/BarsIcon";
import { IconsBar } from "./IconsBar";
import { SearchBar } from "Components/StructurePage/CustomFields";

function Header({ setOpen, mode, setMode }) {
  
  return (
    // <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 ">
    <header className="bg-primary text-white py-2">
      <div className="container  flex py-2">
        <div className="flex items-center gap-4">
          <Link className="" to="/">
            <img src={logo} alt="Abrepair" className="max-w-[140px]" />
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <BarsIcon />
          </button>
          <div className="">
            <SearchBar />
          </div>
        </div>
        <div className="ml-auto rtl:mr-auto rtl:ml-0 ltr:ml-auto ltr:mr-0 flex items-center gap-4">
          <IconsBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
