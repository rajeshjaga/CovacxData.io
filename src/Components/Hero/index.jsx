import React from "react";
import useFetch from "../../Api";
const Hero = () => {
  let { data, loading } = useFetch(
    "https://arimamodel.herokuapp.com/cantgetNow"
  );
  if (loading) {
    <p>loading...</p>;
  } else if (data !== null || data !== undefined) {
    return (
      <section className="px-24 py-20">
        <h1 className="text-6xl leading-tight text-blue pr-32">
          All around the globe only{" "}
          <span className="text-green"> {data.data[0]} </span> of the population
          have recieved first dose of vaccination.
          <span className="text-green"> {data.data[1]} </span>
          doses were used globally. Where everyday
          <span className="text-green"> {data.data[2]} </span> doses are being
          used.
        </h1>
        <p className="text-smoke opacity-40 py-4">
          The dataset and precomplied values are being served from our own
          server, as well as from <span></span>
          <a
            href="https://ourworldindata.com"
            target="_blank"
            className="text-smoke-light underline">
            owidworldindata project
          </a>
        </p>
      </section>
    );
  }
};

export default Hero;
