import { Rate } from "antd";
import App from "./Rate";
import { PlusCircleOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { ExceptionMap } from "antd/lib/result";

const Cards = ({ item }) => {
  // console.log(8, item.data);
  item.data.sort((a, b) => {
    return a.price - b.price;
  });
  // console.log(12, item.data);
  if (!item.data.length > 0) {
    item.data = [{ price: "chua set gia", ram: "chua set ram" }];
    item.data[0].price = "chưa set giá";
    item.data[0].ram = "chưa set ram";
  }

  return (
    <div className="home_cards-item">
      <div className="cards">
        {/* {installment ? <p className="installment">{installment}</p> : null} */}
        <div className="item_image-box">
          <div className="image_box">
            <img
              className="image_box-image"
              src={"http://localhost:3150" + item.thumNail}
              alt=""
            />

            {/* <img className="image-warranty" src={warranty} alt="" />
            <img className="image-monopoly" src={monopoly} /> */}
          </div>
        </div>
        <p className="ProductName">{item.productName}</p>
        {/* {item.data.sort((a, b) => {
          return a.price - b.price;
        })} */}

        {/* {console.log(29, item.data)} */}

        {
          <div>
            <div className="details-ram">
              {<span className="ram1">{item.data[0].ram}</span>}
              {/* {console.log(99, item.data[0].ram)} */}
            </div>
            {<p className="price">{item.data[0].price.toLocaleString()}₫</p>}
          </div>
        }
        <div className="details">
          {/* {dramaticReduction ? (
            <p className="dramaticReduction">
              <img className="dramaticReduction-icon" src={dramaticReduction} />{" "}
              GIẢM KỊCH SÀN
            </p>
          ) : null} */}
          {/* {VNPayIcon ? (
            <p className="VNPayIcon">
              <img className="VNPayIcon-icon" src={VNPayIcon} alt="" />
              VNPAY GIẢM 500K
            </p>
          ) : null}{" "}
          
          <p className="oder">{oder}</p> */}

          {/* <p>{noTi}</p> */}
          {/* <p className="rate-icon">
            <App style={{ fontZie: "5px" }} /> {AppIconRating}
          </p> */}
          {/* <p className="compare">
            <PlusCircleOutlined /> {compare}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
