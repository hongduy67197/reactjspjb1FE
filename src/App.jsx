import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Admin/Login/login";
import Home from "./Pages/Admin/Home/home";
import QLnhanvien from "./Pages/Admin/NhanVien/Nhanvien";
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
import Header from "./Header/Header";
import UserLogin from "./User/UserLogin";
import UserSingIn from "./User/UserSingIn";
import UserPase from "./User/UserPase";
import { useState, useEffect } from "react";
import ContextProvider from "./Conter/ContextProvider";

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
  return (
    <div>
      <BrowserRouter>
        <ContextProvider testContext={{ user: user, setUser: setUser }}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/home" element={<Home />} />
            <Route path="/admin/qlnhanvien" element={<QLnhanvien />} />
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
            <Route path="/User/UserLogin" element={<UserLogin></UserLogin>} />
            <Route path="/User/UserSingIn" element={<UserSingIn></UserSingIn>} />
            <Route path="/User/UserPase" element={<UserPase></UserPase>} />
            {/* <Route path="/Home/Home" element={<Home></Home>} /> */}
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
