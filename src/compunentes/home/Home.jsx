import "../home/Home.css";
import { React, useEffect, useState } from "react";
import axios from "../../axios";
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

const Home = () => {
  const [productCode, setProductCode] = useState([]);
  const [numberShow, setNumberShow] = useState(20);
  const [Slides, setSlides] = useState([]);

  function seeMore() {
    setNumberShow(numberShow + 20);
  }

  useEffect(() => {
    axios
      .get("/user/list")
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
        console.log(46, res.data.dataProductCode);
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
      .get("/admin/icon/list")
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
        
        <div className="home-page-product">
          <ListProduct productCode={productCode} numberShow={numberShow} />
        </div>
      </div>

      <SeeMore seeMore={seeMore} />
      <Advertisement />
    </div>
  );
};

export default Home;
