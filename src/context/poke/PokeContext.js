import { createContext, useReducer } from "react";
import pokeReducer from "./PokeReducer";

const PokeContext = createContext();
// no token needed for this context

export const PokeProvider = ({children}) => {
    const initialState = {
        pokeList: [],
        loading: true,
    }
        
const [state, dispatch] = useReducer(pokeReducer, initialState);

    const fetchPokemon = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        dispatch({
            type: "FETCH_POKEMON",
            payload: data.results,
      })}

      return <PokeContext.Provider value={{
        pokeList: state.pokeList, 
        loading: state.loading, 
        fetchPokemon,
        }}>
                {children}
        </PokeContext.Provider>
}

export default PokeContext;