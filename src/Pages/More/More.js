import React from 'react';
import Products from '../Home/Products/Products';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const More = () => {
    return (
        <div>
            <Header></Header>
            <Products number={0}></Products>
            <Footer></Footer>
        </div>
    );
};

export default More;