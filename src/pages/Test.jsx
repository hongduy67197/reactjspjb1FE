import React from 'react'
import axios from "axios";
import { Outlet } from 'react-router-dom';
import Header from '../component/Header'



function Test(props, children) {
    console.log(props)

    function add() {
        let ProductName = document.querySelector('#nameinput').value
        let Price = document.querySelector('#priceinput').value
        let Storage = document.querySelector('#storageinput').value
        axios.post('https://www.nodemy.vn/api/bootcamp-1-s', {
            ProductName: ProductName,
            Price: Price,
            Storage: Storage
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
        axios.delete(`https://www.nodemy.vn/api/bootcamp-1-s/${id}`)
            .then(function (res) {
                console.log(res)
                props.loadagain()

            })
            .catch((err) => {
                console.log(err)
            })
    }
    function modify(id) {
        let ProductName = document.querySelector('#nameinput').value
        let Price = document.querySelector('#priceinput').value
        let Storage = document.querySelector('#storageinput').value
        axios.put(`https://www.nodemy.vn/api/bootcamp-1-s/${id}`, {
            ProductName: ProductName,
            Price: Price,
            Storage: Storage
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
        <div style={{marginTop: '150px'}}>
            {console.log(58,children)}
            <h1>Test comp</h1>
            <input type="text" id='nameinput' placeholder="name" />
            <input type="text" id='priceinput' placeholder="price" />
            <input type="text" id='storageinput' placeholder="storage" />
            <button onClick={add}>approve</button>
            <table>

                <thead>
                    <tr>
                        <td>STT</td>
                        <td>NAME</td>
                        <td>PRICE</td>
                        <td>STORAGE</td>
                        <td>DELETE</td>
                        <td>MODIFY</td>
                    </tr>
                </thead>
                <tbody>
                    {props.data123.map((val, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}]</td>
                                <td>{val.ProductName}</td>
                                <td>{val.Price}</td>
                                <td>{val.Storage}</td>
                                <td><button onClick={() => { deleteid(val._id) }}>delete</button></td>
                                <td><button onClick={() => { modify(val._id) }}>update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Outlet />
            
        </div>
    )
}

export default Test