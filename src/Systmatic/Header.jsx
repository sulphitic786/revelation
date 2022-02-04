import React from 'react';
import { NavLink, } from 'react-router-dom';
import Ellipse from './images/Ellipse.png'

const Header = () => {
    return (
        <>
            <section className="header container-fluid p-2 text-start ">
                <a href="#" className="text-decoration-none ">Sign Up |</a>
                <a href="#" className="text-decoration-none"> Login |</a>
                <a href="#" className="text-decoration-none"> RSS Feeds |</a>
                <a href="#" className="text-decoration-none pe-3"> Archived News</a>
                <input type="search" name="search" placeholder="Search Here..." className="search float-end" id="" />
            </section>
        </>
    )
}

export default Header;
