import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Menu />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
