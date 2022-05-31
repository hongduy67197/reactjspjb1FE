
// import { Pagination } from 'antd';
// import { useState } from 'react';
// // import data from './datapagi'
// function Antd() {
//   // const [first, setfirst] = useState(second)
//   const [showData, setshowData] = useState(function () {
//     return data.slice(0, 3)
//   })


//   console.log(data)


//   function test(page, pageSize) {
//     console.log(1111111111, page, pageSize)
//     const start = (page - 1) * pageSize;
//     const end = page * pageSize;
//     const newShow = data.slice(start, end);
//     setshowData(newShow)
//   }

//   return (
//     <>
//       {showData.map((val, i) => {
//         return <div className="">{val.ten}</div>
//       })}

//       <Pagination defaultPageSize={3} defaultCurrent={1} total={data.length} onChange={test} pageSizeOptions={[7, 20, 30]} showSizeChanger={true} />

//     </>
//   )
// }
// export default Antd