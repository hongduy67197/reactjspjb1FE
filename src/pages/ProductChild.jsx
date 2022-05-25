import React from 'react'
import '../App.css'
import '../asset/css/base-productChild.css'
let index;
let index2;
let checka = 0;
function ProductChild(props) {
  console.log(8,props.dataFilter,props.chimuc)

  let chimuc = props.chimuc
  //   let newUpdate = props.data
  let newUpdateCart = props.dataCart
  let newUpdate = JSON.parse(JSON.stringify(props.dataval));
  function changeCart(i) {
    console.log(8, props.dataval.ProductList[i].price * props.dataval.ProductList[i].SL)
    checka = checka + (props.dataval.ProductList[i].price * props.dataval.ProductList[i].SL)
    console.log(checka)

    if (checka > props.wallet) {
      alert('Không đủ tiền thanh toán, Hãy nạp thêm tiền để mua thêm !!!!')
      checka = checka - (props.dataval.ProductList[i].price * props.dataval.ProductList[i].SL)
      return;
    }

    console.log(8, newUpdate[i]);
    console.log(9, newUpdate);
    //check trùng
    if (props.dataCart.length == 0) {
      newUpdate[i].storage = newUpdate[i].storage - newUpdate[i].SL;
      if (newUpdate[i].storage == 0) {
        newUpdate.splice(i, 1)
        props.changeStateProduct(newUpdate, chimuc)
      }
      props.changeStateProduct(newUpdate, chimuc)
      props.changeCart(newUpdate[i])

    } else {
      for (let j = 0; j < props.dataCart.length; j++) {
        if (props.dataval.ProductList[i].size === props.dataCart[j].size) {
          props.dataCart[j].SL = props.dataCart[j].SL * 1 + newUpdate[i].SL * 1;
          props.changeStateProduct(newUpdate, chimuc)
          newUpdate[i].storage = newUpdate[i].storage - newUpdate[i].SL;
          if (newUpdate[i].storage == 0 || newUpdate[i].storage < 0) {
            newUpdate.splice(i, 1)
            props.changeStateProduct(newUpdate, chimuc)
          }

          break;
        } if (j == (props.dataCart.length - 1)) {
          newUpdate[i].storage = newUpdate[i].storage - 1;
          if (newUpdate[i].storage == 0) {
            newUpdate.splice(i, 1)
            props.changeStateProduct(newUpdate, chimuc)
          }
          props.changeStateProduct(newUpdate, chimuc)
          props.changeCart(newUpdate[i])
        }
      }
    }
    // props.changeState(newUpdate)

    props.up()

    // newUpdate[i].select = true;

  }
  //   //delete
  function deleteItem(i) {
    console.log(i)
    newUpdate.splice(i, 1)
    console.log(newUpdate)
    props.changeStateProduct(newUpdate, chimuc)
    props.up()
  }

  function modify(i) {
    index = i;
    document.querySelector('#modiname').value = newUpdate[i].size
    document.querySelector('#modigia').value = newUpdate[i].price
    document.querySelector('#modisoluong').value = newUpdate[i].storage
    document.querySelector('#modimau').value = newUpdate[i].color
    document.querySelector('#modichosed').value = newUpdate[i].SL
  }
  function confirm() {
    console.log(index)
    newUpdate[index].size = document.querySelector('#modiname').value
    newUpdate[index].price = document.querySelector('#modigia').value
    newUpdate[index].storage = document.querySelector('#modisoluong').value
    newUpdate[index].color = document.querySelector('#modimau').value
    newUpdate[index].SL = document.querySelector('#modichosed').value
    props.changeStateProduct(newUpdate, chimuc)
    props.up()
  }
  function add() {
    let size = document.querySelector('#modiname').value
    let price = document.querySelector('#modigia').value
    let storage = document.querySelector('#modisoluong').value
    let Img = newUpdate[newUpdate.length - 1].Img;
    console.log(Img)
    let color = document.querySelector('#modimau').value
    console.log(color)

    let SL = 1;
    props.changeStateProduct([...newUpdate, { size, price, storage, Img, color, SL }], chimuc)
    console.log(newUpdate)
    props.up()
  }
  function topup() {
    var money = document.querySelector('#topup').value * 1
    props.changeWallet(money)
  }
  function deleteCart(i) {
    newUpdateCart.splice(i, 1)
    props.changeCart2(newUpdateCart)
    props.up()
  }
  function modifyCart(i) {
    index2 = i;
    document.querySelector('#modinameCart').value = newUpdateCart[i].size
    document.querySelector('#modigiaCart').value = newUpdateCart[i].price
    document.querySelector('#modisoluongCart').value = newUpdateCart[i].SL
  }
  function confirmCart() {
    console.log(index2)
    newUpdateCart[index2].size = document.querySelector('#modinameCart').value
    newUpdateCart[index2].price = document.querySelector('#modigiaCart').value
    newUpdateCart[index2].SL = document.querySelector('#modisoluongCart').value
    props.changeCart2(newUpdateCart)
    props.up()
  }

  return (
    <>
     <div class="container">
        <div class="product-detail-wrap">
            <div class="image-wrap">
                <div class="image-primary">
                    <img src={props.dataFilter[props.chimuc].productPic[0]} alt=""></img>

                </div>
                <div class="range-img">
                    <img src="https://cf.shopee.vn/file/e891e6f900bf8b1760a343231e31f726" alt=""></img>
                    <img src="https://cf.shopee.vn/file/e891e6f900bf8b1760a343231e31f726" alt=""></img>
                    <img src="https://cf.shopee.vn/file/e891e6f900bf8b1760a343231e31f726" alt=""></img>
                    <img src="https://cf.shopee.vn/file/e891e6f900bf8b1760a343231e31f726" alt=""></img>
                    <img src="https://cf.shopee.vn/file/e891e6f900bf8b1760a343231e31f726" alt=""></img>
                    
                </div>
            </div>
            <div class="content-right-wrap">
                <div class="title-wrap">
                    <div class="icon"></div>
                    <h1>{props.dataFilter[props.chimuc].ProductName}</h1>
                </div>
                <div class="evaluate-wrap">
                    <div class="star-evaluate"> 5sao</div>
                    <div class="number-comment">5090 đánh giá</div>
                    <div class="sold">{props.dataFilter[props.chimuc].countSold}</div>
                </div>
                <div class="price-wrap">
                    <div class="price">{props.dataFilter[props.chimuc].price}</div>
                    <div class="discount">{props.dataFilter[props.chimuc].Sale}</div>
                </div>
                <div class="product-color-wrap">
                    <div class="product-color-tittle">Màu sắc:</div>
                    <div class="product-color-wrap-child-color">
                        <div class="product-color">xanh</div>
                    <div class="product-color">đỏ</div>
                    <div class="product-color">tím</div>
                    </div>   
                </div>
                <div class="count-buy-wrap">
                    <div class="count-buy-wrap-title">Số lượng</div>
                    <div class="plus-subtract">
                        <div class="plus">+</div>
                        <div class="number-plus-subtract">123</div>
                        <div class="subtract">-</div>
                    </div>
                    <div class="available-product">{props.dataFilter[props.chimuc].storage} sản phẩm có sẵn</div>
                </div> 
                <div class="add-to-cart-wrap">
                    <button class="add-to-cart">thêm vào giỏ hàng</button>
                    <button class="buy-now">mua ngay</button>
                </div>
            </div>

        </div>
    </div>
      <div>


        <h1>{props.dataval.ProductName}</h1>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>NAME</th>
              <th>IMG</th>
              <th>COLOR</th>
              <th>SIZE</th>
              <th>GIÁ</th>
              <th>SALE</th>
              <th>STORAGE</th>
              {/* <th>STATUS</th> */}
              <th>THÀNH TIỀN</th>
              <th>SL</th>
              <th>CHOSED</th>
              <th>DELETE</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>

            {props.dataval.map((val, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{props.dataval.ProductName}</td>
                  <td><img className="imgChild" src={val.Img} alt="" /></td>

                  <td style={{ backgroundColor: `${val.color}` }}>{val.color}</td>
                  <td>{val.size}</td>
                  <td>{val.price.toLocaleString()}</td>
                  <td>{props.dataval.Sale}</td>
                  <td>{val.storage}</td>
                  {/* <td>{val.select ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-x"></i>}</td> */}
                  <td>{(val.price * val.storage * (100 - (Number.parseFloat(props.dataval.Sale))) / 100).toLocaleString()}</td>
                  <td>{val.SL}</td>
                  <td><button onClick={() => { changeCart(i) }}>add cart</button></td>
                  <td><button onClick={() => { deleteItem(i) }}>xóa</button></td>
                  <td><button onClick={() => { modify(i) }}>sửa</button></td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr id="tfootadd">
              <td colSpan="13"><button onClick={add} id="tfootadd_button">+</button></td>
            </tr>
            <tr >
              <td colSpan="13"><div className="wrap-modify">
                <input id="modiname" placeholder="Thay đổi size" type="text" />
                <input id="modigia" placeholder="Thay đổi giá hàng" type="number" />
                <input id="modisoluong" placeholder="Thay đổi số lượng" type="number" />
                <input type='text' id="modimau" placeholder="Thay đổi màu" />
                <input id="modichosed" placeholder="thay đổi số lượng" type="text" />
              </div>
              </td>
            </tr>
            <tr id="tfootconfirm">
              <td colSpan="13"><button onClick={confirm}>confirm</button></td>
            </tr>
          </tfoot>
        </table>
        {/* =======*/}
        {/* giỏ hàng */}
        <div className="budget gioHang">Ngân sách: <b>{props.wallet}</b>  <button onClick={topup}>Nạp tiền </button><input id="topup" type="number" /></div>
        <div className=""><i className="fa-solid fa-cart-arrow-down"></i></div>
        <div className="">Giỏ hàng</div>
        <table id="gioHang" className="" >
          <thead>
            <tr>
              <th>STT</th>
              <th>SIZE</th>
              <th>GIÁ</th>
              <th>SỐ LƯỢNG</th>
              {/* <th>STATUS</th> */}
              <th>THÀNH TIỀN</th>
              {/* <th>CHOSED</th> */}
              <th>DELETE</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>

            {props.dataCart.map((val, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{val.size}</td>
                  <td>{val.price}</td>
                  <td>{val.SL}</td>
                  {/* <td>{val.select ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-x"></i>}</td> */}
                  <td>{(val.price * val.SL).toLocaleString()}</td>
                  {/* <td><button  >add cart</button></td> */}
                  <td><button onClick={() => { deleteCart(i) }}>xóa</button></td>
                  <td><button onClick={() => { modifyCart(i) }}>sửa</button></td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr id="tfootadd">
              <td colSpan="4">tổng tiền</td>
              <td id="tfoottopup">
                {
                  props.dataCart.reduce((as, val) => {
                    let a = val.price * val.SL
                    return as + a;
                  }, 0)
                }
              </td>
              <td colSpan="3"></td>
            </tr>
            <tr >
              <td colSpan="9"><div className="wrap-modify">
                <input id="modinameCart" placeholder="Sửa size" type="text" />
                <input id="modigiaCart" placeholder="Sửa giá" type="text" />
                <input id="modisoluongCart" placeholder="Sửa Số lượng" type="text" />
              </div>
              </td>
            </tr>
            <tr id="tfootconfirm">
              <td colSpan="9"><button onClick={confirmCart}>confirm</button></td>
            </tr>
            <tr id="tfootthanhtoan">
              <td colSpan="9"><button >Thanh Toán</button></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>


  )
}

export default ProductChild