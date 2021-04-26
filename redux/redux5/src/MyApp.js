import React from "react"
import {connect} from "react-redux"
import * as actioncreator from "./actioncreator"

const MyApp =(props) => {

    console.log("DATA", props.d)

    return (
        <div>
            <h1>hi</h1>
            <button onClick={props.swdata}>click me !</button>
            <ul>
                {props.d.map((i , index) => {
                    return ( <li key= {index}> SW Character : {i.name}, Films : {`${" "+i.films+" "}`}</li>)
                })}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        d: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        swdata : () => dispatch(actioncreator.givedata())
    }
}

export default connect (mapStateToProps , mapDispatchToProps)(MyApp)