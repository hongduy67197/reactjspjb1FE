import React from 'react'
import '../App.css'
import '../asset/css/base-productChild.css'
function ProductChild(props) {
  return (
    <>
      <div class="container">
        <div class="product-detail-wrap">
          <div class="image-wrap">
            <div class="image-primary">
              <img src={props.dataFilter[props.chimuc].thumNail[0]} alt=""></img>

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
              <h1>{props.dataFilter[props.chimuc].productName}</h1>
            </div>
            <div className="product-ram">
              {props.dataFilter[props.chimuc].ramRange.map((val)=>{
                return (<div>{val}</div>)
              })}
            </div>
            <div className="product-ram">
              {props.dataFilter[props.chimuc].romRange.map((val)=>{
                return (<div>{val}</div>)
              })}
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
              <div class="count-buy-wrap-title">Số lượng :</div>
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
    </>


  )
}

export default ProductChild