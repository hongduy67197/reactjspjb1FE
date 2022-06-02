import React from "react";
import Header from "../../../Components/Header/header";
import "./styleHT.css";
import { Table } from "antd";

function Hoanthanh(props) {
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
    },
    {
      title: "Tên Khách Hàng",
      dataIndex: "Name",
    },
    {
      title: "address",
      dataIndex: "address",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "total",
      dataIndex: "total",
    },
    {
      title: "status",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a>Delete</a>,
    },
  ];
  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      address: "Jiangsu No. 1 Lake Park",
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div>
      <Header tenname={props.name}></Header>
      <div className="table_giao">
        <h3 className="title_giao">Đơn hàng đã hoàn thành</h3>
        <Table columns={columns} dataSource={data} onChange={onChange} />;
      </div>
    </div>
  );
}

export default Hoanthanh;
