import React, { useState } from "react";
import Header from "../../../Components/Header/header";
import { Table } from "antd";
import { Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";

import "./style.css";

function Nhanvien() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isindex, setIsIndex] = useState(null);
  const showModal = (id) => {
    setIsIndex(id);
    console.log(14, id);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 3,
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: {
        compare: (a, b) => a.age - b.age,
        multiple: 2,
      },
    },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <>
          <EditOutlined
            onClick={() => {
              showModal(record.id);
            }}
            style={{ fontSize: 20, marginLeft: 20 }}
          />
        </>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      id: 123,
      name: "John Brown",
      age: 32,
      address: "admin",
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "admin",
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      address: "nhan vien",
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      address: "nhan vien",
    },
  ];
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <Header></Header>
      <div className="table_nv">
        <h2 className="title_nv">Nhân Viên</h2>
        <Table columns={columns} dataSource={data} onChange={onChange} />;
      </div>
      <Modal
        title="Quản lý nhân Viên"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </Modal>
    </div>
  );
}

export default Nhanvien;
