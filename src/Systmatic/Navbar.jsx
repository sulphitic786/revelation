import React from 'react';
// import logo from './images/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-light gx-3">
                <a class="navbar-brand" href="#"> <img src="" alt="" />  </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" datatarget="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Togglenavigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                <a class="nav-link" href="#">HOMEPAGE <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">STYLE DEMO</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">FULL WIDTH</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">DROPDOWN</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#GALLERY">GALLERY</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">PORTFOLIO</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">LINK TEXT</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">LONG LINK TEXT</a>
                </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
