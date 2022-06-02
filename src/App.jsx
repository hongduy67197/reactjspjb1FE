import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Admin/Login/login";
import Home from "./Pages/Admin/Home/home";
import QLnhanvien from "./Pages/Admin/NhanVien/Nhanvien";
import Xacnhan from "./Pages/Admin/Donhang/Xacnhan";
import Hoanthanh from "./Pages/Admin/Donhang/Hoanthanh";
import Danggiao from "./Pages/Admin/Donhang/Danggiao";
import Chinhsua from "./Pages/Admin/Sanpham/Chinhsua";
import Khohang from "./Pages/Admin/Sanpham/Khohang";
import Spmoi from "./Pages/Admin/Sanpham/Spmoi";
import Trenke from "./Pages/Admin/Sanpham/Trenke";
import Chinhanh from "./Pages/Admin/Thongtin/Chinhanh";
import About from "./Pages/Admin/Thongtin/About";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  function changedata(newdata) {
    setName(newdata);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/admin/login"
            element={<Login changedata={changedata} />}
          />
          <Route path="/admin/home" element={<Home name={name} />} />
          <Route
            path="/admin/qlnhanvien"
            element={<QLnhanvien name={name} />}
          />
          <Route path="/admin/Xacnhan" element={<Xacnhan name={name} />} />
          <Route path="/admin/Hoanthanh" element={<Hoanthanh name={name} />} />
          <Route path="/admin/Danggiao" element={<Danggiao name={name} />} />
          <Route path="/admin/Chinhsua" element={<Chinhsua name={name} />} />
          <Route path="/admin/Khohang" element={<Khohang name={name} />} />
          <Route path="/admin/Spmoi" element={<Spmoi name={name} />} />
          <Route path="/admin/Trenke" element={<Trenke name={name} />} />
          <Route path="/admin/Chinhanh" element={<Chinhanh name={name} />} />
          <Route path="/admin/About" element={<About name={name} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
