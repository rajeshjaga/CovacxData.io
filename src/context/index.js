import { createContext } from "react";
import useFetch from "../Api";

export const infoContext = createContext();

export const InfoProvider = (props) => {
  // this state will be shared with all components
  const data = useFetch(
    "https://arimamodel.herokuapp.com/vaccination_prediction"
  );
  const cat = useFetch("https://arimamodel.herokuapp.com/default");
  if (cat !== undefined && data !== undefined) {
    return (
      // this is the provider providing state
      <infoContext.Provider value={{ data, cat }}>
        {props.children}
      </infoContext.Provider>
    );
  }
};
