import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./Pages/Admin/Home/home";
import Xacnhan from "./Pages/Admin/Donhang/Xacnhan";
import Tongket from "./Pages/Admin/Donhang/Tongket";
import Hoanthanh from "./Pages/Admin/Donhang/Hoanthanh";
import Danggiao from "./Pages/Admin/Donhang/Danggiao";
import Chinhsua from "./Pages/Admin/Sanpham/Chinhsua";
import Khohang from "./Pages/Admin/Sanpham/Khohang";
import Spmoi from "./Pages/Admin/Sanpham/Spmoi";
import Trenke from "./Pages/Admin/Sanpham/Trenke";
import Chinhanh from "./Pages/Admin/Thongtin/Chinhanh";
import About from "./Pages/Admin/Thongtin/About";
import Nhanvien from "./Pages/Admin/NhanVien/Nhanvien";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./Pages/Admin/Login/login";

function App() {
  const [data, setdata] = useState([]);
  const [showdata, setshowdata] = useState([]);
  const [brand, setbrand] = useState([]);
  const [sign, setsign] = useState(0);
  const [model, setmodel] = useState([]);
  const [listdt, setlistdt] = useState([]);
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
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/home" element={<Home />} />
          <Route path="/admin/qlnhanvien" element={<Nhanvien />} />
          <Route path="/admin/Xacnhan" element={<Xacnhan />} />
          <Route path="/admin/Tongket" element={<Tongket />} />
          <Route path="/admin/Hoanthanh" element={<Hoanthanh />} />
          <Route path="/admin/Danggiao" element={<Danggiao />} />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
