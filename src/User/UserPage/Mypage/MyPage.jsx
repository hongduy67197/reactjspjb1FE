import React, { useState } from "react";
import userlogo from "../../../assets/images/userlogo.jpg";
import "../../UserPage/MypageCss.css";
import { useSelector } from "react-redux";
import axios from "../../../axios";
import { CloseSquareFilled } from "@ant-design/icons";
import { render } from "@testing-library/react";
import { getUserCookie, refreshToken } from "../../../refreshToken"
function MyPage(props) {
  console.log(10,props)
  const userInfo = useSelector(function (state) {
    return state.user;
  });
  console.log("userinfo", userInfo);
  const [image, setImage] = useState("");

  // ảnh đại diện
  const avatr = userInfo.avatar
    ? process.env.REACT_APP_CLIENT_URL + userInfo.avatar
    : userlogo;

  // thay đổi ảnh đại diện
  function choosefile(fileinput) {
    const imager = document.querySelector(".input_file");
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imager.files[0]);
    fileReader.addEventListener("load", function () {
      setImage(this.result);
      document.querySelector(".chooseImage").setAttribute("src", this.result);
    });

    console.log(58,imager);
  }
  // đẩy dữ liệu đã thay đổi về sever
  async function saveUp() {
    try {
      console.log(123,)
      // let avatar = document.querySelector(".input_file").value;
      // let date = document.getElementById("user_date").value;
      // let name = document.querySelector(".mypage_right_name").value;
      // let email = document.querySelector(".NewEmail").value;
      // let phone = document.querySelector(".NewPhone").value;
      const form = document.querySelector(".myPageForm");
      const formData = new FormData(form);
      for(const pair of formData.entries()) {
        console.log(43, pair[0], pair[1]);
      }
      let cookie = getUserCookie('user')

      let res = await axios.put(`/user`, formData, {
        headers: {
          'Authorization': cookie
        }
      });
      console.log(54, res);

      if(res.data.message === 'jwt expired'){
        await refreshToken()
        cookie = getUserCookie('user')
        res = await axios.put(`/user`, formData, {
          headers: {
            'Authorization': cookie
          }
        });
        console.log(61, res);
      }
      props.newColor()
      // console.log("roem", avatar, date, name, email, phone);
    } catch (error) {
      console.log(error);
    }
  }
  // bật modal thay đổi số điện thoại
  function onof_newPhone() {
    document.querySelector(".NewPhone_").style.display = "block";
  }
  // bật modal thay đổi email
  function onof_newEmail() {
    document.querySelector(".newEmail_").style.display = "block";
  }
  // tắt modal thay đổi số điện thoại và email
  function of_modal() {
    document.querySelector(".newEmail_").style.display = "none";
    document.querySelector(".NewPhone_").style.display = "none";
  }
  // thay đổi email
  function update_email_form() {
    let newEmail = document.querySelector(".NewEmail").value;
    let email = userInfo.email;
    if (newEmail !== email) {
      document.querySelector(".newEmail_text").style.display = "block";
      document.querySelector(".newEmail_render").innerHTML = newEmail;
      document.querySelector(".close").click();
    } else if (newEmail === "" || newEmail === email) {
      document.querySelector(".newEmail_text").style.display = "none";
    }
  }
  // thay đổi phone
  function update_phone_form() {
    let newPhone = document.querySelector(".NewPhone").value;
    let phone = userInfo.phone;
    if (newPhone !== phone) {
      document.querySelector(".newPhone_text").style.display = "block";
      document.querySelector(".newPhone_render").innerHTML = newPhone;
      document.querySelector(".close").click();
    } else if (newPhone === "" || newPhone === phone) {
      document.querySelector(".newPhone_text").style.display = "none";
    }
  }
  return (
    <div className="mypage_">
      <div className="mypage_header">
        <span>Hồ Sơ Của Tôi</span>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>
      <div className="mypage_conter">
        <div className="mypage_conter_user">
          {/* leght */}
          <div className="mypage_conter_user_leght">
      
            <span className="mypage_leght_name">Tên</span>
            <span className="mypage_leght_email">Email</span>
            <span className="mypage_leght_phone">Số Điện Thoại</span>
            <span className="mypage_leght_check">Giới Tính</span>
            <span className="mypage_leght_date">Ngày Sinh</span>
          </div>
          {/* right */}
          <form className="myPageForm" action="" encType="multipart/form-data">
            <div className="mypage_conter_user_right">
        
              <input
                type="text"
                className="mypage_right_name"
                defaultValue={userInfo.username}
                name="username"
               />
              <div className="mypage_right_email1">
                <span className="mypage_right_email">{userInfo.email}</span>
                <span className="thaydoi" onClick={onof_newEmail}>
                 Thay Đổi
                </span>
              <div className="newEmail_text">
                <span>Email mới : </span>
                <span className="newEmail_render"></span>
              </div>
            </div>
            <div className="mypage_right_phone1">
              <span>{userInfo.phone}</span>
              <span className="thaydoi" onClick={onof_newPhone}>
                Thay Đổi
              </span>
              <div className="newPhone_text">
                <span>Số điện thoại mới : </span>
                <span className="newPhone_render"></span>
              </div>
            </div>
            <div className="mypage_right_check">
              <input type="checkbox" name="" id="" />
              Nam
              <input type="checkbox" name="" id="" />
              Nữ
              <input type="checkbox" name="" id="" />
              Khác
            </div>
            <div className="mypage_right_date">
              <input type="date" id="user_date" name="birthDay" />
            </div>
            <div className="mypage_conter_imager">
              <div className="mypage_conter_imager_wrap">
                <img src={image ? image : avatr} alt="" className="chooseImage" />
              </div>
              <input
                type="file"
                name="avatar"
                className="input_file"
                id="imagerFile"
                accept="image/gif, image/jpg, image/pdg"
                onChange={choosefile}
              />              
              <p>Dung lượng file tối đa 1 MB </p>
              <span>Định dạng: .JPEG, .PNG</span>
            </div>
            <button className="mypage_right_update" type="button" onClick={saveUp}>
              Lưu
            </button>
            </div>
          </form>
        </div>
        {/* chọn  đại diện */}
        
      </div>
      {/* modal Email*/}
      <div className="newEmail_">
        <span>Nhập Email</span>
        <input type="text" name="" className="NewEmail" />
        <button className="update" onClick={update_email_form}>
          Lưu
        </button>
        <button className="close" onClick={of_modal}>
          Close
        </button>
      </div>
      {/* modal Phone*/}
      <div className="NewPhone_">
        <span>Nhập Số điện thoại mới</span>
        <input type="text" name="" className="NewPhone" />
        <button className="update" onClick={update_phone_form}>
          Lưu
        </button>
        <button className="close" onClick={of_modal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default MyPage;
