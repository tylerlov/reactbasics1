import React from "react";
import Pokemon from "./Pokemon";
import { useEffect, useContext } from "react";
import PokeContext from "../context/poke/PokeContext"; 

function PokemonList() {
  const {pokeList, loading, fetchPokemon} = useContext(PokeContext);

  useEffect(() => {
    fetchPokemon();
  }, []);


  if (!loading) {
    return (
      <>
        {pokeList.map((pokemonObj) => (
            <Pokemon key={pokemonObj.name} pokemon={pokemonObj} />
        ))}
      </>
    );
  } else {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
}

export default PokemonList;
