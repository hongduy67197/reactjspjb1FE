// import React, { useState } from "react";
// import Header from "../../../Components/Header/header";
// import "./styledanggiao.css";
// import axios from "axios";
// import { Table } from "antd";
// import { Modal } from "antd";
// import { useEffect } from "react";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import { getApi, deleteApi, putApi } from "../../../api/config";
// import { getUserCookie, refreshToken } from "../../../refreshToken";

  
// const Danggiao = () => {

//   const [state, setstate] = useState([]);
//   const [state1, setstate1] = useState([]);
//   const [state2, setstate2] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isindex, setIsIndex] = useState(0);
//   const [isin, setIsin] = useState(0);
//   const [userOder, setUserOder] = useState([]);



//   const database = [];

//   useEffect(() => {
//     async function getAllorder() {
//       let token = getUserCookie("user");
//       try {
//         const res = await getApi("/admin/order/");
//         setstate(res.data);
//       } catch (error) {
//         console.log(168, error);
//       }
//     }
//     getAllorder();

//     async function getAllUser() {
//       let token = getUserCookie("user");
//       try {
//         const res = await getApi("/admin/user/");
//         setstate1(res.data);
//       } catch (error) {
//         console.log(168, error);
//       }
//     }
//     getAllUser();

//     async function getAllproduct() {
//       let token = getUserCookie("user");
//       try {
//         const res = await getApi("/admin/product/list");
//         setstate2(res.data);
//       } catch (error) {
//         console.log(168, error);
//       }
//     }
//     getAllproduct();
//   }, [isin]);
//   for (let i = 0; i < state1.length; i++) {
//     for (let j = 0; j < state.length; j++) {
//       if (state1[i]._id === state[j].idUser) {
//         if (state[j].status === "doing") {
//           database.push({
//             idUser: state1[i].username,
//             address: state[j].address,
//             phone: state[j].phone,
//             total: state[j].total,
//             idProduct: state[j].listProduct.map(function (val) {
//               let a = val.idProduct;
//               return a;
//             }),
//             quantity: state[j].listProduct.map(function (val) {
//               let b = val.quantity + "\n";
//               return b;
//             }),
//             status: state[j].status,
//           });
//         }
//       }
//     }
//   }

// //   console.log(999,data);
// //   console.log(84,database);
// // console.log(85,state2);

// let data1 = [];
//   for (let i = 0; i < state2.length; i++) {
//     for (let j = 0; j < database.length; j++) {
//       if (state2[i]._id === database[j].idProduct[0]._id) {
//         data1.push({
//           idUser: database[j].idUser,
//           address: database[j].address,
//           phone: database[j].phone,
//           total: database[j].total,
//           idProduct: state2[i].idProductCode.productName,
//           quantity: database[j].quantity,
//           status: database[j].status,
//         })
        
//         }
//       }
//     }
//   // console.log(100, state2 );
//   // console.log(200, data1);

//   const columns = [
//     {
//       title: "Name",
//       align: "center",
//       dataIndex: "idUser",
//     },
//     {
//       title: "Phone",
//       align: "center",
//       dataIndex: "phone",
//     },
//     {
//       title: "Address",
//       align: "center",
//       dataIndex: "address",
//     },
//     {
//       title: "total",
//       align: "center",
//       dataIndex: "total",
//     },
//     {
//       title: "Name Product",
//       align: "center",
//       dataIndex: "idProduct",
//     },
//     {
//       title: "quantity",
//       align: "center",
//       dataIndex: "quantity",
//     },
//     {
//       title: "status",
//       align: "center",
//       dataIndex: "status",
//     },
//     {
//       title: "Action",
//       dataIndex: "",
//       align: "center",
//       key: "x",
//       render: (record) => (
//         <>
//           <EditOutlined
//             onClick={() => {
//               showModal(record);
//             }}
//             style={{ fontSize: 20 }}
//           />
//           <DeleteOutlined
//             onClick={() => {
//               ondelete(record._id);
//             }}
//             style={{ color: "red", fontSize: 20, marginLeft: 20 }}
//             />
//         </>
//       ),
//     },
//   ];

//   function onChange(pagination, filters, sorter, extra) {
//     console.log("params", pagination, filters, sorter, extra);
//   }
//   function count() {
//     setIsin(isin + 1);
//   }
//   const showModal = (id) => {
//     console.log(168, id);
//     setIsIndex(id);
//     setIsModalVisible(true);
//     data1.map(function (val) {
//       if (val._id == id) {
//         document.querySelector(".phone").value = val.phone;
//         document.querySelector(".address").value = val.address;
//         document.querySelector(".status").value = val.status;
//       }
//     });
//     count();
//   };

//   const handleOk = () => {
//     let phone = document.querySelector(".phone").value;
//     let diachi = document.querySelector(".address").value;
//     let status = document.querySelector(".status").value;

//     if (phone !== "" && diachi !== "" && status !== "") {
//       console.log(185,phone, diachi, status);
//       async function getAllorder1() {
//         let token = getUserCookie("user");
//         try {
//           const res = await putApi(`/admin/order/${isindex}`, {
//             address: diachi,
//             phone: phone,
//             status: status,
//           });
//           console.log(226, res);
//         } catch (error) {
//           console.log(168, error);
//         }
//       }
//       getAllorder1();
//       count();

//       setIsModalVisible(false);
//     } else {
//       document.querySelector(".Not").innerHTML = "Vui lòng không được để trống";
//     }
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   function ondelete(id) {
//     Modal.confirm({
//       title: "Bạn có chắc muốn xóa không",
//       okText: "Yes",
//       okType: "danger",
//       onDelete: () => {
//         async function getAllorder() {
//           let token = getUserCookie("user");
//           try {
//             const res = await deleteApi(`/admin/order/${id}`);
//             console.log(res);
//           } catch (error) {
//             console.log(168, error);
//           }
//         }
//         getAllorder();

//         count();
//       },
//     });
//   }

//   return (
//     <div>
//       <Header></Header>
//       <div className="table_giao">
//         <h1 className="title_giao">Đơn hàng đang giao</h1>
//         <Table
        
//           columns={columns}
//           dataSource={data1}
//           onChange={onChange}
//           className="doing"
//           />
//       <Modal
//         title="Quản lý đơn hàng"
//         visible={isModalVisible}
//         onDelete={handleOk}
//         onCancel={handleCancel}
//       >
//         <input type="text" placeholder="phone" className="phone" />
//         <input type="text" placeholder="Địa chỉ" className="address" />
//         <input type="text" placeholder="status" className="status" />
//         <p className="Not"></p>
//       </Modal>
       
//       </div>
//     </div>
//   );
// }

// export default Danggiao;

// // 
import { ConsoleSqlOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { valHooks } from 'jquery';
import { useEffect, useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { getApi } from '../../../api/config';
import { getUserCookie } from '../../../refreshToken';
import Header from "../../../Components/Header/header";
import "./styledanggiao.css";
let data =  [
  {
    key: '---------------',
    name: '---------------',
    age:'---------------',
    address: '---------------', 
  }];

function Xacnhan() {console.log(288, data)
  const data1 = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  const [data2, setReset] = useState(data1);
  useEffect(() => {
    async function getAllorder() {
      let token = getUserCookie('user')
      try {
        const res = await getApi('/admin/order/listOrder?status=doing')
        let arrayCall = res.data
        console.log(35, arrayCall)
        const newarray = [];
        arrayCall.map((val, index) => {
          newarray.push({
            key: index + 1,
            stt: index +1,
            name: val.idUser ? val.idUser.username : '----------',
            age: val.phone ? val.phone : '----------',
            address: val.address ? val.address : '-----------',
          })
          return val
        })
        console.log(327, newarray)
        setReset(newarray)
        data = newarray;
      } catch (error) {
        console.log(168, error);
      }
    }
    getAllorder()
  }, []);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="large"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="large"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="large"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: '100%',
      ...getColumnSearchProps('stt'),
      sorter: (a, b) => a.key - b.key,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'User Name',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
      ...getColumnSearchProps('name'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Phone Number',
      dataIndex: 'age',
      key: 'age',
      width: '10%',
      ...getColumnSearchProps('age'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '10%',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  return (
  <>
    <Header></Header>
    <div className='table_giao'>
    <Table columns={columns} dataSource={data} pagination= {{defaultPageSize:300}}/>;

    </div>

  </>)
  
};
export default Xacnhan; 
