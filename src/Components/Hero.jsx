import React from 'react'
import './Hero.css';
import printimg from '../Components/Images/printimg.png';

export default function () {
  return (
    <section id ="hero" >
        <div className='heropage-container'>
          <div className='content'>
            <h1>
              Create and sell custom products
            </h1>
            <ul>
              <li>100% free to use</li>
              <li>500+ High-quality products</li>
              <li>Large global print networks</li>
            </ul>

            <div className='buttons'>
              <button className='start-btn'>Start for free</button>
              <button className='howitworks-btn'>How its works button</button>
            </div>
            <div>
              <p className='trusted-text'>Trusted by over million of sellers around the world</p>
            </div>
            <div className='image-container'>
              <img src={printimg} width="500" alt='printing'/>

            </div>

          </div>

        </div>
        
    </section>

  );
};
