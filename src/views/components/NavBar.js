import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Mein Portfolio</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Start</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Über mich</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projekte</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};