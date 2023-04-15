import React from "react";
import { NavBar } from "./components/NavBar";
import BasicExample from "./components/Card";
import Footer from "./components/Footer";

import productsElements from "../productsElements";

export const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <h1 className="title">Home</h1>
        <p className="text">
          Hi,<br /> I am Tu. I am an university student in Heidelberg,
          currently aiming for a degree in Computer Science. This is a display
          of my works during my leisure in order to practice and deepen my
          skills. <br /> <br /> My projects:
        </p>
        <div className="grid-container">
          {productsElements.map((product, index) => (
            <div key={product.id} className="grid-item p-4">
              <BasicExample
                title={product.title}
                description={product.description}
                buttonText={product.buttonText}
              />
            </div>
          ))}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};
