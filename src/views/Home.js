import React from "react";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";

export const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <h1 className="title">Home</h1>
        <p className="text">
          Hi,<br /> I am Tu. I am an university student in Heidelberg,
          currently aiming for a degree in Computer Science. This is a display
          of my works from projects during my time at university.<br />
        </p>
        </div>
        <Footer/>
    </>
  );
};
