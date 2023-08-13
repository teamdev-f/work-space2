import React from "react";
import "./Slider.css";

function Slider() {
    return (

      <section className='mb-3'>
        <div id='carouselExampleControls' className='carousel slide' data-bs-ride='carousel' data-bs-interval='4000'>
          <div className='carousel-inner slider'>
            <div className='carousel-item active'>
              <img src={process.env.PUBLIC_URL + '/assets/applepie.jpg'} className='d-block w-100' alt='applepie' />
            </div>
            <div className='carousel-item'>
              <img src={process.env.PUBLIC_URL + '/assets/cake.jpg'} className='d-block w-100' alt='cake' />
            </div>
            <div className='carousel-item'>
              <img src={process.env.PUBLIC_URL + '/assets/coffee.jpg'} className='d-block w-100' alt='coffee' />
            </div>
            <div className='carousel-item'>
              <img src={process.env.PUBLIC_URL + '/assets/pancakes.jpg'} className='d-block w-100' alt='pancakes' />
            </div>
          </div>
        </div>
      </section>
    );

}

export default Slider;