import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/Firebase";
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { Menu, MenuItem } from '@mui/material';

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

  const [anchorEl, setAnchorEl] = useState(null)

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const openControl = anchorEl ? true : false

  const closeMenu = () => {
    setAnchorEl(null)
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      {
        userEmail ?
          <div className='flex flex-row justify-center items-center'>
            <div className='flex flex-row items-center cursor-pointer' onClick={openMenu}>
              <Avatar sx={{ marginRight: 1 }} /> {userEmail} <ArrowDropDownCircleIcon sx={{ marginLeft: 1 }} />
            </div>
            <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu} >
              <MenuItem>
                <Button onClick={handleLogout} variant='text' color='error' size='small'>Logout</Button>
              </MenuItem>
            </Menu>

          </div> :
          <div>
            <div className='hidden sm:flex' >
              <Button variant='contained' color='success' onClick={() => navigate("/login")}> <LoginIcon sx={{marginRight:1}} />Login</Button>
              <Button variant='contained' sx={{ marginLeft: 5}} onClick={() => navigate("/register")}> <HowToRegIcon  sx={{marginRight:1}} /> Register</Button>

            </div>
          </div>
      }

    </div>
  );
}

