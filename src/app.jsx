import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { infoProvider } from "./context";
import "./index.css";
import Home from "./Components/home/home";
import "./build.css";

const App = () => {
  useEffect(() => {
    document.title = "CovacxData";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
