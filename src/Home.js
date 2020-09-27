import React from 'react';
import './Home.css';
import one from './image/one.png';
import two from './image/two.png';
import three from './image/three.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import About from './About';
import Products from './Products';
import Query from './Query';
import Contact from './Contact';
const Home = () => {
  return (
    <>
      <div class='row' id='carousel-wrapper'>
        <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
          <div>
            <img src={one} alt='1' />
          </div>
          <div>
            <img src={two} alt='2' />
          </div>
          <div>
            <img src={three} alt='3' />
          </div>
        </Carousel>
      </div>
      <br></br>
      <div class='row'>
        <div class='col-sm-1'></div>
        <div class='col-sm-10' id='Intro'>
          <h2>Welcome to the Company</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
        <div class='col-sm-1'></div>
      </div>
      <hr id='one'></hr>
      <div>
        <About />
      </div>
      <hr id='two'></hr>
      <div>
        <Products />
      </div>
      <hr id='three'></hr>
      <div>
        <Query />
      </div>
      <hr id='four'></hr>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Home;

/* <div class='col-sm-5'>
          


 */
