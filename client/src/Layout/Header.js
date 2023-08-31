import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageBar from "../Components/LanguageBar/LanguageBar";
import SearchBar from "../Components/SearchBar/SearchBar";
import ToggleThemeBar from "../Components/ToggleThemeBar/ToggleThemeBar";
import UserBar from "../Components/UserBar/UserBar";
import { ThemeContext } from "../Context/ThemeContext";
import { FitScreenIcon, FullScreenIcon } from "../Helpers/Icons";
import logo from "../Assets/Images/abrepair-logo.svg";
import { exitFullscreen, openFullscreen } from "../Helpers/functions";
import { useState } from "react";
import NotificationBar from "../Components/NotificationBar/NotificationBar";
import BarsIcon from "../Helpers/Icons/BarsIcon";

function Header({ setOpen, mode, setMode }) {
  const { changeTheme, theme } = useContext(ThemeContext);
  const [isFullScreen, setIsFullScreen] = useState(
    !!document.fullscreenElement
  );
  const [refreshScreen, setRefreshScreen] = useState(false);
  const toggleFullScreen = () => {
    if (!!document.fullscreenElement) {
      exitFullscreen();
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
      openFullscreen();
    }
    setRefreshScreen((p) => !p);
  };
  return (
    // <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 ">
    <header className="bg-[#144479] text-white py-2">
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
          <div className="flex items-center gap-2">
            <button
              onClick={toggleFullScreen}
              className="p-2 rounded-full hover:bg-[#0002]"
            >
              {isFullScreen ? <FitScreenIcon /> : <FullScreenIcon />}
            </button>
            <LanguageBar />
            <ToggleThemeBar theme={theme} changeTheme={changeTheme} />

            <NotificationBar />
          </div>
          <UserBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
