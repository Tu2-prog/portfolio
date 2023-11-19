import React from "react";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";

export const PersonalProjects = () => {
    return(
        <>
            <NavBar/>
            <h1>Motivation</h1>
            During my time at university I took part in several private coding projects of my colleagues. However, I had to quit the participation after some time in order to concentrate on my studies. <br/>
            After some time has passed I began programming privately for practice and in order to live out my interests.
            <h1>Web Scraping</h1>
            My first real coding project project was a dive into Web Scraping due to my interest in Data Science. Therefore I intended to find a way to collect data for my analysis without depending on external resources at first. That is why I
            began researching on Web Scraping with the usage of Python. My first web scraper is a web scraper getting data from my favourite manga website and puts them in relational database.
            <br/>
            This would also land me a place at the software lab of the Software Engineering department of the University of Heidelberg.
            <h1>Spam Filtering</h1>
            I also recently began developing a web tool that takes different types of machine learning algorithms into account for filtering if a provided email text and email subject is a spam mail or not.
            <Footer/>
        </>
    )
}
