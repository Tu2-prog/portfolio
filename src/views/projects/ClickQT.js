import React from "react";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";

export const ClickQT = () => {
    return(
        <>
            <NavBar/>
            <h1 className="title">ClickQt?</h1>
            <div className="text-box">
            ClickQt is a Python package providing the functionality to generate a GUI for a Command Line Interface written in Python using the framework click. <br/>
            The command line interface creation kit enables one to create light weight command line interfaces with as little code as possible. Such click CLIs can be visualised with a GUI by using the
            package clickqt for a graphical usage of the command line interface. <br/>
            </div>
            <hr className="solid"/>
            <h1 className="title">Why ClickQt?</h1>
            <div className="text-box">
            Surely, you ask yourself, why anyone would need this package. The reason for this lies in the varying user acceptance of Command Line Interfaces. There are groups of people who find it cumbersome
            to use CLIs. This feeling would be later enforced by the complexity of large CLIs, which is why it was requested to provide some kind of graphical support in order to simplify the usage of CLIs.
            <br/>
            The package is installable through pip for every operating system, i.e Windows, MacOs or Linux. The package is maintained by the Institute for Scientific Computing of the University of Heidelberg.
            The researchers are using this software package to make research by generating GUIs for their own click CLIs.
            </div>
            <hr className="solid"/>
            <div className="text-box">
            A detailed description of the project can be found on the following GitHub: <a href="https://github.com/ssciwr/clickqt">clickqt</a>
            </div>
            <h1 className="title">Implementation</h1>
            <div className="text-box">
            The implementation was done by a group of three including me while the work was distributed evenly between us in order to ensure a fair share of work.
            <ol>
                <li>
                    CI/CD wiht GitHub workflows
                </li>
                <li>
                    Software testing
                </li>
                <li>
                    Code documentation using Sphinx
                </li>
            </ol>
            </div>
            <Footer/>
        </>
    )
}
