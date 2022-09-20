import React, { createContext } from "react";

const GlobalState = createContext({
  count: 0,
  setCount: () => {},
});

export default GlobalState;
