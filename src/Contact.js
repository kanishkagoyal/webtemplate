import React from 'react';
import './Contact.css';
import {
  BiMap,
  BiEnvelope,
  BiMessageRounded,
  BiPhoneCall
} from 'react-icons/bi';
const Contact = () => {
  return (
    <>
      <div class='row' className='contact-heading'>
        <h2>CONTACT US</h2>
      </div>
      <div class='row' id='contact-box'>
        <div class='col-sm-5' id='contact-info-box'>
          <h5 id='heading-contact-info'>
            <BiMap /> Location
          </h5>
          <p>
            XXX, YY YY ZZ, address, landmark, area, city, state, country ,
            portal code
          </p>
          <h5 id='heading-contact-info'>
            <BiPhoneCall /> Call us
          </h5>
          <p>223XXX746</p>
          <p>975XXXX455</p>
          <h5 id='heading-contact-info'>
            <BiMessageRounded /> WhatsApp
          </h5>
          <p>223XXX746</p>
          <h5 id='heading-contact-info'>
            <BiEnvelope /> Email us
          </h5>
          <p>comapnyname@domain.com</p>
        </div>
        <div className='col-sm-7' id='map-box'>
          <div className='map-responsive'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d184017.1580409372!2d76.87790391989441!3d30.64855596034639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1600961781110!5m2!1sen!2sin'
              width='600'
              height='450'
              frameBorder='0'
              allowFullScreen
              aria-hidden='false'
              tabIndex='0'
              title='location'
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
