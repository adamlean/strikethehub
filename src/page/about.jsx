import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Компоненты
import Header from "../components/header";
import Hero from "../components/hero";
import SubscribeSection from "../components/subscribe";
import Footer from "../components/footer";

// Страницы
const Home = () => (
  <>
    <Hero />
    <SubscribeSection />
    <Footer />
  </>
);

const About = () => <h1 className="text-white">About Us</h1>;
const Services = () => <h1 className="text-white">Portfolio</h1>;
const News = () => <h1 className="text-white">News</h1>;
const Contact = () => <h1 className="text-white">Contact Us</h1>;

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Header />
        <div className="container mx-auto py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>