import React from 'react';
import web2 from './images/web2.jpg';


const Carousel = () => {

    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" dataride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
            <div className="d-inline order-2 col-5" >
            <img src={web2} class="float-end w-50" alt="..." data-aos="fade-left"/>
            </div>
            <div className="col-6 order-1 text-light caro-text" data-aos="fade-right">
            <h2 className="d-inline">Cursus penati saccum nulla.</h2>
            <p className="d-inline-block">Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna. Urnaultrices quis curabitur phasellentesque congue magnis vestibulum quismodo nulla et feugiat adipiscinia pellentum leo.</p>
            <button className="READ_MORE btn mb-5 d-inline">Read More Here »</button>
            </div>
            </div> 
            <div class="carousel-item">
            <img src="" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img src="" class="d-block w-100" alt="..." />
            </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" dataslide="prev">
            <span class="carousel-control-prev-icon fw-bolder" aria-hidden="true"></span>
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
