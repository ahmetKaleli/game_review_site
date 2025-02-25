import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';

export default function Game({ game }) {
  const navigate = useNavigate();
  const handleViewGame = () => {
    navigate(`/game/${game.id}`); // Game id'siyle detay sayfasına yönlendiriyoruz
  };
  return (
    <div>
      <Card sx={{ maxWidth: 350, height: 500, display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: 5, marginBottom: 5 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={game.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {game.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ mb: 1 }}>
          <Button onClick={handleViewGame} variant='contained'>View Game</Button>
        </CardActions>
      </Card>
    </div>
  )
}
