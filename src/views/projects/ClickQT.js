import React from "react";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";

export const ClickQT = () => {
    return(
        <>
            <NavBar/>
            <h1>ClickQt?</h1>
            ClickQt is a Python package providing the functionality to generate a GUI for a Command Line Interface written in Python using the framework click. <br/>
            The command line interface creation kit enables one to create light weight command line interfaces with as little code as possible. Such click CLIs can be visualised with a GUI by using the 
            package clickqt for a graphical usage of the command line interface. <br/>
            <hr className="solid"/>
            <h1>Why ClickQt?</h1>
            Surely, you ask yourself, why one would need this package. The reason for this lies in the varying user acceptance of Command Line Interfaces. There are groups of people who find it cumbersome 
            to use CLIs. This feeling would be later enforced by the complexity of large CLIs, which is why it was requested to provide some kind of graphical support in order to simplify the usage of CLIs.
            <br/>
            The package is installable through pip for every operating system, i.e Windows, MacOs or Linux. The package is maintained by the Institute for Scientific Computing of the University of Heidelberg. 
            The researchers are using this software package to make research by generating GUIs for their own click CLIs.
            <hr className="solid"/>
            A detailed description of the project can be found on the following GitHub: <a href="https://github.com/ssciwr/clickqt">clickqt</a>

            <Footer/>
        </>
    )
}