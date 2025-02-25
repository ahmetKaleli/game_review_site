import { Button } from '@mui/material';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/Firebase";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      if (user) {
        toast.success("Welcome");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-[50vh] border-2 mt-5 bg-[rgba(44,43,43,0.12)] text-white'>
      <h1 className='text-4xl font-bold pb-5 text-black'>Login</h1>
      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='p-3 mb-5 border-2 rounded-2xl text-black' 
        type='text' 
        placeholder='Email' 
      />
      <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='p-3 mb-5 border-2 rounded-2xl text-black' 
        type='password' 
        placeholder='Password' 
      />
      <Button onClick={handleLogin} variant='contained' color='success'>Login</Button>
    </div>
  );
}
