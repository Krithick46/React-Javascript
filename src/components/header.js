import React from 'react';
import {  NavLink } from 'react-router-dom';

function Header() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand"><h1>Novac React Demo</h1></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" >
                            <li  className="nav-item" >
                            
                                <NavLink
                                    to="/home"
                                     className={'nav-link'}
                                >
                                  User Details
                                </NavLink> 
                            </li>
                            <li className="nav-item">
                            <NavLink
                                    to="/about"
                                    className={'nav-link'}
                                >
                                   About
                                </NavLink> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;

