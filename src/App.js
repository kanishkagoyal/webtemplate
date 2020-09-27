import React from 'react';
import { BiMap, BiEnvelope, BiSearchAlt, BiPhoneCall } from 'react-icons/bi';
import Home from './Home';
import About from './About';
import Products from './Products';
import Query from './Query';
import Contact from './Contact';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div class='container-fluid'>
        <div class='row' id='top-box'>
          <div class='col-sm-8' id='headline'>
            <a href='#contact' id='hotline'>
              The company Name, Address (+91-XXXXXXXX)
            </a>
          </div>
          <div class='col-sm-4' id='icon-head'>
            <a href='https://goo.gl/maps/C8v9poaP12T68Fpy6' id='icons'>
              <BiMap />
            </a>
            <a href='#three' id='icons'>
              <BiEnvelope />
            </a>

            <a href='#four' id='icons'>
              <BiPhoneCall />
            </a>
            <a href='#two' id='icons'>
              <BiSearchAlt />
            </a>
          </div>
          <div class='col-sm-12' id='menu'>
            <Navbar collapseOnSelect expand='lg' variant='dark'>
              <Navbar.Brand href='#home'>Logo Picture</Navbar.Brand>
              <Navbar.Toggle
                aria-controls='responsive-navbar-nav'
                className='icon'
              />
              <Navbar.Collapse id='responsive-navbar-nav' className='icon'>
                <Nav className='ml-auto'>
                  <Nav.Link href='#' as='span'>
                    <Link class='navbar-top-links' to='/'>
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link href='#' as='span'>
                    <Link class='navbar-top-links' to='/about'>
                      About
                    </Link>
                  </Nav.Link>
                  <Nav.Link href='#' as='span'>
                    <Link class='navbar-top-links' to='/our_products'>
                      Our Products
                    </Link>
                  </Nav.Link>
                  <Nav.Link href='#' as='span'>
                    <Link class='navbar-top-links' to='/query'>
                      Query
                    </Link>
                  </Nav.Link>
                  <Nav.Link href='#' as='span'>
                    <Link class='navbar-top-links' to='/contact_us'>
                      Contact Us
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
        <Switch>
          <Route path='/contact_us'>
            <Contact />
          </Route>
          <Route path='/query'>
            <Query />
          </Route>
          <Route path='/our_products'>
            <Products />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <br></br>
        <div class='row'>
          <div class='col-sm-12' className='footer'>
            <p>Company name. All rights Reserved</p>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
