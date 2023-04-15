import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container>
        <Row>
          <Col md={6}>
            <h5 style={{marginTop: '5%', color:'white'}}>Über uns</h5>
            <p style={{color:'white'}}>
                Ich bin ein 21 Jahre alter Student, der gerade aufstrebt Software Entwickler mit dem Fokus auf Data Science zu werden.
            </p>
          </Col>
          <Col md={3}>
            <h5 style={{marginTop: '10%', color:'white'}}>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Startseite</a></li>
              <li><a href="timeline">Timline</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 style={{marginTop: '10%', color:'white'}}>Kontakt</h5>
            <ul className="list-unstyled">
              <li><a href="tel:+491775449252">+49 177 544 9252</a></li>
              <li><a href="mailto:anhtu.nguyen3705@gmail.com">anhtu.nguyen3705@gmail.com</a></li>
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
