import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./Pages/Admin/Home/home";
import Xacnhan from "./Pages/Admin/DonhangFolder/Xacnhan";
import Hoanthanh from "./Pages/Admin/DonhangFolder/Hoanthanh";
import Danggiao from "./Pages/Admin/DonhangFolder/Danggiao";
import Khohang from "./Pages/Admin/Sanpham/Khohang";
import Spmoi from "./Pages/Admin/Sanpham/Spmoi";
import Trenke from "./Pages/Admin/Sanpham/Trenke";
import Nhanvien from "./Pages/Admin/NhanVien/Nhanvien";
import React, { useState, useEffect } from "react";
import axios from "./axios";
import Login from "./Pages/Admin/Login/login";
import Header from "./compunentes/header/Header";
import UserLogin from "./User/UserLogin";
import UserSingIn from "./User/UserSingIn";
import UserPase from "./User/UserPase";
import ContextProvider from "./Conter/ContextProvider";
import Slider from "./compunentes/slider/Slider";
import Footer from "./compunentes/footer/Footer";
import Home1 from "./compunentes/home/Home";
import CreateOrder from "./Pages/CreateOrder";

function App() {
  return (z
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/compunentes/home/Home" element={<Home1></Home1>} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/home" element={<Home />} />
            <Route path="/admin/nhanvien" element={<Nhanvien />} />
            <Route path="/admin/Xacnhan" element={<Xacnhan />} />
            {/* <Route path="/admin/Tongket" element={<Tongket />} /> */}
            <Route path="/admin/Hoanthanh" element={<Hoanthanh />} />
            <Route path="/admin/Danggiao" element={<Danggiao />} />
            <Route path="/admin/Khohang" element={<Khohang />} />
            <Route path="/admin/Spmoi" element={<Spmoi />} />
            <Route path="/admin/Trenke" element={<Trenke />} />
            <Route path="/User/UserLogin" element={<UserLogin></UserLogin>} />
            <Route
              path="/User/UserSingIn"
              element={<UserSingIn></UserSingIn>}
            />
            <Route path="/User/UserPase" element={<UserPase></UserPase>} />
            <Route path="/createorder" element={<CreateOrder />}></Route>
          </Routes>
          <ToastContainer />
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
