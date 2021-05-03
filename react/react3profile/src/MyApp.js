import React from "react";
import me from "./resources/profile.JPG";
import "./MyApp.css";
import Header from "./components/Header"

const MyApp = () => {


    return(
        <div>
            <div className="entireDiv">
            <h1 className="Header"> <Header /></h1>
            <h3>Carrer Goal</h3>
            <img src={me}alt="me"/>
            <h3>Experience</h3>
            <h3>Programming Skills</h3>

            

        </div>

        <div>
            <footer className="footer"> 
                <h1>Footer</h1>
            
             </footer>
        </div>
                    
        </div>

    )
}


export default MyApp