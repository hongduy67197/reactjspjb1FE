import React from 'react';
import Footer from '../compunentes/footer/Footer';
import Header from '../compunentes/header/Header';
import Home from '../compunentes/home/Home';

function HomePage(props) {
    return (
        <div>
            <Header />
            <Home />
            <div style={{textAlign: 'center', margin: "200px 0"}}>
                <h1>SẢN PHẨM HERE</h1>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;