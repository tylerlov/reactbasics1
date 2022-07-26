import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useContext } from 'react'
import PokeContext from '../context/poke/PokeContext'
import { CardMedia } from '@mui/material';

//Possible to destructure this variable better to reduce the amount of code later?
function Pokemon( pokemonObj ) {

    const { pokemon, loading, fetchPokemonDetails } = useContext(PokeContext);

    useEffect(() => {
        console.log(pokemonObj.pokemon)
        fetchPokemonDetails( pokemonObj.pokemon )
    }, [ ])

    const card = (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Pokemon
            </Typography>
               <CardMedia 
                component="img"
                sx={{ height: 200, width: 200, paddingTop: '10%' }} 
                //Why ? here? Makes sense for pokemonDetails but why for sprites?
                image={pokemon?.sprites?.other.dream_world.front_default} />
            <Typography variant="h5" component="div">
              { pokemonObj.name }
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {/* {  pokemonType } */}
            </Typography>
            <Typography variant="body2">
              {  pokemon?.weight + ' lbs'}
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