import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import './Header.css'



const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <NavLink exact className='buttonNav' activeClassName='buttonNavActive' to="/home">Home</NavLink>
                    <NavLink  className='buttonNav' activeClassName='buttonNavActive' to="/about">About</NavLink>
                    <NavLink  className='buttonNav' activeClassName='buttonNavActive' to="/news">News</NavLink>
                    <NavLink  className='buttonNav' activeClassName='buttonNavActive' to="/blogs">Blogs</NavLink>
                    <NavLink  className='buttonNav' activeClassName='buttonNavActive' to="/contacts">Contacts</NavLink>
                    <NavLink  className='buttonNav' activeClassName='buttonNavActive' to="/admin/admin">Admin</NavLink>
                </Nav>
            </Navbar>
        </div>
    )
};


export default Header;