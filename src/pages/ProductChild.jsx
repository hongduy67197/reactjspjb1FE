import React, { useEffect, useState } from 'react'
import '../App.css'
import '../asset/css/base-productChild.css'
let countproduct = 1;
function ProductChild(props) {
  let arrayOrigin = props.dataFilter[props.chimuc].products
  const [dem, setDem] = useState(0)
  const [count, setCount] = useState(countproduct)
  const [countStorage, setCountStorage] = useState(arrayOrigin[0].storage)
  const [priceProduct, setPriceProduct] = useState(arrayOrigin[0].price)
  let dataProduct = {
    id: 1234325,
    idCategory: 12355,
    productName: "iPhone 12 không có ram 1TB",
    price: 20990000,
    priceRangeCode: [21000000, 24000000, 28000000, 32000000],
    priceReferent: 'dưới 2tr',
    storage: 12,
    thumNail: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_12_mini_purple.png'],
    color: 'red',
    ram: '2GB',
    ramRange: ['2G', '4G', '8G', '16G'],
    rom: '8GB',
    romRange: ['12G', '24G', '28G', '36G'],
    brand: 'Itel',
    productType: 'Iphone(iOS)',
    performanceProduct: 'Pin khủng trên 5000 mAh',
    cameraProduct: 'chụp cận cảnh(macro)',
    specialFeatures: 'Tràn viền',
    design: 'Mỏng nhẹ',
    panel: 'nhỏ gọn dễ cầm',
    Category: "Apple",
    Sale: "12%",
    countSold: 413,
    createDate: 'Thu May 19 2022 14:42:57 GMT+0700',
    products: [
      {
        "_id": "629038822b7e291ffc3f6038",
        "idProductCode": "628dd9ddfc45279c29739e49",
        "price": 28290000,
        "priceRange": "trên 20tr",
        "storage": 10,
        "productPic": ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
        "color": "Xanh Dương",
        "ram": "68GB",
        "rom": "128 GB",
        "createDate": "2022-05-27T02:33:38.750Z",
        "suggest": "fales",
        "__v": 0
      },
      {
        "_id": "629038922b7e291ffc3f603a",
        "idProductCode": "628dd9ddfc45279c29739e49",
        "price": 28290000,
        "priceRange": "trên 20tr",
        "storage": 10,
        "productPic": ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
        "color": "Vàng đồng",
        "ram": "6 GB",
        "rom": "128 GB",
        "createDate": "2022-05-27T02:33:54.947Z",
        "suggest": "fales",
        "__v": 0
      },

      {
        "_id": "629039392b7e291ffc3f604f",
        "idProductCode": "628dd9ddfc45279c29739e49",
        "price": 29290000,
        "priceRange": "trên 20tr",
        "storage": 10,
        "productPic": ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
        "color": "Xanh lá",
        "ram": "12GB",
        "rom": "256 GB",
        "createDate": "2022-05-27T02:36:41.291Z",
        "suggest": "fales",
        "__v": 0
      },
      {
        "_id": "6290397a2b7e291ffc3f6053",
        "idProductCode": "628dd9ddfc45279c29739e49",
        "price": 40990000,
        "priceRange": "trên 20tr",
        "storage": 10,
        "productPic": ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
        "color": "Xanh lá",
        "ram": "6 GB",
        "rom": "512 GB",
        "createDate": "2022-05-27T02:37:46.205Z",
        "suggest": "fales",
        "__v": 0
      }
    ]
  }
  
  console.log(5, props.dataFilter[props.chimuc].products)
  // ram products
  let arrayOriginRam = [...new Set(arrayOrigin.map((val) => {
    return val.ram
  }))]
  console.log(11, arrayOriginRam)
  // rom products]
  let arrayOriginRom = [...new Set(arrayOrigin.map((val) => {
    return val.rom
  }))]
  const [filterRom, setFilterRom]= useState(arrayOriginRom)
  console.log(16, arrayOriginRom)
  // color product
  let arrayOriginColor = [...new Set(arrayOrigin.map((val) => {
    return val.color
  }))]
  const [filterColor, setFilterColor]= useState(arrayOriginColor)

  console.log(21, arrayOriginColor)

  // img product 
  let arrayOriginImg = []
  for(let i = 0; i<arrayOrigin.length; i++){
    for(let j =0; j< arrayOrigin[i].productPic.length; j++){
      arrayOriginImg.push(arrayOrigin[i].productPic[j])
    }
  }
  arrayOriginImg = [...new Set(arrayOriginImg)]
  console.log(117, arrayOriginImg)

  const[currentIMG , setCurrentIMG] = useState(arrayOriginImg[0])
  useEffect(() => {
    document.querySelector('#products-ram').classList.add('onButton')
    document.querySelector('#products-rom').classList.add('onButton')
    document.querySelector('#products-color').classList.add('onButton')
  }, [])
  useEffect(()=>{
    let queryRam = document.querySelectorAll('#products-ram')
    for(let i =0; i<queryRam.length;i++){
      if(queryRam[i].classList.contains('onButton')){
    let valueRam = queryRam[i].innerHTML
    console.log(116, valueRam)
    console.log('khong co gi')
    arrayOriginRom = [...new Set(arrayOrigin.filter((val) => {
      return val.ram === valueRam
    }).map((value)=>{
      return value.rom
    }))]
    arrayOriginColor = [...new Set(arrayOrigin.filter((val) => {
      return val.ram === valueRam
    }).map((value)=>{
      return value.color
    }))]
    console.log(140,arrayOriginRom)
    setFilterRom(arrayOriginRom)
    setFilterColor(arrayOriginColor)
  }
    }
  
},[dem])


  function increaseCount(){
    setCount(count+1)
    setCountStorage(countStorage -1)
  }
  function reduceCount(){
    setCount(count-1)
    setCountStorage(countStorage +1)

  }
  function checkExistClass(arr){
    for(let i =0;i<arr.length;i++){
      if(arr[i].classList.contains('onButton')){
        return arr[i]
      }
    }
  }
  function changePriceViaRam (e) {
    let listProductRam = document.querySelectorAll('#products-ram')
    setDem(dem+1)
    for(let i=0; i<listProductRam.length; i++){
      listProductRam[i].classList.remove('onButton')
    }
    e.target.classList.add('onButton')
    let listProductRom = document.querySelectorAll('#products-rom')
    let listProductColor =  document.querySelectorAll('#products-color')
    let valueOfFieldRam = checkExistClass(listProductRam).innerHTML
    let valueOfFieldRom = checkExistClass(listProductRom).innerHTML
    let valueOfFieldColor = checkExistClass(listProductColor).innerHTML
    console.log(144,valueOfFieldRam,valueOfFieldRom, valueOfFieldColor)
    let destinyPrice = arrayOrigin.filter((val,i)=>{
      return val.ram ===valueOfFieldRam && val.rom ===valueOfFieldRom && val.color ===valueOfFieldColor
    })
     console.log(148,destinyPrice[0].price)
     setPriceProduct(destinyPrice[0].price)
  }
  function changePriceViaRom (e) {
    let listProductRom = document.querySelectorAll('#products-rom')
    for(let i=0; i<listProductRom.length; i++){
      listProductRom[i].classList.remove('onButton')
    }
    e.target.classList.add('onButton')
    let listProductRam = document.querySelectorAll('#products-ram')
    let listProductColor =  document.querySelectorAll('#products-color')
    let valueOfFieldRam = checkExistClass(listProductRam).innerHTML
    let valueOfFieldRom = checkExistClass(listProductRom).innerHTML
    let valueOfFieldColor = checkExistClass(listProductColor).innerHTML
    console.log(144,valueOfFieldRam,valueOfFieldRom, valueOfFieldColor)
    let destinyPrice = arrayOrigin.filter((val,i)=>{
      return val.ram ===valueOfFieldRam && val.rom ===valueOfFieldRom && val.color ===valueOfFieldColor
    })
     console.log(148,destinyPrice[0].price)
     setPriceProduct(destinyPrice[0].price)

  }
  function changePriceViaColor (e) {
    let listProductColor = document.querySelectorAll('#products-color')
    for(let i=0; i<listProductColor.length; i++){
      listProductColor[i].classList.remove('onButton')
    }
    e.target.classList.add('onButton')
    let listProductRom = document.querySelectorAll('#products-rom')
    let listProductRam =  document.querySelectorAll('#products-ram')
    let valueOfFieldRam = checkExistClass(listProductRam).innerHTML
    let valueOfFieldRom = checkExistClass(listProductRom).innerHTML
    let valueOfFieldColor = checkExistClass(listProductColor).innerHTML
    console.log(144,valueOfFieldRam,valueOfFieldRom, valueOfFieldColor)
    let destinyPrice = arrayOrigin.filter((val,i)=>{
      return val.ram ===valueOfFieldRam && val.rom ===valueOfFieldRom && val.color ===valueOfFieldColor
    })
     console.log(148,destinyPrice[0].price)
     setPriceProduct(destinyPrice[0].price)

  }
  function changeImageDetail(index) {
    setCurrentIMG(arrayOriginImg[index])
  }
  
    
  return (
    <>
      <div class="container">
        <div class="product-detail-wrap">
          <div class="image-wrap">
            <div class="image-primary">
              <img src={currentIMG} alt=""></img>

            </div>
            <div class="range-img">
              {
                arrayOriginImg.map((val,index)=>{
                  return (<img  id = 'image-products' onMouseEnter={()=>{changeImageDetail(index)}} src={val} alt=""></img>)
                })
              }
            </div>
          </div>
          <div class="content-right-wrap">
            <div class="title-wrap">
              <div class="icon"></div>
              <h1>{props.dataFilter[props.chimuc].productName}</h1>
            </div>
            <div className="product-ram">
              {arrayOriginRam.map((val,index) => {
                return (<button id='products-ram' onClick={(e)=>{changePriceViaRam(e)}}>{val}</button>)
              })}
            </div>
            <div className="product-rom">
              {filterRom.map((val,index) => {
                return (<button id='products-rom'  onClick={(e)=>{changePriceViaRom(e)}}>{val}</button>)
              })}
            </div>
            <div className="product-color">
              {filterColor.map((val,index) => {
                return (<button id='products-color'  onClick={(e)=>{changePriceViaColor(e)}}>{val}</button>)
              })}
            </div>
            <div class="evaluate-wrap">
              <div class="star-evaluate"> 5sao</div>
              <div class="number-comment">5090 đánh giá</div>
              <div class="sold">{props.dataFilter[props.chimuc].countSold}</div>
            </div>
            <div class="price-wrap">
              <div class="price"><h1>{priceProduct}</h1></div>
              <div class="discount">{props.dataFilter[props.chimuc].Sale}</div>
            </div>
            {/* <div class="product-color-wrap">
              <div class="product-color-tittle">Màu sắc:</div>
              <div class="product-color-wrap-child-color">
                <div class="product-color">xanh</div>
                <div class="product-color">đỏ</div> 
                <div class="product-color">tím</div>
              </div>
            </div> */}
            <div class="count-buy-wrap">
              <div class="count-buy-wrap-title">Số lượng :</div>
              <div class="plus-subtract">
                <button class="plus" onClick={()=>{increaseCount()}}>+</button>
                <div class="number-plus-subtract">{count}</div>
                <button class="subtract" onClick={()=>{reduceCount()}}>-</button>
              </div>
              <div class="available-product">{countStorage} sản phẩm có sẵn</div>
            </div>
            <div class="add-to-cart-wrap">
              <button class="add-to-cart">thêm vào giỏ hàng</button>
              <button class="buy-now">mua ngay</button>
            </div>
          </div>

        </div>

      </div>
    </>


  )
}

export default ProductChild