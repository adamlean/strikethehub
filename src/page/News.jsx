// src/page/About.jsx
import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

const News = () => {
  useEffect(() => {
    document.title = "News — GamePlatform";
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default News;