import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react'

function Pokemon( {pokemon} ) {

    const [pokemonName, setPokemonName] = useState('N/A')
    const [pokemonDetails, setPokemonDetails] = useState([])

    useEffect(() => {
        setPokemonName(pokemon.name)
        fetchPokemonDetails()
    }, [])

    const fetchPokemonDetails = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        setPokemonDetails(data)
        console.log(data)
      };

    const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Pokemon
            </Typography>
            <Typography variant="h5" component="div">
              { pokemonName }
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {  pokemonDetails.types }
            </Typography>
            <Typography variant="body2">
              {   }
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>alert('Hello there!')}>Learn More</Button>
          </CardActions>
        </React.Fragment>
      );

    return (<>
        <Box sx={{ minWidth: 275 }}>
            <Card variant='outlined'>
                {card}
            </Card>
        </Box>
    </>)
}

export default Pokemon