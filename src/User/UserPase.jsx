import React from "react";
import Header from "../Header/Header";
import Comment from "./UserPage/Comment";
import MyPage from "./UserPage/MyPage";
import Orders from "./UserPage/Orders";
import Promotion from "./UserPage/Promotion";
import Voucher from "./UserPage/Voucher";
import Menu from "./UserPage/Menu";
import { Link } from "react-router-dom";
import CapNhat from "./UserPage/Comment/CapNhat";
import DanhGia from "./UserPage/Comment/DanhGia";
import HoatDong from "./UserPage/Comment/HoatDong";
import KhuyenMai from "./UserPage/Comment/KhuyenMai";
import Vi from "./UserPage/Comment/Vi";

function UserPase() {
  function onof_comment() {
    document.querySelector(".comment").style.display = "block";
    document.querySelector(".mypage").style.display = "none";
    document.querySelector(".order").style.display = "none";
    document.querySelector(".promotion").style.display = "none";
    document.querySelector(".voucher").style.display = "none";
  }
  function onof_mypage() {
    document.querySelector(".mypage").style.display = "block";
    document.querySelector(".comment").style.display = "none";
    document.querySelector(".order").style.display = "none";
    document.querySelector(".promotion").style.display = "none";
    document.querySelector(".voucher").style.display = "none";
  }
  function onof_order() {
    document.querySelector(".order").style.display = "block";
    document.querySelector(".mypage").style.display = "none";
    document.querySelector(".comment").style.display = "none";
    document.querySelector(".promotion").style.display = "none";
    document.querySelector(".voucher").style.display = "none";
  }
  function onof_promotion() {
    document.querySelector(".promotion").style.display = "block";
    document.querySelector(".mypage").style.display = "none";
    document.querySelector(".comment").style.display = "none";
    document.querySelector(".order").style.display = "none";
    document.querySelector(".voucher").style.display = "none";
  }
  function onof_voucher() {
    document.querySelector(".voucher").style.display = "block";
    document.querySelector(".mypage").style.display = "none";
    document.querySelector(".comment").style.display = "none";
    document.querySelector(".order").style.display = "none";
    document.querySelector(".promotion").style.display = "none";
  }
  // COMMENT
  function onof_capNhat() {
    document.querySelector(".capnhat").style.display = "block";
    document.querySelector(".danhgia").style.display = "none";
    document.querySelector(".hoatdong").style.display = "none";
    document.querySelector(".khuyenmai").style.display = "none";
    document.querySelector(".vi").style.display = "none";
  }
  function onof_danhGia() {
    document.querySelector(".capnhat").style.display = "none";
    document.querySelector(".danhgia").style.display = "block";
    document.querySelector(".hoatdong").style.display = "none";
    document.querySelector(".khuyenmai").style.display = "none";
    document.querySelector(".vi").style.display = "none";
  }
  function onof_hoatDong() {
    document.querySelector(".capnhat").style.display = "none";
    document.querySelector(".danhgia").style.display = "none";
    document.querySelector(".hoatdong").style.display = "block";
    document.querySelector(".khuyenmai").style.display = "none";
    document.querySelector(".vi").style.display = "none";
  }
  function onof_khuyenMai() {
    document.querySelector(".capnhat").style.display = "none";
    document.querySelector(".danhgia").style.display = "none";
    document.querySelector(".hoatdong").style.display = "none";
    document.querySelector(".khuyenmai").style.display = "block";
    document.querySelector(".vi").style.display = "none";
  }
  function onof_vi() {
    document.querySelector(".capnhat").style.display = "none";
    document.querySelector(".danhgia").style.display = "none";
    document.querySelector(".hoatdong").style.display = "none";
    document.querySelector(".khuyenmai").style.display = "none";
    document.querySelector(".vi").style.display = "block";
  }
  function of_thongBao() {
    document.querySelector(".onof_thongBao").style.display = "none";
  }
  function on_thongBao() {
    document.querySelector(".onof_thongBao").style.display = "block";
  }
  return (
    <div>
      {/* <Header></Header> */}
      <div className="userPage_">
        <div className="userPage_page">
          <Menu
            onof_comment={onof_comment}
            onof_mypage={onof_mypage}
            onof_order={onof_order}
            onof_promotion={onof_promotion}
            onof_voucher={onof_voucher}
            // ==============
            onof_capNhat={onof_capNhat}
            onof_danhGia={onof_danhGia}
            onof_hoatDong={onof_hoatDong}
            onof_khuyenMai={onof_khuyenMai}
            onof_vi={onof_vi}
            of_thongBao={of_thongBao}
            on_thongBao={on_thongBao}
          ></Menu>
        </div>
        <div className="userPage_conter">
          <div className="userPage_button">
            <button onClick={onof_comment}>comment</button>
            <button onClick={onof_mypage}>mypage</button>
            <button onClick={onof_order}>order</button>
            <button onClick={onof_promotion}>promotion</button>
            <button onClick={onof_voucher}>voucher</button>
          </div>
          {/* bật tắt, chuyển trang phần PAGE */}
          <div className="comment">
            <Comment></Comment>
          </div>
          <div className="mypage">
            <MyPage></MyPage>
          </div>
          <div className="order">
            <Orders></Orders>
          </div>
          <div className="promotion">
            <Promotion></Promotion>
          </div>
          <div className="voucher">
            <Voucher></Voucher>
          </div>
          {/* bật tắt, chuyển trang phần THÔNG BÁO */}
          <div className="onof_thongBao">
            <div className="capnhat">
              <CapNhat></CapNhat>
            </div>
            <div className="danhgia">
              <DanhGia></DanhGia>
            </div>
            <div className="hoatdong">
              <HoatDong></HoatDong>
            </div>
            <div className="khuyenmai">
              <KhuyenMai></KhuyenMai>
            </div>
            <div className="vi">
              <Vi></Vi>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPase;
