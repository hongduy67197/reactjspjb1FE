// import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import React, { useState, useEffect } from 'react';
import ProductChild from './Pages/ProductChild';
import FilterProduct from './Pages/FilterProduct'
import 'antd/dist/antd.css'//ở trong nodemodum
// ===============================================
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios";
import ContextProvider from './componentContext/ContextProvider';
// ================================================
//data
import productList from './data-tinh/dataold';
import listProductCode from './data-tinh/dataNewMix'

function App() {
  const [count1, setCount1] = useState(0)
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
    productType: ['android', 'Iphone(iOS)', 'Điện thoại phổ thông'],
    performanceProduct: ['chơi game/cấu hình cao', 'Pin khủng trên 5000 mAh', 'Sạc pin nhanh'],
    ram: ['2GB', '3GB', '4GB', '6GB', '8GB', '12GB'],
    rom: ['8GB', '16GB', '32GB', '64GB', '128GB', '256GB'],
    cameraProduct: ['chụp cận cảnh(macro)', 'chụp góc rộng', 'chụp xóa phông', 'chụp zoom xa'],
    specialFeatures: ['Hỗ trợ 5g', 'Bảo mật khuôn mặt', 'bảo mật vân tay', 'Sạc không dây', 'Kháng nước , bụi'],
    design: ['Tràn viền', 'Mỏng nhẹ', 'Mặt lưng kính'],
    panel: ['nhỏ gọn dễ cầm', 'Từ 6inch trở lên', 'Màn hình gập']
  }
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


  const [dataProduct, setDataProduce] = useState(productCode)
  const [count, setCount] = useState(0)
  const [filter, setFilterProduct] = useState(filterProduct)
  function changeStateProduct(newData, i) {
    dataProduct[i].ProductList = newData;
    setDataProduce(dataProduct)
  }
  function changeFilterData(dataFilter) {
    setDataFilter(dataFilter)
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
        <ContextProvider>
          <Header />
          <Routes>
            {dataFilter.map((val, i) => {
              return (
                <Route path={`/product/filter/${removeAccents(val.productName).split(' ').join('')}`} element={<ProductChild dataFilter={dataFilter} chimuc={i} dataval={ProductList}    changeStateProduct={changeStateProduct}  />} />
              )
            })}
            {/* route for filter brand */}
            {filterProduct.brand.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='brand' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct}    changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter giá */}
            {filterProduct.price.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='price' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct}    changeFilterData={changeFilterData} />} />)
            })}
            {/* route for filter loại điện thoại */}
            {filterProduct.productType.map((val, i) => {

              return (<Route path={`/product/filter`} element={<FilterProduct referent='typePhone' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct}    changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter hiệu năng và pin */}
            {filterProduct.performanceProduct.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='performanceProduct' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct}    changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter ram */}
            {filterProduct.ram.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='ram' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct}    changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter bộ nhớ trong */}
            {filterProduct.rom.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='rom' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct}    changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter bộ nhớ cameraProduct */}
            {filterProduct.cameraProduct.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='cameraProduct' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct}    changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter special feature */}
            {filterProduct.specialFeatures.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='special' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct}    changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter design  */}
            {filterProduct.design.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='design' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct}    changeFilterData={changeFilterData} />} />)

            })}
            {/* route for filter panel */}
            {filterProduct.panel.map((val, i) => {
              return (<Route path={`/product/filter`} element={<FilterProduct referent='panel' chimuc={val} dataval={ProductList} filter={filter} data={dataProduct}    changeFilterData={changeFilterData} />} />)
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
