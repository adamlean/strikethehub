import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import NewsSection from "../components/NewsSection";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";
import newsEn from "../data/news.en.json";
import newsRu from "../data/news.ru.json";

const News = () => {
  const { lang } = useParams(); // for example, /en/news or /ru/news

  useEffect(() => {
    document.title = "News — Strike The Hub";
  }, []);

  // select the desired JSON
  const newsData = lang === "ru" ? newsRu : newsEn;

  return (
    <>
      <Header />
      <NewsSection news={newsData} />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default News;
