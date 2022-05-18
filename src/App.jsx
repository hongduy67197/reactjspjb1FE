import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import UserLogin from "./User/UserLogin";
import UserSingIn from "./User/UserSingIn";
import UserPase from "./User/UserPase";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/User/UserLogin" element={<UserLogin></UserLogin>} />
          <Route path="/User/UserSingIn" element={<UserSingIn></UserSingIn>} />
          <Route path="/User/UserPase" element={<UserPase></UserPase>} />
          <Route path="Home/Home" element={<Home></Home>} />
        </Routes>
      </div>
      {/* <Home></Home> */}
    </BrowserRouter>
  );
}

export default App;
