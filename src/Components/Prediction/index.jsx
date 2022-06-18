import React from "react";
import Card from "../Card";
import useFetch from "../../Api";
import Loading from "../Loading";
import dataStream from "../maker";
import dataContextProvider from "../../context";

const Prediction = () => {
  const { data, loading, error } = useFetch(
    "https://arimamodel.herokuapp.com/vaccination_prediction"
  );
  const { datalast, loadinglast, errorlast } = useFetch(
    "https://arimamodel.herokuapp.com/default_mod"
  );
  if (data !== undefined && data !== null) {
    let infodata = data.data;
    infodata = dataStream(infodata);
    return (
      <section className="px-24 py-28">
        <h3 className="text-5xl text-blue">Counts for next 6 days</h3>
        <p className="text-xl pt-3 green-non-hilight">Prediction Rate</p>
        <div className="grid grid-flow-row grid-cols-7">
          {infodata.map((item, index) => {
            if (index < 70) {
              return (
                <Card
                  item={item.item}
                  error={item.error}
                  day={item.day}
                  key={index}
                />
              );
            } else {
              return;
            }
          })}
        </div>
      </section>
    );
  } else if (error) return <p>Error!</p>;
  else return <Loading />;
};

export default Prediction;
