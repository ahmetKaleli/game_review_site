import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGameDetail } from "../redux/slices/gamesSlices"
import Rating from '@mui/material/Rating';
import CommentList from "../components/CommentList.jsx"
import Comment from "../components/Comment"

export default function GameDetail() {

  const dispatch = useDispatch()
  const { id } = useParams()

  const { games } = useSelector((store) => store.game)

  const selectedGame = games.find((game) => game.id === id)

  useEffect(() => {
    if (!selectedGame) {
      dispatch(getGameDetail(id))
    }

  }, [dispatch, id, selectedGame])


  return (
    <>
    <div className='h-[70vh] mt-5 flex flex-row w-full justify-center' >
      <div className='w-[50vw]'>
        <img src={selectedGame.image} />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-bold mb-5'>{selectedGame.name}</h1>
        <div className='border-t shadow-xl w-100 p-5 ml-5'>
          <p>{selectedGame.description}</p>
        </div>
        <div className='mt-10 flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-bold mb-2'>Rating</h2>
          <Rating size='large' defaultValue={2} max={5} />
        </div>
      </div>
    </div>
    <div>
      <Comment/>
    </div>
    <div>
      <CommentList/>
    </div>
    </>
  )
}
