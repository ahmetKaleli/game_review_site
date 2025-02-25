import React from 'react'
import img from "../img/logo.png"
import { useNavigate } from 'react-router-dom'
export default function Logo() {

  const navigate= useNavigate()
  return (
    <div className='flex flex-row items-center ml-[50px] cursor-pointer ' onClick={()=>navigate("/")}>
        <img src={img} width={100} />
        <span className='text-2xl font-bold ml-4 hidden sm:block' >Game Time</span>
    </div>
  )
}
