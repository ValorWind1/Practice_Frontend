import * as actioncreator from "./actioncreator"

const initialState = {
    data : []
}

const reducer = ( state = initialState , action ) => {

    if(action.type === actioncreator.sw){
        return {
            ...state,
            data : action.payload.results
        }
    }

    return state ;
}



export default reducer

