import React, { useState } from "react";
import logo from "./logo.jpg";
import "./styleLogin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Loginadmin } from "../../../redux/action/userAction";
import { postApi } from "../../../api/config";

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function Login(props) {
  const dispatch = useDispatch();
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

  async function dangnhap() {
    let email = document.querySelector(".Email").value;
    let password = document.querySelector(".password").value;
    if (email === "") {
      document.querySelector(".notte").innerHTML = "Vui lòng nhập email";
    } else if (password === "") {
      document.querySelector(".notte").innerHTML = "Vui lòng nhập PassWord";
    } else {
      let res = await postApi("/admin/auth", { email, password });
      console.log(46, res);
      const action = Loginadmin(res.data.data.userData);
      dispatch(action);
      setCookie("user", res.data.data.token, 30);
      if (res.data.data.role == "admin") {
        props.changedata(res.data.data.userData.username);
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
