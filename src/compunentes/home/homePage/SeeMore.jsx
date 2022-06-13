import React from "react";
import "./seeMore.css";

import { CaretDownOutlined } from "@ant-design/icons";

const SeeMore = (props) => {
  return (
    <div className="seeMore">
      <button onClick={props.seeMore} className="seeMore-button">
        Xem Thêm 20 Điện thoại
        <CaretDownOutlined />
      </button>
    </div>
  );
};

export default SeeMore;
