import React from "react";
import order from "../../../assets/images/ordermenu.png";

function OrderAll() {
  return (
    <div>
      <div className="order_seach">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Tìm kiếm theo Tên Shop, ID đơn hàng hoặc Tên Sản Phẩm"
        />
      </div>
      <div className="order_conter">
        <div className="order_conter_null">
          <img src={order} alt="" />
          <p>Chưa có đơn hàng</p>
        </div>
        <div className="order_conter_file"></div>
      </div>
    </div>
  );
}

export default OrderAll;
