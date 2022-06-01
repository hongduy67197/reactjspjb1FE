import { React, useEffect, useState } from "react";
import "../homePage/ListProduct.css";
import Cards from "../homePage/Cards";
import productList from "./ListProductData";
import Icon from "./Icon";

const ListProduct = (items) => {
  return (
    <div className="Product-list">
      {items.productCode.slice(0, items.numberShow).map((item, index) => {
        return <Cards keyId={index} item={item} Icon={items.NewIcon} />;
      })}
    </div>
  );
};

export default ListProduct;
