import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/shopee.png";
import face from "../assets/images/logoFace.png";
import google from "../assets/images/logoGoogle.jpg";
import apple from "../assets/images/logoApple.png";
import qr from "../assets/images/qrtest2.png";
import logoShopee from "../assets/images/logoShopee2.jpeg";
import user from "../assets/images/user.png";
import axios from "../axios";
import Context from "../Conter/Context";
import "./Userlogin.css";
import { useDispatch } from "react-redux";
import { Login } from "../redux/action/userAction";

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function UserLogin(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useContext(Context).user;
  const id = useContext(Context).id;
  const setId = useContext(Context).setId;
  // console.log(user);
  // console.log(12, user.user[0]);
  // console.log(props.user[props.user.length - 1].email);
  async function submit() {
    let email = document.querySelector(".login_conter_modal_email").value;
    let password = document.querySelector(".login_conter_modal_password").value;
    if (email === "" || testEmail(email)) {
      document.querySelector(".login_email_text").innerHTML =
        "Vui lòng nhập Email";
    } else if (password === "" || testPassword(password)) {
      document.querySelector(".login_password_text").innerHTML =
        "Vui lòng nhập Password";
    } else {
      let res = await axios.post("/user/login", { email, password });
      setCookie("user", res.data.data.token);
      console.log(res.data.data.user);
      const action = Login({
        username: res.data.data.user.username,
        address: res.data.data.user.address,
        avatar: res.data.data.user.avatar,
        code: res.data.data.user.code,
        email: res.data.data.user.email,
        phone: res.data.data.user.phone,
        role: res.data.data.user.role,
      });
      console.log(action);
      dispatch(action);
      // navigate("/Home/Home");
      navigate("/User/UserPase");
    }
  }
  // kiểm tra đầu vào Email
  function testEmail(email) {
    var mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    if (mailformat.test(email)) {
      document.querySelector(".login_email_text").innerHTML = "";
    } else {
      document.querySelector(".login_email_text").innerHTML =
        "Email không hợp lệ";
    }
  }
  // kiểm tra đầu vào password
  function testPassword(pass) {
    var arr = /^(?=.*[a-zA-Z0-9](?=.*\d)[A-Za-z0-9]{8,})$/;
    if (arr.test(pass) || pass.length < 8) {
      document.querySelector(".login_password_text").innerHTML =
        "Mật khẩu phải có ít nhất 8 ký tự";
    } else {
      document.querySelector(".login_password_text").innerHTML = "";
    }
  }
  // ẩn hiện cảnh báo
  function clean_email() {
    // document.querySelector(".login_conter_modal_email").value = "";
    document.querySelector(".login_email_text").innerHTML = "";
  }
  function clean_password() {
    document.querySelector(".login_password_text").innerHTML = "";
  }
  // Điều kiện đăng nhập Email
  function userFor(x, arr) {
    for (let a = 0; a < arr.length; a++) {
      if (x === arr[a].email) {
        return true;
      }
    }
  }
  // Điều kiện đăng nhập Password
  function passwordFor(y, arr) {
    for (let a = 0; a < arr.length; a++) {
      if (y === arr[a].password) {
        return true;
      }
    }
  }
  function singIn_next() {
    navigate("/user/UserSingIn");
    document.querySelector(".ofcanva_modal_close").click();
  }
  function of_ofcanva_modal() {
    document.querySelector(".login_ofcanva_modal").style.display = "none";
  }
  return (
    <>
      <div className="login_">
        <div className="login_header">
          <Link to="App">
            <img
              src={logo}
              alt=""
              className="login_header_img"
              style={{ width: "auto" }}
            />
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
              onClick={clean_email}
              type="text"
              placeholder="Email/Số điện thoại/Tên đăng nhập"
              className="login_conter_modal_email"
            />
            <span className="login_email_text"></span>
            <input
              onClick={clean_password}
              type="password"
              placeholder="Mật khẩu"
              className="login_conter_modal_password"
            />
            <span className="login_password_text"></span>
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
        <div className="login_ofcanva_modal" style={{ display: "none" }}>
          <p>Email hoặc password không đúng !</p>
          <p> Vui lòng kiểm tra lại .</p>
          <div className="login_singin">
            <p>Bạn chưa có tài khoản ?</p>
            <span>Nhấn nút Đăng ký để tạo mới tài khoản mới</span>
            <button className="ofcanva_modal_singin" onClick={singIn_next}>
              Đăng ký
            </button>
          </div>
          <button
            className="ofcanva_modal_close_singin"
            onClick={of_ofcanva_modal}
          >
            Close
          </button>
        </div>
      </div>
      {/* giao diện điện thoại */}
      <div className="login_phone">
        <div className="login_phone_header">
          <div>
            <Link to="App">
              <i className="fa-solid fa-arrow-left again"></i>
            </Link>
            <span>Login</span>
          </div>
          <a href="">Need help ?</a>
        </div>
        <div className="login_phone_conter">
          <img src={logoShopee} alt="img" />
          <input
            type="text"
            className="login_phone_userName"
            placeholder="Email\Phone\UserName"
          />
          <div className="login_phone_password_">
            <input
              type="text"
              className="login_phone_password"
              placeholder="Password"
            />
            <a href="" className="login_phone_forgot">
              Forgot ?
            </a>
          </div>
          <button className="login_phone_login">Login</button>
          <div className="login_phone_a">
            <a href="">Sign Up</a>
            <a href="" className="login_phone_a1">
              Log In With Phone Number{" "}
            </a>
          </div>
          <hr className="login_phone_hr"></hr>

          <span className="login_phone_OR">OR</span>
          <div className="login_phone_button_grup">
            <button className="login_phone_button_face">
              <img src={face} alt="" /> Continue with Facebook
            </button>
            <button className="login_phone_button_google">
              <img src={google} alt="" />
              Continue with Google
            </button>
            <button className="login_phone_button_apple">
              <img src={apple} alt="" />
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
