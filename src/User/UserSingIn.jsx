import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/shopee.png';
import face from '../assets/images/logoFace.png';
import google from '../assets/images/logoGoogle.jpg';
import apple from '../assets/images/logoApple.png';
import Context from '../Conter/Context';
import { useContext } from 'react';
import logoShopee from '../assets/images/logoShopee2.jpeg';

import axios from '../axios';
import './Usersingin.css';
function UserSingIn(props) {
    const navigate = useNavigate();
    async function userSingin_next() {
        const email = document.querySelector('.singin_conter_modal_email').value;
        const password = document.querySelector('.singin_conter_modal_password').value;
        const againpassword = document.querySelector('.singin_conter_modal_againpassword').value;
        if (email === '' || testEmail(email)) {
            document.querySelector('.singin_mail_text').innerHTML = 'Vui lòng nhập email';
        } else if (password === '' || testPassword(password)) {
            document.querySelector('.singin_password_text').innerHTML = 'Vui lòng nhập mật khẩu';
        } else if (againpassword === '' || password !== againpassword) {
            document.querySelector('.singin_again_text').innerHTML = 'Mật khẩu không khớp';
        } else {
            const res = await axios.post('/user/register', { password, email });
            document.querySelector('.singIn_ofcanva_modal').style.display = 'block';
            document.querySelector('.singin_').style.background = '#EBEBEB';
            document.querySelector('.login_header').style.display = 'none';
            document.querySelector('.login_conter').style.display = 'none';
            document.querySelector('.singin_conter_modal').style.display = 'none';
        }
    }
    // kiểm tra đầu vào password
    function testPassword(pass) {
        var arr = /^(?=.*[a-zA-Z0-9](?=.*\d)[A-Za-z0-9]{8,})$/;
        if (arr.test(pass) || pass.length < 8) {
            document.querySelector('.singin_password_text').innerHTML = 'Mật khẩu phải có ít nhất 8 ký tự';
        } else {
            document.querySelector('.singin_password_text').innerHTML = '';
        }
    }
    // kiểm tra đầu vào Email
    function testEmail(email) {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
        if (mailformat.test(email)) {
            document.querySelector('.singin_mail_text').innerHTML = '';
        } else {
            document.querySelector('.singin_mail_text').innerHTML = 'Email không hợp lệ';
        }
    }

    // reset input email
    function reset_email() {
        document.querySelector('.singin_mail_text').innerHTML = '';
        document.querySelector('.singin_conter_modal_email').value = '';
    }
    // reset input password
    function reset_password() {
        document.querySelector('.singin_password_text').innerHTML = '';
    }
    // reset input againpass
    function reset_againpass() {
        document.querySelector('.singin_again_text').innerHTML = '';
    }
    // bật tắt modal thông báo
    function of_ofcanva_modal() {
        document.querySelector('.singIn_ofcanva_modal').style.display = 'none';
        document.querySelector('.singin_').style.background = '#f94f30';
        document.querySelector('.login_header').style.display = 'block';
        document.querySelector('.login_conter').style.display = 'block';
        document.querySelector('.singin_conter_modal').style.display = 'block';
    }
    // chuyển đến trang LOGIN
    function login_next() {
        navigate('/user/UserLogin');
        document.querySelector('.ofcanva_modal_close').click();
    }

    return (
        <>
            <div className="singin_">
                <div className="login_header">
                    <Link to="/">
                        <img src={logo} alt="" className="login_header_img" style={{ width: 'auto' }} />
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
                            onClick={reset_email}
                            type="text"
                            placeholder="Email"
                            className="singin_conter_modal_email"
                        />
                        <span className="singin_mail_text"></span>
                        <input
                            onClick={reset_password}
                            type="password"
                            placeholder="Mật khẩu"
                            className="singin_conter_modal_password"
                        />
                        <span className="singin_password_text"></span>

                        <input
                            onClick={reset_againpass}
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            className="singin_conter_modal_againpassword"
                        />
                        <span className="singin_again_text"></span>

                        <button className="singin_conter_modal_next" onClick={userSingin_next}>
                            ĐĂNG KÝ
                        </button>
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
                            <Link to="/user/UserLogin">
                                <button>Đăng nhập</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="singIn_ofcanva_modal" style={{ display: 'none' }}>
                    <p>Vui lòng check email, xác nhận tài khoản !</p>
                    {/* <p>Chào mừng {} đến với SHOPEE !</p>
        <button className="ofcanva_modal_login" onClick={login_next}>
          Đến trang đăng nhập
        </button> */}
                    <button className="ofcanva_modal_close" onClick={of_ofcanva_modal}>
                        Close
                    </button>
                </div>
            </div>
            {/* phone */}
            <div className="singIn_phone">
                <div className="login_phone_header">
                    <div>
                        <Link to="App">
                            <i className="fa-solid fa-arrow-left again"></i>
                        </Link>
                        <span>Sign Up</span>
                    </div>
                    <a href="">Need help ?</a>
                </div>
                <div className="singin_phone_conter">
                    <input type="text" className="singin_phone_userName" placeholder="Email\Phone\UserName" />
                    <input type="text" className="singin_phone_password" placeholder=" Password" />
                    <input type="text" className="singin_phone_password1" placeholder="Enter the Password" />
                    <button className="singin_phone_singin">Sing Up</button>
                    <hr className="singin_phone_hr"></hr>
                    <span className="singin_phone_OR">OR</span>
                    <div className="singin_phone_button_grup">
                        <button className="singin_phone_button_face">
                            <img src={face} alt="" /> Continue with Facebook
                        </button>
                        <button className="singin_phone_button_google">
                            <img src={google} alt="" />
                            Continue with Google
                        </button>
                        <button className="singin_phone_button_apple">
                            <img src={apple} alt="" />
                            Continue with Apple
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserSingIn;