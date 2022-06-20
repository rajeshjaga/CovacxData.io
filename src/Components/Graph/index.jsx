import React from "react";
import Plot from "react-plotly.js";
import Loading from "../Loading";
import { infoContext } from "../../context";

const Graph = () => {
  const { data, cat } = React.useContext(infoContext);
  const indo = data;
  if (
    data.data !== undefined &&
    data.data !== null &&
    cat.data !== undefined &&
    cat.data !== null
  ) {
    let { data } = cat.data;
    let info = data[0].data;
    let info2 = indo.data;
    let infoext = info2.data;
    let dateArray = [];
    let valueArray = [];
    let dayarray = [];
    let valueArray2 = [];
    info.map((item, index) => {
      dateArray.push(item.date);
      valueArray.push(item.total_vaccinations);
    });
    infoext.map((item, index) => {
      dayarray.push(item.day);
      valueArray2.push(item.item);
    });
    let graphdata = [{ mode: "lines", x: dateArray, y: valueArray }];
    let graphdata2 = [{ type: "lines", x: valueArray2, y: dayarray }];
    return (
      <div className="px-24 py-28">
        <Plot
          data={graphdata}
          layout={{ width: 820, height: 680, title: "Current Dataset Values" }}
        />
        <Plot
          data={graphdata2}
          layout={{ width: 820, height: 680, title: "Predicted values" }}
        />
      </div>
    );
  } else {
    return <Loading />;
  }
};
export default Graph;
