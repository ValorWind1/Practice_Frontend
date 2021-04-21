const initialState = {
    nums : [4,5,6,90,213,523,6,89,12,3,5,998,34,12,31],
    total : 0
} 

const reducer = (state = initialState , action) => {
    if(action.type === "spread"){
        const Array1 = [...state.nums]
        let result = 0;
        for (let i = 0 ; i < state.nums.length ; i ++){
            result += state.nums[i];       
        }

        return {
            ...state,
            total : result
        }
    }

    return state 
}


export default reducer 