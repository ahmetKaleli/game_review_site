import React from 'react'
import GameList from "../components/GameList"

export default function Home() {
  return (
    <div className='h-auto mt-5 flex flex-col lg:flex-row w-full justify-center items-center text-center px-5'>
      <GameList/>
    </div>
  )
}
