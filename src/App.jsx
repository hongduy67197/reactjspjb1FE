// import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './Pages/Home';
import React, { useState, useEffect } from 'react';
import Product from './Pages/Product';
import ProductChild from './Pages/ProductChild';
import FilterProduct from './Pages/FilterProduct'
import 'antd/dist/antd.css'//ở trong nodemodum
// ===============================================
// bai duy
import AxiosDuy from './Pages/AxiosDuy'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios";
import ContextProvider from './componentContext/ContextProvider';
// ================================================
// antd import 
import Antd from './Pages/Antd'
//data
import productList from './data-tinh/dataold';
import listProductCode from './data-tinh/dataNewMix'

function App() {
  const [count1, setCount1] = useState(0)
  const [dataDuy, setDataDuy] = useState([])
  const [data123, setdata123] = useState([])
  const [show, setShow] = useState([])
  const [dataFilter, setDataFilter] = useState([])

  //axious bài a thái
  // useEffect(() => {
  //   axios.get('https://www.nodemy.vn/api/bootcamp-1-s')
  //     .then(function (res) {
  //       // console.log(res.data)
  //       setdata123(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [count1]);

  //axious bài duy
  // useEffect(() => {
  //   axios.get('http://localhost:3100/product')
  //     .then(function (res) {
  //       setDataDuy(res.data.product)
  //       setShow(res.data.product.slice(0, 2))
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [count1]);

  //---------------------------
  // axious project sellMobilePhone
  // useEffect(() => {
  //     axios.get('http://localhost:3150/admin/productcode/list?gidzl=C1YqIXSqjKmq1xHD4YczJ3OCkaeB8Ej4VGdZHbOjuH1o1kSKKoxc5I9GxnjJUkWPTGBeJ3SJ7J0t4J2qJ0')
  //       .then(function (res) {
  //         setDataDuy(res.data.product)
  //         setShow(res.data.product.slice(0, 2))
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }, [count1]);

  const filterProduct = {
    brand: ['Iphone', 'Samsung', 'Oppo', 'Vivo', 'Xiaomi', 'Realmi', 'Nokia', 'Itel', 'masstel'],
    price: ['dưới 2tr', 'từ 2- 4tr', 'từ 4-7tr', 'từ 7-13tr', 'từ 13-20tr', 'trên 20tr'],
    typePhone: ['android', 'Iphone(iOS)', 'Điện thoại phổ thông'],
    performance: ['chơi game/cấu hình cao', 'Pin khủng trên 5000 mAh', 'Sạc pin nhanh'],
    ram: ['2GB', '3GB', '4GB', '6GB', '8GB', '12GB'],
    rom: ['8GB', '16GB', '32GB', '64GB', '128GB', '256GB'],
    camera: ['chụp cận cảnh(macro)', 'chụp góc rộng', 'chụp xóa phông', 'chụp zoom xa'],
    special_features: ['Hỗ trợ 5g', 'Bảo mật khuôn mặt', 'bảo mật vân tay', 'Sạc không dây', 'Kháng nước , bụi'],
    design: ['Tràn viền', 'Mỏng nhẹ', 'Mặt lưng kính'],
    panel: ['nhỏ gọn dễ cầm', 'Từ 6inch trở lên', 'Màn hình gập']
  }
  let product = [
    { ten: 'Bikini', gia: 300, soLuong: 13, select: false, SL: 1, },
    { ten: 'Sơ mi ', gia: 300, soLuong: 14, select: false, SL: 1 },
    { ten: 'Khoác', gia: 900, soLuong: 16, select: false, SL: 1 },
    { ten: 'Len', gia: 100, soLuong: 15, select: false, SL: 1 },
    { ten: 'Choàng', gia: 37, soLuong: 5, select: false, SL: 1 },
    { ten: 'Dạ ', gia: 300, soLuong: 6, select: false, SL: 1 },
    { ten: 'Lông cừu', gia: 90, soLuong: 8, select: false, SL: 1 },
    { ten: 'Hoa', gia: 10, soLuong: 8, select: false, SL: 1 },
    { ten: 'Quần âu', gia: 370, soLuong: 9, select: false, SL: 1 },
  ]
 let productCode = []
  // const [ProductList, setProductList] = useState(listProductCode.listProductCode)
  const [ProductList, setProductList] = useState(productList)
  //---------------------------
  // axious project sellMobilePhone
  // useEffect(() => {
  //     axios.get('http://localhost:3150/user/fillter?idCategories=628c8b29e8654d960a5c8983')
  //       .then(function (res) {
  //         // setDataDuy(res.data.product)
  //         // setShow(res.data.product.slice(0, 2))
  //         console.log(932,res.data.listProductCode)
  //         setProductList(res.data.listProductCode)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }, [count1]);
  let cart = [];
  let budget = 10000000;

  const [data, setData] = useState(product)
  const [dataCart, setDataCart] = useState(cart)
  const [dataProduct, setDataProduce] = useState(productCode)
  const [count, setCount] = useState(0)
  const [filter, setFilterProduct] = useState(filterProduct)
  const [wallet, setWallet] = useState(budget)

  function changeCart(newData) {
    setDataCart([...dataCart, newData])
  }
  function changeCart2(newData) {
    setDataCart(newData)
  }
  function up() {
    setCount(count + 1)
  }

  function changeState(newData) {
    setData(newData)
  }
  function changeStateProduct(newData, i) {
    dataProduct[i].ProductList = newData;
    setDataProduce(dataProduct)
  }
  function changeWallet(newData) {
    setWallet(wallet + newData)
  }
  function changeFilterData(dataFilter) {
    setDataFilter(dataFilter)
  }
  function loadagain() {
    setCount1(count1 + 1)
  }
  function setagain(newab) {
    setShow(newab)
  }
  // -------------------function biến đổi tiếng việt có dấu thành không dấu.
  function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ", "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ"
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
      var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider testData={'something'}>
          <Header />
          <Routes>
            <Route path="/" element={<Home data={data} up={up} changeCart2={changeCart2} changeState={changeState} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} />}></Route>
            <Route path="/product" element={<Product filter={filter} data={ProductList} up={up} changeCart2={changeCart2} changeState={changeState} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} />}></Route>
            <Route path="/axiosduy" element={<AxiosDuy data={dataDuy} loadagain={loadagain} show={show} setagain={setagain} />}></Route>
            {dataFilter.map((val, i) => {
              return (
                <Route path={`/product/filter/${removeAccents(val.ProductName).split(' ').join('')}`} element={<ProductChild dataFilter={dataFilter} chimuc={i} dataval={ProductList} data={data} up={up} changeCart2={changeCart2} changeState={changeState} changeStateProduct={changeStateProduct} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} />} />
              )
            })}
            {/* route for filter brand */}
            {filterProduct.brand.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='brand' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct} up={up} changeCart2={changeCart2} changeState={changeState} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter giá */}
            {filterProduct.price.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='price' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct} up={up} changeCart2={changeCart2} changeState={changeState} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} changeFilterData={changeFilterData} />} />)
            })}
            {/* route for filter loại điện thoại */}
            {filterProduct.typePhone.map((val, i) => {

              return (<Route path={`/product/filter`} element={<FilterProduct referent='typePhone' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct} up={up} changeCart2={changeCart2} changeState={changeState} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter hiệu năng và pin */}
            {filterProduct.performance.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='performance' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct} up={up} changeCart2={changeCart2} changeState={changeState} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter ram */}
            {filterProduct.ram.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='ram' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct} up={up} changeCart2={changeCart2} changeState={changeState} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter bộ nhớ trong */}
            {filterProduct.rom.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='rom' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct} up={up} changeCart2={changeCart2} changeState={changeState} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter bộ nhớ camera */}
            {filterProduct.camera.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='camera' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct} up={up} changeCart2={changeCart2} changeState={changeState} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter special feature */}
            {filterProduct.special_features.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='special' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct} up={up} changeCart2={changeCart2} changeState={changeState} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter design  */}
            {filterProduct.design.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='design' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct} up={up} changeCart2={changeCart2} changeState={changeState} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter panel */}
            {filterProduct.panel.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='panel' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct} up={up} changeCart2={changeCart2} changeState={changeState} changeCart={changeCart} dataCart={dataCart} wallet={wallet} changeWallet={changeWallet} changeFilterData={changeFilterData} />} />)
            })}
            <Route path='*' element={<>Error</>} />
          </Routes>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
