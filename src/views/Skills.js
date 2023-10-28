import React from "react";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import SkillBox from "./components/SkillBox";
import {webdev, python_dev, general_dev} from "../data/grouped_skills"

export const SKills = () =>{
    const categories = [
        { title: 'Web Development', data: webdev },
        { title: 'Python Development', data: python_dev },
        { title: 'General Development', data: general_dev },
    ];
    return(
        <>
        <NavBar>
        </NavBar>
        {categories.map((category, index) => (
                <div key={index}>
                    <SkillBox title={category.title} data={category.data} />
                </div>
        ))}
        <Footer/>
        </>
    )
}