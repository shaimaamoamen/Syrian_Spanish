import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./price.css"
export default function Price() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  return (
    <div className='div1'>
    <Slider {...settings}>
      
      <div>
       <img  src="images/1.jpeg" width="400px" height="250px"/>
        <h1>EGP 27.5</h1>              
      </div>
      <div>
        <img src="images/2.jpeg" width="400px" height="250px"/>
        <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src="images/3.jpeg" width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src="images/4.jpeg" width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src="images/5.jpeg" width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src="images/6.jpeg" width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src="images/7.jpeg" width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src="images/8.jpeg" width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
      <div>
      <img  src="images/6.jpeg" width="400px" height="250px"/>
      <h1>EGP 27.5</h1>  
      </div>
    </Slider>
   </div>
  );
}