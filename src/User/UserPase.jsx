import React from "react";
import Header from "../Header/Header";
import Comment from "./UserPage/Comment";
import MyPage from "./UserPage/MyPage";
import Orders from "./UserPage/Orders";
import Promotion from "./UserPage/Promotion";
import Voucher from "./UserPage/Voucher";
import Menu from "./UserPage/Menu";
import { Link } from "react-router-dom";

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
        </div>
      </div>
    </div>
  );
}

export default UserPase;
