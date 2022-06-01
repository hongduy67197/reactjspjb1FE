import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

import Header from "./compunentes/header/Header";
import Slider from "./compunentes/slider/Slider";
import Home from "./compunentes/home/Home";
import Footer from "./compunentes/footer/Footer";

import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from "./compunentes/home/homePage/Cards";

function App() {
  const [Slides, setSlides] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3150/user/list")
      .then(function (res) {
        setSlides(res.data.listSlide);
      })
      .catch(function (err) {
        console.log(99, err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Slider Slides={Slides} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
