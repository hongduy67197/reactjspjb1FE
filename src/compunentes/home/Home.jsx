import "../home/Home.css";
import { React, useEffect, useState } from "react";
import axios from "axios";
import SeeMore from "../home/homePage/SeeMore";
import ListProduct from "./homePage/ListProduct";
import Advertisement from "../../advertisement/Advertisement";
import {
  FilterOutlined,
  CaretDownOutlined,
  ThunderboltOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import Header from "../header/Header";
import Slider from "../slider/Slider";

import Icon from "./homePage/Icon";
const Home = () => {
  const [productCode, setProductCode] = useState([]);
  const [numberShow, setNumberShow] = useState(20);
  const [Slides, setSlides] = useState([]);

  function seeMore() {
    setNumberShow(numberShow + 20);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3150/user/list")
      .then(function (res) {
        setSlides(res.data.listSlide);
      })
      .catch(function (err) {
        console.log(99, err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/user/list")
      .then(function (res) {
        // res.data.dataProductCode.data.price.sort((a, b) => {
        //   return a.price - b.price;
        // });
        // console.log(55, res.data.dataProductCode);
        // console.log(66, res.data.dataProductCode[1].data);
        setProductCode(res.data.dataProductCode);
      })
      .catch(function (err) {
        console.log(31, err);
      });
  }, []);

  //======== icon ===============
  const [NewIcon, setNewIcon] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/icon/list")
      .then(function (res) {
        setNewIcon(res.data);
      })
      .catch(function (err) {
        console.log(99, err);
      });
  }, []);

  return (
    <div className="home-container">
      <Slider Slides={Slides} />
      <div className="home_status_container-chat">
        <i title="New messages" id="unread-msg-number">
          <WechatOutlined className="WechatOutlined" />
        </i>
        <a href="#" id="status-icon"></a>
      </div>
      <div className="home-container-filter">
        <div className="box-filter-item">
          <ul className="box-filter-ul">
            <li className="box-filter-ul-li">
              <FilterOutlined />
              Bộ Lọc
            </li>
            <li className="box-filter-ul-li">
              Hãng <CaretDownOutlined className="box-filter-ul-li-icon" />
            </li>
            <li className="box-filter-ul-li">
              Giá <CaretDownOutlined className="box-filter-ul-li-icon" />
            </li>
            <li className="box-filter-ul-li">
              Loại Điện Thoại{" "}
              <CaretDownOutlined className="box-filter-ul-li-icon" />
            </li>
            <li className="list-logo">
              <a className="list-logo-a">
                <img
                  src="https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png"
                  alt=""
                />
              </a>
            </li>
            <li className="list-logo">
              <a className="list-logo-a">
                <img src="https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg" alt="" />
              </a>
            </li>
            <li className="list-logo">
              <a className="list-logo-a">
                <img
                  src="https://cdn.tgdd.vn/Brand/1/vivo-logo-220-220x48-3.png"
                  alt=""
                />
              </a>
            </li>
            <li className="list-logo">
              <a className="list-logo-a">
                <img
                  src="https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png"
                  alt=""
                />
              </a>
            </li>
            <li className="list-logo">
              <a className="list-logo-a">
                <img
                  src="https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png"
                  alt=""
                />
              </a>
            </li>
            <li className="list-logo">
              <a className="list-logo-a">
                <img
                  src="https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg"
                  alt=""
                />
              </a>
            </li>
            <li className="list-logo">
              <a className="list-logo-a">
                <img src="https://cdn.tgdd.vn/Brand/1/Itel42-b_54.jpg" alt="" />
              </a>
            </li>
            <li className="list-logo">
              <a className="list-logo-a">
                <img
                  src="https://cdn.tgdd.vn/Brand/1/Masstel42-b_0.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <section name="" id="home-page">
          <div className="box-sort">
            <p className="box-sort-total">
              <b>100 Điện Thoại</b>
            </p>
            <div className="box-checkbox">
              <a className="box-checkbox-flash">
                <input className="checkbox-icon" type="checkbox" />
                <i className="thunder-icon">
                  <img
                    src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/icon-thunder.png"
                    alt=""
                  />
                </i>
                GIAO NHANH
              </a>
              <a>
                <input className="checkbox-icon" type="checkbox" /> Giảm Giá
              </a>
              <a>
                <input className="checkbox-icon" type="checkbox" /> Góp 0%
              </a>
              <a>
                <input className="checkbox-icon" type="checkbox" />
                Độc Quyền
              </a>
              <a>
                <input className="checkbox-icon" type="checkbox" />
                Mới
              </a>
            </div>
            <div className="div-box-select">
              <select name="" id="box-select">
                {" "}
                Xếp Theo
                <option value="">Xếp theo: Nổi Bật </option>
                <option value="">Xếp theo: % Giảm</option>
                <option value="">Xếp theo: Giá Cao Đến Thấp</option>
                <option value="">Xếp theo: Giá Thấp Đến Cao</option>
              </select>
            </div>
          </div>
        </section>
        <div className="home-page-product">
          <ListProduct productCode={productCode} />
        </div>
      </div>

      <SeeMore seeMore={seeMore} />
      <Advertisement />
    </div>
  );
};

export default Home;
