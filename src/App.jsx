// src/App.js
import React from "react";
import Header from "./components/Header";
import MainHome from "./components/MainHome";
import Footer from "./components/Footer";
import LangProgramacion from "./data/LangProgramacion";
import "./css/style.css";
function App() {
  return (
    <div className="App">
      <Header />
      <MainHome lenguajes={LangProgramacion} />
      <Footer />
    </div>
  );
}

export default App;
