import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHome from "./components/MainHome";
import LangProgramacion from "./data/LangProgramacion";

const Home = (LangProgramacion) => {
  return (
    <>
      <Header />
      <MainHome LangProgramacion={LangProgramacion} />
      <Footer />
    </>
  );
};

export default Home;
