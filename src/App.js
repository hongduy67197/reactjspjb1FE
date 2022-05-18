import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin/home" element={<Home />} />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
