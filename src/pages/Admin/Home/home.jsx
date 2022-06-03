import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../../../Components/Header/header";
import "./styleHome.css";
import { Table } from "antd";
import axios from "axios";
import { useEffect } from "react";
//npm install react-calendar

function Home(props) {
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/product/list")
      .then(function (res) {
        setstate(res.data);
      })
      .catch(function (fail) {
        console.log(fail);
      });
  }, []);
  const [state1, setstate1] = useState([]);

  const [date, setdate] = useState(new Date());
  const onChange = (date) => {
    setdate(date);
  };
  const columns = [
    {
      title: "ThumNail",
      dataIndex: "productPic",
      sorter: false,
      render: (productPic) => (
        <img src={"http://localhost:3150" + productPic} alt="anh" />
      ),
    },
    {
      title: "Name",
      dataIndex: "productName",
    },
    {
      title: "ProductType",
      dataIndex: "productType",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "SpecialFeatures",
      dataIndex: "specialFeatures",
    },
    {
      title: "Panel",
      dataIndex: "panel",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
  ];

  const database = [];
  const data = [];

  if (state.length > 0) {
    for (let i = 0; i < state.length; i++) {
      database.push({
        productName: state[i].idProductCode.productName,
        productPic: state[i].productPic,
        productType: state[i].idProductCode.productType,
        specialFeatures: state[i].idProductCode.specialFeatures,
        panel: state[i].idProductCode.panel,
        price: state[i].price,
      });
    }
  }

  database.sort(function (a, b) {
    return b.price - a.price;
  });

  let so = database.length - 10;
  for (let i = so; i < database.length; i++) {
    data.push(database[i]);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/user/")
      .then(function (res) {
        setstate1(res.data);
      })
      .catch(function (fail) {
        console.log(fail);
      });
  }, []);

  let countCustomers = state1.length;

  return (
    <div>
      <Header tenname={props.name}></Header>
      <div className="content">
        <h3 className="content_title">Dashboard</h3>
        <div className="statistical">
          <div className="table">
            <div className="icon_sale">
              <i class="fa-solid fa-wave-square"></i>
            </div>
            <div className="content_sale">
              <p className="icon_title">Sales</p>
              <p className="thongso">98,225</p>
            </div>
          </div>
          <div className="table">
            <div className="icon_order">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="content_sale">
              <p className="icon_title">Orders</p>
              <p className="thongso">98,225</p>
            </div>
          </div>
          <div className="table">
            <div className="icon_customer">
              <i class="fa-solid fa-user-tag"></i>
            </div>
            <div className="content_sale">
              <p className="icon_title">Customers</p>
              <p className="thongso">{countCustomers}</p>
            </div>
          </div>
          <div className="table">
            <div className="icon_Income">
              <i class="fa-solid fa-sack-dollar"></i>
            </div>
            <div className="content_sale">
              <p className="icon_title">Income</p>
              <p className="thongso">98,225</p>
            </div>
          </div>
        </div>

        <div className="productNew">
          <h2>Sản phẩm có giá cao</h2>
          <Table columns={columns} dataSource={data} pagination={false} />;
        </div>

        <div className="Note">
          <div className="calendar">
            <Calendar
              showWeekNumbers
              onChange={onChange}
              value={date}
              className="react-Calendar"
            />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
