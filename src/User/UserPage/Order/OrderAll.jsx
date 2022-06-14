import React from "react";
import order from "../../../assets/images/ordermenu.png";

function OrderAll(props) {
  const allOrder = props.userCart.listProduct
  // console.log(16,allOrder)
  // console.log(17, props.userCart.status)
  return (
    <div>
      <div className="order_seach">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Tìm kiếm theo Tên Shop, ID đơn hàng hoặc Tên Sản Phẩm"
        />
      </div>
      {allOrder?
     ( <table>
       <thead>
        <tr>
          <th>STT</th>
          <th>Sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>status</th>
        </tr>
       </thead>
       <tbody>
        {allOrder.map(function(value, index){
          if(value.idProduct !==null){
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{value.idProduct.productType}</td>
                <td>{(value.idProduct.price)}</td>
                <td>{(value.quantity)}</td>
                <td>{props.userCart.status}</td>
              </tr>
            )
          }else{}
         
        })}
       </tbody>
        </table>):
     ( <div className="order_conter">
      <div className="order_conter_null">
        <img src={order} alt="" />
        <p>Chưa có đơn hàng</p>
      </div>
      <div className="order_conter_file"></div>
    </div>
    )
    }
  </div>
  );
}

export default OrderAll;
