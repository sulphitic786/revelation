import React from 'react';
import { NavLink, } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <section className="header container-fluid text-end ">
                <a href="#" className="text-decoration-none">Sign Up |</a>
                <a href="#" className="text-decoration-none"> Login |</a>
                <a href="#" className="text-decoration-none"> RSS Feeds |</a>
                <a href="#" className="text-decoration-none pe-3"> Archived News</a>
            </section>
        </>
    )
}

export default Header;
