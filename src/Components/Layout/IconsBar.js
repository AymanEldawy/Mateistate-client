import LanguageBar from "./LanguageBar";
import NotificationBar from "Components/Menu/NotificationBar/NotificationBar";
import ToggleThemeBar from "Components/Menu/ToggleThemeBar/ToggleThemeBar";
import UserBar from "Components/Menu/UserBar/UserBar";
import { useTheme } from "Hooks/useTheme";
import { FitScreenIcon, FullScreenIcon } from "Components/Icons";
import { exitFullscreen, openFullscreen } from "Helpers/functions";
import React, { useEffect, useState } from "react";

export const IconsBar = ({ containerClassName }) => {
  const { changeTheme, theme } = useTheme();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const checkFullScreen = () => {
    setIsFullScreen(
      document.fullscreenElement || document.webkitFullscreenElement
    );
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", checkFullScreen);
    document.addEventListener("webkitfullscreenchange", checkFullScreen);

    return () => {
      document.removeEventListener("fullscreenchange", checkFullScreen);
      document.removeEventListener("webkitfullscreenchange", checkFullScreen);
    };
  }, []);

  const handleToggleFullScreen = () => {
    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
    } else {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  };

  return (
    <div className={`flex items-center gap-2 ${containerClassName}`}>
      <button
        onClick={handleToggleFullScreen}
        className="p-2 rounded-full hover:bg-[#0002]"
      >
        {isFullScreen ? <FitScreenIcon /> : <FullScreenIcon />}
      </button>
      <LanguageBar />
      <ToggleThemeBar theme={theme} changeTheme={changeTheme} />
      <NotificationBar />
      <UserBar />
    </div>
  );
};
