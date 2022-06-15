import React, { useState } from "react";
import Header from "../../../Components/Header/header";
import "./styleXacnhan.css";
import axios from "axios";
import { Table } from "antd";
import { Modal } from "antd";
import { useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ClassSharp } from "@mui/icons-material";
import {getApi,deleteApi, putApi} from '../../../api/config'
import { getUserCookie, refreshToken } from "../../../refreshToken";


function Xacnhan() {
  const [state, setstate] = useState([]);
  const [state1, setstate1] = useState([]);
  const [state2, setstate2] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isindex, setIsIndex] = useState(0);

  const database = [];
  const data = [];

  useEffect(() => {
    async function getAllorder (){
      let token = getUserCookie('user')
      try {
        const res = await getApi('/admin/order/')
        console.log(35,res)
        setstate(res.data)
      } catch (error) {
        console.log(168, error);
      }
    }
    getAllorder()

    async function getAllUser (){
      let token = getUserCookie('user')
      try {
        const res = await getApi('/admin/user/')
        setstate1(41,res.data)
      } catch (error) {
        console.log(168, error);
      }
    }
    getAllUser()

    async function getAllproduct (){
      let token = getUserCookie('user')
      try {
        const res = await getApi('/admin/product/list')
        console.log(62,res)
        setstate2(res.data)
      } catch (error) {
        console.log(168, error);
      }
    }
    getAllproduct()

  }, []);

  for (let i = 0; i < state1.length; i++) {
    for (let j = 0; j < state.length; j++) {
      if (state1[i]._id === state[j].idUser) {
        if (state[j].status === "pending") {
          database.push({
            _id: state[j]._id,
            idUser: state1[i].username,
            address: state[j].address,
            phone: state[j].phone,
            total: state[j].total,
            idProduct: state[j].listProduct.map(function (val) {
              let a = val.idProduct;
              return a;
            }),
            quantity: state[j].listProduct.map(function (val) {
              let b = val.quantity + "\n";
              return b;
            }),
            status: state[j].status,
          });
        }
      }
    }
  }

  for (let i = 0; i < state2.length; i++) {
    for (let j = 0; j < database.length; j++) {
      console.log(68, state2[i]._id);
      console.log(69, database[j].idProduct);

      if (state2[i]._id === database[j].idProduct) {
        data.push({
          _id: database[j]._id,
          idUser: database[j].idUser,
          address: database[j].address,
          phone: database[j].phone,
          total: database[j].total,
          // idProduct: state2[i].idProductCode.productName,
          quantity: database[j].quantity,
          status: database[j].status,
        });
      }
    }
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "idUser",
      align: "center",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      align: "center",
    },
    {
      title: "Address",
      align: "center",
      dataIndex: "address",
    },
    {
      title: "total",
      align: "center",
      dataIndex: "total",
    },
    {
      title: "idProduct",
      align: "center",
      dataIndex: "idProduct",
    },
    {
      title: "quantity",
      align: "center",
      dataIndex: "quantity",
    },
    {
      title: "status",
      align: "center",
      dataIndex: "status",
    },
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
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const showModal = (id) => {
    setIsIndex(id);
    setIsModalVisible(true);
  };

  console.log(137, isindex);
  const handleOk = () => {
    let phone = document.querySelector(".phone").value;
    let diachi = document.querySelector(".address").value;
    let status = document.querySelector(".status").value;

    console.log(147, phone, diachi, status, isindex);
    if (phone !== "" && diachi !== "" && status !== "") {
      async function getAllorder (){
        let token = getUserCookie('user')
        console.log(147, token);
        try {
          const res = await putApi(`/admin/order/${isindex}`,{
            address: diachi,
            phone: phone,
            status: status,
          })
          console.log(226,res)
        } catch (error) {
          console.log(168, error);
        }
      }
      getAllorder()

      // count();
      setIsModalVisible(false);
    } else {
      document.querySelector(".Not").innerHTML = "Vui lòng không được để trống";
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function ondelete(id) {
    console.log(172, id);
    Modal.confirm({
      title: "Bạn có chắc muốn xóa không",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        async function getAllorder (){
          let token = getUserCookie('user')
          console.log(147, token);
          try {
            const res = await deleteApi(`/admin/order/${id}`)
          } catch (error) {
            console.log(168, error);
          }
        }
        getAllorder()

        // count();
      },
    });
  }

  return (
    <div>
      <Header></Header>
      <div className="table_xacnhan ">
        <h1 className="title_xacnhan">Đơn hàng chờ xác nhận</h1>
        <Table columns={columns} dataSource={database} onChange={onChange} />
      </div>
      <Modal
        title="Quản lý đơn hàng"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input type="text" placeholder="phone" className="phone" />
        <input type="text" placeholder="Địa chỉ" className="address" />
        <input type="text" placeholder="status" className="status" />
        <p className="Not"></p>
      </Modal>
    </div>
  );
}

export default Xacnhan;
