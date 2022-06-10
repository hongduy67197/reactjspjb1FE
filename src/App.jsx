import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Admin/Home/home";
import Cart from "./Cart/Cart";
import Comment1 from "./Comment/Comment";
import Xacnhan from "./pages/Admin/Donhang/Xacnhan";
import Tongket from "./pages/Admin/Donhang/Tongket";
import Hoanthanh from "./pages/Admin/Donhang/Hoanthanh";
import Danggiao from "./pages/Admin/Donhang/Danggiao";
import Chinhsua from "./pages/Admin/Sanpham/Chinhsua";
import Khohang from "./pages/Admin/Sanpham/Khohang";
import Spmoi from "./pages/Admin/Sanpham/Spmoi";
import Trenke from "./pages/Admin/Sanpham/Trenke";
import Chinhanh from "./pages/Admin/Thongtin/Chinhanh";
import Nhanvien from "./pages/Admin/NhanVien/Nhanvien";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./pages/Admin/Login/login";
import About from "./pages/Admin/Thongtin/About";
import Header from "./Header/Header";
import UserLogin from "./User/UserLogin";
import UserSingIn from "./User/UserSingIn";
import UserPase from "./User/UserPase";
import ContextProvider from "./Conter/ContextProvider";

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
   const [count, setCount] = useState(0);
  const [Payment, SetPayment] = useState([]);
  const [ChangeCart, SetChangeCart] = useState(0);
  function ChangedataCart() {
    SetChangeCart(ChangeCart + 1);
  }
  function Change(newData) {
    SetPayment(newData);
  }
  function Store(newData) {
    setCount(newData);
  }

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
        <ContextProvider testContext={{ user: user, setUser: setUser }}>
          <Routes>
            <Route path="/" element={<App />} />
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
            path="/Cart"
            element={
              <Cart
                ChangedataCart={ChangedataCart}
                Store={Store}
                Change={Change}
              />
            }
          />
          <Route path="/Comment" element={<Comment1 />} />
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
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
