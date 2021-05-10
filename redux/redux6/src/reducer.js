import * as actionCreator from "./actionCreator"

const initialState = {
    something : ["hi"],
    pokemons : []
}


const reducer = (state = initialState , action) => {

    switch(action.type){

        case actionCreator.POKE :
            return {
                ...state,
                pokemons : action.pokemons.results
            }
    }

    return state ;

}


export default reducer