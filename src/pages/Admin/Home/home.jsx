import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Header from '../../../Components/Header/header';
import './styleHome.css';
import { Table } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
//npm install react-calendar
function Home() {
    const [state, setstate] = useState({});
    const [date, setdate] = useState(new Date());
    const onChange = (date) => {
        setdate(date);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Chinese Score',
            dataIndex: 'chinese',
            sorter: {
                compare: (a, b) => a.chinese - b.chinese,
                multiple: 3,
            },
        },
        {
            title: 'Math Score',
            dataIndex: 'math',
            sorter: {
                compare: (a, b) => a.math - b.math,
                multiple: 2,
            },
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Chinese Score',
            dataIndex: 'chinese',
            sorter: {
                compare: (a, b) => a.chinese - b.chinese,
                multiple: 3,
            },
        },
    ];

    function onchange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    const database = [];

    useEffect(() => {
        axios
            .get('http://localhost:3150/admin/productcode/list')
            .then(function (res) {
                setstate.push(res.data);
            })
            .catch(function (fail) {
                console.log(fail);
            });
    }, []);

    console.log(68, database);
    return (
        <div>
            <Header></Header>
            <div className="content">
                <h3 className="content_title">Dashboard</h3>
                <div className="statistical">
                    <div className="table">
                        <div className="icon_sale">
                            <i class="fa-solid fa-wave-square"></i>
                        </div>
                        <div className="content_sale">
                            <p className="icon_title">Sales</p>
                            <p className="thongso">98,225</p>
                        </div>
                    </div>
                    <div className="table">
                        <div className="icon_order">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="content_sale">
                            <p className="icon_title">Orders</p>
                            <p className="thongso">98,225</p>
                        </div>
                    </div>
                    <div className="table">
                        <div className="icon_customer">
                            <i class="fa-solid fa-user-tag"></i>
                        </div>
                        <div className="content_sale">
                            <p className="icon_title">Customers</p>
                            <p className="thongso">98,225</p>
                        </div>
                    </div>
                    <div className="table">
                        <div className="icon_Income">
                            <i class="fa-solid fa-sack-dollar"></i>
                        </div>
                        <div className="content_sale">
                            <p className="icon_title">Income</p>
                            <p className="thongso">98,225</p>
                        </div>
                    </div>
                </div>

                <div className="productNew">
                    <h2>New Products</h2>
                    <Table columns={columns} dataSource={database} onChange={onchange} />;
                </div>

                <div className="Note">
                    <div className="calendar">
                        <Calendar showWeekNumbers onChange={onChange} value={date} className="react-Calendar" />
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
