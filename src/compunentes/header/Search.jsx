import "../header/header.css";
import { React, useEffect, useState } from "react";
import axios from "../../axios";
import Cards from "../home/homePage/Cards";
let tempAddToSearchBar ;

const Search = (props) => {
  const [post, setPost] = useState([]);
  // const [searchTitle, setSearchTitle] = useState('');
  let setTime;
  
  function SearchTitle(e) {
    let getInputSearch = document.querySelector('.header_search-input').value
    tempAddToSearchBar= getInputSearch;
    props.getValue(getInputSearch)
    clearTimeout(setTime)
    setTime = setTimeout(()=>{
      axios.get( "http://localhost:3150/user/fillter?idCategories=628c8b29e8654d960a5c8983")
      .then(function (res){
        console.log(14,res.data)
        setPost(res.data.listProductCode)
        clearTimeout(setTime)
      })
      .catch((err) => {
        console.log(err);
        clearTimeout(setTime)
      });
    },[1000]) 
    };
    // console.log(24,post)
    
    // props.getValue(122424234234)
  //   if(tempAddToSearchBar ===0 ){
  //   document.querySelector('.header_search-input').innerHTML= ''
  // }else {
  //   document.querySelector('.header_search-input').innerHTML= tempAddToSearchBar

  // }

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

          <ul className=" header_search-history-heading-text-list">
              <li className="header_search-history-heading-text-list-item">{post.length > 0 ? <td> {post[0].panel}</td> : null}</li>
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
