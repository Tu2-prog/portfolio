import React from "react";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import { Card } from "react-bootstrap";
import {FaUser} from 'react-icons/fa';

export const Contact = () => {
    return (
        <>
        <NavBar>
        </NavBar>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto'}}>
            <div className="p-4" style={{width:'30rem'}}>
                <Card>
                    <Card.Body style={{padding: '4rem'}}>
                        <Card.Title style={{fontSize:'2.5rem'}}>
                        Contact Me <FaUser className="mr-2" />                         
                        </Card.Title>
                        <Card.Text>
                        <ul className="list-unstyled">
                            <li> Tel.:<a href="tel:+491775449252">+49 177 544 9252</a></li>
                            <li> Email:<a href="mailto:anhtu.nguyen3705@gmail.com">anhtu.nguyen3705@gmail.com</a></li>
                        </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <Footer/>
        </>
    );
}
