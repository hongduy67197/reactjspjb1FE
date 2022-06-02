import React, { useState } from "react";
import Header from "../../../Components/Header/header";
import { Table } from "antd";
import { Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect } from "react";

import "./style.css";

function Nhanvien(props) {
  const [state, setstate] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isindex, setIsIndex] = useState(0);
  // const [changedata, setChangedata] = useState(null);

  const showModal = (id) => {
    setIsIndex(id);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const from12 = document.querySelector(".fromlist");
    const fromData12 = new FormData(from12);
    let anh = document.querySelector(".avatar").value;
    let name = document.querySelector(".name").value;
    let diachi = document.querySelector(".address").value;
    let phone = document.querySelector(".sdt").value;
    let role = document.querySelector(".role").value;
    // {
    //   avatar: anh,
    //   username: name,
    //   address: diachi,
    //   phone: phone,
    //   role: role,
    // }
    if ((name !== "" && diachi !== "" && phone !== "", role !== "")) {
      console.log(38, isindex);
      axios
        .put(`http://localhost:3150/admin/user/${isindex}`, fromData12)
        .then(function (res) {
          // setChangedata();
        })
        .catch(function (fail) {
          console.log(fail);
        });
      setIsModalVisible(false);
    } else {
      document.querySelector(".note").innerHTML =
        "Vui lòng không được để trống";
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
    },
    {
      title: "Ảnh",
      dataIndex: "avatar",
      render: () => {
        return <img src={"avatar"} alt="anh" />;
      },
    },
    {
      title: "Name",
      dataIndex: "username",
      sorter: {
        compare: (a, b) => a.username.localeCompare(b.username),
      },
    },
    { title: "Email", dataIndex: "email" },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      sorter: {
        compare: (a, b) => a.address.localeCompare(b.address),
      },
    },
    { title: "Số điện thoại", dataIndex: "phone" },
    { title: "Quyền", dataIndex: "role" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <>
          <EditOutlined
            onClick={() => {
              showModal(record._id);
            }}
            style={{ fontSize: 20 }}
          />
          <DeleteOutlined
            onClick={() => {
              ondelete(record._id);
            }}
            style={{ color: "red", fontSize: 20, marginLeft: 20 }}
          />
        </>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < state.length; i++) {
    data.push({
      index: i + 1,
      _id: state[i]._id,
      avatar:
        "data:image/jpeg;base64,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",
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
  }, [state]);

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  function ondelete(id) {
    Modal.confirm({
      title: "Bạn có chắc muốn xóa không",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        axios
          .delete(`http://localhost:3150/admin/user/${id}`)
          .then(function (res) {
            // setChangedata();
          })
          .catch(function (err) {
            console.log(err);
          });
      },
    });
  }
  function add() {
    let em = document.querySelector("#em").value;
    let pas = document.querySelector("#pas").value;
    console.log(em, pas);
    axios
      .post(`http://localhost:3150/admin/user/`, {
        email: em,
        password: pas,
      })
      .then(function (res) {
        // setChangedata();
      })
      .catch(function (fail) {
        console.log(fail);
      });
  }

  return (
    <div>
      <Header tenname={props.name}></Header>
      <div className="table_nv">
        <h2 className="title_nv">Nhân Viên</h2>
        <input type="text" id="em" />
        <input type="text" id="pas" />
        <button onClick={add}>Click</button>
        <Table columns={columns} dataSource={data} onChange={onChange} />;
      </div>
      <Modal
        title="Quản lý nhân Viên"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <from action="" className="fromlist" encType="multipart/from-data">
          <input
            type="file"
            placeholder="ảnh"
            className="avatar"
            name="avatar"
          />
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
          <p className="note"></p>
        </from>
      </Modal>
    </div>
  );
}

export default Nhanvien;
