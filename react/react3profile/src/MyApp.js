import React from "react";
import me from "./resources/profile.JPG";
import "./MyApp.css";
import resume from "./resources/resume.pdf"

const MyApp = () => {


    return(
        <div>
            <h1>Daniel Leyghton </h1>
            <h3>Carrer Goal</h3>
            <img src={me}alt="me"/>
            <a href="https://github.com/ValorWind1">Github</a>
            <a href={resume}>Resume</a>
            <a href="https://www.linkedin.com/in/daniel-leyghton-598b33156/">Linkedln</a>

            <h3>Experience</h3>
            <h3>Programming Skills</h3>
            

        </div>
    )
}


export default MyApp