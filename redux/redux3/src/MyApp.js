import React from "react"
import {connect} from "react-redux"

const MyApp = (props) => {

    const Array1 = props.ar
    console.log("ARray",props.ar)



    return (
        <div>
            <h1>hi</h1>
            <h3 onClick={props.spreadIt}>Reduce them</h3>
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