import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";

import React, { useState, useEffect } from "react";
import Header from "./compunentes/header/Header";
import Home from "./compunentes/home/Home";
import Footer from "./compunentes/footer/Footer";

import axios from "axios";
// import Cards from "./compunentes/home/homePage/Cards";

// import Xacnhan from "./Pages/Admin/Donhang/Xacnhan";
// import Tongket from "./Pages/Admin/Donhang/Tongket";
// import Hoanthanh from "./Pages/Admin/Donhang/Hoanthanh";
// import Danggiao from "./Pages/Admin/Donhang/Danggiao";
import Chinhsua from "./Pages/Admin/Sanpham/Chinhsua";
import Khohang from "./Pages/Admin/Sanpham/Khohang";
import Spmoi from "./Pages/Admin/Sanpham/Spmoi";
import Trenke from "./Pages/Admin/Sanpham/Trenke";
import Chinhanh from "./Pages/Admin/Thongtin/Chinhanh";
import Nhanvien from "./Pages/Admin/NhanVien/Nhanvien";
import Login from "./Pages/Admin/Login/login";
import About from "./Pages/Admin/Thongtin/About";
import UserLogin from "./User/UserLogin";
import UserSingIn from "./User/UserSingIn";
import UserPase from "./User/UserPase";
import ContextProvider from "./Conter/ContextProvider";
import Xacnhan from "./Pages/Admin/DonHang/Xacnhan";
import Danggiao from "./Pages/Admin/DonHang/Danggiao";
import Tongket from "./Pages/Admin/DonHang/Tongket";
import Hoanthanh from "./Pages/Admin/DonHang/Hoanthanh";

function App() {
  const [data, setdata] = useState([]);
  const [showdata, setshowdata] = useState([]);
  const [brand, setbrand] = useState([]);
  const [sign, setsign] = useState(0);
  const [model, setmodel] = useState([]);
  const [listdt, setlistdt] = useState([]);

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

  function changesign() {
    setsign(sign + 1);
  }
  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/productcode/list")
      .then(function (response) {
        setdata(response.data);
        setshowdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/categories")
      .then(function (response) {
        setbrand(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider testContext={{ user: user, setUser: setUser }}>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/home" element={<Home />} />
            <Route path="/admin/nhanvien" element={<Nhanvien />} />
            <Route path="/admin/Xacnhan" element={<Xacnhan />} />
            <Route path="/admin/Tongket" element={<Tongket />} />
            <Route path="/admin/Hoanthanh" element={<Hoanthanh />} />
            <Route path="/admin/Danggiao" element={<Danggiao />} />
            <Route path="/User/UserLogin" element={<UserLogin></UserLogin>} />
            <Route
              path="/User/UserSingIn"
              element={<UserSingIn></UserSingIn>}
            />
            <Route path="/User/UserPase" element={<UserPase></UserPase>} />
            <Route
              path="/admin/Chinhsua"
              element={
                <Chinhsua
                  model={model}
                  setmodel={setmodel}
                  changesign={changesign}
                  listdt={listdt}
                  setlistdt={setlistdt}
                />
              }
            />
            <Route path="/admin/Khohang" element={<Khohang />} />
            <Route path="/admin/Spmoi" element={<Spmoi />} />
            <Route
              path="/admin/Trenke"
              element={
                <Trenke
                  data={data}
                  brand={brand}
                  sign={sign}
                  changesign={changesign}
                  setdata={setdata}
                  showdata={showdata}
                  setshowdata={setshowdata}
                />
              }
            />
            <Route path="/admin/Chinhanh" element={<Chinhanh />} />
            <Route path="/admin/About" element={<About />} />
          </Routes>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
