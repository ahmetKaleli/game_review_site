import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGameDetail, getGames } from "../redux/slices/gamesSlices"
import Rating from '@mui/material/Rating';
import CommentList from "../components/CommentList.jsx"
import Comment from "../components/Comment"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../services/Firebase.jsx"

export default function GameDetail() {

  const dispatch = useDispatch()
  const { id } = useParams()
  const { games, selectedGame } = useSelector((store) => store.game)

  useEffect(() => {
    const fetchGameDetail = async () => {
      try {
        if (games.length > 0) {
          const game = games.find(games => games.id === id)
          if (game) {
            dispatch(getGameDetail(game))
          }
        } else {
          const gameCollection = collection(db, "games")
          const gameDocs = await getDocs(gameCollection)
          const fetchedGames = gameDocs.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          dispatch(getGames(fetchedGames))
          const selectedGame = fetchedGames.find((game) => game.id === id)
          if (selectedGame) {
            dispatch(getGameDetail(selectedGame))
          }
        }
      } catch (error) {
        console.error("Error fetching game detail:", error);
      }
    }
    fetchGameDetail()

  }, [dispatch, games, id])
  if (!selectedGame) {
    return 

  }

  return (
    <>
      <div className='h-auto mt-5 flex flex-col lg:flex-row w-full justify-center items-center text-center px-5' >
        <div className='w-full lg:w-auto flex justify-center mb-5'>
          <img src={selectedGame.image} width={800} className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className='flex flex-col items-center w-full lg:w-1/2'>
          <h1 className='text-3xl md:text-5xl font-bold mb-5'>{selectedGame.name}</h1>
          <div className='border-t shadow-xl w-full p-5 '>
            <p className='text-lg'>{selectedGame.description}</p>
          </div>
          <div className='mt-10 flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-bold mb-2'>Rating</h2>
            <Rating size='large' defaultValue={2} max={5} />
          </div>
        </div>
      </div>
      <div>
        <Comment />
      </div>
      <div>
        <CommentList />
      </div>
    </>
  )
}
