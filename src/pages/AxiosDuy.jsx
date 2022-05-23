import React from 'react'
import axios from "axios";
import '../App.css'
import { Outlet } from 'react-router-dom';
import Header from '../component/Header'
import { Pagination } from 'antd';
import { useState } from 'react';
function AxiosDuy(props, children) {
    // setshowData(props.show)
    console.log(props.show)
    function test(page, pageSize) {
        console.log(page, pageSize)
        const start = (page - 1) * pageSize;    
        const end = page * pageSize;
        const newShow = props.data.slice(start, end);
        props.setagain(newShow)
    }


    function add() {
        let productName = document.querySelector('#nameinput').value
        let Size = document.querySelector('#sizeinput').value
        let color = document.querySelector('#colorinput').value
        let description = document.querySelector('#discriptioninput').value
        let Price = document.querySelector('#priceinput').value
        let Quality = document.querySelector('#quatityinput').value
        let idCatagories = document.querySelector('#catalogiinput').value
        axios.post('http://localhost:3100/product/', {
            productName,
            Size,
            color,
            description,
            Price,
            Quality,
            idCatagories,
        })
            .then(function (res) {
                console.log(res)
                props.loadagain()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    function deleteid(id) {
        axios.delete(`http://localhost:3100/product/${id}`)
            .then(function (res) {
                console.log(52, res)
                props.loadagain()

            })
            .catch((err) => {
                console.log(err)
            })
    }
    function modify(id) {
        // nameinput
        // sizeinput
        // colorinput
        // discriptioninput
        // priceinput
        // quatityinput
        // catalogiinput
        {/* Price: 50000
            Quality: 456
            Size: "m"
            color: "red"
            description: "123"
            idCatagories: []
            productName: "ao khoac"
            __v: 0
            _id: "626fafc9d9e168c024d4cbc5" */}
        let productName = document.querySelector('#nameinput').value
        let Size = document.querySelector('#sizeinput').value
        let color = document.querySelector('#colorinput').value
        let description = document.querySelector('#discriptioninput').value
        let Price = document.querySelector('#priceinput').value
        let Quality = document.querySelector('#quatityinput').value
        let idCatagories = document.querySelector('#catalogiinput').value
        axios.put(`http://localhost:3100/product/${id}`, {
            productName,
            Size,
            color,
            description,
            Price,
            Quality,
            idCatagories,

        })
            .then(function (res) {
                console.log(res)
                props.loadagain()

            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (

        <div style={{ marginTop: '150px' }}>

            {console.log(58, children)}
            <h1>BÀI TẬP CỦA DUY AXIOS 5-5 </h1>
            <div className="wrapAxiosDuy">
                <input type="text" id='nameinput' placeholder="PRODUCT_NAME" />
                <input type="text" id='sizeinput' placeholder="SIZE" />
                <input type="text" id='colorinput' placeholder="COLOR" />
                <input type="text" id='discriptioninput' placeholder="DISCRIPTION" />
                <input type="text" id='priceinput' placeholder="PRICE" />
                <input type="text" id='quatityinput' placeholder="QUATITY" />
                <input type="text" id='catalogiinput' placeholder="CATALOGI" />
                <button onClick={add}>approve</button>


            </div>

            <table>

                <thead>
                    <tr>
                        <td>STT</td>
                        <td>PRODUCT_NAME</td>
                        <td>SIZE</td>
                        <td>COLOR</td>
                        <td>DISCRIPTION</td>
                        <td>PRICE</td>
                        <td>QUATITY</td>
                        <td>CATALOGI</td>
                        <td>DELETE</td>
                        <td>MODIFY</td>
                    </tr>
                </thead>


                <tbody>

                    {
                        props.show.map((val, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{val.productName}</td>
                                    <td>{val.Size}</td>
                                    <td>{val.color}</td>
                                    <td>{val.description}</td>
                                    <td>{val.Price}</td>
                                    <td>{val.Quality}</td>
                                    <td>{val.idCatagories}</td>
                                    <td><button onClick={() => { deleteid(val._id) }}>Delete</button></td>
                                    <td><button onClick={() => { modify(val._id) }}>Modify</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <Outlet />
            <Pagination defaultPageSize={3} defaultCurrent={1} total={props.data.length} onChange={test} pageSizeOptions={[7, 20, 30]} showSizeChanger={true} />

        </div>
    )
}

export default AxiosDuy