import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Импорт секций домашней страницы
import Hero from "./components/Hero";
import TrendingGames from "./components/TrendingGames";
import InfoSection from "./components/InfoSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";

// Импорт страниц
import About from "./page/About";

// Другие страницы (временно определим здесь)
const Services = () => <h1 className="text-white">Portfolio</h1>;
const News = () => <h1 className="text-white">News</h1>;
const Contact = () => <h1 className="text-white">Contact Us</h1>;

// Главная страница
const Home = () => (
  <>
    <Header />
    <Hero />
    <TrendingGames />
    <InfoSection />
    <ServicesSection />
    <ProjectsSection />
    <SubscribeSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
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
  );
}

export default App;
