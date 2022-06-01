import { Table, Calendar } from "antd";
import React from "react";
import Header from "../../../Components/Header/header";

function Home() {
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
          {/* <Table columns={columns} dataSource={data} onChange={onchange} /> */}
        </div>

        <div className="Note">
          <div className="calendar">
            {/* <Calendar
              showWeekNumbers
              onChange={onChange}
              value={date}
              className="react-Calendar"
            /> */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
