import "./static/projects.css";
import React from "react";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectCard from "./components/Card";
import productsElements from "../data/productsElements";

export const Projects = () => {
    return (
        <>
            <NavBar />
            <div className="text-box">
            This is a collection of projects I took part in during my time as university time as part of software practicals/ software labs or privately.
            </div>
            <div className="grid-container">
                {productsElements.map((product, index) => (
                    <div key={product.id} className="grid-item p-4">
                        <ProjectCard
                            title={product.title}
                            description={product.description}
                            buttonText={product.buttonText}
                            buttonLink={product.buttonLink}
                        />
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};
