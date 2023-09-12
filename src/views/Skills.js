import React from "react";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import SkillBox from "./components/SkillBox";
import {webdev, python_dev, general_dev} from "../grouped_skills"

export const SKills = () =>{
    return(
        <>
        <NavBar>
        </NavBar>
        <SkillBox className="box" data={webdev}/>
        <SkillBox className="box" data={python_dev}/>
        <SkillBox className="box" data={general_dev}/>
        <Footer/>
        </>
    )
}