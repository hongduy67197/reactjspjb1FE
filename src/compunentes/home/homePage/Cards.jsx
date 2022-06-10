import { Rate } from 'antd';
import App from './Rate';
import { PlusCircleOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { ExceptionMap } from 'antd/lib/result';
import axios from '../../../axios';

const Cards = ({ item, searchTitle, keyId }) => {
    if (!item.data.length > 0) {
        item.data = [{ minPrice: 'chua set gia' }];
        item.minPrice = 'chưa set giá ';
    }

    if (item.data[0].icon == null) {
        item.data[0].icon = [{ iconName: 'not icon' }];
        item.data[0].icon.iconName = 'not icon';
    }

    // test
    // if (Object.keys(item.data[0]).length > 1) {
    //     item.data = [{ iconName: 'not icon' }];
    //     item.data[0].icon.iconName = 'not icon';
    // }

    const NewSale = item.Sale.replace('%', '') * 1;
    const NewPrice = item.minPrice - (NewSale * item.minPrice) / 100;

    return (
        <div key={keyId} className="home_cards-itm">
            <div className="cards">
                {/* <p className="installment">{icon[0].iconName}</p> */}
                <div className="item_image-box">
                    <div className="image_box">
                        <img className="image_box-image" src={'http://localhost:3150' + item.thumNail} alt="" />
                    </div>
                </div>

                <div>
                    <div className="details">
                        {item.data[0].icon.iconName !== 'not icon' ? (
                            <p className="VNPayIcon">
                                <img
                                    className="VNPayIcon-icon"
                                    src={'http://localhost:3150' + item.data[0].icon.iconPic}
                                />
                                {item.data[0].icon.iconName}
                            </p>
                        ) : null}
                    </div>
                    <p className="ProductName">{item.productName}</p>
                </div>

                <div>
                    {typeof item.minPrice === 'number' ? (
                        <span className="price">{item.minPrice.toLocaleString()}₫</span>
                    ) : null}

                    {NewSale ? <span className="NewSale"> -{NewSale}%</span> : null}
                    {isNaN(NewPrice) ? null : <p className="NewPrice">{NewPrice.toLocaleString()}₫</p>}
                </div>

                <p className="design">{item.design}</p>
                <p className="panel">{item.panel}</p>
                <p className="cameraProduct">{item.cameraProduct}</p>
            </div>
        </div>
    );
};

export default Cards;
