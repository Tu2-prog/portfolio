import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTablet, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container>
        <Row>
          <Col md={6}>
            <h5 style={{marginTop: '5%', color:'white'}}>About me</h5>
            <p style={{color:'white'}}>
                I am a 21 year-old student studying Computer Science at the University of Heidelberg.
            </p>
          </Col>
          <Col md={3}>
            <h5 style={{marginTop: '10%', color:'white'}}>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Main</a></li>
              <li><a href="timeline">Timline</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 style={{marginTop: '10%', color:'white'}}>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="tel:+491775449252"><FaTablet className='mr-2'/> +49 177 544 9252</a></li>
              <li><a href="mailto:anhtu.nguyen3705@gmail.com"> <FaMailBulk className='mr-2'/> anhtu.nguyen3705@gmail.com</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      {/* <div className="text-center py-3">
        &copy; {new Date().getFullYear()} Beispielunternehmen
      </div> */}
    </footer>
  );
};

export default Footer;
