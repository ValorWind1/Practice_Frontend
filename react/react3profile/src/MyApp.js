import React from "react";
import me from "./resources/profile.JPG";
import "./MyApp.css";
import Header from "./components/Header"
import CareerGoal from "./components/CareerGoal"
import Experience from "./components/Experience"

const MyApp = () => {


    return(

            <div className="entireDiv">
            <h1 className="Header"> <Header /></h1>
            
            <CareerGoal />
            <img src={me}alt="me" style={{opacity:"0.9",marginLeft: '50px',position:'relative',bottom: '220px'}}/>
            <Experience />
            <h3>Programming Skills</h3>  
            <footer className="footer"> 
                <h1>Footer</h1>
            
             </footer>
        
                    
        </div>

    )
}


export default MyApp