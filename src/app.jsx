import React from "react";
import Components from "./Components";
import { useEffect } from "react";
import "./index.css";

const App = () => {
  const [Nav, Hero, Footer, Page, Graph, Prediction] = Components;
  useEffect(() => {
    document.title = "CovacxData";
  }, []);
  return (
    <div className="bg-bg">
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Prediction />
      </main>
      <Graph />
      <Footer />
    </div>
  );
};
export default App;
