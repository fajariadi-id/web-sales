import React, { createContext } from "react";

const GlobalState = createContext({
  car: {},
  setCar: () => {},
});

export default GlobalState;
