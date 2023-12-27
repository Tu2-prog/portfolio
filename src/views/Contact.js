import React from "react";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import {ContactUs} from "./components/EmailForm"

export const Contact = () => {
    return (
        <>
        <NavBar>
        </NavBar>
            <div className="text-box" style={{margin: "auto", width: "50%", padding: "10px"}}>
                If you got hooked on my projects then you can contact me through this message box here and <br/> I will make an effort in
                replying you back.
            </div>
            <ContactUs/>
        <Footer/>
        </>
    );
}
