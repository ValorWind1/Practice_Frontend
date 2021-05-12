import React from "react";
import me from "./resources/profile.JPG";
import "./MyApp.css";
import Header from "./components/Header"
import CareerGoal from "./components/CareerGoal"
import Experience from "./components/Experience"
import Programming from "./components/Programming"

const MyApp = () => {


    return(

            <div className="entireDiv">
            <h1 className="Header"> <Header /></h1>
            
            <CareerGoal />
            <img src={me}alt="me" style={{opacity:"0.9",marginLeft: '50px',position:'relative',bottom: '220px'}}/>
            <Experience />
            <Programming/>  
            <footer className="footer"> 
                <h1 style= {{color:"black"}}>Contact info</h1>
            
             </footer>
        
                    
        </div>

    )
}


export default MyApp