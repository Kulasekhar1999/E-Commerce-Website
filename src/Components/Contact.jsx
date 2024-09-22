import React from "react";
import img1 from "../Components/Images/img1.jpg";
import img2 from "../Components/Images/img2.jpg";
import images from "../Components/Images/images.jpeg";
import imgf from "../Components/Images/imgf.jpeg";
import beanimg from "../Components/Images/beanimg.1.png";
import olimg from "../Components/Images/olimg.jpg";
import pcimg from "../Components/Images/pcimg.jpeg";
import slimg from "../Components/Images/slimg.jpg";
import "./Contact.css";

export default function () {
  return (
    <section id="contact">
      <div className="nav">
        <h5>Varun Hs</h5>
        <h5>7204859671</h5>
        <pre>Banglore 560070</pre>
      </div>
      <br />
      <br />

      <div className="contact-section">
        <div className="contact-card">
          <img src={img1} alt="image1" width={250} />
          <h3>Higher Profit</h3>
          <p>
            We offer some of the lowest prices in the industry because print
            providers continuously compete to win your business.
          </p>
        </div>

        <div className="contact-card">
          <img src={img2} alt="image2" width={250} />
          <h3>Robust Scaling</h3>
          <p>
            Easily handle peak holiday seasons, With our wide network of
            partners and automatic routing functionality.
          </p>
        </div>

        <div className="contact-card">
          <img src={images} alt="image3" width={250} />
          <h3>Best Selection</h3>
          <p>
            With 900+ products and quality brands, you can choose the best
            products for your business.
          </p>
        </div>
      </div>
      <div className="contact-showcase">
        <div className="contact-image">
          <img src={imgf} alt="final image" width={400} />
        </div>
        <div className="contact-info">
          <h3>Easily add your design to a wide range of products</h3>
          <p>
            With our design tools, you can easily add your custom designs to
            t-shirts,mugs,phone cases, and hundred of other products.
          </p>
          <button className="all-contact-btn">-All Products-</button>
        </div>
      </div>

      <div className="contact-container">
        <br />
        <br />
        <h2>Trusted by over 8M sellers around the world</h2>
        <p>
          Whether you are just getting started or run an enterprise-level
          e-commerce business, We do everything we can to ensure a positive
          merchant experience.
        </p>
        <div className="contact-grid">
          <div className="test-card">
            <img src={beanimg} alt="bean" width={250} />
            <h4>Mr.Bean</h4>
            <p id="gani">Store Link</p>
            <div className="stars">*****</div>
            <p className="contact-text">
              KK Fashions has been an increadible service for us musicians
              unable to keep large amount of inventary - now we can create
              designs preciously too expensive to print without having to have
              1000 shirts in our jam space.
            </p>
          </div>
        </div>
      </div>

      <div className="contact-grid">
        <div className="test-card">
          <img src={olimg} alt="Olivia" width={250} />
          <h4>Olivia</h4>
          <p id="gani">Esty merchant</p>
          <div className="stars">*****</div>
          <p className="contact-text">
            We choose kk fashions because of their offerings as well as their
            incredibly low prices. After several years, we have come to find
            that their customer service is also top notch, and their platform
            just keeps getting better and better.
          </p>
        </div>

          <div className="test-card">
            <img src={pcimg} alt="nikki" width={250} />
            <h4>Nikki</h4>
            <p id="gani">store link</p>
            <div className="stars">*****</div>
            <p className="contact-text">
              kk fashions has been amazing as we grow our business, from the
              difference it can make for our customers to the customer servive
              team making the whole process a breeze.
            </p>
        </div>
      </div>
    </section>
  );
}
