import React from 'react'
import { Button } from '@mui/material'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/Firebase"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRegister } from '../redux/slices/registerSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user
      const payload = {
        email: user.email,
        password: user.password,

      }
      if (user) {
        dispatch(setRegister(payload))
        toast.success("User created successfully")
        setEmail('')
        setPassword('')
        navigate("/login")
      }


    } catch (error) {
      console.error(error.code, error.message);
      toast.error("Registration failed: " + error.message);
      setEmail('')
      setPassword('')
    }
  }
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-[50vh] border-2 mt-5 bg-[rgba(44,43,43,0.12)] text-white'>
        <h1 className='text-4xl font-bold pb-5 text-black'>Register</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='p-3 mb-5 border-2 rounded-2xl text-black' type='text' placeholder='Email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='p-3 mb-5 border-2 rounded-2xl text-black' type='password' placeholder='Password' />
        <Button onClick={handleRegister} variant='contained' color='info'>Register</Button>
      </div>
    </div>
  )
}
