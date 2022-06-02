import { render } from "@testing-library/react";
import React from "react";
import Header from "../../../Components/Header/header";
import "./product.css";
import { useState } from "react";

function Spmoi(props) {
  return (
    <div>
      <Header tenname={props.name}></Header>
      <div>
        <h1>San pham moi</h1>
      </div>
    </div>
  );
}

export default Spmoi;
