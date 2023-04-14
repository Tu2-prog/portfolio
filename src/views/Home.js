import React from "react";
import { NavBar } from "./components/NavBar";
import BasicExample from "./components/Card";

import productsElements from "../productsElements";

export const Home = () => {
    return (
        <>
        <NavBar></NavBar>
        <div>
        <h1 className="title">Home</h1>
        <p className="text">
            Hi,<br/> I am Tu. I am an university student in Heidelberg, currently aiming for a degree in Computer Science. This is a display of my works during my leisure in order to practice and deepen my skills. 
            <br/> <br/> My projects:
        </p>
        <div style={{display:'flex'}}>
            {productsElements.map((product) => (
                <BasicExample 
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    buttonText={product.buttonText}
                />
            ))}
        </div>
        </div>
        </>
    );
}