// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainHome from "./components/MainHome";
import FrtUtn from "./pages/FrtUtn";
import Nosotros from "./pages/Nosotros";
import LangProgramacion from "./data/LangProgramacion";
import LangAlumnos from "./data/LangAlumnos";

import "./css/Style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<MainHome lenguajes={LangProgramacion} />} />
          <Route path="/frtutn" element={<FrtUtn />} />
          <Route
            path="/nosotros"
            element={<Nosotros alumnos={LangAlumnos} />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
