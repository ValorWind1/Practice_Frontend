import React,{useState} from "react"
import {connect} from "react-redux"
import "./styles/style.css"

const MyApp = (props) => {


    return (
        <div className="divisione">
            <p>Your numbers : {`${props.ar}`}</p>
            <button onClick={props.spreadIt}>Reduce them</button>
            <h1>RESULT: {props.n}</h1>
            
        </div>
    )
}


const mapStateToProps = (state) => {
return {
    ar : state.nums,
    n : state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        spreadIt: () => {dispatch({type:"spread"})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyApp)