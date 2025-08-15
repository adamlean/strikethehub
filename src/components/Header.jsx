import React from "react";
import { Link, useParams } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { lang } = useParams();
  const { t, i18n } = useTranslation();

  // Смена языка при смене URL
  React.useEffect(() => {
    if (lang) i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <header className="bg-black py-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to={`/${lang}`}
          className="text-white text-2xl font-bold no-underline"
        >
          {t("siteName")}
        </Link>

        <nav className="flex items-center gap-8">
          <ul className="flex list-none gap-8 m-0 p-0">
            <li>
              <Link to={`/${lang}`} className="text-white no-underline hover:text-orange-400">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link to={`/${lang}/about`} className="text-white no-underline hover:text-orange-400">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link to={`/${lang}/services`} className="text-white no-underline hover:text-orange-400">
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link to={`/${lang}/news`} className="text-white no-underline hover:text-orange-400">
                {t("nav.news")}
              </Link>
            </li>
          </ul>

          <Link
            to={`/${lang}/contact`}
            className="bg-orange-400 text-white font-semibold no-underline py-2 px-5 rounded-lg transition-colors duration-300 hover:bg-orange-500"
          >
            {t("nav.contact")}
          </Link>

          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
