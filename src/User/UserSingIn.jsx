import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/shopee.png";
import face from "../assets/images/logoFace.png";
import google from "../assets/images/logoGoogle.jpg";

function UserSingIn() {
  function submit() {}
  return (
    <div className="singin_">
      <div className="login_header">
        <Link to="App">
          <img src={logo} alt="" className="login_header_img" />
        </Link>
        <span className="login_header_text">Đăng ký </span>
        <a href="" className="login_header_help">
          Bạn cần giúp đỡ ?
        </a>
      </div>
      <div className="login_conter">
        <div className="singin_conter_modal">
          <span className="login_conter_modal_headline">Đăng ký</span>
          <input
            type="text"
            placeholder="Số điện thoại"
            className="singin_conter_modal_input"
          />
          <button className="singin_conter_modal_next">TIẾP THEO</button>
          <span className="singin_conter_modal_or">HOẶC</span>
          <div className="singin_conter_modal_buttonGrup">
            <button>
              <img src={face} alt="" /> Facebook
            </button>
            <button>
              <img src={google} alt="" /> Google
            </button>
          </div>
          <p>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</p>
          <div className="singin_conter_modal_text">
            <a href="">Điều khoản dịch vụ</a>&<a href="">Chính sách bảo mật </a>
          </div>
          <div className="singin_modal_footer">
            <span>Bạn đã có tài khoản?</span>
            <button>Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSingIn;
