import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/Firebase";
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useNavigate } from 'react-router-dom';


export default function AuthState() {
  const [userEmail, setUserEmail] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const authState = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email)
      } else {
        setUserEmail(null)
      }
    })
    return () => authState()
  }, [])

  const handleLogout = () => {
    if (userEmail) {
      auth.signOut()
      toast.success("User logged out")
      setUserEmail(null)
      navigate("/")
    }

  }

  return (
    <div className='flex flex-col justify-center items-center'>
      {
        userEmail ?
          <div className='flex flex-row justify-center items-center'>
            <Avatar sx={{ marginRight: 1 }} /> {userEmail}
            <Button onClick={handleLogout} sx={{ marginLeft: 2 }} variant='contained' color='error' size='small'>Logout</Button>

          </div> :
          <div>
            <div className='hidden sm:flex' >
              <Button variant='contained' color='success' onClick={() => navigate("/login")}> <LoginIcon />Login</Button>
              <Button variant='contained' sx={{ marginLeft: 5 }} onClick={() => navigate("/register")}> <HowToRegIcon /> Register</Button>

            </div>
          </div>
      }

    </div>
  );
}

