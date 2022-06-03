import React from "react";

function ResetPassword() {
  return (
    <div>
      <div className="resetPassword_">
        <div className="resetPassword_header">
          <span>Thay Đổi Mật Khẩu</span>
        </div>
        <div className="resetPassword_conter">
          <div className="resetPassword_left">
            <span className="password_last_text">Mật khẩu cũ</span>
            <span className="password_new_text">Mật khẩu mới</span>
            <span className="password_newagain_text">
              Nhập lại mật khẩu mới
            </span>
          </div>
          <div className="resetPassword_right">
            <input
              type="text"
              placeholder="Mật khẩu cũ"
              className="password_last"
            />
            <input
              type="text"
              placeholder="Mật khẩu mới"
              className="password_new"
            />
            <input
              type="text"
              placeholder="Nhập lại mật khẩu mới"
              className="password_newagain"
            />
            <button className="password_update">LƯU THAY ĐỔI</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
