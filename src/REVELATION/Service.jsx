import React from 'react';
import serviceImage from './images/serviceImage.png'


// ---------- 1st card Data ------------
const Data = (props) => {
    return (
        <>
            <div class="card data1 text-center px-2 border-0">
            <img src={serviceImage} class="card-img-top mx-auto w-50" alt="..." />
            <div class="card-body pt-5">
            <h5 class="card-title title-data"> {props.title} </h5>
            <hr />
            <p class="card-text text-data">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.</p>
            </div>
            </div>
            
        </>
    )
}

// ------------ 2nd Card Data -----------
const CardData2 = (props) => {
    return (
        <>
            <div class="card data2 px-2 border-0">
            <h5 class="card-title"> {props.title} </h5>
            <img src={serviceImage} class="card-img-top align-content-center w-100" alt="..." />
            <div class="card-body">
            <p class="card-text">Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.</p>
            <a href="#" className="Read_More" > Read More » </a>
            </div>
            </div>
        </>
    )
}








const Service = () => {
    return (
        <>
         <div className="container">
            <div className="col-md-3 d-inline-block">
            <Data title="Vivamuslibero Auguer" />
            </div>
            <div className="col-md-3 d-inline-block">
            <Data title="Vivamuslibero Auguer"/>
            </div>
            <div className="col-md-3 d-inline-block">
            <Data title="Vivamuslibero Auguer"/>
            </div>
            <div className="col-md-3 d-inline-block">
            <Data title="Vivamuslibero Auguer"/>
            </div> 
            <div className="center-text col-md-10 mx-auto"><p>Nibhnullam libero portis vivamus justo porta cursus arcu quisque sceleifendiment praesentum. Leosodalesuada quis nequat commodo enim curabitur cursus vest eu sodalesuada feugiat.</p></div>
            <div className="col-md-3 d-inline-block">
            <CardData2 title="Indonectetus facilis" />
            </div>
            <div className="col-md-3 d-inline-block">
            <CardData2 title="Indonectetus facilis" />
            </div>
            <div className="col-md-3 d-inline-block">
            <CardData2 title="Indonectetus facilis" />
            </div>
            <div className="col-md-3 d-inline-block">
            <CardData2 title="Indonectetus facilis" />
            </div>
         </div>
        </>
    )
}

export default Service;
