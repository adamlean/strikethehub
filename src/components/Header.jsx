import React from "react";
import { Link, useParams } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher"; // импортируем

const Header = () => {
  const { lang } = useParams(); // получаем текущий язык из URL

  return (
    <header className="bg-black py-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to={`/${lang}`} // добавляем префикс языка
          className="text-white text-2xl font-bold no-underline"
        >
          Strike The Hub
        </Link>

        <nav className="flex items-center gap-8">
          <ul className="flex list-none gap-8 m-0 p-0">
            <li>
              <Link
                to={`/${lang}`}
                className="text-white no-underline hover:text-orange-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={`/${lang}/about`}
                className="text-white no-underline hover:text-orange-400"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to={`/${lang}/services`}
                className="text-white no-underline hover:text-orange-400"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to={`/${lang}/news`}
                className="text-white no-underline hover:text-orange-400"
              >
                News
              </Link>
            </li>
          </ul>

          <Link
            to={`/${lang}/contact`}
            className="bg-orange-400 text-white font-semibold no-underline py-2 px-5 rounded-lg transition-colors duration-300 hover:bg-orange-500"
          >
            Contact us
          </Link>

          {/* Переключатель языка */}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
