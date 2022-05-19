import React, { useState } from "react";
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
import CapNhat from "./Comment/CapNhat";
import DanhGia from "./Comment/DanhGia";
import HoatDong from "./Comment/HoatDong";
import KhuyenMai from "./Comment/KhuyenMai";
import Vi from "./Comment/Vi";

function Menu(props) {
  function onof_promotion() {
    props.of_thongBao();
    props.onof_promotion();
    document.querySelector(".menu_comment_list").style.display = "none";
  }
  function onof_mypage() {
    props.of_thongBao();
    props.onof_mypage();
    document.querySelector(".menu_comment_list").style.display = "none";
  }
  function onof_orders() {
    props.of_thongBao();
    props.onof_order();
    document.querySelector(".menu_comment_list").style.display = "none";
  }
  function onof_comment() {
    props.onof_comment();
    props.on_thongBao();
    document.querySelector(".menu_comment_list").style.display = "block";
  }
  function onof_voucher() {
    props.of_thongBao();
    props.onof_voucher();
    document.querySelector(".menu_comment_list").style.display = "none";
  }

  function menu_capNhat() {
    props.onof_capNhat();
  }
  function menu_khuyenMai() {
    props.onof_khuyenMai();
  }
  function menu_vi() {
    props.onof_vi();
  }
  function menu_hoatDong() {
    props.onof_hoatDong();
  }
  function menu_danhGia() {
    props.onof_danhGia();
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
        <div className="menu_comment_list">
          <p onClick={menu_capNhat}>Cập Nhật Đơn Hàng</p>
          <p onClick={menu_khuyenMai}>Khuyến Mãi</p>
          <p onClick={menu_vi}>Cập Nhật Ví</p>
          <p onClick={menu_hoatDong}>Hoạt Động</p>
          <p onClick={menu_danhGia}>Cập Nhật Đánh Giá</p>
        </div>
      </div>
      <div className="menu_voucher">
        <img src={voucher} alt="" />
        <button onClick={onof_voucher}>Kho Voucher</button>
      </div>
    </div>
  );
}

export default Menu;
