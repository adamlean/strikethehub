import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import i18n from "../i18n";

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const location = useLocation();

  const switchLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    const withoutLang = location.pathname.replace(/^\/[a-z]{2}/, "");
    navigate(`/${newLang}${withoutLang}`);
  };

  return (
    <div style={{ display: "flex", gap: "8px", color: "white" }}>
      <button onClick={() => switchLanguage("en")} disabled={lang === "en"}>
        EN
      </button>
      <button onClick={() => switchLanguage("ru")} disabled={lang === "ru"}>
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
