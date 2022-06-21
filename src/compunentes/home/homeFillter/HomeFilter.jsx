import { React, useEffect, useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;




const HomeFilter = (props) => {
  // let checkPrice = props.productCode.map((val)=>{
  //   return val.minPrice
  // })

  // checkPrice.sort((a,b)=>{
  //   return a - b
  // })

  const handleChange = (value) => {
    props.setSort(value)
    console.log(value);
  };

  // useEffect(() => {
  //   if (value === "Xếp Theo Nổi Bật") {
  //     const lth = checkPrice.sort((a, b) => a - b);
  //     setsortProducts(lth);
  //   }
  //   if (value === "thap") {
  //     const htl = checkPrice.sort((a, b) => a - b).reverse();
  //     setsortProducts(htl);
  //   }
  // }, [checkPrice])


  return (
    <>
      <Select
        defaultValue="Xếp Theo Nổi Bật"
        style={{
          width: 160,
        }}
        onChange={handleChange}
      >
        <Option  value={1}> Giá cao đến thấp </Option>
        <Option value={-1}> Giá thấp đến cao </Option>
      </Select>

    </>
  )
}

export default HomeFilter