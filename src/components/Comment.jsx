import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createComment } from '../redux/slices/commentSlice'

export default function Comment() {

  const [text, setText] = useState ("")
  const dispatch = useDispatch()

  const payload = {
    text
  }

  const handleSubmit = ()=>{
    if(!text) return alert("Please enter a comment.")
    dispatch(createComment(payload))
    setText("")
  }


  return (
    <div>
      <div className='mt-10'>
        <TextField value={text} onChange={(e)=>setText(e.target.value)} variant='filled' label="comment" fullWidth multiline rows={3} />
      </div>
      <div className='flex flex-row items-center justify-end mt-2'>
        <Button onClick={handleSubmit} sx={{width:200}} variant='contained' color='warning'>Submit</Button>
      </div>

    </div>
  )
}
