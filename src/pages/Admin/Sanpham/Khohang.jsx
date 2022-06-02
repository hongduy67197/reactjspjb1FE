import React from "react";
import Header from "../../../Components/Header/header";
import "./product.css";

function Khohang(props) {
  return (
    <div>
      <Header tenname={props.name}></Header>
    </div>
  );
}

export default Khohang;
