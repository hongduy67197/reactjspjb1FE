import Header from '../../../Components/Header/header';
import './product.css';
import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserCookie, refreshToken } from "../../../refreshToken";
import {getApi} from '../../../api/config'

var vitri;
var maso;
var vitriup;
var masoup;
function Trenke(props) {
    const [hien, sethien] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:3150/admin/productcode/list')
            .then(function (response) {
                sethien(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    var abcarr;
    function choosebrand(id) {
        let listBrand = document.querySelectorAll('.brand');
        for (let i = 0; i < listBrand.length; i++) {
            listBrand[i].setAttribute('style', '');
        }
        document.querySelector(`[value="${id}"]`).style.background = 'black';
        document.querySelector(`[value="${id}"]`).style.color = 'white';
        abcarr = [];
        props.data.map(function (value, index) {
            if (value.idCategories[0] === id) {
                abcarr.push(value);
                sethien(abcarr);
            }
        });
    }
    function showall() {
        let listBrand = document.querySelectorAll('.brand');
        for (let i = 0; i < listBrand.length; i++) {
            listBrand[i].setAttribute('style', '');
        }
        document.querySelector('#tatca').style.background = 'black';
        document.querySelector('#tatca').style.color = 'white';
        props.setshowdata(props.data);
    }
    function onclear(id, index) {
        vitri = index;
        maso = id;
        axios
            .get(`http://localhost:3150/admin/productcode/${id}`)
            .then(function (response) {
                console.log(response);
                document.querySelector('.tendt').innerHTML = response.data.productName;
            })
            .catch(function (error) {
                console.log(error);
            });

        document.querySelector('.boxclear').style.display = 'block';
    }
    function accept() {
        console.log(vitri, maso);
        axios
            .delete(`http://localhost:3150/admin/productcode/${maso}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        hien.splice(vitri, 1);
        console.log(hien);
        props.changesign();
        closeclear();
    }
    function closeclear() {
        document.querySelector('.boxclear').style.display = 'none';
    }
    function onupdate(id, index) {
        vitriup = index;
        masoup = id;
        document.querySelector('.boxfix').style.display = 'block';
        axios
            .get(`http://localhost:3150/admin/productcode/${id}`)
            .then(function (response) {
                document.querySelector('.productName').value = response.data.productName;
                document.querySelector('.productType').value = response.data.productType;
                document.querySelector('.performanceProduct').value = response.data.performanceProduct;
                document.querySelector('.cameraProduct').value = response.data.cameraProduct;
                document.querySelector('.specialFeatures').value = response.data.specialFeatures;
                document.querySelector('.design').value = response.data.design;
                document.querySelector('.panel').value = response.data.panel;
                document.querySelector('.countSold').value = response.data.countSold;
                document.querySelector('.Sale').value = response.data.Sale;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    function closeupdate() {
        document.querySelector('.boxfix').style.display = 'none';
    }
    function update() {
        var productName = document.querySelector('.productName').value;
        var productType = document.querySelector('.productType').value;
        var performanceProduct = document.querySelector('.performanceProduct').value;
        var cameraProduct = document.querySelector('.cameraProduct').value;
        var specialFeatures = document.querySelector('.specialFeatures').value;
        var design = document.querySelector('.design').value;
        var panel = document.querySelector('.panel').value;
        var countSold = document.querySelector('.countSold').value;
        var Sale = document.querySelector('.Sale').value;
        hien[vitriup].productName = document.querySelector('.productName').value;
        hien[vitriup].productType = document.querySelector('.productType').value;
        hien[vitriup].performanceProduct = document.querySelector('.performanceProduct').value;
        hien[vitriup].cameraProduct = document.querySelector('.cameraProduct').value;
        hien[vitriup].specialFeatures = document.querySelector('.specialFeatures').value;
        hien[vitriup].design = document.querySelector('.design').value;
        hien[vitriup].panel = document.querySelector('.panel').value;
        hien[vitriup].countSold = document.querySelector('.countSold').value;
        hien[vitriup].Sale = document.querySelector('.Sale').value;
        axios
            .put(`http://localhost:3150/admin/productcode/${masoup}`, {
                productName,
                productType,
                performanceProduct,
                cameraProduct,
                specialFeatures,
                design,
                panel,
                countSold,
                Sale,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        closeupdate();
        props.changesign();
    }
    return (
        <div>
            <Header></Header>
            <div className="newproduct">
                <h1 className="sptk">Sản phẩm trên kệ</h1>
                <div className="allbrand">
                    <div className="brand tatca123" id="tatca">
                        <p id="tatca" className="tatca" onClick={showall}>
                            Tất cả
                        </p>
                    </div>
                    {props.brand.map(function (value, index) {
                        return (
                            <div className="brand" value={value._id} key={index} onClick={() => choosebrand(value._id)}>
                                <p id="brand">{value.categoriesName}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="boxtable">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Loại sản phẩm</th>
                                <th>Thông tin sản phẩm</th>
                                <th>Số lượng bán</th>
                                <th>Sale</th>
                                <th>Chỉnh sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hien.map(function (value, index) {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.productName}</td>
                                        <td>
                                            <img src={'http://localhost:3150' + value.thumNail} alt="" />
                                        </td>
                                        <td>{value.productType}</td>
                                        <td>
                                            {value.performanceProduct} <br />
                                            {value.cameraProduct} <br />
                                            {value.specialFeatures} <br />
                                            {value.design} <br />
                                            {value.panel}
                                        </td>
                                        <td>{value.countSold}</td>
                                        <td>{value.Sale}</td>
                                        <td>
                                            <button className="stockbut">
                                                <i className="fa-solid fa-bars"></i>
                                            </button>
                                            <button onClick={() => onupdate(value._id, index)} className="stockbut">
                                                <i className="fa-solid fa-repeat"></i>
                                            </button>
                                            <button onClick={() => onclear(value._id, index)} className="stockbut">
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="boxclear">
                    <h1>Chắc chắn muốn xóa</h1>
                    <div>
                        <span className="tendt"></span>
                    </div>
                    <div className="boxaccept">
                        <button onClick={accept}>Accept</button>
                        <button onClick={closeclear}>Close</button>
                    </div>
                </div>
                <div className="boxfix">
                    <h3>Bảng thông tin chỉnh sửa</h3>
                    <div className="inboxfix">
                        <span>productName:</span> <input className="productName" type="text" />
                    </div>
                    <div className="inboxfix">
                        <span>productType:</span> <input className="productType" type="text" />
                    </div>
                    <div className="inboxfix">
                        <span>performanceProduct:</span> <input className="performanceProduct" type="text" />
                    </div>
                    <div className="inboxfix">
                        <span>cameraProduct:</span> <input className="cameraProduct" type="text" />
                    </div>
                    <div className="inboxfix">
                        <span>specialFeatures:</span> <input className="specialFeatures" type="text" />
                    </div>
                    <div className="inboxfix">
                        <span>design:</span> <input className="design" type="text" />
                    </div>
                    <div className="inboxfix">
                        <span>panel:</span> <input className="panel" type="text" />
                    </div>
                    <div className="inboxfix">
                        <span>countSold:</span> <input className="countSold" type="text" />
                    </div>
                    <div className="inboxfix">
                        <span>Sale:</span> <input className="Sale" type="text" />
                    </div>
                    <div className="boxfixbut">
                        <button onClick={update}>Update</button>
                        <button onClick={closeupdate}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trenke;
