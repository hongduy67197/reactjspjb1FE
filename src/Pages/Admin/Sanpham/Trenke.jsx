import Header from "../../../Components/Header/header";
import "./product.css";
import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { Pagination } from "antd";

var countup = 0;
var countdown = 0;
var countbrand = 0;
function Trenke(props) {
  // var kodoi;
  var newarr = [];
  props.productList.map(function (value, index) {
    if (newarr.indexOf(value.brand) == -1) {
      newarr.push(value.brand);
    }
  });
  var kodoi = newarr.sort();
  console.log(kodoi);
  var arr;
  function chooseBrand(val) {
    arr = [];
    props.productList.map(function (value, index) {
      if (val == value.brand) {
        arr = [...arr, value];
        props.setbrand(arr);
      }
    });
    props.changesign();
  }
  function allbrand() {
    props.setbrand(props.productList);
    props.changesign();
  }

  function upcost() {
    countdown = 0;
    countup++;
    if (countup % 2 != 0) {
      document.querySelector(".upcost").style.color = "white";
      document.querySelector(".upcost").style.background = "black";
      document.querySelector(".downcost").style.color = "black";
      document.querySelector(".downcost").style.background =
        "rgb(220, 220, 220)";
      props.productList.sort(function (a, b) {
        return a.price - b.price;
      });
      props.setbrand(props.productList);
      props.changesign();
    }
    if (countup % 2 == 0) {
      document.querySelector(".upcost").style.color = "black";
      document.querySelector(".upcost").style.background = "rgb(220, 220, 220)";
      props.setbrand(props.origin);
      props.changesign();
    }
  }
  function downcost() {
    countup = 0;
    countdown++;
    if (countdown % 2 != 0) {
      document.querySelector(".downcost").style.color = "white";
      document.querySelector(".downcost").style.background = "black";
      document.querySelector(".upcost").style.color = "black";
      document.querySelector(".upcost").style.background = "rgb(220, 220, 220)";
      props.productList.sort(function (a, b) {
        return b.price - a.price;
      });
      props.setbrand(props.productList);
      props.changesign();
    }
    if (countdown % 2 == 0) {
      document.querySelector(".downcost").style.color = "black";
      document.querySelector(".downcost").style.background =
        "rgb(220, 220, 220)";
      props.setbrand(props.origin);
      props.changesign();
    }
  }
  return (
    <div>
      <Header></Header>
      <div className="newproduct">
        <h1>Sản phẩm trên kệ</h1>
        <div className="allbrand">
          <div className="brand" onClick={allbrand}>
            <p id="brand">Tất cả</p>
          </div>
          {kodoi.map(function (val, index) {
            return (
              <div
                onClick={() => chooseBrand(val)}
                className="brand"
                key={index}
              >
                <p id="brand">{val}</p>
              </div>
            );
          })}
          <div className="brand upcost" onClick={upcost}>
            <p id="brand">
              Tăng <i className="fa-solid fa-arrow-up-wide-short"></i>
            </p>
          </div>
          <div className="brand downcost" onClick={downcost}>
            <p id="brand">
              Giảm <i className="fa-solid fa-arrow-down-wide-short"></i>
            </p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá sản phẩm</th>
              <th>Màu sắc</th>
              <th>Tồn kho</th>
              <th>Thông tin sản phẩm</th>
            </tr>
          </thead>
          <tbody>
            {props.brand.map(function (value, index) {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td style={{ fontSize: "17px", fontWeight: "bold" }}>
                    {value.ProductName}
                  </td>
                  <td>
                    <img src={value.productPic} alt="" />
                  </td>
                  <td>{value.price.toLocaleString()}</td>
                  <td>
                    {value.color.map(function (val, i) {
                      return (
                        <div
                          key={i}
                          className="color"
                          style={{ background: `${val}` }}
                        ></div>
                      );
                    })}
                  </td>
                  <td>{value.storage}</td>
                  <td>
                    RAM {value.ram}, ROM {value.rom}
                    <br />
                    {value.performance}
                    <br />
                    {value.camera}
                    <br />
                    {value.special_features},{value.design},{value.panel}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </div>
  );
}

export default Trenke;
