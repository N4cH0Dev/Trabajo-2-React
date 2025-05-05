// src/components/MainHome.js
import React from "react";
import Aside from "./Aside";
import Article from "./Article";
import LangTable from "./LangTable";

function MainHome({ lenguajes }) {
  return (
    <main>
      <Aside />
      <Article lenguajes={lenguajes} />
      <LangTable lenguajes={lenguajes} />
    </main>
  );
}

export default MainHome;
