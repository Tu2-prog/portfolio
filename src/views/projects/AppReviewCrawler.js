import React from "react";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";

export const AppReviewCrawler = () => {
    return(
        <>
            <NavBar></NavBar>
            <h1 className="title"> FeedUVL</h1>
            <div className="text-box">
                FeedUVL is a web tool developed by the Software Engineering department of the University of Heidelberg that is realised with microservices as Docker containers. <br/>
                The purpose of this tool is to determine how users are communicating about software by making use of text data that is actively collected by FeedUVL.
                <br/> FeedUVL uses a wide range of algorithms to automatically classify the data in the context of Requirements Engineering.
            </div>
            <h1 className="title">AppReviewCrawler</h1>
            <div className="text-box">
                Since the introduction of the Google Play Store and the Apple App Store people are able to talk about and comment on existing apps concerning their Usability, Security, Stability and so on.
                <br/>
                This provides a broad range of input that FeedUVL can use to analyse the user behaviour while talking about the usage of software. 
            </div>
            <h1 className="title"> Requirements for the AppReviewCrawler </h1>
            <div className="text-box">
                The AppReviewCrawler has to fullfill a certain set of requirements: 
                <ul>
                    
                </ul>
                This should ensure that the AppReviewCrawler collects the newest data and automatizes this crawling process in a set amount of time such that the researchers do not have to bother with initiliazing a new crawling job for a dataset. <br/>
                The 
            </div>
            <Footer/>
        </>
    )
}