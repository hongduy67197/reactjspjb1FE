import '../header/header.css';
import { React, useEffect, useState } from 'react';
import axios from '../../axios';

const Search = () => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            const response = await axios.get('/user/list');
            setPost(response.data.dataProductCode);
            console.log(15, response.data.dataProductCode);
            setLoading(false);
        };
        loadPosts();
    }, []);

    return (
        <div className="header_search-input-wrap">
            <input
                type="text"
                name=""
                className="header_search-input"
                placeholder="Bạn đang tìm gì..."
                onChange={(e) => setSearchTitle(e.target.value)}
            />

            {/* {loading ? (
        <h4>loading...</h4>
      ) : (
        post
          .filter((value) => {
            if (searchTitle === "") {
              return value.productName;
            } else if (
              value.productName.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => <h5 key={item.id}>{item.title}</h5>)
      )} */}

            {/* Search History */}
            {/* <div className="header_search-history">
        <h3 className="header_search-history-heading">
          <div className="header_search-history-heading-display-flex">
            <span className="header_search-history-heading-span">
              LANEIGE - MUA 1 TẶNG 9
            </span>
            <img
              className="header_search-history-heading-img"
              src="https://cf.shopee.vn/file/54548c4a9eef8081e0bfcbe81d9eddad"
              height="24"
            ></img>
          </div>

          <ul className=" header_search-history-heading-text-list">
            <li className="header_search-history-heading-text-list-item">
              <a href="">iphone 13 pro max</a>
            </li>
            <li className="header_search-history-heading-text-list-item">
              <a href=""> iphone</a>
            </li>
          </ul>
        </h3>
      </div> */}
        </div>
    );
};

export default Search;
