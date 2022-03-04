import React from 'react';
// import Linkedin from './images/Linkedin.png';
// import twitter from './images/twitter.png';
// import googlePlus from './images/googlePlus.png';
// import pinterest from './images/pinterest.png';
// import rss from './images/rss.png';


const Footer = () => {
    return (
        <>
            <div className="footer bg-white">
                <div className="row row1 px-5">

                <div className="col-md-3 col-sm-6 col-xs-10 offset-xs-1 px-4 blog">
                        <h3 className=""> LATEST BLOG POSTS </h3>
                        <div className="">
                            <h6 className="post">Post Title</h6>
                            <p className="pera"> <span className="admin">Admin,</span> domainname.com 
                               <br />Friday, 6th April 2000 <br />
                               Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla.
                               <br /> <a href="" className="">Read More »</a>
                            </p>
                            
                        </div>

                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-10 offset-xs-1">
                        <h3 className="">QUICK LINKS</h3>
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

                    <div className="col-md-3 col-sm-6 px-2 col3"> 
                        <h3 className="">LATEST TWEETS</h3>
                        <h5 className="friday pt-2"> <span className="admin">@namehere</span> Justoid nonummy laoreet phasellent penatoque in antesque pellus elis eget tincidunt. Nequatdui laorem justo a non tellus laoremut vitae doloreet 1 day ago <br /> <br />
                                                <span className="admin">@namehere</span> Justoid nonummy laoreet phasellent penatoque in antesque pellus elis eget tincidunt. Nequatdui laorem justo a non tellus laoremut vitae doloreet 1 day ago 
                        </h5>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-10 offset-xs-1 contact">
                        <h3 className="">CONTACT US</h3>
                        <form action="">
                            <input type="text" className="mb-2" name="name" placeholder="Name" id="" />
                            <input type="email" name="" className='my-1' placeholder="Email" id="" />
                            <input type="text" className="my-2" name="name" placeholder="Subject" id="" />
                            <textarea name="" id="" placeholder='Message' className='mt-1' cols="28" rows="5"></textarea>
                            <input type="submit" className="submit my-2" value="SUBMIT" />
                        </form>
                        {/* <p className=""> <a href="" className="logo1" > <img src={Linkedin} className="logo" alt="" /></a>   <a href="" className="logo1" > <img src={twitter} className="logo" alt="" /></a>   <a href="" className="logo1" > <img src={pinterest} className="logo" alt="" /></a>  <a href="" className="logo1" > <img src={googlePlus} className="logo" alt="" /></a>   <a href="" className="logo1" > <img src={rss} className="logo" alt="" /></a>  </p> */}
                    </div>

                </div>
                <div className="row copy">
                    <p className="copytext pt-2"> Copyright © 2013 Domain Name - All Rights Reserved </p>
                </div>
            </div>
        </>
    )
}

export default Footer;
