import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Redirect() {

  const navigate = useNavigate()

  return (
    <div className='hidden sm:block'>
        <Button sx={{marginRight:5}} color='inherit' onClick={()=>navigate("/")}>Home</Button>
        <Button sx={{marginRight:5}} color='inherit' onClick={()=>navigate("/about")}>About</Button>
        <Button color='inherit' onClick={()=>navigate("/contact")}>Contact</Button>
    </div>
  )
}
