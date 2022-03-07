import React from 'react';
import style from './css/style.css';
import Header from './Header';
import Navbar from './Navbar';
import Carousel  from './Carousel';
import Service from './Service';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className="container-main">
             <Header />
             <Navbar />
             <Carousel />
             <Service />
             <Footer />
            </div>
        </div>
    )
}

export default Home;
