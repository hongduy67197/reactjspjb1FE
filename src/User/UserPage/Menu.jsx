import React from "react";
import Comment from "./Comment";
import MyPage from "./MyPage";
import Orders from "./Orders";
import Promotion from "./Promotion";
import Voucher from "./Voucher";
import pro from "../../assets/images/newFrent.png";
import user from "../../assets/images/user.png";
import order from "../../assets/images/orders.png";
import comment from "../../assets/images/comment.png";
import voucher from "../../assets/images/voucher.png";
import userlogo from "../../assets/images/userlogo.jpg";
import { Link } from "react-router-dom";
function Menu(props) {
  function onof_promotion() {
    props.onof_promotion();
  }
  function onof_mypage() {
    props.onof_mypage();
  }
  function onof_orders() {
    props.onof_order();
  }
  function onof_comment() {
    props.onof_comment();
  }
  function onof_voucher() {
    props.onof_voucher();
  }
  return (
    <div className="menu_">
      <div className="menu_header">
        <img src={userlogo} alt="img" />
        <span>hello</span>
        <button>
          <i className="fa-solid fa-pen"></i>Sửa Hồ Sơ
        </button>
      </div>
      <div className="menu_promotion">
        <img src={pro} alt="" />
        <button onClick={onof_promotion}>Ưu Đãi Dành Riêng Bạn</button>
      </div>
      <div className="menu_mypage">
        <img src={user} alt="" />
        <button onClick={onof_mypage}>Tài Khoản Của Tôi</button>
      </div>
      <div className="menu_orders">
        <img src={order} alt="" />
        <button onClick={onof_orders}>Đơn Mua</button>
      </div>
      <div className="menu_comment">
        <img src={comment} alt="" />
        <button onClick={onof_comment}>Thông Báo</button>
      </div>
      <div className="menu_voucher">
        <img src={voucher} alt="" />
        <button onClick={onof_voucher}>Kho Voucher</button>
      </div>
    </div>
  );
}

export default Menu;
