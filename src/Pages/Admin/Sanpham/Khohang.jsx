import React from "react";
import Header from "../../../Components/Header/header";
import "./khohangchinhsua.css";
import axios from "axios";
import { useState } from "react";
import "./product.css";

function Khohang(props) {
  const [data, setdata] = useState([]);
  async function add12() {
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const res = await axios.post(
      "http://localhost:3150/admin/categories",
      formData
    );
    console.log(res);
  }
  function takedata() {
    axios
      .get("http://localhost:3150/admin/icon/list")
      .then(function (response) {
        console.log(response);
        setdata(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  function clear(id) {
    axios
      .delete(`http://localhost:3150/admin/icon/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    <div>
      <Header></Header>
      <div className="khohang">
        <h1>Kho hàng</h1>
        <button onClick={takedata}>Lay data</button>
        <div className="tenbrand"></div>
        <form action="" encType="multipart/form-data">
          <input name="categoriesName" type="text" />
          <input type="file" name="thumpNail" id="" />
        </form>
        <button onClick={add12}>Them moi</button>
        {data.map(function (value, index) {
          return (
            <div key={index}>
              <span>{value.iconName} :</span>
              <button onClick={() => clear(value._id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Khohang;
