import { createContext, useReducer } from "react";
import pokeReducer from "./PokeReducer";

const PokeContext = createContext();
// no token needed for this context

export const PokeProvider = ({children}) => {
    const initialState = {
        pokeList: [],
        pokemon: {},
        loading: false,
    }
        
const [state, dispatch] = useReducer(pokeReducer, initialState);

    const fetchPokemon = async () => {
        setLoading();
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        dispatch({
            type: "FETCH_POKEMON",
            payload: data.results,
      })}

      const fetchPokemonDetails = async (pokemonObj) => {
        setLoading();
        const response = await fetch(pokemonObj.pokemon.url);
        const data = await response.json();

        dispatch({
            type: "FETCH_SINGLE_POKEMON",
            payload: data,
      })
      };

    const setLoading = () => {  
        dispatch({
            type: "SET_LOADING",
        })
    }

      return <PokeContext.Provider value={{
        pokeList: state.pokeList, 
        loading: state.loading, 
        pokemon: state.pokemon,
        fetchPokemon,
        fetchPokemonDetails,
        }}>
                {children}
        </PokeContext.Provider>
}

export default PokeContext;