import React from "react";
import Card from "../Card";
import Loading from "../Loading";
import dataStream from "./maker";
import { infoContext } from "../../context";

const days = [
  "Sunday",
  "Monnday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Prediction = () => {
  let infodata;
  const { cat, data } = React.useContext(infoContext);
  if (data.data !== undefined && data.data !== null) {
    let info = data.data;
    infodata = dataStream(info);
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
  } else return <Loading />;
};
export default Prediction;
