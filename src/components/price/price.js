import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './price.css'
export default function Price() {
  return (
   <div>
       <h1>Price</h1> 
    <div className='div1' >
      
      <Carousel>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src="images/1.jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3 >EGP 27.5 </h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img 
            className="d-block w-100 img1"
src="images/2.jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3>EGP 27.5</h3>
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img1"
src="images/3.jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3>EGP 27.5</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img1"
src="images/4.jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3>EGP 27.5 </h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item inter val={3000}>
          <img
            className="d-block w-100 img1"
src="images/5.jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3>EGP 27.5 </h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img1"
src="images/6.jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3>EGP 27.5 </h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img1"
src="images/7.jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3>EGP 27.5 </h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img1"
src="images/8.jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3>EGP 27.5 </h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img1"
src="images/9.jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3 >EGP 27.5 </h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
   </div>
  
  );
}