import React, { useState } from 'react';

const Navbar = () => {

    const [navbar, setNav] = useState(false);

    const changeBg = () => {
        if (window.scrollY >= 80) {
            setNav(true)
        } else {
            setNav(false)
        }
    };
    window.addEventListener('scroll',changeBg);
    return (
        <>
            <nav className={navbar ? 'navbar active navbar-expand-lg' : 'navbar navbar-expand-lg'}>
                <a className="navbar-brand text-light" href="#"> <h1 className="">The Modernist</h1> <h6 className="banner">Free PSD Website Tem</h6> </a>
                <button className="navbar-toggler btn-outline-light" type="button" data-toggle="collapse" datatarget="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Togglenavigation">
                    <span className="fa fa-home text-danger"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">HOMEPAGE <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#service" >SERVICE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#lwork">LATEST WORK</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">GALLERY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">DROPDOWN</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
