import React from "react";
import Plot from "react-plotly.js";
import useFetch from "../../Api";
import Loading from "../Loading";

const Graph = () => {
  const { data, loading, error } = useFetch(
    "https://arimamodel.herokuapp.com/default_mod"
  );
  const { datatot, loadingtot, errortot } = useFetch(
    "https://arimamodel.herokuapp.com/vaccination_prediction"
  );
  if (
    data === undefined ||
    data === null ||
    datatot === undefined ||
    datatot === null
  ) {
    return <Loading />;
  } else {
    let info_data = data;
    info_data = info_data.data;
    let info_data_tot = datatot;
    info_data_tot = info_data_tot.data;
    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: "lines",
    };
    var trace2 = {
      x: [1, 2, 3, 4],
      y: [16, 5, 11, 9],
      type: "scatter",
    };
    let graphData = [trace1, trace2];
    return (
      <div className="px-24 py-28 h-auto w-full">
        <h3 className="title">Graph</h3>
        <Plot
          data={graphData}
          layout={{ width: 840, height: 420, title: "graph" }}
        />
      </div>
    );
  }
};
export default Graph;
