import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { Modal } from "bootstrap";
import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import Header from "../../../Components/Header/header";
import Footer from "../../../compunentes/footer/Footer";

function Hoanthanh() {
  const [state, setstate] = useState([]);
  const [state1, setstate1] = useState([]);
  const [state2, setstate2] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isindex, setIsIndex] = useState(0);
  const [isin, setIsin] = useState(0);

  const database = [];
  const data = [];

  function count() {
    setIsin(isin + 1);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/order/")
      .then(function (res) {
        setstate(res.data);
      })
      .catch(function (fail) {
        console.log(fail);
      });

    axios
      .get(`http://localhost:3150/admin/user/`)
      .then(function (res) {
        setstate1(res.data);
      })
      .catch(function (fail) {
        console.log(fail);
      });

    axios
      .get("http://localhost:3150/admin/product/list")
      .then(function (res) {
        setstate2(res.data);
      })
      .catch(function (fail) {
        console.log(fail);
      });
  }, [isin]);

  for (let i = 0; i < state1.length; i++) {
    for (let j = 0; j < state.length; j++) {
      if (state1[i]._id === state[j].idUser) {
        if (state[j].status === "done") {
          database.push({
            idUser: state1[i].username,
            address: state[j].address,
            phone: state[j].phone,
            total: state[j].total,
            idProduct: state[j].listProduct.map(function (val) {
              let a = val.idProduct;
              return a;
            }),
            quantity: state[j].listProduct[0].quantity,
            status: state[j].status,
          });
        }
      }
    }
  }

  for (let i = 0; i < state2.length; i++) {
    for (let j = 0; j < database.length; j++) {
      if (state2[i]._id === database[j].idProduct[0]) {
        data.push({
          idUser: database[j].idUser,
          address: database[j].address,
          phone: database[j].phone,
          total: database[j].total,
          idProduct: state2[i].idProductCode.productName,
          quantity: database[j].quantity,
          status: database[j].status,
        });
      }
    }
  }

  const columns = [
    {
      title: "Name",
      align: "center",
      dataIndex: "idUser",
    },
    {
      title: "Phone",
      align: "center",
      dataIndex: "phone",
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
      title: "Name Product",
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

  const showModal = (id) => {
    setIsIndex(id);
    count();
    setIsModalVisible(true);
    data.map(function (val) {
      if (val._id == id) {
        document.querySelector(".phone").value = val.phone;
        document.querySelector(".address").value = val.address;
        document.querySelector(".status").value = val.status;
      }
    });
  };

  const handleOk = () => {
    let phone = document.querySelector(".phone").value;
    let diachi = document.querySelector(".address").value;
    let status = document.querySelector(".status").value;

    if (phone !== "" && diachi !== "" && status !== "") {
      axios
        .put(`http://localhost:3150/admin/user/${isindex}`, {
          address: diachi,
          phone: phone,
          status: status,
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
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function ondelete(id) {
    Modal.confirm({
      title: "Bạn có chắc muốn xóa không",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        axios
          .delete(`http://localhost:3150/admin/order/${id}`)
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
      <Header></Header>
      <div className="table_ht">
        <h1 className="title_ht">Đơn hàng hoàn thành</h1>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="done"
        />
      </div>
    <Footer/>
    </div>
  );
}

export default Hoanthanh;