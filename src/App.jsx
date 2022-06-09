import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Admin/Home/home";
import Xacnhan from "./Pages/Admin/Donhang/Xacnhan";
import Hoanthanh from "./Pages/Admin/Donhang/Hoanthanh";
import Danggiao from "./Pages/Admin/Donhang/Danggiao";
import Chinhsua from "./Pages/Admin/Sanpham/Chinhsua";
import Khohang from "./Pages/Admin/Sanpham/Khohang";
import Spmoi from "./Pages/Admin/Sanpham/Spmoi";
import Trenke from "./Pages/Admin/Sanpham/Trenke";
import Chinhanh from "./Pages/Admin/Thongtin/Chinhanh";
import Nhanvien from "./Pages/Admin/NhanVien/Nhanvien";
import React, { useState, useEffect } from "react";
import axios from "./axios";
import Login from "./Pages/Admin/Login/login";
import About from "./Pages/Admin/Thongtin/About";
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
  const [name, setName] = useState("");
  function changedata(newdata) {
    setName(newdata);
  }
  const [data, setdata] = useState([]);
  const [showdata, setshowdata] = useState([]);
  const [brand, setbrand] = useState([]);
  const [sign, setsign] = useState(0);
  const [model, setmodel] = useState([]);
  const [listdt, setlistdt] = useState([]);

  const [id, setId] = useState([]);
  function addId(newId) {
    setId(newId);
  }
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/admin/categories")
      .then(function (res) {
        setCategories(res.data);
      })
      .catch(function (err) {
        console.log(99, err);
      });
  }, []);

  function changesign() {
    setsign(sign + 1);
  }
  useEffect(() => {
    axios
      .get("/admin/productcode/list")
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
      .get("/admin/categories")
      .then(function (response) {
        setbrand(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function changesign() {
    setsign(sign + 1);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/compunentes/home/Home" element={<Home1></Home1>} />
            <Route
              path="/admin/login"
              element={<Login changedata={changedata} />}
            />
            <Route path="/admin/home" element={<Home name={name} />} />
            <Route path="/admin/nhanvien" element={<Nhanvien name={name} />} />
            <Route path="/admin/Xacnhan" element={<Xacnhan name={name} />} />
            <Route
              path="/admin/Hoanthanh"
              element={<Hoanthanh name={name} />}
            />
            <Route path="/admin/Danggiao" element={<Danggiao name={name} />} />
            <Route
              path="/admin/Chinhsua"
              element={
                <Chinhsua
                  model={model}
                  setmodel={setmodel}
                  changesign={changesign}
                  listdt={listdt}
                  setlistdt={setlistdt}
                  name={name}
                />
              }
            />
            <Route path="/admin/Khohang" element={<Khohang name={name} />} />
            <Route path="/admin/Spmoi" element={<Spmoi name={name} />} />
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
                  name={name}
                />
              }
            />
            <Route path="/admin/Chinhanh" element={<Chinhanh />} />
            <Route path="/admin/About" element={<About />} />

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
