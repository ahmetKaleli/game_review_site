import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../redux/slices/commentSlice';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

export default function Comment() {
  const [text, setText] = useState('');
  const dispatch = useDispatch()
  const {user}= useSelector((store)=>store.comment)
  const {id} = useParams()

  const payload = {
    text,
    user: user?.email
  }

  const handleSubmit = ()=>{
    if(!text) return toast.error('Comment cannot be empty')
    if(!user) return toast.error('You must be logged in to comment')
    dispatch(createComment(payload))
    setText('')
  }

  return (
    <div>
      <div className='mt-10'>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant='filled'
          label="Comment"
          fullWidth
          multiline
          rows={3}
        />
      </div>
      <div className='flex flex-row items-center justify-end mt-2'>
        <Button
          sx={{ width: 200 }}
          variant='contained'
          color='warning'
          onClick={handleSubmit}

        >
          Submit
        </Button>
      </div>
    </div>
  );
}
