import React,{useContext} from "react"
import Context_ from "./Context_"

const Pic = (props) => {

    const contexto = useContext(Context_);

    return (
        <div>
            <img src={props.src} alt={props.key}/>
            {props.children}
            <h1>{contexto}</h1>
        </div>
    )
}

export default Pic