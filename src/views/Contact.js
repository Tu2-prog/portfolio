import React from "react";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import {ContactUs} from "./components/EmailForm"

export const Contact = () => {
    return (
        <>
        <NavBar>
        </NavBar>
            <div className="grid-container">
            <ContactUs/>
            </div>
        <Footer/>
        </>
    );
}
