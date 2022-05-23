import React from "react";
import Header from "../../../Components/Header/header";
import { Table } from "antd";
import "./styledanggiao.css";

function Danggiao() {
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

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div>
      <Header></Header>
      <div className="table_giao">
        <h2 className="title_giao">Đơn hàng đang giao</h2>
        <Table columns={columns} dataSource={data} onChange={onChange} />;
      </div>
    </div>
  );
}

export default Danggiao;
