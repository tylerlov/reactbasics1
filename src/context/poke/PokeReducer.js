const pokeReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_POKEMON":
            return {
                ...state,
                pokeList: action.payload,
                loading: false,
            }
        case "FETCH_SINGLE_POKEMON":
            return {
                ...state,
                pokemon: action.payload,
                loading: false,
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}

export default pokeReducer