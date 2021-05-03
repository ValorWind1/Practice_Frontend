import React from "react"
import resume from "../resources/resume.pdf"
import "./Header.css"


const Header = (props) => {

    return (
        <div>
            <h3>Daniel Leygthon</h3>
            <a className="bi bi-github" href="https://github.com/ValorWind1">Github</a>
            <a href={resume}>Resume</a>
            <a href="https://www.linkedin.com/in/daniel-leyghton-598b33156/">Linkedln</a>
            
        </div>
    )
}

export default Header