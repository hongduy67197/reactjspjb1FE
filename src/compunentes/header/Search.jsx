import '../header/header.css';
import { React, useEffect, useState } from 'react';
import axios from '../../axios';
import Cards from '../home/homePage/Cards';

const Search = () => {
    const [post, setPost] = useState([]);
    // const [searchTitle, setSearchTitle] = useState('');

    function SearchTitle(e) {
        console.log(13, e);
        const loadPosts = async () => {
            const response = await axios.get('/user/list');
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
                placeholder="Bạn đang tìm gì..."
                onChange={(e) => SearchTitle(e.target.value)}
            />
            <tr>{post.length > 0 ? <td> {post[0].panel}</td> : null}</tr>
        </div>
    );
};

export default Search;
