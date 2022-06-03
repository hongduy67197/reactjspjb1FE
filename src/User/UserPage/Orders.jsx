import React from "react";
import order from "../../assets/images/ordermenu.png";
import OrderAll from "./Order/OrderAll";
import OrderCheck from "./Order/OrderCheck";
import OrderDaGiao from "./Order/OrderDaGiao";
import OrderDaHuy from "./Order/OrderDaHuy";
import OrderDangGiao from "./Order/OrderDangGiao";
import OrderWaiting from "./Order/OrderWaiting";

function Orders() {
  function onofAll() {
    document.querySelector(".orderAll").style.display = "block";
    document.querySelector(".orderCheck").style.display = "none";
    document.querySelector(".orderDaGiao").style.display = "none";
    document.querySelector(".orderWaiting").style.display = "none";
    document.querySelector(".orderDaHuy").style.display = "none";
    document.querySelector(".orderDangGiao").style.display = "none";
  }
  function onofCheck() {
    document.querySelector(".orderAll").style.display = "none";
    document.querySelector(".orderCheck").style.display = "block";
    document.querySelector(".orderDaGiao").style.display = "none";
    document.querySelector(".orderWaiting").style.display = "none";
    document.querySelector(".orderDaHuy").style.display = "none";
    document.querySelector(".orderDangGiao").style.display = "none";
  }
  function onofDaGiao() {
    document.querySelector(".orderAll").style.display = "none";
    document.querySelector(".orderCheck").style.display = "none";
    document.querySelector(".orderDaGiao").style.display = "block";
    document.querySelector(".orderWaiting").style.display = "none";
    document.querySelector(".orderDaHuy").style.display = "none";
    document.querySelector(".orderDangGiao").style.display = "none";
  }
  function onofWaiting() {
    document.querySelector(".orderAll").style.display = "none";
    document.querySelector(".orderCheck").style.display = "none";
    document.querySelector(".orderDaGiao").style.display = "none";
    document.querySelector(".orderWaiting").style.display = "block";
    document.querySelector(".orderDaHuy").style.display = "none";
    document.querySelector(".orderDangGiao").style.display = "none";
  }
  function onofDangGiao() {
    document.querySelector(".orderAll").style.display = "none";
    document.querySelector(".orderCheck").style.display = "none";
    document.querySelector(".orderDaGiao").style.display = "none";
    document.querySelector(".orderWaiting").style.display = "none";
    document.querySelector(".orderDaHuy").style.display = "none";
    document.querySelector(".orderDangGiao").style.display = "block";
  }
  function onofDaHuy() {
    document.querySelector(".orderAll").style.display = "none";
    document.querySelector(".orderCheck").style.display = "none";
    document.querySelector(".orderDaGiao").style.display = "none";
    document.querySelector(".orderWaiting").style.display = "none";
    document.querySelector(".orderDaHuy").style.display = "block";
    document.querySelector(".orderDangGiao").style.display = "none";
  }
  return (
    <div>
      <div className="order_header">
        <button onClick={onofAll}>Tất cả</button>
        <button onClick={onofCheck}>Chờ xác nhận</button>
        <button onClick={onofWaiting}>Chờ lấy hàng</button>
        <button onClick={onofDangGiao}>Đang giao</button>
        <button onClick={onofDaGiao}>Đã giao</button>
        <button onClick={onofDaHuy}>Đã hủy </button>
      </div>
      <div className="orderAll">
        <OrderAll></OrderAll>
      </div>
      <div className="orderCheck">
        <OrderCheck></OrderCheck>
      </div>
      <div className="orderDaGiao">
        <OrderDaGiao></OrderDaGiao>
      </div>
      <div className="orderWaiting">
        <OrderWaiting></OrderWaiting>
      </div>
      <div className="orderDangGiao">
        <OrderDangGiao></OrderDangGiao>
      </div>
      <div className="orderDaHuy">
        <OrderDaHuy></OrderDaHuy>
      </div>
    </div>
  );
}

export default Orders;
