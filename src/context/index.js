import React from "react";
import { useState, useEffect, createContext } from "react";
import Loading from "../Components/Loading";
import useFetch from "../Api";

const intialData = () => {
  const [data] = useFetch(
    "https://arimamodel.herokuapp.com/vaccination_prediction"
  );
  const [datapeo] = useFetch(
    "https://arimamodel.herokuapp.com/people_prediction"
  );
  const [datamod] = useFetch("https://arimamodel.herokuapp.com/default_mod");
  if (data !== undefined || datapeo !== null || datamod !== null) {
    return { data, datapeo, datamod };
  } else {
    return {
      data: null,
      datapeo: null,
      datamod: null,
    };
  }
};

const datacontext = createContext(null);

const dataContextProvider = (props) => {
  const [data, setData] = useState(null);
  setData(intialData());
  if (setData === null) return <Loading />;
  else
    return (
      <datacontext.Provider value={data}>{props.children}</datacontext.Provider>
    );
};

export default dataContextProvider;
