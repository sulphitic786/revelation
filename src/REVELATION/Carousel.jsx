import React from 'react';
import logo from './images/logo.png'
import Monitor from './images/Monitor.png'
import LeftArrow from './images/LeftArrow.png' ;

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" dataride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
            <div className="d-inline col-5">
            <img src={Monitor} class=" w-50" alt="..." />
            </div>
            <div className="col-6 d-inline">
            <h2 className="d-inline">A CATCHY TITLE</h2>
            <p className="d-inline-block">Cursuspenatisaccum ut curabitur nulla tellus tor ames <br /> a in curabitur pede. Idet mollisi eros dis orci congue <br /> elis et curabitur consequam intesque. <br /> Curabiturpisametur in ante.</p>
            <button className="READ_MORE mb-5 d-inline">READ MORE <sub className=" "> » </sub></button>
            </div>
            </div> 
            <div class="carousel-item">
            <img src={LeftArrow} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img src={logo} class="d-block w-100" alt="..." />
            </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" dataslide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" dataslide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    )
}

export default Carousel;
