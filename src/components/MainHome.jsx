import React from "react";
import Aside from "./Aside";
import Article from "./Article";
import LangTable from "./LangTable";

function MainHome({ lenguajes }) {
  return (
    <main>
      <div className="main-content">
        <Aside />
        <Article lenguajes={lenguajes} />
      </div>
      <LangTable lenguajes={lenguajes} />
    </main>
  );
}

export default MainHome;
