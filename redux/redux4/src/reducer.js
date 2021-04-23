const initialState = {
    n : []
}

const reducer = ( state = initialState , action) => {

    if(action.type === "ADDTEXT"){
        const payloadText = action.payload

        return {
            ...state,
            n : state.n.concat(payloadText)
        }
    }

    return state
}


export default reducer