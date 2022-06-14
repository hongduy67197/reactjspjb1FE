import React from "react";
import "../css/product.css";
import Logo from "./logo.jpg";
import { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import { notification, Space } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getApi } from "../api/config";
import { patchApi } from "../api/config";
import { putApi } from "../api/config";
import { deleteApi } from "../api/config";
function Cart(props) {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getApi("http://localhost:3150/user/carts")
      .then((data) => {
        console.log(17, data.data[0].listProduct);
        console.log(18, data);
        setProductData(data.data[0].listProduct);
        console.log(21, data.data[0].listProduct[0].idProduct.productPic[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(32,productData[0].idProductCode)
  }, []);
  const Navigate = useNavigate();
  const [product, setProduct] = useState(productData);
  console.log(28, productData);
  useEffect(() => {
    if (productData.length === 0) {
      document.querySelector(".giohang_trong").style.display = "block";
      document.querySelector(".container_body").style.display = "none";
    } else {
      document.querySelector(".giohang_trong").style.display = "none";
      document.querySelector(".container_body").style.display = "block";
    }
  }, [productData.length]);

  const [Quantity, setQuantity] = useState(0);
  //================================================

  var newArr = [];
  const [dataNew, setDataNew] = useState([]);
  const openNotification = (placement) => {
    if (total === 0) {
      notification.info({
        message: `Thông báo !!!`,
        description: "Bạn chưa chọn đơn hàng nào !!!",
        icon: <WarningOutlined style={{ color: "#108ee9" }} />,
        placement,
        duration: 3,
      });
    } else {
      // Navigate("/PriceProduct")
      // var filterObj = productData.filter(item => item.isChecked !== true);
      // setProduct(filterObj)
      for (let i = 0; i < productData.length; i++) {
        if (productData[i].isChecked === true) {
          newArr.push(productData[i]);
          // setDataNew(...productData[i])
        }
      }
      console.log(555, newArr);
      setDataNew(newArr);
      var filterObj = productData.filter((item) => item.isChecked !== true);
      setProductData(filterObj);
      console.log(productData);
    }
  };
  //================================================
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [getIndex, setGetIndex] = useState(0);

  let showModal = (index, id) => {
    setGetIndex(index);
    productData[index].quantity = productData[index].quantity - 1;
    let storage1 = productData[index].quantity;
    console.log(81, storage1);

    patchApi(`http://localhost:3150/user/carts${id}`, {
      quantity: storage1,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    if (productData[index].quantity < 1) {
      productData[index].quantity = 1;

      setIsModalVisible(true);
    }
    setQuantity(Quantity + 1);
    setProduct(...productData);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    console.log(103, productData[getIndex]._id);
    patchApi(`http://localhost:3150/admin/product/${productData[getIndex]._id}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    productData.splice(getIndex, 1);
    setQuantity(Quantity + 1);
    setProduct(...productData);
  };

  const handleCancel = () => {
    setIsModalVisible(false);

    // axios
    //   .put(`http://localhost:3150/admin/product/${productData[getIndex]._id}`, {
    //     storage: 1,
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setQuantity(Quantity + 1);
    setProduct(...productData);
  };
  //===================================================
  function upQuantity(index, id) {
    console.log(136, id);
    productData[index].quantity = productData[index].quantity + 1;
    let storage1 = productData[index].quantity;
    patchApi(`http://localhost:3150/user/carts${id}`, {
      quantity: storage1,
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setQuantity(Quantity + 1);
    setProduct(...productData);
  }
  //===============================================
  function deleteProduct(index) {
    patchApi(`http://localhost:3150/user/carts${index}`, {
      quantity: "",
    })
      .then((data) => {
        console.log(157, data);
      })
      .catch((err) => {
        console.log(err);
      });
    // productData.splice(id, 1);
    setQuantity(Quantity + 1);
    setProduct(...productData);
  }
  //=============================================================
  function handleChange(e) {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      var tempUser = productData.map((val) => {
        return { ...val, isChecked: checked };
      });
      setProductData(tempUser);
    } else {
      var tempUser = productData.map((val) =>
        val._id == name ? { ...val, isChecked: checked } : val
      );
      setProductData(tempUser);
    }
  }
  //============================================
  var count1 = 0;
  var total = 0;
  for (let i = 0; i < productData.length; i++) {
    if (productData[i].isChecked === true) {
      total +=
        Number(productData[i].idProduct.price) *
        Number(productData[i].quantity);
      count1++;
    }
  }
  function Home() {
    Navigate("/");
  }
  return (
    <div className="main-giohang">
      <div className="Gio_hang">
        <div className="title">
          <div className="title-chil">
            <div className="letf-title">
              <img className="logo_shop" onClick={Home} src={Logo} alt="" />
              <div className="border-title"></div>
              <div className="name-title">Giỏ Hàng</div>
            </div>
            <div className="right-title">
              <img
                src="//icms-image.slatic.net/images/ims-web/839b66fb-6c8e-4e46-8a80-06a5e08fb4d4.png"
                alt=""
                style={{ width: "250px" }}
              />
            </div>
          </div>
        </div>

        <div className="container_body">
          <div className="tab-wapper">
            <div className="div-gohome"></div>
            <div className="cart_info">
              Bạn đang có {productData.length} sản phẩm trong giỏ hàng
            </div>
            <div className="title-table">
              <div className="inp-checkall">
                <input
                  id="check"
                  type="checkbox"
                  name="allSelect"
                  checked={!productData.some((val) => val?.isChecked !== true)}
                  onChange={handleChange}
                />
              </div>
              <div className="info-sanpham">Sản Phẩm</div>
              <div className="info-dongia">Đơn Giá</div>
              <div className="info-soluong">Số Lượng</div>
              <div className="info-thanhtien">Thành Tiền</div>
              <div className="info-thaotac">Thao Tác</div>
            </div>
            {productData.map((value, index) => {
              return (
                <div className="list-sanpham" key={index}>
                  <div className="inp-checkall">
                    <input
                      id="check"
                      type="checkbox"
                      name={value._id}
                      onChange={handleChange}
                      checked={value?.isChecked || false}
                    />
                  </div>
                  <div className="img-list">
                    <img
                      className="Img_product"
                      src={`http://localhost:3150${value.idProduct.productPic[0]}`}
                    />
                  </div>
                  <div className="nameProduct">
                    {/* {value.idProductCode.productName}{" "} */}
                  </div>
                  <div className="phanloai-product">
                    <div className="ramrom-phanloai">
                      {value.idProduct.ram}/{value.idProduct.rom}
                    </div>
                    <div className="color-phanloai">
                      {" "}
                      {value.idProduct.color}
                    </div>
                  </div>
                  <div className="info-dongia">
                    {value.idProduct.price.toLocaleString()}
                    <sup>đ</sup>
                  </div>
                  <div className="info-list-soluong">
                    <>
                      <Button
                        type="primary"
                        onClick={() => {
                          showModal(index, value._id);
                        }}
                      >
                        -
                      </Button>
                      <Modal
                        title="Bạn chắc chắn muốn bỏ sản phẩm này"
                        visible={isModalVisible}
                        okText="Xác nhận"
                        cancelText="Hủy bỏ"
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <p>
                          {/* {productData[getIndex].idProductCode.productName}( */}
                          {productData[getIndex].idProduct.color}
                        </p>
                        <div className="img-list">
                          <img
                            className="Img_product"
                            src={`http://localhost:3150${productData[getIndex].idProduct.productPic[0]}`}
                          />
                        </div>
                      </Modal>
                    </>

                    <div className="quanity-result">{value.quantity}</div>
                    <button
                      onClick={() => upQuantity(index, value._id)}
                      className="btn1"
                    >
                      +
                    </button>
                  </div>
                  <div className="info-list-thanhtien">
                    {(
                      Number(value.idProduct.price) * Number(value.quantity)
                    ).toLocaleString()}
                    <sup>đ</sup>
                  </div>
                  <div className="info-list-thaotac">
                    <p
                      className="text-xoa"
                      onClick={() => deleteProduct(value._id)}
                    >
                      Xóa
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="gird-item"> </div>

            <div className="info_payment">
              <div className=" inp-payment">
                <input
                  id="check"
                  type="checkbox"
                  name="allSelect"
                  checked={!productData.some((val) => val?.isChecked !== true)}
                  onChange={handleChange}
                />
                <div className="text-all">Chọn tất cả</div>
              </div>
              <div className="return-payment">
                <div className="title-payment price-total">
                  Tổng thanh toán ({count1} sản phẩm) : {total.toLocaleString()}{" "}
                  <sup>đ</sup>
                </div>
                <>
                  <Space>
                    <Button
                      className="payment-btn"
                      type="primary"
                      onClick={() => openNotification("top")}
                    >
                      Mua Hàng
                    </Button>
                  </Space>
                </>
              </div>
            </div>
          </div>
        </div>

        <div className="giohang_trong">
          <div className="flex-giohang">
            <div className="icon-giohang">
              <i class="fa-solid fa-cart-plus"></i>
            </div>
            <div className="text-conpoment">
              Không có sản phầm nào trong giỏ hàng.
            </div>
            <button onClick={Home} className="btn-gohome">
              Về Trang Chủ
            </button>
            <div className="info-text">
              Khi cần trợ giúp vui lòng gọi
              <span className="blue-text">1800.1060</span> hoặc
              <span className="blue-text">028.3622.1060</span> (7h30 - 22h)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
