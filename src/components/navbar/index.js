import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalState from "../../context/globalState";

const Counting = () => {
  const { count, setCount } = useContext(GlobalState);
  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={() => navigate("/detail")}>NAVBAR</h1>
      <h1>COUNTING: {count} </h1>
    </div>
  );
};

export default Counting;
