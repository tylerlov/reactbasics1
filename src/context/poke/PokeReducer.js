const pokeReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_POKEMON":
            return {
                ...state,
                pokeList: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default pokeReducer