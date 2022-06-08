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
  const data = [];

  const showModal = (id) => {
    setIsIndex(id);
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
      setIsModalVisible(false);
    } else {
      document.querySelector(".Not").innerHTML = "Vui lòng không được để trống";
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "STT",
      align: "center",
      dataIndex: "index",
    },
    {
      title: "Ảnh",
      align: "center",
      dataIndex: "avatar",
      render: (avatar) => (
        // <img src={"http://localhost:3150" + avatar} alt="anh" />
        <div className="anhAvatar">
          <img src={avatar} alt="anh" className="anh" />
        </div>
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
            // setChangedata(1);
          })
          .catch(function (err) {
            console.log(err);
          });
      },
    });
  }
  // function add() {
  //   let em = document.querySelector("#em").value;
  //   let pas = document.querySelector("#pas").value;
  //   console.log(em, pas);
  //   axios
  //     .post(`http://localhost:3150/admin/user/`, {
  //       email: em,
  //       password: pas,
  //     })
  //     .then(function (res) {
  //       // setChangedata();
  //     })
  //     .catch(function (fail) {
  //       console.log(fail);
  //     });
  // }

  return (
    <div>
      <Header tenname={props.name}></Header>
      <div className="table_nv">
        <h2 className="title_nv">Nhân Viên</h2>
        {/* <input type="text" id="em" />
        <input type="text" id="pas" />
        <button onClick={add}>Click</button> */}
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      <Modal
        title="Quản lý nhân Viên"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* <from action="" className="fromlist" encType="multipart/form-data"> */}
        {/* <input type="text" placeholder="ảnh" name="avatar" className="avatar" /> */}
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
        {/* </from> */}
      </Modal>
    </div>
  );
}

export default Nhanvien;
