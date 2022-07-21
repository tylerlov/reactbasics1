import React from 'react'
import { useEffect, useState } from 'react'

function PokemonList() {

    const [pokeList, setPokeList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await response.json()
        setPokeList(data.results)
        // console.log(data)
        // console.log(pokeList)
        setLoading(false)

    }
 

  return (<>
    {pokeList.map((pokemon) => ((
        <div>
            <h1>{pokemon.name}</h1>
        </div>
    )))}
    </>)
}

export default PokemonList