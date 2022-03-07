import React from 'react';
import Linkedin from './images/Linkedin.png';
import twitter from './images/twitter.png';
import googlePlus from './images/googlePlus.png';
import pinterest from './images/pinterest.png';
import rss from './images/rss.png';


const Footer = () => {
    return (
        <>
            <div className="footer container">
                <div className="row">

                    <div className="col-md-3">
                        <h3 className="">Latest From Blog</h3>
                        <h4 className="Post_Title">Post Title</h4>
                        <h5 className="friday"> Friday, 6th April 20 </h5>
                        <p className="Vesti"> Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. </p>
                    </div>

                    <div className="col-md-3">
                        <h3 className="">Link Block</h3>
                        <ul className="text-decoration-none list-unstyled">
                            <li className=""> <a href="" className="col2-link">» Lorem ipsum dolor </a></li>
                            <li className=""> <a href="" className="col2-link">» Suspendisse in neque </a></li>
                            <li className=""> <a href="" className="col2-link">» Praesent et eros</a></li>
                            <li className=""> <a href="" className="col2-link">» Lorem ipsum dolor </a></li>
                            <li className=""> <a href="" className="col2-link">» Suspendisse in neque </a></li>
                            <li className=""> <a href="" className="col2-link">» Praesent et eros</a></li>
                            <li className=""> <a href="" className="col2-link">» Suspendisse in neque </a></li>
                        </ul>
                    </div> 

                    <div className="col-md-3">
                        <h3 className=""> Company Details </h3>
                        <ul className="text-decoration-none list-unstyled">
                            <li className="col3-link"> Company Name </li>
                            <li className="col3-link"> Street Name & Number </li>
                            <li className="col3-link"> Line Two </li>
                            <li className="col3-link"> Town </li>
                            <li className="col3-link"> Postcode/Zip </li>
                            <li className="col3-link"> Tel: xxxxx xxxxxxxxxx </li>
                            <li className="col3-link"> Fax: xxxxx xxxxxxxxxx </li>
                            <li className="col3-link"> Email: contact@mydomain.com </li>
                        </ul>
                    </div>

                    <div className="col-md-3 col4">
                        <h3 className="">Newsletter</h3>
                        <form action="">
                            <input type="text" className="" name="name" placeholder="Name" id="" />
                            <input type="email" name="" placeholder="Email" id="" />
                            <input type="submit" className="submit" value="SUBMIT" />
                        </form>
                        <p className=""> <a href="" className="logo1" > <img src={Linkedin} className="logo" alt="" /></a>   <a href="" className="logo1" > <img src={twitter} className="logo" alt="" /></a>   <a href="" className="logo1" > <img src={pinterest} className="logo" alt="" /></a>  <a href="" className="logo1" > <img src={googlePlus} className="logo" alt="" /></a>   <a href="" className="logo1" > <img src={rss} className="logo" alt="" /></a>  </p>
                    </div>

                </div>
                <div className="row copyright">
                    <p className="copytext"> Copyright © 2013 Domain Name - All Rights Reserved </p>
                </div>
            </div>
        </>
    )
}

export default Footer;
