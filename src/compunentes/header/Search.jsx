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
      const response = await axios.get("/user/list");
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
        placeholder="Tạo Nghiện..."
        onChange={(e) => SearchTitle(e.target.value)}
      />
      {/* Search History */}
      <div className="header_search-history">
        <h5 className="header_search-history-heading">
          <div className="header_search-history-heading-display-flex">
            <span className="header_search-history-heading-span">
              <p>{post.length > 0 ? <p> {post[0].panel}</p> : null}</p>
            </span>
          </div>
        </h5>
      </div>
    </div>
  );
};

export default Search;
