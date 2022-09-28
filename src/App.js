import GlobalState from "./context/globalState";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  const [car, setCar] = useState({});

  return (
    <GlobalState.Provider value={{ car, setCar }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:car" element={<Detail />} />
        </Routes>
      </Router>
    </GlobalState.Provider>
  );
}

export default App;
