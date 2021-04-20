const initialState = {
    tt : []
}

const reducer = (state = initialState , action) => {
    if(action.type === "ADDTEXT"){

        const aa = action.payload.text
        const texto = [...state.tt]
        return {

            ...state,
            tt : texto.concat(aa)
        }
    }
    return state
}


export default reducer