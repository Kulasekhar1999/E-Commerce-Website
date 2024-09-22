import React from 'react'
import './Header.css';

export default function () {
  return (
    <header>
            <div>
                <div id="main"><h2>KK Fashions</h2></div>
                <nav>
                <ul class="nav-list">
                  <li>  <a href="#home">Home</a></li>
                   <li> <a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#contact">Contact</a></li>
                    </ul>
                    </nav>
                    <br/>
                    <div className='nk'>
                        <button><a href='https://www.ajio.com/'>Get Started</a></button>
                    </div>
                
            </div>

    </header>

  );
};
