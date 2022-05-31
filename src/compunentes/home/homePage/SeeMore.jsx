import React from "react";
import "./seeMore.css";

import { CaretDownOutlined } from "@ant-design/icons";

const SeeMore = () => {
  return (
    <div className="seeMore">
      <button className="seeMore-button">
        Xem Thêm 82 Điện thoại
        <CaretDownOutlined />
      </button>
    </div>
  );
};

export default SeeMore;
