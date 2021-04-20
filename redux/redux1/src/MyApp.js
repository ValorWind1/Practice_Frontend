import React,{useState} from "react"
import {connect} from "react-redux"

const MyApp =(props) => {

    const [text,setText] = useState({texto : " "})

    const  textHandler = (event) => {
        setText({ text : event.target.value })
    }

    return(
        <div>
            <input type="text" onChange={textHandler} value={text.texto}/>
            <button onClick={() => props.addText (text)}>add person</button>
            <h1>TEXT : {props.tt}</h1>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
         tt : state.tt
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addText : (text) => {dispatch({type: "ADDTEXT" , payload : text})},
        
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(MyApp)