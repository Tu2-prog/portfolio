import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div classNames="container">
          <div className="row">
            <div className="d-flex">
              <div>
                <h4>lorem</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/"> Lorem ipsum </a>
                  </li>
                  <li>
                    <a href="/">Lorem ipsum </a>{" "}
                  </li>
                  <li>
                    <a href="/">Lorem ipsum </a>{" "}
                  </li>
                  <li>
                    <a href="/">Lorem ipsum </a>{" "}
                  </li>
                  <li>
                    <a href="/">Lorem ipsum </a>{" "}
                  </li>
                </ul>
              </div>
              <div>
                <h4>lorem</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/"> Lorem ipsum </a>
                  </li>
                  <li>
                    <a href="/">Lorem ipsum </a>{" "}
                  </li>
                  <li>
                    <a href="/">Lorem ipsum </a>{" "}
                  </li>
                  <li>
                    <a href="/">Lorem ipsum </a>{" "}
                  </li>
                  <li>
                    <a href="/">Lorem ipsum </a>{" "}
                  </li>
                </ul>
              </div>
              <div>
                <h4>lorem</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/"> Lorem ipsum </a>
                  </li>
                  <li>
                    <a href="/">Lorem ipsum </a>{" "}
                  </li>
                  <li>
                    <a href="/">Lorem ipsum </a>{" "}
                  </li>
                  <li>
                    <a href="/">Lorem ipsum </a>{" "}
                  </li>
                  <li>
                    <a href="/">Lorem ipsum </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
   {
    ul li a {
      color: var(--mainGrey);
      text-decoration: none;
    }
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
