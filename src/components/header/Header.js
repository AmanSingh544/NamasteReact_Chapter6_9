import React from 'react';
import '../header/header.css'
import { Link } from 'react-router-dom';
const Title =()=>{
    return (
        <>
        <div className='title'>
        <Link to={"/"}> Food Villa</Link>
        </div>
        </>
    )
}
 const Header =()=>{
    return (
    <>
    <div className='header'>
        <Title/>
        <div className='content-container'>
            <div className='content'><Link to={"/about"}>About Us</ Link></div>
            <div className='content'><Link to="/contactus">Contact Us</Link></div>
            <div className='content'><Link to="/address">Address</Link></div>
            <div className='content'><Link to="/instamart">Instamart</Link></div>
        </div>
    </div>
    </>
    );
}

export default Header;