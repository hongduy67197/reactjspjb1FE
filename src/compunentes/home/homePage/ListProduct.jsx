import { React, useEffect, useState } from "react";
import "../homePage/ListProduct.css";
import Cards from "../homePage/Cards";
import productList from "./ListProductData";

const ListProduct = (item) => {
  return (
    <div className="Product-list">
      {item.productCode.map((item) => {
        return <Cards key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ListProduct;
