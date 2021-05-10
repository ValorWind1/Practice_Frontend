import React from "react"
import {connect} from "react-redux"
import * as actionCreator from "./actionCreator"

const MyApp = (props) => {


   console.log(props.pks)

   const array1 = [...props.pks]
   console.log("copy",array1)

    return(
        <div>  
            <h1>
                Hi ! 
            </h1>
            <p>something: {props.sm}</p>
            <button onClick={props.pokemons}> Generate Pokemons</button>
            <ol>
                {props.pks.map((i , index) => {
                    return (<li key = {index}> Pokemon names : {i.name}</li>)
                })}
            </ol>

            

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sm : state.something,
        pks : state.pokemons
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        pokemons : () => dispatch(actionCreator.getPokemons())

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyApp)