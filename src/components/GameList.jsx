import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGames } from '../redux/slices/gamesSlices'
import Game from './Game'
import { Grid } from "@mui/material"


export default function GameList() {

  const { games } = useSelector((store) => store.game)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGames())
  }, [])

  return (
    <div>
      <Grid container spacing={2}>
        {games && games.map((game) => (
          <Grid item key={game.id} xs={12} sm={6} md={4}>
            <Game game={game} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
