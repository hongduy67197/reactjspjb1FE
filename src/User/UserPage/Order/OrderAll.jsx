import React from "react";
import order from "../../../assets/images/ordermenu.png";

function OrderAll(props) {
var data = []
let number =0
  const allOrder = props.userCart
  console.log(5,allOrder)
  for(let a=2;a<allOrder.length;a++)
  { number= allOrder.length-1
data.push(allOrder[a].listProduct)
  console.log(9,allOrder[a].listProduct)
// data.length=allOrder[a].listProduct
  }
  console.log(8,data)
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
        </tr>
       </thead>
       <tbody>
        {/* {allOrder.map(function(value, index){
          
          console.log('value',value.listProduct)

          // if(value.idProduct !==null){
          //   return (
          //     <tr key={index}>
          //       <td>{index+1}</td>
          //       <td>{value.idProduct.productType}</td>
          //       <td>{(value.idProduct.price)}</td>
          //       <td>{(value.quantity)}</td>
          //     </tr>
          //   )
          // }else{}
         
        })} */}
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
