import React, { useState } from "react";
import Header from "../../../Components/Header/header";
import "./styleXacnhan.css";
import { Table } from "antd";
import { useEffect } from "react";
import axios from "axios";

function Xacnhan(props) {
  const [state, setstate] = useState([]);
  const [state1, setstate1] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/order/")
      .then(function (res) {
        console.log(14, res.data);
        setstate(res.data);
      })
      .catch(function (fail) {
        console.log(fail);
      });
  }, []);
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
      render: () => <a>Giao Hàng</a>,
    },
  ];
  const data = [];
  for (let i = 0; i < state.length; i++) {
    data.push({
      index: i + 1,
      thumNail: state[i].thumNail,
      productName: state[i].productName,
      productType: state[i].productType,
      specialFeatures: state[i].specialFeatures,
      panel: state[i].panel,
      cameraProduct: state[i].cameraProduct,
      performanceProduct: state[i].performanceProduct,
      design: state[i].design,
    });
  }

  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/user/")
      .then(function (res) {
        console.log(88, res.data);
        setstate1(res.data);
      })
      .catch(function (fail) {
        console.log(fail);
      });
  }, []);
  const dataID = [];
  for (let i = 0; i < state1.length; i++) {
    dataID.push({ _id: state1[i]._id });
  }
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <Header tenname={props.name}></Header>
      <div className="table_xacnhan">
        <h3 className="title_xacnhan">Đơn hàng chờ xác nhận</h3>
        <Table columns={columns} dataSource={data} onChange={onChange} />;
      </div>
    </div>
  );
}

export default Xacnhan;
