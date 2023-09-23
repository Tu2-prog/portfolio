import React from 'react';
import { FaTablet, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark" style={{ position: 'fixed', bottom: '0', width: '100%', whiteSpace: 'pre-wrap' }}>
      <div className="container" style={{ padding: '20px 0' }}>
        <div className="row">
          <div className="col-md-6">
            <h5 style={{ color: 'white' }}>About me</h5>
            <p style={{ color: 'white' }}>
              I am a 21 year-old student studying Computer Science at the University of Heidelberg.
            </p>
          </div>
          <div className="col-md-3">
            <h5 style={{ color: 'white' }}>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Main</a></li>
              <li><a href="timeline">Timeline</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 style={{ color: 'white' }}>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="tel:+491775449252"><FaTablet className='mr-2' /> +49 177 544 9252</a></li>
              <li><a href="mailto:anhtu.nguyen3705@gmail.com"> <FaMailBulk className='mr-2' /> anhtu.nguyen3705@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
