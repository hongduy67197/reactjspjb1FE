import React from "react";
import logo from "./logo.jpg";
import "./styleLogin.css";
import { useNavigate } from "react-router-dom";

function login() {
  const a = useNavigate;
  const navigate = a();
  function show() {
    document.querySelector(".password").type = "text";
    document.querySelector(".eye_show").style.display = "inline-block";
    document.querySelector(".eye_hiden").style.display = "none";
  }

  function hiden() {
    document.querySelector(".password").type = "password";
    document.querySelector(".eye_show").style.display = "none";
    document.querySelector(".eye_hiden").style.display = "inline-block";
  }

  let data = [
    { username: "Dat", password: 12345678, quyen: "admin" },
    { username: "nhanvien", password: 12345678, quyen: "nhanvien" },
  ];

  function Login() {
    let user = document.querySelector(".username").value;
    let pass = document.querySelector(".password").value;

    for (let i = 0; i < data.length; i++) {
      if (user === "") {
        document.querySelector(".note").innerHTML = "Vui lòng nhập UserName";
      } else if (pass === "") {
        document.querySelector(".note").innerHTML = "Vui lòng nhập PassWord";
      } else if (
        data[i].username == user &&
        data[i].password == pass &&
        data[i].quyen === "admin"
      ) {
        navigate("/admin/home");
      } else {
        document.querySelector(".note").innerHTML = "Tài khoản không chính xác";
      }
    }
  }

  return (
    <div className="Login">
      <div className="formLogin">
        <div className="title">
          <img src={logo} alt="" className="title_logo" />
        </div>
        <p className="title_user">Username</p>
        <input type="text" className="username" />
        <p className="title_pass">Password</p>
        <input type="password" className="password" />
        <i class="fa-solid fa-eye-slash eye_hiden" onClick={show}></i>
        <i class="fa-solid fa-eye eye_show" onClick={hiden}></i>
        <p className="note"></p>
        <button className="btnLogin" onClick={Login}>
          LOGIN
        </button>
        <div className="logo-info">
          <i class="fa-brands fa-facebook logo_fb"></i>
          <i class="fa-brands fa-google-plus-g logo_google"></i>
          <i class="fa-brands fa-twitter logo_twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default login;
