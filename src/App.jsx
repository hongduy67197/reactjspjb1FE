import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import UserLogin from "./User/UserLogin";
import UserSingIn from "./User/UserSingIn";
import UserPase from "./User/UserPase";
import { useState } from "react";
import { useEffect } from "react";
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
    <BrowserRouter>
      <ContextProvider testContext={{ user: user, setUser: setUser }}>
        <div className="App">
          <Header></Header>
          <Routes>
            <Route path="/User/UserLogin" element={<UserLogin></UserLogin>} />
            <Route
              path="/User/UserSingIn"
              element={<UserSingIn></UserSingIn>}
            />
            <Route path="/User/UserPase" element={<UserPase></UserPase>} />
            <Route path="Home/Home" element={<Home></Home>} />
          </Routes>
        </div>
        {/* <Home></Home> */}
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
