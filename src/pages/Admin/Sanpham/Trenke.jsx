import Header from "../../../Components/Header/header";
import "./product.css";
import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Trenke(props) {
  var abcarr;
  function choosebrand(id) {
    // document.querySelector(".newproduct").style.height = "100vh";
    let listBrand = document.querySelectorAll(".brand");
    for (let i = 0; i < listBrand.length; i++) {
      listBrand[i].setAttribute("style", "");
    }
    document.querySelector(`[value="${id}"]`).style.background = "black";
    document.querySelector(`[value="${id}"]`).style.color = "white";
    abcarr = [];
    props.data.map(function (value, index) {
      if (value.idCategories[0] === id) {
        abcarr.push(value);
        props.setshowdata(abcarr);
      }
    });
  }
  function showall() {
    let listBrand = document.querySelectorAll(".brand");
    for (let i = 0; i < listBrand.length; i++) {
      listBrand[i].setAttribute("style", "");
    }
    document.querySelector("#tatca").style.background = "black";
    document.querySelector("#tatca").style.color = "white";
    props.setshowdata(props.data);
  }
  return (
    <div>
      <Header></Header>
      <div className="newproduct">
        <h1 className="sptk">Sản phẩm trên kệ</h1>
        <div className="allbrand">
          <div className="brand tatca123" id="tatca">
            <p id="brand" className="tatca" onClick={showall}>
              Tất cả
            </p>
          </div>
          {props.brand.map(function (value, index) {
            return (
              <div
                className="brand"
                value={value._id}
                key={index}
                onClick={() => choosebrand(value._id)}
              >
                <p id="brand">{value.categoriesName}</p>
              </div>
            );
          })}
        </div>
        <div className="boxtable">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Loại sản phẩm</th>
                <th>Thông tin sản phẩm</th>
              </tr>
            </thead>
            <tbody>
              {props.showdata.map(function (value, index) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.productName}</td>
                    <td>
                      <img
                        src={"http://localhost:3150" + value.thumNail}
                        alt=""
                      />
                    </td>
                    <td>{value.productType}</td>
                    <td>
                      {value.performanceProduct} <br />
                      {value.cameraProduct} <br />
                      {value.specialFeatures} <br />
                      {value.design} <br />
                      {value.panel}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Trenke;
