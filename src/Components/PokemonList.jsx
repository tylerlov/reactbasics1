import React from "react";
import Pokemon from "./Pokemon";
import { useEffect, useState } from "react";

function PokemonList() {
  const [pokeList, setPokeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    setPokeList(data.results);
    setLoading(false);
  };

  if (!loading) {
    return (
      <>
        {pokeList.map((pokemonObj) => (
            <Pokemon key={pokemonObj.name} pokemon={pokemonObj}/>
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
