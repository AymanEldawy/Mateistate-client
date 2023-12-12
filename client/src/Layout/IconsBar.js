import LanguageBar from 'Components/LanguageBar/LanguageBar';
import NotificationBar from 'Components/NotificationBar/NotificationBar';
import ToggleThemeBar from 'Components/ToggleThemeBar/ToggleThemeBar';
import UserBar from 'Components/UserBar/UserBar';
import { useTheme } from 'Hooks/useTheme';
import { FitScreenIcon, FullScreenIcon } from 'Helpers/Icons';
import { exitFullscreen, openFullscreen } from 'Helpers/functions';
import React, { useState } from 'react';

export const IconsBar = ({ containerClassName }) => {
  const { changeTheme, theme } = useTheme();
  const [isFullScreen, setIsFullScreen] = useState(
    !!document.fullscreenElement,
  );

  const toggleFullScreen = () => {
    if (!!document.fullscreenElement) {
      exitFullscreen();
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
      openFullscreen();
    }
  };

  return (
    <div className={`flex items-center gap-2 ${containerClassName}`}>
      <button
        onClick={toggleFullScreen}
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
