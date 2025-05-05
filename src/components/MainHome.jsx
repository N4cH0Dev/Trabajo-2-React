import React from "react";
import Aside from "./Aside";
import Nav from "./Nav";
import Article from "./Article";
import LangTable from "./LangTable";
function MainHome({ lenguajes }) {
  return (
    <main>
      <div style={{ display: "flex" }}>
        <Nav />
        <Aside />
        <Article lenguajes={lenguajes} />
      </div>
      <LangTable lenguajes={lenguajes} />
    </main>
  );
}
export default MainHome;
