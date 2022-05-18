import React from "react";
import logo from "./logo.jpg";
import "./style.css";

function login() {
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

  function sigIn() {}
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
        <button className="btnLogin" onClick={sigIn}>
          LOGIN
        </button>
        <div className="logo">
          <i class="fa-brands fa-facebook logo_fb"></i>
          <i class="fa-brands fa-google-plus-g logo_google"></i>
          <i class="fa-brands fa-twitter logo_twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default login;
