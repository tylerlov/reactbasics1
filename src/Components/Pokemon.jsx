import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react'

function Pokemon() {

    const [pokemonName, setPokemonName] = useState('N/A')
    const [pokemonType, setPokemonType] = useState('Type Unknown')
    const [pokemonBio, setPokemonBio] = useState('No Bio Available')

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
                { pokemonType }
            </Typography>
            <Typography variant="body2">
              { pokemonBio }
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>alert('Hello there!')}>Learn More</Button>
          </CardActions>
        </React.Fragment>
      );

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant='outlined'>
                {card}
            </Card>
        </Box>
  )
}

export default Pokemon