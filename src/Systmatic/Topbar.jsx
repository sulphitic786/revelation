import React from 'react';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';
import pinterest from './images/pinterest.png';
import googlePlus from './images/googlePlus.png';
import rss from './images/rss.png';

const Topbar = () => {
    return (
        <>
        <div className='top container gx-3'>
            <h1 className="text-dark logo">Systematic</h1>
            <h6 className="free-website d-inline">Free PSD Website Tem</h6>
               <a href="" className="d-inline "><img src={linkedin} alt="" className="img-fluid social" /></a>
               <a href="" className=" mx-2"><img src={twitter} alt="" className="img-fluid social" /></a>
               <a href="" className=" mx-2"><img src={pinterest} alt="" className="img-fluid social" /></a>
               <a href="" className=" mx-2"><img src={googlePlus} alt="" className="img-fluid social" /></a>
               <a href="" className=" mx-2"><img src={rss} alt="" className="img-fluid social" /></a>
        </div>

        </>
    )
}

export default Topbar;
