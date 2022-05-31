import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

import Header from "./compunentes/header/Header";
import Footer from "./compunentes/footer/Footer";
import Slider from "./compunentes/slider/Slider";
import Home from "./compunentes/home/Home";
import SeeMore from "./compunentes/home/homePage/SeeMore";
import Advertisement from "./advertisement/Advertisement";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from "./compunentes/home/homePage/Cards";

function App() {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/categories")
      .then(function (res) {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(99, err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Slider Categories={Categories} />
      <Home />
      <SeeMore />
      <Advertisement />
      <Footer />
    </div>
  );
}

export default App;
