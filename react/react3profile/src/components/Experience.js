import React from "react"

const Experience = () => {

    const exp = ["React","Css","Html","JavaScript","Java","Unix"]

    const styleexp = {
        color : "white",
        position : "relative",
        bottom : "800px",
        left: "500px",
        fontSize: "30px",
        
    } 

    return (
        <div>
            <ul style={styleexp}>
                {exp.map((i,index) => {
                    return (<li>Technology: {i}</li>)
                })}
            </ul>
        </div>
    )
}


export default Experience