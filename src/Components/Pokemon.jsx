import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react'
import { CardMedia } from '@mui/material';

//Possible to destructure this variable better to reduce the amount of code later?
function Pokemon( { pokemon } ) {

    const [pokemonDetails, setPokemonDetails] = useState([])
    const [pokemonType, setPokemonType] = useState('N/A')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemonDetails()
    }, [ pokemon ])

    const fetchPokemonDetails = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await response.json();
        setPokemonDetails(data)
        setPokemonType(pokemonDetails.types.map(types => types.type.name).join(', '))
        console.log(data)
        setLoading(false)
      };

    const card = (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Pokemon
            </Typography>
               <CardMedia 
                component="img"
                sx={{ height: 100, paddingTop: '50%' }} 
                image={pokemonDetails.sprites.other.dream_world.front_default} />
            <Typography variant="h5" component="div">
              { pokemon.name }
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {  pokemonType }
            </Typography>
            <Typography variant="body2">
              {  pokemonDetails.weight + ' lbs'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>alert('Hello there!')}>Learn More</Button>
          </CardActions>
        </Card>
      );
if(!loading) {
    return (<>
        <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
            {card}
        </Box>
    </>)
}
}

export default Pokemon