import React from 'react';
import web2 from './images/web2.jpg'

const Service = () => {
    return (
        <>
         <div className="container-fluid service" id='service'>
          <div className="row px-5 servRow1 d-flex flex-wrap mx-auto">
                <div class="card col-sm-6 col-md-3 p-3" data-aos="zoom-out">
                <img src={web2} class="card-img-top" alt="..." />
                <div class="card-body py-1 px-2 " >
                <h5 class="card-title ">SERVICE TITLE</h5>
                <p class="card-text py-2">Vestassapede et donec ut est libe ros sus et eget sed eget quisq ueta habitur augue </p>
                </div>
                </div>
                <div class="card col-sm-6 col-md-3 p-3" data-aos="fade-left">
                <img src={web2} class="card-img-top" alt="..." />
                <div class="card-body py-1 px-2" data-aos="fade-right">
                <h5 class="card-title">SERVICE TITLE</h5>
                <p class="card-text py-2">Vestassapede et donec ut est libe ros sus et eget sed eget quisq ueta habitur augue</p>
                </div>
                </div>
                <div class="card col-sm-6 col-md-3 p-3" data-aos="fade-right">
                <img src={web2} class="card-img-top" alt="..." />
                <div class="card-body py-1 px-2" data-aos="zoom-in">
                <h5 class="card-title">SERVICE TITLE</h5>
                <p class="card-text py-2">Vestassapede et donec ut est libe ros sus et eget sed eget quisq ueta habitur augue</p>
                </div>
                </div>
                <div class="card col-sm-6 col-md-3 p-3" data-aos="zoom-out">
                <img src={web2} class="card-img-top" alt="..." />
                <div class="card-body py-1 px-2" >
                <h5 class="card-title">SERVICE TITLE</h5>
                <p class="card-text py-2">Vestassapede et donec ut est libe ros sus et eget sed eget quisq ueta habitur augue </p>
                </div>
                </div>
          </div>

          <div className="row servcRow2 justify-content-center" id='lwork'>
              <h3 className="text-light text-center">LATEST WORK</h3>
            </div>
          <div className="row col-md-12 gx-0 justify-content-center col6 mx-auto">
              <div className="col-md-4 col-6" data-aos="fade-left">
                <img src={web2} alt="" className="img-fluid" />
              </div>
              <div className="col-md-4 col-6 " data-aos="zoom-in">
                <img src={web2} alt="" className="img-fluid" />
              </div>
              <div className="col-md-4 text-center col-6 " data-aos="fade-right">
                <img src={web2} alt="" className="img-fluid" />
              </div>
              <div className="col-md-4 col-6" data-aos="fade-left">
                <img src={web2} alt="" className="img-fluid" />
              </div>
              <div className="col-md-4 col-6" data-aos="zoom-in">
                <img src={web2} alt="" className="img-fluid" />
              </div>
              <div className="col-md-4 col-6" data-aos="fade-right">
                <img src={web2} alt="" className="img-fluid" />
              </div>
             
          </div>
         </div>
        </>
    )
}

export default Service;
