// src/components/LanguageSwitcher.jsx
import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const { lang } = useParams(); // текущий язык
  const location = useLocation(); // текущий путь

  const switchLanguage = (newLang) => {
    // Убираем старый язык из начала пути
    const withoutLang = location.pathname.replace(/^\/[a-z]{2}/, "");
    // Переходим на новый язык + тот же путь
    navigate(`/${newLang}${withoutLang}`);
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button
        onClick={() => switchLanguage("en")}
        disabled={lang === "en"}
        style={{
          padding: "5px 10px",
          background: lang === "en" ? "#ccc" : "#444",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("ru")}
        disabled={lang === "ru"}
        style={{
          padding: "5px 10px",
          background: lang === "ru" ? "#ccc" : "#444",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
