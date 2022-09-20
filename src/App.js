import styled from "styled-components";
import { Button } from "react-bootstrap";
import GlobalState from "./context/globalState";
import { useState } from "react";
import Counting from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <GlobalState.Provider value={{ count, setCount }}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Swiper
                style={{ backgroundColor: "red", height: "50vh" }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>IYA</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
              </Swiper>
            }
          />
          <Route path="/about" element={<Counting />} />
          <Route
            path="/detail"
            element={
              <div>
                <Button variant="primary">Primary</Button>
                <Button variant="primary">Primary</Button>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </GlobalState.Provider>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-color: red;
`;

export default App;
