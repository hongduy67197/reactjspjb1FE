import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/shopee.png";
import face from "../assets/images/logoFace.png";
import google from "../assets/images/logoGoogle.jpg";
import apple from "../assets/images/logoApple.png";
import qr from "../assets/images/qrtest2.png";

function UserLogin() {
  function submit() {}
  return (
    <div className="login_">
      <div className="login_header">
        <Link to="App">
          <img src={logo} alt="" className="login_header_img" />
        </Link>
        <span className="login_header_text">Đăng nhập </span>
        <a href="" className="login_header_help">
          Bạn cần giúp đỡ ?
        </a>
      </div>
      <div className="login_conter">
        <div className="login_conter_modal">
          <span className="login_conter_modal_headline">Đăng nhập</span>
          <div className="login_conter_modal_QR">
            <span>Đăng nhập với mã QR</span>
          </div>
          <div className="login_conter_modal_img_QR">
            <img src={qr} alt="" />
          </div>
          <input
            type="text"
            placeholder="Email/Số điện thoại/Tên đăng nhập"
            className="login_conter_modal_email"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="login_conter_modal_password"
          />
          <button className="login_conter_modal_button" onClick={submit}>
            ĐĂNG NHẬP
          </button>
          <div className="login_conter_modal_a">
            <a href="">Quên mật khẩu</a>
            <a href="" className="login_conter_modal_a2">
              Đăng nhập với SMS
            </a>
          </div>
          <span className="login_or">HOẶC</span>
          <div className="login_conter_modal_buttonGrup">
            <button>
              <img src={face} alt="" /> Facebook
            </button>
            <button>
              <img src={google} alt="" /> Google
            </button>
            <button>
              <img src={apple} alt="" /> Apple
            </button>
          </div>
          <div className="login_conter_modal_footer">
            <span>Bạn mới biết đến Shopee ?</span>
            <Link to="/User/UserSingIn">
              <button>Đăng ký</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
