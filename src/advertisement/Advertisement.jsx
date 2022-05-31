import React from "react";
import "../advertisement/Advertisement.css";

const Advertisement = () => {
  return (
    <div className="Advertisement">
      <div className="Advertisement-container">
        <div className="container-product">
          <div className="title">
            <span className="dotnew">
              <span className="animation"></span>
            </span>
            <span className="text">
              <a href="https://www.bachhoaxanh.com/">
                <img
                  src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/logoBHX.png"
                  alt=""
                />
              </a>
              <span className="text-freeShip">
                FREESHIP cho đơn hàng từ 300.000đ
              </span>
            </span>
            <span className="note">
              (Đây là khuyến mãi của website cùng tập đoàn MWG)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
