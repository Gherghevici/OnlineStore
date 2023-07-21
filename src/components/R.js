import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from './ProductDetails';
import Contact from '../pages/Contact';
import Cos from '../pages/Cos';
import ModalLogin from './ModalLogin';
import Header from './header';
import Footer from './Footer';
import CheckOut from './CheckOut';

function R(){
    return(
        <>
        <ModalLogin></ModalLogin>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:id' element={<ProductDetails/>}/>
            <Route path='/contact' element={<Contact/>} />
            <Route path='/cos' element={<Cos/>} />
            <Route path='/cos/checkout' element={<CheckOut/>}/>
        </Routes>
        <Footer></Footer>
        </>
        
    )
}

export default R;