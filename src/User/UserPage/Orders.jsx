import React, { useEffect, useState } from 'react';
import OrderAll from "./Order/OrderAll";
import OrderCheck from "./Order/OrderCheck";
import OrderDaGiao from "./Order/OrderDaGiao";
import OrderDaHuy from "./Order/OrderDaHuy";
import OrderDangGiao from "./Order/OrderDangGiao";
import OrderWaiting from "./Order/OrderWaiting";
import "./OrderCss.css";
import {getApi} from '../../api/config'





function Orders(props) {
  const [userCart,setUserCart]=useState([])
  function upCart(arr){
    setUserCart(arr)
  }
 
useEffect(() => {
  getApi('/user/orders')
  .then(function(data){
    console.log(24, data)
    console.log(25, data.data[4].listProduct)
    console.log(26, data.data[4].status)
    console.log(27, data.data[4].updatedAt)

    const newCart =data.data
    upCart(newCart)
  })
 .catch(function(orr){
  console.log(34,orr)
  })
}, [])
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
        <OrderAll userCart={userCart}></OrderAll>
      </div>
      <div className="orderCheck">
        <OrderCheck userCart={userCart}></OrderCheck>
      </div>
      <div className="orderDaGiao">
        <OrderDaGiao userCart={userCart}></OrderDaGiao>
      </div>
      <div className="orderWaiting">
        <OrderWaiting userCart={userCart}></OrderWaiting>
      </div>
      <div className="orderDangGiao">
        <OrderDangGiao userCart={userCart}></OrderDangGiao>
      </div>
      <div className="orderDaHuy">
        <OrderDaHuy userCart={userCart}></OrderDaHuy>
      </div>
    </div>
  );
}

export default Orders;
