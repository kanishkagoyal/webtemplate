import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import './About.css';
import brands from './image/brand.gif';
const About = () => {
  return (
    <div class='row' id='about-us'>
      <div class='col-sm-4' id='brand-box'>
        <img src={brands} alt='loading' class='responsive' id='brand' />
      </div>
      <div class='col-sm-8' id='intro-box'>
        <h2 id='intro-heading'>ABOUT US</h2>
        <br></br>
        <p>
          <BiCheckCircle />
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
        <p>
          <BiCheckCircle />
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages,
        </p>
        <p>
          <BiCheckCircle />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500sLorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

export default About;
