import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHome from "./components/MainHome";
import LangProgramacion from "./data/LangProgramacion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrtUtn from "./pages/FrtUtn";
import Nosotros from "./pages/Nosotros";

const Home = (LangProgramacion) => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Nosotros />} />
          <Route path="/contacto" element={<FrtUtn />} />
        </Routes>
      </Router>
      <MainHome LangProgramacion={LangProgramacion} />
      <Footer />
    </>
  );
};

export default Home;
