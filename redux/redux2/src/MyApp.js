import React from "react";
import {connect} from "react-redux"

const MyApp = (props) => {

console.log("SUM",props.s)
console.log("ARRAy",props.arr)

    return(
        <div>
            <h1>hi</h1>
            <ol>
            {props.arr.map((i,index) => {
                return (<li key={index}>Numbers : {props.arr}</li>)
                })}
            </ol>
            <button onClick={props.reduceNumber}>Click me to sum everything</button>
            <h1>Sum of numbers : {props.s}</h1>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        arr : state.array1,
        s : state.sum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reduceNumber: () => {dispatch({type : "reduceIt"})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyApp)