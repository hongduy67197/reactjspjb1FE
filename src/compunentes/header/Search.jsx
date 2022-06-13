import "../header/header.css";
import { React, useEffect, useState } from "react";
import axios from "../../axios";
import Cards from "../home/homePage/Cards";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
let tempAddToSearchBar;

const Search = (props) => {
  const [post, setPost] = useState([]);
  // const [searchTitle, setSearchTitle] = useState('');
  let setTime;

  function SearchTitle(e) {
    console.log(14, e);
    let getInputSearch = document.querySelector(".header_search-input").value;
    tempAddToSearchBar = getInputSearch;
    props.getValue(getInputSearch);
    clearTimeout(setTime);
    setTime = setTimeout(() => {
      axios
        .get(`http://localhost:3150/user/fillter?productName=${e}`)
        .then(function (res) {
          console.log(res);
          // setPost(res.data.listProductCode);
          let dataSearch = res.data.listProductCode;
          console.log(25, dataSearch);
          if (dataSearch.length > 0) {
            setPost(dataSearch);
          } else {
            setPost([
              {
                productName:
                  "không có kết quả nào phù hợp, mời bạn nhập lại !!!",
              },
            ]);
          }
          clearTimeout(setTime);
        })
        .catch((err) => {
          console.log(err);
          clearTimeout(setTime);
        });
    }, [50]);
  }

  // props.getValue(122424234234)
  //   if(tempAddToSearchBar ===0 ){
  //   document.querySelector('.header_search-input').innerHTML= ''
  // }else {
  //   document.querySelector('.header_search-input').innerHTML= tempAddToSearchBar

  // }
  const navigate = useNavigate();
  function RemoveAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ",
      "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ",
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
      var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }
  function movePageToProduct(e) {
    let linktoProduct = e.target.innerHTML;
    let linktoProductModify = RemoveAccents(linktoProduct).split(" ").join("");
    console.log(51, e.target.innerHTML);
    navigate(`/product/filter/${linktoProductModify}`);
  }

  return (
    <div className="header_search-input-wrap">
      <input
        type="text"
        name=""
        className="header_search-input"
        placeholder="Nhập vào từ khóa muốn tìm kiếm ... "
        onChange={(e) => SearchTitle(e.target.value)}
      />
      {/* Search History */}
      <div className="header_search-history">
        <h3 className="header_search-history-heading">
          {/* <div className="header_search-history-heading-display-flex">
            <span className="header_search-history-heading-span">
              iphone 13 promax
            </span>
          </div> */}

          <ul className="header_search-history-heading-text-list">
            {post.length > 0 ? (
              post.map((val) => {
                return (
                  <li
                    onClick={(e) => {
                      movePageToProduct(e);
                    }}
                    className="header_search-history-heading-text-list-item"
                  >
                    {" "}
                    {val.productName}
                  </li>
                );
              })
            ) : (
              <li
                onClick={(e) => {
                  movePageToProduct(e);
                }}
                className="header_search-history-heading-text-list-item"
              >
                {" "}
                mời bạn nhập ..........
              </li>
            )}

            {/* <li className="header_search-history-heading-text-list-item">
              <a href=""> iphone</a>
            </li> */}
          </ul>
        </h3>
      </div>
    </div>
  );
};

export default Search;
