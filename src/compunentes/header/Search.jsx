import "../header/header.css";
import { React, useEffect, useState } from "react";
import axios from "../../axios";
import Cards from "../home/homePage/Cards";

const Search = () => {
  const [post, setPost] = useState([]);
  // const [searchTitle, setSearchTitle] = useState('');

  function SearchTitle(e) {
    console.log(13, e);
    const loadPosts = async () => {
      const response =  axios.get("/user/list");
      
      setPost(response.data.dataProductCode);
    };
    loadPosts();
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
          <div className="header_search-history-heading-display-flex">
            <span className="header_search-history-heading-span">
              iphone 13 promax
            </span>
          </div>

          <ul className=" header_search-history-heading-text-list">
            <li className="header_search-history-heading-text-list-item">
              <tr>{post.length > 0 ? <td> {post[0].panel}</td> : null}</tr>
            </li>
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
