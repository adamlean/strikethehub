// src/page/About.jsx
import React, { useEffect } from "react";
import Header from "../components/Header";
import BlogSection from "../components/BlogSection";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

const News = () => {
  useEffect(() => {
    document.title = "News — Strike The Hub";
  }, []);

  return (
    <>
      <Header />
      <BlogSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default News;