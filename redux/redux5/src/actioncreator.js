const url = "https://swapi.dev/api/people";

export const sw = "sw";

export const givedata = () => {
    return(dispatch) => {
        return fetch(url)
        .then(response => response.json())
        .then(json => dispatch({type : "sw" , payload : json}))
    }
}