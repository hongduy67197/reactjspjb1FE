import React, { useEffect } from 'react';
import OrderAll from "./Order/OrderAll";
import OrderCheck from "./Order/OrderCheck";
import OrderDaGiao from "./Order/OrderDaGiao";
import OrderDaHuy from "./Order/OrderDaHuy";
import OrderDangGiao from "./Order/OrderDangGiao";
import OrderWaiting from "./Order/OrderWaiting";
import "./OrderCss.css";
import {getApi} from '../../api/config'
import { getUserCookie} from "../../refreshToken";
function Orders(props) {

//  url: '/admin/order/user/:idUer' type: GET tác dụng:  Hiển thị danh sách Order theo idUser
useEffect(() => {
//   async function oder(){
//     // await axios.get('/admin/order/user/:idUer')
//     await axios.get('/admin/order/user/:idUer')
//     .then(function(data){
//       console.log(19,data)
//     }
//     )
//     .catch((orr)=>{
//       console.log(23,orr)
//     }
//     )
//   }
// oder()
async function getAllUser (){
  let token = getUserCookie('user')
  console.log(147, token);
  try {
    const res = await getApi('/user/order/:idOrder')
    console.log(48,res)
    console.log(123)
    // setstate1(res.data)
  } catch (error) {
    console.log(168, error);
  }
}
getAllUser()

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
