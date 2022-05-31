import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../../../Components/Header/header";
import "./styleHome.css";
import { Table } from "antd";
//npm install react-calendar
function Home() {
  const [date, setdate] = useState(new Date());
  const onChange = (date) => {
    setdate(date);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Chinese Score",
      dataIndex: "chinese",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Math Score",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

  function onchange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <Header></Header>
      <div className="content">
        <h3 className="content_title">Dashboard</h3>
        <div className="statistical">
          <div className="table">
            <div className="icon_sale">
              <i className="fa-solid fa-wave-square"></i>
            </div>
            <div className="content_sale">
              <p className="icon_title">Sales</p>
              <p className="thongso">98,225</p>
            </div>
          </div>
          <div className="table">
            <div className="icon_order">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="content_sale">
              <p className="icon_title">Orders</p>
              <p className="thongso">98,225</p>
            </div>
          </div>
          <div className="table">
            <div className="icon_customer">
              <i className="fa-solid fa-user-tag"></i>
            </div>
            <div className="content_sale">
              <p className="icon_title">Customers</p>
              <p className="thongso">98,225</p>
            </div>
          </div>
          <div className="table">
            <div className="icon_Income">
              <i className="fa-solid fa-sack-dollar"></i>
            </div>
            <div className="content_sale">
              <p className="icon_title">Income</p>
              <p className="thongso">98,225</p>
            </div>
          </div>
        </div>

        <div className="productNew">
          <h2>New Products</h2>
          <Table columns={columns} dataSource={data} onChange={onchange} />
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
