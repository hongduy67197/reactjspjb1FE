import React from "react";
import Header from "../../../Components/Header/header";
import "./product.css";

function Chinhsua(props) {
  return (
    <div>
      <Header tenname={props.name}></Header>
      <div>
        <h1>Chinh sua</h1>
      </div>
    </div>
  );
}

export default Chinhsua;
