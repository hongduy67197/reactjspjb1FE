import React, { useState } from "react";
import userlogo from "../../../assets/images/userlogo.jpg";
import "../../UserPage/MypageCss.css";
import { useSelector } from "react-redux";
import axios from "../../../axios";
import { CloseSquareFilled } from "@ant-design/icons";

function MyPage() {
  const userInfo = useSelector(function (state) {
    return state.user;
  });
  console.log("userinfo", userInfo);
  const [image, setImage] = useState("");
  function img_file() {
    document.querySelector(".input_file_img").click();
  }
  // ảnh đại diện
  const avatr = userInfo.avatar ? userInfo.avatar : userlogo;

  // ?\

  // const form12 = document.querySelector(".formlist");
  // console.log(form12);

  // const formData12 = new FormData(form12);
  // console.log(27, formData12.entries());
  // for (var pair of formData12.entries()) {
  //   axios.post("/user/login", { formData12 });
  // }

  // }
  // axios
  //   .post("http://localhost:3150/admin/product", formData12)
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //

  function choosefile(fileinput) {
    const imager = document.querySelector(".input_file");
    console.log(43, imager.files);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imager.files[0]);
    fileReader.addEventListener("load", function () {
      setImage(this.result);
      document.querySelector(".chooseImage").setAttribute("src", this.result);
      console.log(48, this.result);
      console.log(49, document.querySelector(".chooseImage"));
    });

    // console.log(fileinput);

    // if (fileinput.files && fileinput.files[0]) {
    //   var reader = new FileReader();
    //   reader.onload = function (e) {
    //     document
    //       .querySelector(".chooseImage")
    //       .setAttribute("src", e.target.result);
    //   };
    //   reader.readAsDataURL(fileinput.files[0]);
    // }
    console.log(imager);
  }
  function saveUp() {
    let avatar = document.querySelector(".input_file").value;
    let date = document.querySelector(".user_date").value;
    let name = document.querySelector("#NewEmail").value;
    let email = document.querySelector(".mypage_right_email").value;
    // let name = document.querySelector('.')
  }
  function onof_newPhone() {
    document.querySelector(".newEmail_").style.display = "block";
  }
  function onof_newEmail() {
    document.querySelector(".NewPhone_").style.display = "block";
  }
  function of_modal() {
    document.querySelector(".newEmail_").style.display = "none";
    document.querySelector(".NewPhone_").style.display = "none";
  }
  return (
    <div className="mypage_">
      <div className="mypage_header">
        <span>Hồ Sơ Của Tôi</span>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>
      <div className="mypage_conter">
        <div className="mypage_conter_user">
          <div className="mypage_conter_user_leght">
            <span className="mypage_leght_user">Tên Đăng Nhập</span>
            <span className="mypage_leght_name">Tên</span>
            <span className="mypage_leght_email">Email</span>
            <span className="mypage_leght_phone">Số Điện Thoại</span>
            <span className="mypage_leght_shopname">Tên Shop</span>
            <span className="mypage_leght_check">Giới Tính</span>
            <span className="mypage_leght_date">Ngày Sinh</span>
          </div>
          <div className="mypage_conter_user_right">
            <input type="text" className="mypage_right_user" />
            <p className="mypage_right_text">
              Tên Đăng Nhập chỉ có thể thay đổi một lần
            </p>
            <input
              type="text"
              className="mypage_right_name"
              defaultValue={userInfo.username}
            />
            <div className="mypage_right_email1">
              <span className="mypage_right_email">{userInfo.email}</span>

              <span className="thaydoi" onClick={onof_newEmail}>
                Thay Đổi
              </span>
              {/* modal */}
              <div className="newEmail_">
                <span>Nhập Email</span>
                <input type="text" name="" id="NewEmail" />
                <button className="update">Lưu</button>
                <button className="close" onClick={of_modal}>
                  Close
                </button>
              </div>
            </div>
            <div className="mypage_right_phone1">
              <span>{userInfo.phone}</span>
              {/* modal */}
              <div className="NewPhone_">
                <span>Nhập Số điện thoại mới</span>
                <input type="text" name="" id="NewPhone" />
                <button className="update">Lưu</button>
                <button className="close" onClick={of_modal}>
                  Close
                </button>
              </div>
              <span className="thaydoi" onClick={onof_newPhone}>
                Thay Đổi
              </span>
            </div>
            <input type="text" className="mypage_right_shopname" />
            <div className="mypage_right_check">
              <input type="checkbox" name="" id="" />
              Nam
              <input type="checkbox" name="" id="" />
              Nữ
              <input type="checkbox" name="" id="" />
              Khác
            </div>
            <div className="mypage_right_date">
              <input type="date" className="user_date" />
            </div>
            <button className="mypage_right_update" onClick={saveUp}>
              Lưu
            </button>
          </div>
        </div>
        <div className="mypage_conter_imager">
          <img src={image} alt="" className="chooseImage" />
          {/* <button onClick={img_file}>Chọn Ảnh</button> */}
          <input
            type="file"
            className="input_file"
            id="imagerFile"
            accept="image/gif, image/jpg, image/pdg"
            onChange={choosefile}
          />
          <p>Dung lượng file tối đa 1 MB </p>
          <span>Định dạng: .JPEG, .PNG</span>
        </div>
      </div>
      {/* <form className="formlist" action="" encType="multipart/form-data">
        <span>
          productPic: anh
          <input
            className="productPic"
            placeholder="productPic"
            name="productPic"
            type="file"
          />
        </span>
      </form> */}
    </div>
  );
}

export default MyPage;
