import React, { useEffect } from "react";
import spain from "Assets/Images/Flags/spain.svg";
import china from "Assets/Images/Flags/china.svg";
import french from "Assets/Images/Flags/french.svg";
import italy from "Assets/Images/Flags/italy.svg";
import germany from "Assets/Images/Flags/germany.svg";
import us from "Assets/Images/Flags/us.svg";
import russia from "Assets/Images/Flags/russia.svg";
import arabic from "Assets/Images/Flags/arabic.webp";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = {
  en: { lang: "en", flag: us, name: "English" },
  ar: { lang: "ar", flag: arabic, name: "Arabic" },
  sp: { lang: "sp", flag: spain, name: "Española" },
  fr: { lang: "fr", flag: french, name: "français" },
  de: { lang: "de", flag: germany, name: "Deutsche" },
  ru: { lang: "ru", flag: russia, name: "русский" },
  ch: { lang: "ch", flag: china, name: "中国人" },
  it: { lang: "it", flag: italy, name: "Italian" },
};
const LanguageBar = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (i18n?.language) setSelectedLang(languages?.[i18n?.language]);
  }, [i18n?.language]);

  useEffect(() => {
    if (selectedLang?.lang === "ar") document.body.dir = "rtl";
    else document.body.dir = "ltr";
  }, [selectedLang]);

  const changeLanguage = (lang) => {
    // setSelectedLang(languages?.[lang]);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="relative">
      <div
        className="rounded-full flex items-center justify-center hover:bg-[#0002] relative h-10 w-10"
        onClick={() => setOpen(true)}
      >
        <img
          src={selectedLang?.flag}
          alt={selectedLang?.name}
          className="w-7 h-7 block object-cover rounded-full"
        />
       
      </div>

      {open ? (
        <ul className="absolute bg-white left-0 p-3 px-6 min-w-[200px] dark:bg-dark-bg shadow rounded-md top-12 z-50 text-gray-500 text-sm flex flex-col gap-3">
          {Object.values(languages)
            ?.sort((a, b) => a?.lang.localeCompare(b?.lang))
            ?.map((language) => (
              <li
                key={language?.name}
                onClick={() => {
                  changeLanguage(language?.lang);
                  setOpen(false);
                }}
                className="flex items-center gap-4 cursor-pointer font-medium hover:text-gray-900 dark:hover:text-gray-200"
              >
                <img
                  className="w-4 h-4"
                  src={language?.flag}
                  alt={language?.name}
                />
                {language?.name}
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
};

export default LanguageBar;
