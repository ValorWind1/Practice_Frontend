const url = "https://pokeapi.co/api/v2/pokemon"

export const POKE = "POKE";

export const getPokemons = () => {
    return (dispatch) => {
        return fetch(url)
        .then(res => res.json())
        .then(json => dispatch({type: "POKE", pokemons : json}))
    }
}