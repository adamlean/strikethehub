// src/page/About.jsx
import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import VideoWithText from "../components/VideoWithText";
import ReviewsSection from "../components/ReviewsSection";
import AlternatingBlocks from "../components/AlternatingBlocks";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";

const Services = () => {
  useEffect(() => {
    document.title = "Portfolio — GamePlatform";
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <StatsSection />
      <VideoWithText />
      <ReviewsSection />
      <AlternatingBlocks />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default Services;