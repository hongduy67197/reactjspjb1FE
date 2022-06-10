import '../home/Home.css';
import { React, useEffect, useState } from 'react';
import axios from '../../axios';
import SeeMore from '../home/homePage/SeeMore';
import ListProduct from './homePage/ListProduct';
import Advertisement from '../../advertisement/Advertisement';

import { WechatOutlined } from '@ant-design/icons';
import Header from '../header/Header';
import Slider from '../slider/Slider';
import Footer from '../footer/Footer';
import Categories from '../categories/Categories';

const Home = () => {
    const [productCode, setProductCode] = useState([]);
    const [numberShow, setNumberShow] = useState(20);
    const [Slides, setSlides] = useState([]);
    const [categories, setCategories] = useState([]);

    function seeMore() {
        setNumberShow(numberShow + 20);
    }

    useEffect(() => {
        axios
            .get('/user/list')
            .then(function (res) {
                setSlides(res.data.listSlide);
            })
            .catch(function (err) {
                console.log(99, err);
            });
    }, []);

    // Product Code
    useEffect(() => {
        axios
            .get('/user/list')
            .then(function (res) {
                setProductCode(res.data.dataProductCode);
            })
            .catch(function (err) {
                console.log(43, err);
            });
    }, []);

    //========= categories =============
    useEffect(() => {
        axios
            .get('/admin/categories')
            .then(function (res) {
                setCategories(res.data);
            })
            .catch(function (err) {
                console.log(55, err);
            });
    }, []);

    //======== icon ===============
    const [NewIcon, setNewIcon] = useState([]);
    useEffect(() => {
        axios
            .get('/admin/icon/list')
            .then(function (res) {
                setNewIcon(res.data);
            })
            .catch(function (err) {
                console.log(99, err);
            });
    }, []);

    return (
        <div className="home-container">
            <Header></Header>
            <Slider Slides={Slides} />
            <Categories categories={categories} />
            <div className="home_status_container-chat">
                <i title="New messages" id="unread-msg-number">
                    <WechatOutlined className="WechatOutlined" />
                </i>
                <a href="#" id="status-icon"></a>
            </div>
            <div className="home-container-filter">
                <div className="home-page-product">
                    <ListProduct productCode={productCode} numberShow={numberShow} NewIcon={NewIcon} />
                </div>
            </div>

            <SeeMore seeMore={seeMore} />
            <Advertisement />
            <Footer />
        </div>
    );
};

export default Home;
