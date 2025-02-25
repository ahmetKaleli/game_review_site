import { Button } from '@mui/material'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useNavigate } from 'react-router-dom';


export default function LoginRegisterBtn() {

  const navigate = useNavigate()

  return (
    <div className='hidden sm:flex' >
      <Button variant='contained' color='success' onClick={() => navigate("/login")}> <LoginIcon />Login</Button>
      <Button variant='contained' sx={{ marginLeft: 5 }} onClick={() => navigate("/register")}> <HowToRegIcon /> Register</Button>

    </div>

  )
}
