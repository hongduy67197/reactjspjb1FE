import React from "react";
import userlogo from "../../../assets/images/userlogo.jpg";

function MyPage() {
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
            <input type="text" className="mypage_right_name" />
            <div className="mypage_right_email1">
              <span className="mypage_right_email">Email</span>
              <a href="">Thay Đổi</a>
            </div>
            <div className="mypage_right_phone1">
              <span></span> <a href="">Thêm</a>
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
              <input type="number" />
              <input type="number" />
              <input type="number" />
            </div>
            <button className="mypage_right_update">Lưu</button>
          </div>
        </div>
        <div className="mypage_conter_imager">
          <img src={userlogo} alt="" />
          <button>Chọn Ảnh</button>

          <p>Dung lượng file tối đa 1 MB </p>
          <span>Định dạng: .JPEG, .PNG</span>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
