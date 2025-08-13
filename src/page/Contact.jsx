// src/page/About.jsx
import React, { useEffect } from "react";
import Header from "../components/Header";
import SubscribeSection from "../components/SubscribeSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact — GamePlatform";
  }, []);

  return (
    <>
      <Header />
      <ContactSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default Contact;