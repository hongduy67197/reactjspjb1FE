import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

import Header from "./compunentes/header/Header";
import Footer from "./compunentes/footer/Footer";
import Slider from "./compunentes/slider/Slider";
import Home from "./compunentes/home/Home";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from "./compunentes/home/homePage/Cards";
import ContextProvider from "./Conter/ContextProvider.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserSingIn from "./User/UserSingIn";
import UserPase from "./User/UserPase";
import Login from "./Pages/Admin/Login/login";
import QLnhanvien from "./Pages/Admin/Login/login";
import UserLogin from "./User/UserLogin";
function App() {
  const [user, setUser] = useState([
    {
      email: "hoang@gmail.com",
      password: "123456789",
    },
    {
      email: "hoang@gmail.com",
      password: "123456789",
    },
    {
      email: "hoang@gmail.com",
      password: "123456789",
    },
  ]);

  function addUser(newUser) {
    setUser(...user, newUser);
  }
  const [id, setId] = useState([]);
  function addId(newId) {
    setId(newId);
  }
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/categories")
      .then(function (res) {
        setCategories(res.data);
        // console.log(res.data);
      })
      .catch(function (err) {
        console.log(99, err);
      });
  }, []);

  // tín hiệu để render

  //   const [stoge, setStoge]=useState(0)
  //   function setStoge1(){
  //     setStoge(stoge+1)
  //   }
  //   // Gọi data về
  //   useEffect(() => {
  //     axios.get('')
  //     .then((data)=>{
  //       localStorage.setItem('user',JSON.stringify(data))
  //       console.log(data)
  //     })
  //     .catch((arr)=>{
  //       console.log(arr)
  //     })
  //   }, [stoge]);
  // const [user, setUser]=useState([JSON.parse(localStorage.getItem('user'))])
  function of_header() {
    document.querySelector(".onof_header").style.display = "none";
  }
  function on_header() {
    document.querySelector(".onof_header").style.display = "block";
  }
  function of_slider() {
    document.querySelector(".onof_slider").style.display = "none";
  }
  function on_slider() {
    document.querySelector(".onof_slider").style.display = "block";
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider testContext={{ user: user, setUser: setUser }}>
          {/* <Header></Header> */}
          <div className="onof_header">
            <Header of_header={of_header} of_slider={of_slider}></Header>
          </div>
          <div className="onof_slider">
            <Slider Categories={Categories} />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/home" element={<Home />} />
            {/* <Route path="/admin/qlnhanvien" element={<QLnhanvien />} />
            <Route path="/admin/Xacnhan" element={<Xacnhan />} />
            <Route path="/admin/Tongket" element={<Tongket />} />
            <Route path="/admin/Hoanthanh" element={<Hoanthanh />} />
            <Route path="/admin/Danggiao" element={<Danggiao />} />
            <Route path="/admin/Chinhsua" element={<Chinhsua />} />
            <Route path="/admin/Khohang" element={<Khohang />} />
            <Route path="/admin/Spmoi" element={<Spmoi />} />
            <Route path="/admin/Trenke" element={<Trenke />} />
            <Route path="/admin/Chinhanh" element={<Chinhanh />} />
            <Route path="/admin/About" element={<About />} />
            */}
            <Route
              path="/User/UserLogin"
              element={
                <UserLogin
                  on_header={on_header}
                  on_slider={on_slider}
                ></UserLogin>
              }
            />
            <Route
              path="/User/UserSingIn"
              element={
                <UserSingIn
                  on_header={on_header}
                  on_slider={on_slider}
                ></UserSingIn>
              }
            />
            <Route
              path="/User/UserPase"
              element={<UserPase of_slider={of_slider}></UserPase>}
            />
            {/* <Route path="/Home/Home" element={<Home></Home>} /> */}
          </Routes>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
