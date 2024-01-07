import React from "react";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";

export const Evoter = () => {
    return(
        <>
        <NavBar/>
        <div style={{textAlign: 'center', fontSize:"25px", fontWeight: "bold", fontFamily:"Poppins", marginLeft: "30px", marginRight: "30px"}}>
            <a href="https://github.com/Tu2-prog/votingapp">Evoter</a>
            <br/>
            This is the description of the Evoter voting app I have created. The idea of this app to provide a simplistic interface for users to vote on events they deem to be worthy of being the top event in the world.
            This project made use of the Frontend framework VueJs and is written mostly in TypeScript. The Backend is a NodeJs API for the interaction with a deployed MongoDB. Furthermore the Frontend and the Backend are realised as
            seperate microservices using Docker in order to hide critical information as environment variables.
            <br/>
            Adding to this, the frontend development has been facilitated with the Vuetify framework by VueJs that provides pre-built components which can be used for one's own web app. This saved up a lot of time a sped up the development of the web app enormously.
            <br/>
            <br/>
            The web app fullfills the following requirements:
            <ol>
                <li>User can see a list of items he can vote on.</li>
                <li>These items must have a button that the user can click on to vote.</li>
                <li>After the user clicked a button, the user should see all the votes.</li>
            </ol>
            Official documentation to run this project for yourself is provided in the repositories.
        </div>
        <Footer/>
        </>
    )
}
