const initialState = {
    array1 : [1,3,5,7,9,13,15,17,18,24,26,28,31,32,37,39,80],
    sum : []
}

const reducer = (state = initialState , action) => {

    switch(action.type){

        case "reduceIt":
        const red = state.array1.reduce((total , i) => {
            return i + total
        },0)
        return {
            ...state,
            sum: red
            
        }
    }

    return state
}


export default reducer