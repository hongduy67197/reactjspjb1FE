import React from "react";
import order from "../../../assets/images/ordermenu.png";

function OrderAll(props) {
  const allOrder = props.userCart.listProduct
  const dataOrder = props.userOder
  // console.log(7,dataOrder)
  // console.log(8,dataOrder.idProduct.productType)
  // console.log(16,allOrder)
  // console.log(17, props.userCart.status)
  // console.log(36,data.data[0].listProduct[0].idProduct.productType)
  // console.log(36,data.data[0].listProduct[0].idProduct.price)
  // console.log(36,data.data[0].listProduct[0].idProduct.color)
  // console.log(37,data.data[0].listProduct[0].quantity)
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
