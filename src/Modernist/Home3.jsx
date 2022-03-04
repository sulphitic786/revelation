import React, {useEffect, useState} from 'react';
import style3 from './style3.css';
import Navebar from './Navbar';
import Carousel from './Carousel';
import Service from './Service'
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home3 = () => {
  const [fullname, setName] = useState({
    name:"",
    class:""
  });
  const submit = (e)=>{
    e.preventDefault();
    alert("Data Submitterd Succesfully!")
  }
  const event=(event) =>{
    const {name, value} = event.target;
    setName((preVal)=>{
      console.log(preVal);
      return{
        ...preVal,
        [name]:value,
      }
    })
  }
 


 const title = document.title=('Modernist');


useEffect(() => {
    AOS.init({ duration: 2000 });
},[]);

    return (
        <>
          <div className="container-fluid g-0 main-container">
            <Navebar  />
            <Carousel/>
            <Service />
            <Footer />
          </div>
        </>
    )
}

export default Home3
