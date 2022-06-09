import React, { useState } from "react";
import logo from "./logo.jpg";
import "./styleLogin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Login(props) {
  const [state, setstate] = useState([]);
  let navigate = useNavigate();
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

  let data = [...state];
  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/user/")
      .then(function (res) {
        setstate(res.data);
      })
      .catch(function (fail) {
        console.log(fail);
      });
  }, []);

  function dangnhap() {
    let email = document.querySelector(".Email").value;
    let pass = document.querySelector(".password").value;

    for (let i = 0; i < data.length; i++) {
      if (email === "") {
        document.querySelector(".notte").innerHTML = "Vui lòng nhập email";
      } else if (pass === "") {
        document.querySelector(".notte").innerHTML = "Vui lòng nhập PassWord";
      } else if (
        data[i].email === email &&
        data[i].password === pass &&
        data[i].role === "admin"
      ) {
        props.changedata(data[i].username);
        navigate("/admin/home");
      } else {
        document.querySelector(".notte").innerHTML =
          "Tài khoản không chính xác";
      }
    }
  }

  return (
    <div className="Login">
      <div className="formLogin">
        <div className="title_lo">
          <img src={logo} alt="" className="title_logo" />
        </div>
        <p className="title_user">Email</p>
        <input type="text" className="Email" />
        <p className="title_pass">Password</p>
        <input type="password" className="password" />
        <i className="fa-solid fa-eye-slash eye_hiden" onClick={show}></i>
        <i className="fa-solid fa-eye eye_show" onClick={hiden}></i>
        <p className="notte"></p>
        <button className="btnLogin" onClick={dangnhap}>
          LOGIN
        </button>
        <div className="logo-info">
          <i className="fa-brands fa-facebook logo_fb"></i>
          <i className="fa-brands fa-google-plus-g logo_google"></i>
          <i className="fa-brands fa-twitter logo_twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Login;
