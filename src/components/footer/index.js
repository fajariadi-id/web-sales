import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalState from "../../context/globalState";

const Footer = () => {
  const { count, setCount } = useContext(GlobalState);
  const navigate = useNavigate();

  return (
    <div>
      <h1 onClick={() => navigate("/about")}>Footer</h1>
      <h1 onClick={() => setCount(count + 5)}>KLIK DARI FOOTER</h1>
    </div>
  );
};

export default Footer;
