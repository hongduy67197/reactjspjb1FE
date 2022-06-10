import React, { useState } from "react";
import Header from "../../../Components/Header/header";
import { Table } from "antd";
import { Modal } from "antd";
<<<<<<< HEAD
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
=======
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect } from "react";

import "./style.css";

function Nhanvien(props) {
  const [state, setstate] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isindex, setIsIndex] = useState(0);
  const [isin, setIsin] = useState(0);

  const data = [];

  function count() {
    setIsin(isin + 1);
  }

  const showModal = (id) => {
    setIsIndex(id);
    count();
    setIsModalVisible(true);
    data.map(function (val) {
      if (val._id == id) {
        console.log(22, val.username);
        document.querySelector(".name").value = val.username;
        document.querySelector(".address").value = val.address;
        document.querySelector(".sdt").value = val.phone;
        document.querySelector(".role").value = val.role;
      }
    });
  };

  const handleOk = () => {
    // const from12 = document.querySelector(".fromlist");
    // const fromData12 = new FormData(from12);
    // let anh = document.querySelector(".avatar").value;
    let name = document.querySelector(".name").value;
    let diachi = document.querySelector(".address").value;
    let phone = document.querySelector(".sdt").value;
    let role = document.querySelector(".role").value;

    if ((name !== "" && diachi !== "" && phone !== "", role !== "")) {
      axios
        .put(`http://localhost:3150/admin/user/${isindex}`, {
          // avatar: anh,
          username: name,
          address: diachi,
          phone: phone,
          role: role,
        })
        .then(function (res) {
          // setChangedata(1);
        })
        .catch(function (fail) {
          console.log(fail);
        });
      count();
      setIsModalVisible(false);
    } else {
      document.querySelector(".Not").innerHTML = "Vui lòng không được để trống";
    }
>>>>>>> 64af3a06a3dff8397ffe85bafb16ca7d93d1f094
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
<<<<<<< HEAD
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
=======
      title: "STT",
      align: "center",
      dataIndex: "index",
    },
    {
      title: "Ảnh",
      align: "center",
      dataIndex: "avatar",
      render: (avatar) => (
        <img src={"http://localhost:3150" + avatar} alt="anh" />
      ),
    },
    {
      title: "Name",
      align: "center",
      dataIndex: "username",
      sorter: {
        compare: (a, b) => a.username.localeCompare(b.username),
      },
    },
    { title: "Email", dataIndex: "email", align: "center" },
    {
      title: "Địa chỉ",
      align: "center",
      dataIndex: "address",
      sorter: {
        compare: (a, b) => a.address.localeCompare(b.address),
      },
    },
    { title: "Số điện thoại", dataIndex: "phone", align: "center" },
    { title: "Quyền", dataIndex: "role", align: "center" },
    {
      title: "Action",
      dataIndex: "",
      align: "center",
>>>>>>> 64af3a06a3dff8397ffe85bafb16ca7d93d1f094
      key: "x",
      render: (record) => (
        <>
          <EditOutlined
            onClick={() => {
<<<<<<< HEAD
              showModal(record.id);
            }}
            style={{ fontSize: 20, marginLeft: 20 }}
=======
              showModal(record._id);
            }}
            style={{ fontSize: 20 }}
          />
          <DeleteOutlined
            onClick={() => {
              ondelete(record._id);
            }}
            style={{ color: "red", fontSize: 20, marginLeft: 20 }}
>>>>>>> 64af3a06a3dff8397ffe85bafb16ca7d93d1f094
          />
        </>
      ),
    },
  ];

<<<<<<< HEAD
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
=======
  for (let i = 0; i < state.length; i++) {
    data.push({
      index: i + 1,
      _id: state[i]._id,
      avatar: state[i].avatar,
      username: state[i].username,
      email: state[i].email,
      address: state[i].address,
      phone: state[i].phone,
      role: state[i].role,
    });
  }

  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/user/")
      .then(function (res) {
        setstate(res.data);
      })
      .catch(function (fail) {
        console.log(fail);
      });
  }, [isin]);

>>>>>>> 64af3a06a3dff8397ffe85bafb16ca7d93d1f094
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

<<<<<<< HEAD
  return (
    <div>
      <Header></Header>
      <div className="table_nv">
        <h2 className="title_nv">Nhân Viên</h2>
        <Table columns={columns} dataSource={data} onChange={onChange} />;
=======
  function ondelete(id) {
    Modal.confirm({
      title: "Bạn có chắc muốn xóa không",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        axios
          .delete(`http://localhost:3150/admin/user/${id}`)
          .then(function (res) {
            // setChangedata(1);
          })
          .catch(function (err) {
            console.log(err);
          });
        count();
      },
    });
  }

  return (
    <div>
      <Header tenname={props.name}></Header>
      <div className="table_nv">
        <h2 className="title_nv">Nhân Viên</h2>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          className="nv"
        />
>>>>>>> 64af3a06a3dff8397ffe85bafb16ca7d93d1f094
      </div>
      <Modal
        title="Quản lý nhân Viên"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
<<<<<<< HEAD
        <input type="text" />
        <input type="text" />
        <input type="text" />
=======
        <input
          type="text"
          placeholder="Name"
          className="name"
          name="username"
        />
        <input
          type="text"
          placeholder="Địa chỉ"
          className="address"
          name="address"
        />
        <input type="text" placeholder="sdt" className="sdt" name="phone" />
        <input type="text" placeholder="quyền" className="role" name="role" />
        <p className="Not"></p>
>>>>>>> 64af3a06a3dff8397ffe85bafb16ca7d93d1f094
      </Modal>
    </div>
  );
}

export default Nhanvien;
