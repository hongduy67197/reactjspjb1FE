import React from 'react'
import '../App.css'
let index;
let index2;
let checka = 0;

function Home(props) {
  // let newUpdate = props.data
  let newUpdateCart = props.dataCart
  let newUpdate = JSON.parse(JSON.stringify(props.data  ));


  function changeCart(i) {
    console.log(8, props.data[i].gia * props.data[i].SL)
    checka = checka + (props.data[i].gia * props.data[i].SL)
    console.log(checka)

    if (checka > props.wallet) {
      alert('Không đủ tiền thanh toán, Hãy nạp thêm tiền để mua thêm !!!!')
      checka = checka - (props.data[i].gia * props.data[i].SL)
      return;
    }

    console.log(8, newUpdate[i]);
    console.log(9, newUpdate);
    //check trùng
    if (props.dataCart.length == 0) {
      newUpdate[i].soLuong = newUpdate[i].soLuong-1; 
     if(newUpdate[i].soLuong == 0) {
       newUpdate.splice(i, 1)
       props.changeState(newUpdate)
      }
      props.changeState(newUpdate)
      props.changeCart(newUpdate[i])
      
    } else {
      for (let j=0; j < props.dataCart.length; j++) {
        if (props.data[i].ten === props.dataCart[j].ten) {
         props.dataCart[j].SL =  props.dataCart[j].SL+1;
          props.changeState(newUpdate)
          newUpdate[i].soLuong = newUpdate[i].soLuong-1; 
          if(newUpdate[i].soLuong == 0) {
            newUpdate.splice(i, 1)
            props.changeState(newUpdate)
           }
         
          break;
        }if(j==(props.dataCart.length-1)){
          newUpdate[i].soLuong = newUpdate[i].soLuong-1; 
          if(newUpdate[i].soLuong == 0) {
            newUpdate.splice(i, 1)
            props.changeState(newUpdate)
           }
          props.changeState(newUpdate)
          props.changeCart(newUpdate[i])
        }
      }
    }
    // props.changeState(newUpdate)

    props.up()

    // newUpdate[i].select = true;

  }
  //delete
  function deleteItem(i) {
    newUpdate.splice(i, 1)
    props.changeState(newUpdate)
    props.up()
  }

  function modify(i) {
    index = i;
    document.querySelector('#modiname').value = newUpdate[i].ten
    document.querySelector('#modigia').value = newUpdate[i].gia
    document.querySelector('#modisoluong').value = newUpdate[i].soLuong
  }
  function confirm() {
    console.log(index)
    newUpdate[index].ten = document.querySelector('#modiname').value
    newUpdate[index].gia = document.querySelector('#modigia').value
    newUpdate[index].soLuong = document.querySelector('#modisoluong').value
    props.changeState(newUpdate)
    props.up()
  }
  function add() {
    let ten = document.querySelector('#modiname').value
    let gia = document.querySelector('#modigia').value
    let soLuong = document.querySelector('#modisoluong').value
    props.changeState([...newUpdate, { ten, gia, soLuong }])
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
    document.querySelector('#modinameCart').value = newUpdateCart[i].ten
    document.querySelector('#modigiaCart').value = newUpdateCart[i].gia
    document.querySelector('#modisoluongCart').value = newUpdateCart[i].soLuong
  }
  function confirmCart() {
    console.log(index2)
    newUpdateCart[index2].ten = document.querySelector('#modinameCart').value
    newUpdateCart[index2].gia = document.querySelector('#modigiaCart').value
    newUpdateCart[index2].soLuong = document.querySelector('#modisoluongCart').value
    props.changeCart2(newUpdateCart)
    props.up()
  }

  return (
    <div>
      <h1>Gian Hàng</h1>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>NAME</th>
            <th>GIÁ</th>
            <th>STORAGE</th>
            {/* <th>STATUS</th> */}
            <th>THÀNH TIỀN</th>
            <th>CHOSED</th>
            <th>DELETE</th>
            <th>EDIT</th>
          </tr>
        </thead>
        <tbody>

          {props.data.map((val, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{val.ten}</td>
                <td>{val.gia}</td>
                <td>{val.soLuong}</td>
                {/* <td>{val.select ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-x"></i>}</td> */}
                <td>{val.gia * val.soLuong}</td>
                <td><button onClick={() => { changeCart(i) }}>add cart</button></td>
                <td><button onClick={() => { deleteItem(i) }}>xóa</button></td>
                <td><button onClick={() => { modify(i) }}>sửa</button></td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr id="tfootadd">
            <td colSpan="9"><button onClick={add} id="tfootadd_button">+</button></td>
          </tr>
          <tr >
            <td colSpan="9"><div className="wrap-modify">
              <input id="modiname" placeholder="Name goods" type="text" />
              <input id="modigia" placeholder="Giá hàng" type="number" />
              <input id="modisoluong" placeholder="Số lượng" type="number" />
              {/* <input id="modithanhtien" placeholder="" type="text" />
              <input id="modichosed" placeholder="" type="text" /> */}
            </div>
            </td>
          </tr>
          <tr id="tfootconfirm">
            <td colSpan="9"><button onClick={confirm}>confirm</button></td>
          </tr>
        </tfoot>
      </table>
      {/* giỏ hàng */}
      <div className="budget gioHang">Ngân sách: <b>{props.wallet}</b>  <button onClick={topup}>Nạp tiền </button><input id="topup" type="number" /></div>
      <div className=""><i className ="fa-solid fa-cart-arrow-down"></i></div>
      <div className="">Giỏ hàng</div>
      <table id="gioHang" className="" >
        <thead>
          <tr>
            <th>STT</th>
            <th>NAME</th>
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
                <td>{val.ten}</td>
                <td>{val.gia}</td>
                <td>{val.SL}</td>
                {/* <td>{val.select ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-x"></i>}</td> */}
                <td>{val.gia * val.SL}</td>
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
                  let a = val.gia * val.SL
                  return as + a;
                }, 0)
              }
            </td>
            <td colSpan="3"></td>
          </tr>
          <tr >
            <td colSpan="9"><div className="wrap-modify">
              <input id="modinameCart" placeholder="Name goods" type="text" />
              <input id="modigiaCart" placeholder="Giá hàng" type="text" />
              <input id="modisoluongCart" placeholder="Số lượng" type="text" />
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

  )
}

export default Home