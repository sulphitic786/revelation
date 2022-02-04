import React from 'react';
import style from './style.css'
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Topbar from './Topbar';
import Service from './Service';

const Home2 = () => {
    return (
        <>
            <div className="container-fluid cont-main">
             <Header />
             <Topbar />
             <Navbar />
             <Service />
             <Footer />
            </div>
        </>
    )
}

export default Home2;
