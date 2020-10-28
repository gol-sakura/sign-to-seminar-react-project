import React from "react";
import "./Home.css";
import headerImg from './headerImg.jpg'
import {Link} from 'react-router-dom'

import imgcarousel from './imgcarousel.jpg'
import imgCarousel01 from './imgCarousel01.jpg'
import imgCarousel02 from './imgCarousel02.jpg'

export default function Home() {
  return (
    <div className="container-sm bg-1 text-center">
      <h2 className="margin text-home">
        "Welcome to SignToSeminar for Healthy Life Style"
      </h2>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner headerImg">
          <div className="carousel-item active" data-interval="1000" >
            <img src={headerImg} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block text-list">
              <h1 className="caro-text ">Praesent in tincidunt tellus</h1>
              <h4 className="caro-text">Sed tellus neque, lacinia eget libero a, blandit malesuada lacus</h4>
              <br/>
              <Link to="/seminars/" className="btn btn-dark btn-lg">Book Here</Link>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src={imgCarousel01} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block text-list">
              <h1 className="caro-text">Praesent in tincidunt tellus</h1>
              <h4 className="caro-text">Sed tellus neque, lacinia eget libero a, blandit malesuada lacus</h4>
              <br/>
              <Link to="/seminars/" className="btn btn-dark  btn-lg">Book Here</Link>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src={imgcarousel} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block text-list">
              <h1 className="caro-text">Praesent in tincidunt tellus</h1>
              <h4 className="caro-text">Sed tellus neque, lacinia eget libero a, blandit malesuada lacus</h4>
              <br/>
              <Link to="/seminars/" className="btn btn-dark  btn-lg">Book Here</Link>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src={imgCarousel02} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block text-list">
              <h1 className="caro-text">Praesent in tincidunt tellus</h1>
              <h4 className="caro-text">Sed tellus neque, lacinia eget libero a, blandit malesuada lacus</h4>
              <br/>
              <Link to="/seminars/" className="btn btn-dark  btn-lg">Book Here</Link>
            </div>
          </div>

        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    <h4 className="margin text-home caro-text">"Your immune systems are comprised of all parts of the eco-system you know as yourself, and include not only every part of you, from your conscious and subconscious thoughts to your physical body systems, but also how you live and function in relationship with the larger ecosystems that surround you."</h4>
      <br />



    </div>

  );
}
