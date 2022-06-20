import React from "react";
import Components from "../../Components";
import { InfoProvider } from "../../context";

const [Nav, Hero, Footer, Page, Graph, Prediction] = Components;

const Home = () => {
  return (
    <InfoProvider>
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
    </InfoProvider>
  );
};
export default Home;
