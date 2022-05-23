import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="User/UserLogin">
        <button>Đăng Nhập</button>
      </Link>
      <Link to="User/UserSingIn">
        <button>Đăng Ký</button>
      </Link>
      <Link to="User/UserPase">
        <button>userPage</button>
      </Link>
    </div>
  );
}

export default Header;
