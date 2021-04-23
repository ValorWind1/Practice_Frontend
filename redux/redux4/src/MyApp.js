import React,{useState} from "react"
import {connect} from "react-redux"

const MyApp = (props) => {

    const [userInput , setUserInput] = useState ({v : " "});

    const UserInputHandler = (event) => {
        setUserInput({v : event.target.value})
    }

    console.log(props.nose)    

    return(
        <div>
        <input type="text" value={userInput.v} onChange={UserInputHandler} />
        <p>{userInput.v}</p>
        <button onClick={() => props.addText(userInput.v)}>Add Person</button>
        <ol>
             {props.nose.map((i , index) => {
                 return <li key = {index}> {i}</li>
             })}
        </ol>
           
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        nose : state.n,
       
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addText : (userInput) => dispatch({type : "ADDTEXT" , payload : userInput})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyApp)