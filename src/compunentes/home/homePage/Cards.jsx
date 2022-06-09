import { Rate } from "antd";
import App from "./Rate";
import { PlusCircleOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { ExceptionMap } from "antd/lib/result";
import axios from "../../../axios";


const Cards = ({ item, keyId }) => {
  if (!item.data.length > 0) {
    item.data = [{ price: "chua set gia", ram: "chua set gia" }];
    item.data[0].price = "chưa set giá ";
    item.data[0].ram = "no ram";
  }

  return (
    <div key={keyId} className="home_cards-item">
      <div className="cards">
        {/* {<p className="installment">{Icon[9].iconName}</p>} */}
        <div className="item_image-box">
          <div className="image_box">
            <img
              className="image_box-image"
              src={"http://localhost:3150" + item.thumNail}
              alt=""
            />

            {/* <img
              className="image-monopoly"
              src={"http://localhost:3150" + Icon[5].iconPic}
            /> */}
            {/* <img
              className="image-monopoly"
              src={"http://localhost:3150" + Icon[7].iconPic}
            /> */}
          </div>
        </div>

        <div className="">
          <p className="ProductName">{item.productName}</p>
        </div>
        {
          <div>
            <div className="details-ram">
              {/* {<span className="ram1">{item.data[0].ram}</span>} */}
            </div>
            {<p className="price">{item.data[0].price.toLocaleString()}₫</p>}
          </div>
        }
        <div className="details">
          {/* <p className="dramaticReduction">
            <img
              className="dramaticReduction-icon"
              src={"http://localhost:3150" + Icon[0].iconPic}
              alt=""
            />

            {Icon[0].iconName}
          </p> */}

          {/* <p className="VNPayIcon">
            <img
              className="VNPayIcon-icon"
              src={"http://localhost:3150" + Icon[1].iconPic}
              alt=""
            />
            {Icon[1].iconName}
          </p> */}
          <p className="productType">{item.productType}</p>

          <p className="design">{item.design}</p>
          <p className="panel">{item.panel}</p>
          <p className="cameraProduct">{item.cameraProduct}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
