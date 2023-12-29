import React from "react";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";
import spammy_home from "../../assets/spammy_home.png";
import spammy_classify from "../../assets/spammy_classify.png";
import spammy_data from "../../assets/spammy_data.png";
import "./static/images.css";

export const SpammyFilter = () => {
    return(
        <>
            <NavBar/>
            <h1 className="title">Motivation</h1>
            <div className="text-box">
            During my time at university I took part in several private coding projects of my colleagues. However, I had to quit the participation after some time in order to concentrate on my studies. <br/>
            After some time has passed I began programming privately for practice and in order to live out my interests.
            </div>
            <hr className="solid"/>
            <h1 className="title">Spam Filtering</h1>
            <div className="text-box">
            I also recently began developing a web tool that takes different types of machine learning algorithms into account for filtering if a provided email text and email subject is a spam mail or not.
            <br/>
            The Frontend for the app is realised using the Angular framework of Google and the Backend of the application is created using the Django framework that contain the trained models for the classification.
            <br/>
            The Machine Learning algorithms that were taken into account were:
            <ol>
                <li>Naive Bayes</li>
                <li>Count Vectorizer</li>
            </ol>
            Furthermore, I will dockerize these repositories as microservices realised as Docker containers.
            Installation details are included in the documentation of the perspective microservice.
            </div>
            <div className="text-box">
                These are some screenshots from the SpammyFilter project:
            </div>
            <img src={spammy_home} alt="Home"/>
            <div className="text-box">
                Users can only access this tool only when they provide the correct access code which is set in a seperate microservice for authentification and classification called <a href="https://github.com/Tu2-prog/spam_filtering_analysis">spam_filtering_analysis_backend</a>.
                From this view one can type in an input prompt that is put into the request body. This text is then classified and saved with the result in the NoSQL database.
            </div>
            <img src={spammy_classify} alt="Classify"/>
            <div className="text-box">
                Users can only access this view only when they are logged in. To access the data one needs to have a running instance of the microservice called <a href="https://github.com/Tu2-prog/spam_filter_storage">spam_filtering_analysis_storage</a>.
                From this view one can inspect the data saved in the NoSQL database, delete them or download them in a .csv file.
            </div>
            <img src={spammy_data} alt="Data"/>
            <Footer/>
        </>
    )
}
