import React from 'react';
import '../categories/categories.css';

const Categories = (item) => {
    return (
        <div className="categories">
            {item.categories.map((val) => {
                return (
                    <div className="categories-div">
                        <img className="categories-img" src={'http://localhost:3150' + val.thumpNail} />
                    </div>
                );
            })}
        </div>
    );
};

export default Categories;
