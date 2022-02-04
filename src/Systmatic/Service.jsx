import React from 'react';
import Monitor from './images/Monitor.png'
import Brownie from './images/Brownie.jpg'
import quote from './images/quote.png'

const Service = () => {
    return (
        <>
        <div className="container">
        <div className='huge row'> 
           <div className="col-5">
               <img src={Monitor} alt="" className="img-fluid" />
           </div>
           <div className="col-7">
               <h1 className="heading">A HUGE TITLE HERE</h1>
               <p className="pera">Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur consequam intesque. Curabiturpisametur in ante.</p>
               <a href="" className="text-decoration-none read-more">READ MORE »</a>
           </div>
        </div>
        <div className="row service d-md-flex">
            <div className="col-md-4 serv">
             <h5 className="">A Little About Us</h5>
             <img src={Brownie} alt="" className="img-fluid pt-3" />
             <p className="pera">Justoid nonummy laoreet phasellent penatoque in antesque pellus elis eget tincidunt. Nequatdui laorem justo a non tellus laoreet tincidunt ut vel velit nonummy laoreet phasellent penatoque in antesque pellus elis eget tincidunt. <br /> <br /> Idenim semper pellente velis felit ac. Justoid nonummy laoreet phasellent penatoque in antesque pellus elis eget tincidunt.</p>
             <a href="" className="">Read More About Us »</a>
            </div>

            <div className="col-md-4 someOurServices">
            <h5 className="">Some of Our Services</h5>
             <div class="card d-flex">
                <div class="card-body">
                <img src={Brownie} class="card-img img-fluid d-inline float-left" style={{"width":"64px", "height":"64px"}} alt="..." />
                <h5 class="card-title d-inline ps-2">Service Name</h5>
                <p class="card-pera ps-1 card-text d-sm-inline w-75 float-end">Inteligula congue id elis donec sce sag ittis intes id laoreet aenean.  </p>
                </div>
              </div>
              <div class="card d-flex pt-1">
                <div class="card-body">
                <img src={Brownie} class="card-img img-fluid d-inline" style={{"width":"64px", "height":"64px"}} alt="..." />
                <h5 class="card-title d-inline ps-2">Service Name</h5>
                <p class="card-pera ps-1 card-text w-75 float-end">Inteligula congue id elis donec sce sag ittis intes id laoreet aenean.  </p>
                </div>
              </div>
              <div class="card d-flex pt-1">
                <div class="card-body">
                <img src={Brownie} class="card-img img-fluid d-inline" style={{"width":"64px", "height":"64px"}} alt="..." />
                <h5 class="card-title d-inline ps-2">Service Name</h5>
                <p class="card-pera ps-1 card-text w-75 float-end">Inteligula congue id elis donec sce sag ittis intes id laoreet aenean.  </p>
                </div>
              </div>
              <div class="card d-flex pt-1">
                <div class="card-body">
                <img src={Brownie} class="card-img img-fluid d-inline" style={{"width":"64px", "height":"64px"}} alt="..." />
                <h5 class="card-title d-inline ps-2">Service Name</h5>
                <p class="card-pera ps-1 card-text w-75 float-end">Inteligula congue id elis donec sce sag ittis intes id laoreet aenean.  </p>
                </div>
              </div>
              <a href="" className="">View All Of Our Services »</a>
            </div>
             
            <div className="col-md-4 p-0 client">
             <h5 className="">What Our Clients Say</h5>
             <div class="card d-flex pt-md-3">
                <div class="card-body">
                <img src={quote} class="card-img img-fluid d-inline" style={{"width":"64px", "height":"64px"}} alt="..." />
                <h5 class="card-title d-inline mt-3">Tommy Tanker - CEO</h5>
                <p class="card-text">Justoid nonummy laoreet phasellent penatoque in antesque pellus elis eget tincidunt. Nequatdui laorem justo a non tellus laoreet tincidunt ut vel velit. Idenim semper pellente velis felit ac nullam pretium morbi lacus. </p>
                <a href="" className="float-end">View This Project »</a>
                </div>
                <div class="card-body">
                <img src={quote} class="card-img img-fluid d-inline" style={{"width":"64px", "height":"64px"}} alt="..." />
                <h5 class="card-title d-inline">Tommy Tanker - CEO</h5>
                <p class="card-text">Justoid nonummy laoreet phasellent penatoque in antesque pellus elis eget tincidunt. Nequatdui laorem justo a non tellus laoreet tincidunt ut vel velit. Idenim semper pellente velis felit ac nullam pretium morbi lacus. </p>
                <a href="" className="float-end">View This Project »</a>
                </div>
              </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Service;
